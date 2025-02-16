declare module 'vue-cookies' {
    interface VueCookies {
        get(keyName: string): string | null;
        set(keyName: string, value: string): void;
        remove(keyName: string): void;
        isKey(keyName: string): boolean;
        keys(): string[];
    }
    
    const cookies: VueCookies;
    export default cookies;
} 