<template>
    <a-card title="Counter">
      <p>Count: {{ counterStore.count }}</p>
      <a-button type="primary" @click="increment">Increment</a-button>
      <a-button type="danger" @click="decrement">Decrement</a-button>
    </a-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useCounterStore } from '@/stores/counter';
  
  export default defineComponent({
    setup() {
      const counterStore = useCounterStore();
  
      const increment = () => counterStore.increment();
      const decrement = () => counterStore.decrement();
  
      return { counterStore, increment, decrement };
    },
  });
  </script>