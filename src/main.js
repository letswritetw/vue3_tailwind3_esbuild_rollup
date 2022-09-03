// Vue3
import { createApp, ref } from "./../node_modules/vue/dist/vue.esm-bundler";

const App = {
  setup() {
    const msg = ref('Hello World');

    return {
      msg
    }
  }
}

const app = createApp(App).mount('#app');