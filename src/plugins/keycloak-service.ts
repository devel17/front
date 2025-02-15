// src/services/keycloak-service.ts
import Keycloak from 'keycloak-js';
import cookies from 'vue-cookies'
import { useUserStore } from '@/stores/user';

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL, 
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID, 
};

const keycloak = new Keycloak(keycloakConfig);

function validateKeycloakConfig(config: Record<string, string>) {
  if (!config.url) {
    throw new Error('Keycloak URL is missing or invalid.');
  }
  if (!config.realm) {
    throw new Error('Keycloak realm is missing or invalid.');
  }
  if (!config.clientId) {
    throw new Error('Keycloak client ID is missing or invalid.');
  }
}

validateKeycloakConfig(keycloakConfig);


export default {
  initKeycloak: () =>
    new Promise<void>((resolve, reject) => {
      keycloak.init({ onLoad: 'login-required' }).then((authenticated: boolean) => {
        if (authenticated) {
          cookies.set('access_token', keycloak?.token)
          cookies.set('refresh_token', keycloak?.refreshToken)
          resolve();
        } else {
          console.log('User is not authenticated');
          reject(new Error('Not authenticated'));
        }
      });
    }),
  getKeycloakInstance: () => keycloak,
  logout: () => keycloak.logout({
    redirectUri: window.location.origin, // URL, куда перенаправить после выхода
  }),
  setRoles: () => {
    const realmRoles = keycloak.tokenParsed.realm_access?.roles || [];
    const resourceRoles = Object.keys(keycloak.tokenParsed.resource_access || {})
      .flatMap(client =>
        (keycloak.tokenParsed.resource_access[client]?.roles || []).map(role => `${client}:${role}`)
      );
    const userRoles = [...realmRoles, ...resourceRoles];
    const userStore = useUserStore(); 
    userStore.setRoles(userRoles); 
  }

};