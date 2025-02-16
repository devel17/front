// stores/user.ts
import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
    state: () => ({
        roles: [], // Список ролей пользователя
    }),
    actions: {
        setRoles(roles) {
            this.roles = roles; // Сохраняем роли в состоянии
        },
        hasRole(role) {
            return this.roles.includes(role); // Проверяем наличие роли
        },
    },
});
