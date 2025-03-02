<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1"></span>
  
          <RouterLink to="/" class="education-icons" data-tooltip="HOME">
            <span class="material-symbols-outlined" style="font-size: 30px;">home</span>
          </RouterLink>
  
          <RouterLink to="/education" class="education-icons" data-tooltip="I, AS A STUDENT...">
            <span class="material-symbols-outlined" style="font-size: 30px;">school</span>
          </RouterLink>
  
          <RouterLink to="/contact" class="comment-icons" data-tooltip="CONNECT...">
            <span class="material-symbols-outlined" style="font-size: 30px;">mode_comment</span>
          </RouterLink>
  
          <RouterLink to="/references" class="search-icons" data-tooltip="SOURCES">
            <span class="material-symbols-outlined" style="font-size: 30px;">search</span>
          </RouterLink>
        </div>
      </nav>
  
      <!-- Main Content -->
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
          <div>
            <figure v-for="(item, index) in myWatch" :key="index">
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
    { name: "Movie 1", url: "https://via.placeholder.com/150" },
    { name: "Movie 2", url: "https://via.placeholder.com/150" },
    { name: "Movie 3", url: "https://via.placeholder.com/150" }
  ]);
  </script>
  
  <style scoped>
  @import "@/assets/css/favorite.css";
  </style>