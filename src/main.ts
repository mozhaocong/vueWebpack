import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "ant-design-vue/dist/antd.css";
// import antd from "ant-design-vue";

const app = createApp(App);
app.use(store).use(router).mount("#app");
// app.use(antd);
// import {
//   Button,
//   InputNumber,
//   DatePicker,
// } from /* webpackChunkName: 'ant-design-vue' */ "ant-design-vue";
// app.use(Button);
// app.use(InputNumber);
// app.use(DatePicker);
