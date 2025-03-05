<template>
    <div>
      <div>
        <nav class="navbar">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1"></span>

            <router-link to="/" class="education-icons" data-tooltip="HOME">
              <span class="material-symbols-outlined" style="font-size: 30px;">home</span>
            </router-link>

            <RouterLink to="/education" class="education-icons" data-tooltip="I, AS A STUDENT...">
              <span class="material-symbols-outlined">school</span>
            </RouterLink>

            <router-link to="/favorite" class="favorite-icons" data-tooltip="LET'S UNLOCK...">
              <span class="material-symbols-outlined" style="font-size: 30px;">favorite</span>
            </router-link>

            <router-link to="/contact" class="comment-icons" data-tooltip="CONNECT...">
              <span class="material-symbols-outlined" style="font-size: 30px;">mode_comment</span>
            </router-link>
          </div>
        </nav>
      </div>
      <br><br>
      <div class="flex-container">
        <div class="flex-item-title">
          <h1>SOURCES</h1>
          <p>Hi! This page lists the references I used to build this website.</p>
        </div>
  
        <div data-layer="Line 1" class="Line1"></div>
  
        <br>
        <table class="table1">
          <tr>
            <th>Citation</th>
          </tr>
          <tr>
            <td>Bootstrap. (n.d.). Introduction. <a class="src_link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/5.0/getting-started/introduction/</a></td>
          </tr>
          <tr>
            <td>Google Fonts. (n.d.). <a class="src_link" href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a></td>
          </tr>
          <tr>
            <td>Google Fonts Icons. (n.d.). <a class="src_link" href="https://fonts.google.com/icons" target="_blank">https://fonts.google.com/icons</a></td>
          </tr>
          <tr>
            <td>W3Schools. (n.d.). Vue.js Tryit Editor <a class="src_link" href="https://www.w3schools.com/vue/tryit.php?filename=tryvue_v-for_foodImgs2" target="_blank">https://www.w3schools.com/vue/tryit.php?filename=tryvue_v-for_foodImgs2</a></td>
          </tr>
          <tr>
            <td>W3Schools. (n.d.). Vue.js Two-Way Binding <a class="src_link" href="https://www.w3schools.com/vue/tryit.php?filename=tryvue_modifiers_twoWay" target="_blank">https://www.w3schools.com/vue/tryit.php?filename=tryvue_modifiers_twoWay</a></td>
          </tr>
        </table>
        <br>
  
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
  }

  table {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  text-align: justify;
  border: 1px solid #968f8f; 
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
  border-collapse: collapse;
  margin-top: 15px;
  width: 100%;
}

th, td, tr {
  border: 1px solid #DBD8D1; 
  padding: 10px;
}

th {
  text-align: left;
}

td {
  text-align: justify;
}

.table2 td img {
  max-width: 100%; 
  height: auto;
}

.chat{
  width: 350px auto;
}
.answer{
  width: 350px auto;
}

.src_link{
  color: black; 
  text-decoration: none;
}

.src_link:hover {
  color: black;
  text-decoration: underline; 
}
  </style>
  