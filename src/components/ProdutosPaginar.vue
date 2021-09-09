<template>
  <ul v-if="paginasTotal > 1">
    <router-link :to="{ query: query(1) }">👈 </router-link>

    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
    </li>
    <router-link :to="{ query: query(paginasTotal) }">👉</router-link>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosTotal: { type: Number, default: 1 },
    produtosPorPagina: { type: Number, default: 1 },
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },
  computed: {
    paginas() {
      const current = Number(this.$route.query._page);
      const range = 5;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0 auto;
  grid-column: 1 / -1;
}
li {
  display: inline-block;
}

li a {
  padding: 10px 8px;
  border-radius: 2px;
  margin: 4px;
  transition: all 0.3s;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: white;
}
</style>
