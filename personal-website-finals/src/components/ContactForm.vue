<template>
    <div>
      <form @submit.prevent="submitSuggestion">
        <input
          v-model="inpName"
          placeholder="Your Name (optional)"
        />
        <textarea
          v-model="inpSuggestion"
          placeholder="Enter your suggestion"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
  
      <div v-if="suggestions.length">
        <h3>Suggestions</h3>
        <ul>
          <li v-for="(suggestion, index) in suggestions" :key="index">
            <strong>{{ suggestion.name }}:</strong> {{ suggestion.text }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactForm",
    data() {
      return {
        inpName: '',
        inpSuggestion: '',
        suggestions: []
      }
    },
    methods: {
      submitSuggestion() {
        if (this.inpSuggestion.trim() === '') {
          alert('Suggestion is required!');
          return;
        }
        const name = this.inpName.trim() === '' ? 'Anonymous' : this.inpName.trim();
        this.suggestions.push({ name: name, text: this.inpSuggestion.trim() });
        this.inpName = '';
        this.inpSuggestion = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  input, textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
  }
  
  button {
    padding: 8px 16px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  </style>
  