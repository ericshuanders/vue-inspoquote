<template lang="pug">
    div
        h2 My favorite quotes:
        div(class = 'favorite-quote' v-for="(favorite, n) in favorites")
            p
                span {{favorite}}
                button(@click="removeFavorite(n)") Remove Quote    
</template>

<script>
import { FAVORITES } from "@/constants";
export default {
  name: "FavoriteQuote",
  props: {
    favorites: Array,
  },
  methods: {
    //This function removes the favorite quote from the array of favorites. 
    //It then resets the list of favorites in local storage.
    removeFavorite(n) {
      this.favorites.splice(n, 1);
      this.saveFavorites();
    },
    saveFavorites() {
      const parsed = JSON.stringify(this.favorites);
      localStorage.setItem(FAVORITES, parsed);
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
h2 {
  color: #79a3b1;
}
button {
  border: none;
  width: 150px;
  height: 30px;
  padding: 7px;
  background-color: #d0e8f2;
  border-radius: 10px;
  transition-duration: 1s;
  font-family: "Avenir";
}
button:hover {
  background-color: #fdffbc;
  cursor: pointer;
}
.favorite-quote {
  width: 300px;
  background: #fcf8ec;
  margin: 10px;
  border-radius: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
  padding: 25px;
  opacity: 0;
  animation: float 1s forwards;
  text-align: center;
}
@keyframes float {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
span {
  color: #393e46;
}
@media only screen and (max-width:414px){
  .favorite-quote{
    width: 250px;
  }
}
</style>
