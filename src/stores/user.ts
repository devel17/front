// stores/user.ts
import { defineStore } from 'pinia';

interface UserState {
  roles: string[];
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    roles: [] as string[], // Список ролей пользователя
  }),
  actions: {
    setRoles(roles: string[]) {
      this.roles = roles; // Сохраняем роли в состоянии
    },
    hasRole(role: string): boolean {
      return this.roles.includes(role); // Проверяем наличие роли
    },
  },
});