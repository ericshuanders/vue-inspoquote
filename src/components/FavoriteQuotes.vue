<template lang="pug">
    div
        button(@click="addFavorite") Save this to my favorites!
        div(v-for="(quote, n) in favorites")
            p
                span {{quote}}
                button(@click="removeFavorite(n)") Remove Quote
    
</template>
<script>
export default {
  name: "FavoriteQuote",
  props: {
    quote: Object,
  },
  data() {
    return {
      favorites: [],
    };
  },
  mounted() {
    if (localStorage.getItem("favorites")) {
      try {
        this.favorites = JSON.parse(localStorage.getItem("favorites"));
      } catch (error) {
        localStorage.removeItem("favorites");
      }
    }
  },
  methods: {
    addFavorite() {
      this.favorites.push(this.quote.body);
      this.saveFavorites();
    },
    saveFavorites() {
      const parsed = JSON.stringify(this.favorites);
      localStorage.setItem("favorites", parsed);
    },
    removeFavorite(n) {
      this.favorites.splice(n, 1);
      this.saveFavorites();
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}
input {
  font-family: "Avenir";
  color: green;
}
</style>
