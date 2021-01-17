<template lang="pug">
    div
        
        input(v-model="newWisdom")
        button(@click="addWisdom") Share Your Wisdom
    
</template>

<script>
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
    addWisdom() {
      if (!this.newWisdom) {
        return;
      }

      this.wisdomObject.body = this.newWisdom;
      this.localQuotes.push(this.wisdomObject);
      this.newWisdom = "";
      this.saveLocalQuotes();
      location.reload();
      return false;
    },
    saveLocalQuotes() {
      const parsed = JSON.stringify(this.localQuotes);
      localStorage.setItem("localQuotes", parsed);
    },
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
