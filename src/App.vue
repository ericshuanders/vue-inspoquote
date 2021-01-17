<template lang="pug">
 
  #app
    Welcome
    Quotes( :quote="quote" :localQuotes="localQuotes")
    WriteQuote( :localQuotes="localQuotes")
    FavoriteQuotes( :quote="quote")
    
    
</template>

<script>
import PwaNotification from "./components/PwaNotification.vue";
import Welcome from "./components/Welcome.vue";
import Quotes from "./components/Quotes.vue";
import WriteQuote from "./components/WriteQuote.vue";
import FavoriteQuotes from "./components/FavoriteQuotes.vue";
import { getRandomQuote, quotes } from "@/quotes";

export default {
  name: "app",
  data() {
    return {
      quote: null,
      quotes: quotes,
      localQuotes: [],
      userQuote: "",
    };
  },
  components: {
    PwaNotification,
    Welcome,
    Quotes,
    WriteQuote,
    FavoriteQuotes,
  },

  mounted() {
    if (!localStorage.getItem("localQuotes")) {
      const convertedQuotes = JSON.stringify(quotes);
      localStorage.setItem("localQuotes", convertedQuotes);
      this.localQuotes = JSON.parse(localStorage.getItem("localQuotes"));
      this.quote = getRandomQuote(this.localQuotes);
    }
    this.localQuotes = JSON.parse(localStorage.getItem("localQuotes"));
    this.quote = getRandomQuote(this.localQuotes);
  },
  methods: {
    addQuote() {
      this.quotes.push(this.userQuote);
      this.saveQuotes();
    },
    saveQuotes() {
      const parsed = JSON.stringify(this.quotes);
      localStorage.setItem("quotes", parsed);
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
}
</style>
