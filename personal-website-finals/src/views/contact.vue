<template>
    <div class="navbar">
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1"></span>
          <router-link to="/" class="education-icons" data-tooltip="HOME">
            <span class="material-symbols-outlined" style="font-size: 30px;">home</span>
          </router-link>
          <router-link to="/education" class="education-icons" data-tooltip="I, AS A STUDENT...">
            <span class="material-symbols-outlined" style="font-size: 30px;">school</span>
          </router-link>
          <router-link to="/favorite" class="favorite-icons" data-tooltip="LET'S UNLOCK...">
            <span class="material-symbols-outlined" style="font-size: 30px;">favorite</span>
          </router-link>
          <router-link to="/references" class="search-icons" data-tooltip="SOURCES">
            <span class="material-symbols-outlined" style="font-size: 30px;">search</span>
          </router-link>
        </div>
      </nav>
    </div>
  
    <div class="flex-container">
      <div class="flex-item-title">
        <h1>CONNECT</h1>
        <p>Hi! On this page, you will find ways to connect with me. I'd love to hear your thoughts and suggestions for my website below. Feel free to get in touch with me!</p>
      </div>
  
      <div data-layer="Line 1" class="Line1"></div>
      <br>
      
      <div class="flex-item-socials">
        <h6>SOCIALS</h6>
        <ul>
          <li>Email: asdoria@student.apc.edu.ph</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/atasha-frances-gayle-doria-897399219/" target="_blank">Atasha Frances Gayle Doria</a></li> 
        </ul>
      </div>
  
      <br>
      <div data-layer="Line 1" class="Line1"></div>
      <br>
      
      <h6>SHARE YOUR THOUGHTS</h6>
      <div class="flex-item-survey">
        <input type="text" v-model="inpName" placeholder="Name">
        <input type="text" v-model="inpSuggestion" placeholder="Suggestion*">
        <button @click="submitSuggestion">Submit</button>
        
        <ul>
          <li v-for="(suggestion, index) in suggestions" :key="index">
            {{ suggestion.name }}: {{ suggestion.text }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inpName: '',
        inpSuggestion: '',
        suggestions: []
      };
    },
    methods: {
      submitSuggestion() {
        if (this.inpSuggestion.trim() !== '') {
          this.suggestions.push({
            name: this.inpName || 'Anonymous',
            text: this.inpSuggestion
          });
          this.inpName = '';
          this.inpSuggestion = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import '@/assets/css/contact.css';
  </style>