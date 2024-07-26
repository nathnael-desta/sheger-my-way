import { createApp } from 'vue';
import App from './App.vue';
import "./style.css";
import $eventBus from './utils/Events';
import $routeData from './data';
import router from './routes';

const app = createApp(App);

app.use(router);

app.provide('$eventBus', $eventBus);
app.provide('$routeData', $routeData);

app.mount('#app');