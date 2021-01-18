<template lang="pug">
  #app
    Welcome
    Quotes( :quote="quote" :localQuotes="localQuotes" :favorites="favorites")
    WriteQuote( :localQuotes="localQuotes")
    FavoriteQuotes( :favorites="favorites")        
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Quotes from "./components/Quotes.vue";
import WriteQuote from "./components/WriteQuote.vue";
import FavoriteQuotes from "./components/FavoriteQuotes.vue";
import { getRandomQuote, quotes } from "@/quotes";
//Importing constant variables LOCAL_QUOTES and FAVORITES to be used
//during localStorage setting and getting.
//Hopefully, this helps avoid string-related typos.
import { LOCAL_QUOTES, FAVORITES } from "@/constants";

export default {
  name: "app",
  data() {
    return {
      quote: null,
      quotes,
      localQuotes: [],
      favorites: [],
    };
  },
  components: {
    Welcome,
    Quotes,
    WriteQuote,
    FavoriteQuotes,
  },

  mounted() {
    //Whenever the app mounts, we create an array of quotes that lives in local storage.
    //This way, a user can add or remove to the array of quotes.
    this.saveQuotesToLocalStorage();

    //Whenever mounted, the app sets a new random quote, which it retrieves from
    //the variable 'localQuotes.' localQuotes is an array of quotes which will be:
    //1) The array as defined in quotes.js if this is the user's first visit OR
    //2) An existing array of quotes pulled from localstorage.
    this.setRandomQuote();

    //Whenever mounted, the app checks for and retrieves an array of quotes saved as
    // "favorites" from local sotrage,
    this.getFavoritesFromStorage();
  },
  methods: {
    saveQuotesToLocalStorage() {
      //This checks if there are quotes saved in local storage.
      //If not, we assign "localQuotes" to the quotes imported from quotes.js
      const quotesInStorage = JSON.parse(localStorage.getItem(LOCAL_QUOTES));

      //Below, we check to see if an array of quotes exists in local storage
      //and also if that array has a length (perhaps the user has deleted all
      //the quotes).
      const areQuotesInStorage = Boolean(
        quotesInStorage && quotesInStorage.length
      );
      this.localQuotes = areQuotesInStorage ? quotesInStorage : quotes;

      //If we have no quotes in local storage, here we set the quotes
      //from quotes.js in local storage. Now, they can be added to or deleted.
      if (!areQuotesInStorage) {
        localStorage.setItem(LOCAL_QUOTES, JSON.stringify(quotes));
      }
    },

    //See comments above in mounted()
    setRandomQuote() {
      this.quote = getRandomQuote(this.localQuotes);
    },

    //See comments above in mounted()
    getFavoritesFromStorage() {
      if (localStorage.getItem(FAVORITES)) {
        try {
          this.favorites = JSON.parse(localStorage.getItem(FAVORITES));
        } catch (error) {
          console.error(`Error parsing JSON: ${error}`);
          localStorage.removeItem(FAVORITES);
        }
      }
    },
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
body {
  font-family: "Avenir";
  background-color: #d0e8f2;
}
</style>
