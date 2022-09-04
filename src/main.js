// Vue3
import { createApp, ref } from "./../node_modules/vue/dist/vue.esm-bundler";
__VUE_OPTIONS_API__ = true;
__VUE_PROD_DEVTOOLS__ = false;

const App = {
  setup() {
    const msg = ref('Hello World');

    return {
      msg
    }
  }
}

const app = createApp(App).mount('#app');