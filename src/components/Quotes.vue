<template lang="pug">
    div
        a(
      v-if="quote.link"
      :href="quote.link"
    ) {{ quote.body }}
    
        span(v-else) {{ quote.body }}
        button(@click="removeQuote(quote.body)") Remove Quote from Rotation
       

    
    

</template>

<script>
export default {
  name: "Quotes",
  props: {
    quote: Object,
    localQuotes: Array,
  },
  data() {
    return {};
  },
  methods: {
    removeQuote(body) {
      const index = this.localQuotes.findIndex((quote) => quote.body === body);
      this.localQuotes.splice(index, 1);
      const parsed = JSON.stringify(this.localQuotes);
      localStorage.setItem("localQuotes", parsed);
      location.reload();
      return false;
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
span {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
   */
  color: green;
  margin-top: 60px;
}
</style>
