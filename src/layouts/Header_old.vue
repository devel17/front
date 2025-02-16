<template>
    <div class="logo" />
    <a-row type="flex">
          <a-col flex="auto">
            <a-spin :spinning="loading">
              <a-menu theme="dark"
              mode="horizontal"
              :style="{ lineHeight: '64px' }" 
              :items="menuItems" 
              v-model:selectedKeys="selectedKeys"
              @click="handleMenuClick" />
            </a-spin>
            
          </a-col>
          <a-col flex="150px">
            <a-dropdown @click="">
              <a class="ant-dropdown-link" href="#">
                {{ username }}
                <a-avatar
                  :size="40"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="User Avatar"
                />
              </a>
              <template #overlay>
                <a-menu @click="">
                  <a-menu-item key="1">
                    <span>Профиль</span>
                  </a-menu-item>
                  <a-menu-item key="2">
                    <span @click="handleLogout">Выйти</span>
                  </a-menu-item>
                </a-menu>
              </template>
          </a-dropdown>
          </a-col>
      </a-row>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import keycloakService from '@/plugins/keycloak-service';
import {httpClient} from '@/plugins/axios'
import { MenuProps } from 'ant-design-vue';

export default defineComponent({
  name: 'Header',
  components: {
  },
  setup() {
    const menuItems = ref<MenuProps['items']>([]);
    const loading = ref(true);
    const loadMenuItems = async () => {
      try {
        const items = await fetchMenuItemsFromAPI();
        menuItems.value = items;
      } catch (error) {
        console.error('Error loading menu items:', error);
      } finally {
        loading.value = false; 
      }
    };
    const fetchMenuItemsFromAPI = async (): Promise<MenuProps['items']> => {
    try {
      const response = await httpClient.get('/system/menu/header');
      return response.data.map((item: any, index: number) => ({
        key: index.toString(),
        label: item,
      }));
    } catch (error) {
      console.error('Error fetching menu items:', error);
      return [];
    }
};
    onMounted(loadMenuItems);
    return {
      selectedKeys: ref<string[]>(['1']),
      menuItems,
      loading,
    };
  },
  data() {
    return {
      username: '',
    };
  },
  created() {
    this.username = keycloakService.getKeycloakInstance().tokenParsed?.preferred_username || 'Гость';
    keycloakService.setRoles()
  },
  methods: {
    handleLogout() {
      keycloakService.logout(); // Вызов функции выхода
    },
    handleMenuClick(key: string) {
      console.log('Menu item clicked:', key);
      if (key === '4') {
        this.handleLogout(); // Используем метод класса вместо глобальной функции
      }
    }
  },
});
</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>