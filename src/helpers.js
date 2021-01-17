const quotes = [{ body: "myQuote" }];

export const getRandomQuote = (quotes) => {
  const max = quotes.length; // returns a random integer up to max - 1
  const i = Math.floor(Math.random() * Math.floor(max));

  return { ...quotes[i], index: i };
};

export const randomQuote = () => {
  const randomQuote = getRandomQuotes(this.quotes);
  this.randomQuote = randomQuote;
};

// export const removeQuote = () => {
//   const filteredQuotes = this.quotes.filter((_, i) => i !== this.randomQuote.index);
//   this.quotes = filteredQuotes;
//   LocaleStorage.setItem('quotes', filteredQuotes);
// };
