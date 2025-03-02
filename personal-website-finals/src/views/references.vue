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
  
          <RouterLink to="/favorite" class="favorite-icons" data-tooltip="LET'S UNLOCK...">
            <span class="material-symbols-outlined" style="font-size: 30px;">favorite</span>
          </RouterLink>
  
          <RouterLink to="/contact" class="comment-icons" data-tooltip="CONNECT...">
            <span class="material-symbols-outlined" style="font-size: 30px;">mode_comment</span>
          </RouterLink>
        </div>
      </nav>
  
      <!-- Main Content -->
      <div class="flex-container">
        <div class="flex-item-title">
          <h1>SOURCES</h1>
          <p>Hi! This page lists the references I used to build this website.</p>
        </div>
  
        <div data-layer="Line 1" class="Line1"></div>
  
        <br>
  
        <!-- Citations Table -->
        <table class="table1">
          <tr>
            <th>Citation</th>
          </tr>
          <tr>
            <td>Bootstrap. (n.d.). Introduction. <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">Bootstrap Docs</a></td>
          </tr>
          <tr>
            <td>Google Fonts. (n.d.). <a href="https://fonts.google.com/" target="_blank">Google Fonts</a></td>
          </tr>
          <tr>
            <td>Google Fonts Icons. (n.d.). <a href="https://fonts.google.com/icons" target="_blank">Google Fonts Icons</a></td>
          </tr>
          <tr>
            <td>W3Schools. (n.d.). Vue.js Tryit Editor <a href="https://www.w3schools.com/vue/tryit.php?filename=tryvue_v-for_foodImgs2" target="_blank">v-for Example</a></td>
          </tr>
          <tr>
            <td>W3Schools. (n.d.). Vue.js Two-Way Binding <a href="https://www.w3schools.com/vue/tryit.php?filename=tryvue_modifiers_twoWay" target="_blank">Example</a></td>
          </tr>
        </table>
  
        <!-- AI Tool Table -->
        <table class="table2">
          <tr>
            <th>AI Tool</th>
            <th>Chat</th>
            <th>AI Answer</th>
          </tr>
          <tr>
            <td>Copilot</td>
            <td><img src="@/assets/images/Chat.png" class="chat" alt="Chat"></td>
            <td><img src="@/assets/images/Answer.png" class="answer" alt="Answer"></td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  @import "@/assets/css/references.css";
  </style>
  