import axios from 'axios'
import cookies from 'vue-cookies'
// import store from '@/stores'
const httpClient = axios.create({
    baseURL: (import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL : '') + import.meta.env.VITE_API,
    withCredentials: true,
    headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': `script-src "self" ${window.location.origin}`,
        'Permissions-Policy': `geolocation=(self ${window.location.origin})`,
        'X-Content-Type-Options': 'nosniff',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
    }
})
httpClient.interceptors.request.use((config) => {
    const token = cookies.get('access_token')
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }
})

httpClient.interceptors.response.use(response => {
    return Promise.resolve(response)
},
(err) => {
    if (err.response) {
        // if (errors.includes(err.response.status)) {
        //     store.dispatch('setError', err)
        // }
        // if (err.response.status === 401) {
        //     return Retry.create(2).request(() => store.dispatch('requestUpdateToken').then((response) => {
        //         if (response.status === 200) {
        //             const request = {
        //                 ...err.config,
        //                 headers: {
        //                     ...err.config.headers,
        //                     Authorization: `Bearer ${cookies.get('access_token')}`
        //                 }
        //             }
        //             return axios.request(request)
        //         }
        //     }))
        //     .then(d => d)
        //     .catch(err => err)
        // }
        //else if (!errorsExlude.includes(err.response.status)) {
        //     store.dispatch('setError', err)
        // }
        // if (err.response.status === 500) {
        //     store.commit('setLoading', { show: false })
        //     store.commit('setSessionContinue', true)
        // }
        // if (err.response.status === 410) {
        //     store.commit('setSessionError')
        // }
        // if (err.response.status === 413) {
        //     store.commit('setLoading', { show: false })
        //     store.commit('setSessionContinue', true)
        // }
    }
    
    return Promise.reject(err)
})


export { httpClient }