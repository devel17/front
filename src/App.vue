<template>
  <a-layout>
    <a-layout-header class="header" style="background-color: black;">
      <Header/>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="250" style="background: #fff">
          <DynamicMenu/>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2025 Created by Devel's corp
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
//
import { defineComponent, ref, onMounted } from 'vue';
import Header from '@/layouts/Header.vue'
import DynamicMenu from './layouts/DynamicMenu.vue';
import LeftStaticMenu from './layouts/LeftStaticMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    DynamicMenu,
    LeftStaticMenu
  }
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
  width: 1200px;
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