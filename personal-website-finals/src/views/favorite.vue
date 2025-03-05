<template>
    <div>
    <div>
    <nav class="navbar">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"></span>

        <router-link to="/" class="education-icons" data-tooltip="HOME">
          <span class="material-symbols-outlined" style="font-size: 30px;">home</span>
        </router-link>

        <router-link to="/favorite" class="favorite-icons" data-tooltip="LET'S UNLOCK...">
          <span class="material-symbols-outlined" style="font-size: 30px;">favorite</span>
        </router-link>

        <router-link to="/contact" class="comment-icons" data-tooltip="CONNECT...">
          <span class="material-symbols-outlined" style="font-size: 30px;">mode_comment</span>
        </router-link>

        <router-link to="/references" class="search-icons" data-tooltip="SOURCES">
          <span class="material-symbols-outlined" style="font-size: 30px;">search</span>
        </router-link>
      </div>
    </nav>
  </div>
  
  <br><br>
      <div class="flex-container">
        <div class="flex-item-title">
          <h1>LET'S UNLOCK</h1>
          <p>Hi! On this page, I will share my interests, hobbies, and other aspects of my life, and you can find out for yourself if we share something in common.</p>
        </div>
  
        <div data-layer="Line 1" class="Line1"></div>
  
        <br>
        
        <div class="flex-item-hobbies">
          <h6>HOBBIES</h6>
          <ul>
            <li>Reading</li>
            <li>Listening to Music</li>
            <li>Watching Series or Movies</li>
          </ul>
        </div>
  
        <br>
  
        <div data-layer="Line 1" class="Line1"></div>
  
        <br>
  
        <div class="flex-item-performers">
          <h6>FAVORITE SONGS</h6>
          <iframe v-for="(video, index) in videos" :key="index" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
  
        <br>
  
        <div data-layer="Line 1" class="Line1"></div>
  
        <br>
  
        <div class="flex-item-must-watch">
        <h6>MUST WATCH</h6>
        <div class="watch-list">
          <figure v-for="(item, index) in myWatch" :key="index" class="watch-item">
            <img :src="item.url" alt="Must Watch Image">
            <figcaption>{{ item.name }}</figcaption>
          </figure>
        </div>
      </div>

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  // YouTube video links
  const videos = ref([
    "https://www.youtube.com/embed/5m245fHSW5o?si=mSqt-qhnAYwr8fQS&controls=0",
    "https://www.youtube.com/embed/XqQMisU5En8?si=TJJS0tLmshINfMs2&controls=0",
    "https://www.youtube.com/embed/uPpYrKXTZA8?si=pecSusZYVABIuxu8&controls=0",
    "https://www.youtube.com/embed/XTWJFGF-Ev4?si=q0Dum6Zsm8kh_M6Q&controls=0",
    "https://www.youtube.com/embed/re1hIVppuc0?si=3QczyhHMGPOju8NM&controls=0",
    "https://www.youtube.com/embed/NXSAM8F9piY?si=UwwjmiyOl6-TztDy&controls=0",
    "https://www.youtube.com/embed/o0U6OLenJyw?si=lzmbCqe9U_MXJ1Dx&controls=0",
    "https://www.youtube.com/embed/X2PBc3smR1M?si=oA_1ppuk1pBeyPJ3&controls=0"
  ]);
  
  // Sample watch list (this should match your `favorite.js` data structure)
  const myWatch = ref([
  { name: "I'm Tee, Me Too", url: new URL('@/assets/images/ITMT.jpg', import.meta.url).href },
  { name: 'How To Make Millions Before Grandma Dies', url: new URL('@/assets/images/HTMMBGD.jpg', import.meta.url).href },
  { name: 'Blacklist', url: new URL('@/assets/images/BL.jpg', import.meta.url).href },
  { name: 'Home School', url: new URL('@/assets/images/HS.jpg', import.meta.url).href },
  { name: 'Midnight Museum', url: new URL('@/assets/images/MM.jpg', import.meta.url).href },
  { name: 'Who Are You', url: new URL('@/assets/images/WAY.jpg', import.meta.url).href },
  { name: 'The Gifted', url: new URL('@/assets/images/TG.jpg', import.meta.url).href },
  { name: 'The Gifted Graduation', url: new URL('@/assets/images/TGG.jpg', import.meta.url).href }
]);
  </script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap");
body {
    background-color: #DBD8D1;
    margin-top: 70px;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #31589B;
    z-index: 999;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
  }
  
  .material-symbols-outlined {
    font-size: 30px; 
  }
  
  .education-icons, .favorite-icons, .comment-icons, .search-icons {
    margin: 0 40px auto; 
  }

  a {
    text-decoration: none;
    color: #DBD8D1;
    background-color: transparent;
    box-shadow: none; 
  }
  
  a:hover {
    color: #DBD8D1; 
  }
  
  a:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -10px;
    transform: translateX(-50%);
    background-color: #31589B;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    font-family: "Poppins", serif;
    height: 25px;
  }
  
  a:hover::after {
    opacity: 1;
  }


  .Line1{
    width: 99%;
    height: 0px;
    border: 1px black solid;
    align-self: center;
  }


  h1 {
    font-family: "Staatliches", serif;
    font-weight: 400;
    font-size: 96px;
    font-style: normal;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  h6 {
    font-family: "Staatliches", serif;
    font-weight: 400;
    font-size: 32px;
    font-style: normal;
    text-align : left;
    word-wrap: break-word;
    margin-bottom: 3px;
    margin-top: 1px;
  }
  p {
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    text-align: center;
  }

  .flex-item-title {
    padding: 10px;
    flex: 50%;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    text-align: center;
    box-sizing: border-box;
    clear: both;
    padding-left: 90px;
    padding-right: 90px;
    padding-bottom: 90px;
  }
  .flex-item-hobbies, .flex-item-performers, .flex-item-must-watch {
    padding: 10px;
    flex: 50%;
  }

  .flex-item-hobbies, .flex-item-performers, .flex-item-must-watch> p{
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    text-align: center;
  }
  
  .flex-item-hobbies ul {
    text-align: left;
  }
  .flex-item-performers ul {
    text-align: left;
  }

  iframe {
    width: 560px auto;
    height: auto; 
    margin: 10px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap; 
  }

  .col-md-6 {
    flex: 0 0 50%; 
    max-width: 50%; 
    padding: 15px; 
  }

  @media (max-width: 768px) { 
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%; 
    }
    p {
      text-align: justify; 
    }
    .flex-item-hobbies ul {
      text-align: justify; 
    }
  }

  @media (max-width: 768px) {
    .flex-container {
      flex-direction: column;
    }
    #app > div {
      flex-direction: column; 
      align-items: center;
    }
  
    figure {
      width: 100%; 
      margin: 10px auto; 
    }
  }

  @media (max-width: 1024px) { /* Medium screens */
    .watch-item {
      flex: 1 1 calc(33.33% - 10px); /* 3 per row */
      max-width: calc(33.33% - 10px);
    }
  }

  @media (max-width: 768px) { /* Small Screens */
    .watch-item {
      flex: 1 1 calc(50% - 10px); /* 2 per row */
      max-width: calc(50% - 10px);
    }
  }

  @media (max-width: 480px) { /* Mobile */
    .watch-item {
      flex: 1 1 100%; /* 1 per row */
      max-width: 100%;
    }
  }


  #app > div {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .watch-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Ensures proper spacing */
    gap: 10px; /* Adds uniform spacing between items */
    padding: 10px;
  }

  .watch-item {
    flex: 1 1 calc(25% - 10px); /* 4 items per row */
    max-width: calc(25% - 10px); /* Ensures correct sizing */
    box-sizing: border-box; /* Prevents layout shifts */
    text-align: center;
  }
  
  figure {
    margin: 0;
    margin-top: 5px;
    background-color: #DBD8D1;
    padding: 5px;
    border-radius: 8px;
  }
  
  figcaption {
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
  }
  
  img {
    width: 90%; 
    height: 90%;
    border-radius: 5px;
  }
  </style>