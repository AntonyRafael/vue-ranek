<template>
  <section class="login">
    <h1>Login</h1>
    <form action="">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />

      <label for="senha">senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />

      <button class="btn" @click.prevent="logar">Logar</button>
      <ErroNotificacao :erros="erros" />
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Perdeu a senha ? clique aqui</a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "./LoginCriar.vue";

export default {
  name: "Login",
  components: {
    LoginCriar,
  },
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
      erros: [],
    };
  },
  methods: {
    logar() {
      this.erros = [];
      this.$store
        .dispatch("logarUsuario", this.login)
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch((e) => {
          this.erros.push(e.response.data.message);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
  transition: all 0.3s;
}

.perdeu:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
