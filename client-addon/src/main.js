import TestWidget from './components/TestWidget.vue'

// Register a custom component
// (works like 'Vue.component')
// ClientAddonApi.component('test.widgedt.components.widget', TestWidget)

ClientAddonApi.addRoutes('app.route.test', [
  { path: '', name: 'app.route.test.component', component: TestWidget }
])
