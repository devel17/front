<template>
  <a-layout class="layout">
  <a-layout-header>
    <Header/>
  </a-layout-header>
  <a-layout-content>
    <div style="margin-top : 50px;" class="container">
      

      <a-row type="flex"  justify="start">
      <a-col flex="16%"><MainContent/></a-col>
      <a-col flex="auto" style="background-color: #fff; display: inline-block;"><router-view /></a-col>
    </a-row>
    </div>
    
  </a-layout-content>
  <a-layout-footer style="text-align: center">
      Ant Design ©2025 Created by Devel's corp
    </a-layout-footer>
</a-layout>
</template>
<script lang="ts">
//
//Привет, {{ username }}! <a-button type="danger" @click="handleLogout">Выйти</a-button>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, onMounted } from 'vue';
import {httpClient} from '@/plugins/axios'
import Header from '@/layouts/Header.vue'
import DynamicMenu from './layouts/DynamicMenu.vue';
import { MenuProps } from 'ant-design-vue';
import LeftStaticMenu from './layouts/LeftStaticMenu.vue';
import MainContent from './layouts/simple/MainContent.vue'


export default defineComponent({
  name: 'App',
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    Header,
    DynamicMenu,
    LeftStaticMenu,
    MainContent
  },
  setup() {
    return {
      // selectedKeys1: ref<string[]>(['1']),
      // selectedKeys2: ref<string[]>(['1']),
      // openKeys: ref<string[]>(['sub1','sub2','sub3']),
    };
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
  }
});
</script>

