<template lang="pug">
    div(class="quotes-display")
        img(src="../assets/cloudy.png")
        a(class="random-quote"
      v-if="quote.link"
      :href="quote.link"
    ) {{ quote.body }}
        span(v-else class="random-quote" :key="quote.body") {{ quote.body }}
        button(class="next-quote" @click="getAnotherQuote") Next Quote Please!
        div(class="save-and-remove")
          button(@click="removeQuote(quote.body)") Remove Quote from Rotation
          button(@click="addFavorite") Save this to my favorites! 
</template>

<script>
import swal from "sweetalert";
import { LOCAL_QUOTES, FAVORITES } from "@/constants";
export default {
  name: "Quotes",
  props: {
    quote: Object,
    localQuotes: Array,
    favorites: Array,
  },
  methods: {
    //Here, we remove the quote from the rotation in local storage.
    //We do so by finding the index of the quote-in-question, and use .splice()
    //to remove it. We then reset the array of quotes in local storage and generate
    //another random quote.
    removeQuote(body) {
      const index = this.localQuotes.findIndex((quote) => quote.body === body);
      this.localQuotes.splice(index, 1);
      const parsed = JSON.stringify(this.localQuotes);
      localStorage.setItem(LOCAL_QUOTES, parsed);
      this.$parent.setRandomQuote();
      swal("You got it!", "You won't see that quote anymore!", "success");
    },

    //Here, we add the random quote displayed to an array of favorite quotes, "favorites,"
    //and we set it it local storage so it is accessible and mutable for the user.
    // "favorites" is data passed down from App, and is passed down to
    //the FavoriteQuote componenet as well. FavoriteQuote is 
    //where the items saved in "favorites" can be displayed and deleted
    addFavorite() {
      const lastFavorite = this.favorites[this.favorites.length - 1];

      // This prevents the user from adding the quote they just added
      if (this.quote.body !== lastFavorite) {
        this.favorites.push(this.quote.body);
        const parsed = JSON.stringify(this.favorites);
        localStorage.setItem(FAVORITES, parsed);
        swal("Great!", "Quote saved to your favorites.", "success");
      } else {
        swal(
          "You've already saved that one!",
          "Click 'Next Quote Please!' to find a new favorite.",
          "warning"
        );
      }
    },

    //We use the functionality of the App component setRandomQuote(), which fires
    //every time the application mounts. Here, we utilize it as an onclick for a
    //button to manually get a new quote.
    getAnotherQuote() {
      this.$parent.setRandomQuote();
    },
  },
};
</script>

<style scoped>
.quotes-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
img {
  width: 200px;
}
button {
  border: none;
  width: 200px;
  height: 30px;
  padding: 7px;
  margin: 0 10px;
  background-color: #fcf8ec;
  border-radius: 10px;
  transition-duration: 1s;
  font-family: "Avenir";
}
button:hover {
  background-color: #fdffbc;
  cursor: pointer;
}
@keyframes floatDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.random-quote {
  opacity: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: bolder;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px 0;
  animation: floatDown 1s forwards;
}
.next-quote {
  margin-bottom: 20px;
}
.save-and-remove {
  display: flex;
  width: 450px;
  justify-content: space-between;
  margin: 10px;
}
@media only screen and (max-width:414px){
  .random-quote{
    width: 200px;
  }
  .quotes-display{
    width: 300px;
  }
  .save-and-remove{
    height: 100px;
    width: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 0;
  }
}
</style>
