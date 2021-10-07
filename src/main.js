import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadingPage from "@/components/LoadingPage.vue";
import ErroNotificacao from "@/components/errorNotificacao.vue";

Vue.config.productionTip = false;

Vue.component("LoadingPage", LoadingPage);
Vue.component("ErroNotificacao", ErroNotificacao);
Vue.filter("numeroPreco", (valor) => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return 0;
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
