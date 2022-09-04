import { ref } from './../../node_modules/vue/dist/vue.esm-bundler';

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const demoText = ref(`Hello Demo Component. My Prop 'title' is ${props.title}.`);

    return {
      demoText
    }
  },
  template: /*html*/`
    <p>{{ demoText }}</p>
  `
};