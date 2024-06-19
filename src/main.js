// Vue3
import { createApp, ref } from "./../node_modules/vue/dist/vue.esm-bundler";

// Components
import useDemoComponent from './components/useDemoComponent';

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
import { useDemoPinia } from './store/useDemoPinia';

const App = {
  components: { useDemoComponent },
  setup() {
    const msg = ref('Hello World!');

    // demo Pinia
    const demoPinia = useDemoPinia();
    console.log(`demoPinia.count: ${demoPinia.count}`);
    demoPinia.addCount();
    console.log(`demoPinia.count: ${demoPinia.count}`);

    return {
      msg
    }
  }
}

const app = createApp(App)
app.use(pinia);
app.mount('#app');