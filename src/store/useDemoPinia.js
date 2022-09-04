import { defineStore } from "pinia";

import { ref } from './../../node_modules/vue/dist/vue.esm-bundler';

export const useDemoPinia = defineStore('useDemoPinia', () => {
  const count = ref(0);
  const addCount = () => {
    count.value++
  }

  return { count, addCount }
});