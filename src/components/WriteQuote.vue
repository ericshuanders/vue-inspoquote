<template lang="pug">
    div(class="add-your-quote")
        h2 Add your own quote to the bank of Inspiration! 
        div(class="input-quote")
            input(v-model="newWisdom")
            button(@click="addWisdom") Add Your Quote
</template>

<script>
import { LOCAL_QUOTES } from "@/constants";
import swal from "sweetalert";
export default {
  name: "WriteQuote",
  props: {
    localQuotes: Array,
  },
  data() {
    return {
      newWisdom: null,
      wisdomObject: {},
    };
  },
  methods: {
    //Here, we take the user's input and save it to the array of quotes in local storage.
    addWisdom() {
      //If the user doesn't input anything, nothing happens.
      if (!this.newWisdom) {
        return;
      }
      //We turn the string the user inputs into an object, thus formatting it to the
      //data-type the original quotes from quotes.js are stored as.
      this.wisdomObject.body = this.newWisdom;
      this.localQuotes.push(this.wisdomObject);
      //We rest newWisdom to an empty string, so the user can input another quote.
      this.newWisdom = "";
      this.saveLocalQuotes();
      swal(
        "Brilliant!",
        "We've added your bit of wisdom to the Inspoquote pool!",
        "success"
      );
      this.$parent.setRandomQuote();
    },
    //Here we reset the quotes stored in local storage. This is called in addWisdom(),
    //when the user adds a quote.
    saveLocalQuotes() {
      const parsed = JSON.stringify(this.localQuotes);
      localStorage.setItem(LOCAL_QUOTES, parsed);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #79a3b1;
}
input {
  border: none;
  border-radius: 10px;
  color: #79a3b1;
  font-family: "Avenir";
  width: 300px;
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
.add-your-quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.input-quote {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.input-quote button {
  margin: 0 5px;
}
@media only screen and (max-width:414px){
  h2{
    text-align: center;
    font-size: 20px;
  }
  .input-quote{
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;
    height: 100px;
  }
  input{
    width: 150px
  }
}
</style>
