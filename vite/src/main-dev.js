import {createApp, defineAsyncComponent} from 'vue';
import { toPascalCase } from './assets/globals';

// If you are build a SPA with a single <div id="app"></div> entry you would:
// import App from './App.vue'
// createApp(App).mount('#app')

// The example here is to have multiple Vue apps sprinkled throughout your page
// So we would instantiate any known components by their own

const componentMap = {
  HelloWorld: 'HelloWorld',
}

for (const el of document.getElementsByClassName('vue-app')) {
  let components = {};
  el.childNodes.forEach(child=>{
    if(child.tagName && child.tagName.includes('-')) {
      const componentName = toPascalCase(child.tagName.toLowerCase());
      components[componentName] = defineAsyncComponent(()=> {
        return import(`./components/${componentMap[componentName]}.vue`);
      });
    }
  });
  createApp({
    template: el.innerHTML,
    components,
  })
  // .use(router)
  .mount(el);
}
