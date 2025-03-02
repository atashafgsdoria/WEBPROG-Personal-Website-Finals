<template>
<head>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined">
</head>
<br><br>
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1"></span>
          <RouterLink to="/" class="education-icons" data-tooltip="HOME">
            <span class="material-symbols-outlined" style="font-size: 30px">home</span>
          </RouterLink>
          <RouterLink to="/favorite" class="favorite-icons" data-tooltip="LET'S UNLOCK...">
            <span class="material-symbols-outlined" style="font-size: 30px">favorite</span>
          </RouterLink>
          <RouterLink to="/contact" class="comment-icons" data-tooltip="CONNECT...">
            <span class="material-symbols-outlined" style="font-size: 30px">mode_comment</span>
          </RouterLink>
          <RouterLink to="/references" class="search-icons" data-tooltip="SOURCES">
            <span class="material-symbols-outlined" style="font-size: 30px">search</span>
          </RouterLink>
        </div>
      </nav>
  
      <div class="flex-container">
        <div class="flex-item-title">
          <h1>I, AS A STUDENT</h1>
          <p>Hi! On this page, I will share more about my life as a student.</p>
        </div>
        <div data-layer="Line 1" class="Line1"></div>
        <br />
        
        <div class="flex-item-college">
          <h6>COLLEGE</h6>
          <ul>
            <li>Asia Pacific College</li>
            <li>Program: Bachelor of Science in Information Technology with specialization in Mobile and Internet Technologies</li>
            <li>August 2023-Present</li>
          </ul>
          <div class="college-highlight">
            <h6>HIGHLIGHTS</h6>
            <div data-layer="Line 2" class="Line2"></div>
            <div class="card1">
              <img src="@/assets/images/AY 23-24 Recognition Day.png" class="card-img-top" alt="Academic Year 2023-2024 Recognition Day" />
              <div class="card-body">
                <h6 class="card-event-title">RECOGNITION DAY</h6>
                <p class="card-text">I attended the Recognition Rites for the 2023-2024 Academic Year with my friends on November 12, 2024.</p>
              </div>
            </div>
            <div class="card2">
              <img src="@/assets/images/ICAS Presentation.jpg" class="card-img-top" alt="ICAS Presentation" />
              <div class="card-body">
                <h6 class="card-event-title">ICAS PRESENTATION</h6>
                <p class="card-text">I experienced presenting our research paper at the 5th International Conference of the Arts and Sciences...</p>
              </div>
            </div>
          </div>
        </div>
        
        <br />
        <div class="flex-item-shs">
          <h6>SENIOR HIGH SCHOOL</h6>
          <ul>
            <li>Asia Pacific College</li>
            <li>Program: Science, Technology, Engineering, and Information and Technology</li>
            <li>August 2021-2023</li>
          </ul>
        </div>
        
        <br />
        <div class="flex-item-itexp">
          <h6>INFORMATION AND TECHNOLOGY EXPERIENCE</h6>
          <table>
            <tr>
              <th>Project Title</th>
              <th>Overview</th>
              <th>Year</th>
            </tr>
            <tr>
              <td>FurBnB</td>
              <td>Designed a web and mobile application using Figma.</td>
              <td>2024</td>
            </tr>
            <tr>
              <td>VetLink</td>
              <td>Developed a mobile application's GUI using Android Studio.</td>
              <td>2024</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from "vue-router";
  import { onMounted, onUnmounted } from 'vue';

  // Apply scoped Bootstrap class to the body when mounted
  onMounted(() => {
    document.body.classList.add('education-bootstrap');
  });

  // Remove it when leaving the page
  onUnmounted(() => {
    document.body.classList.remove('education-bootstrap');
  });
  </script>
  
  <style scoped>
  @import "@/assets/css/edu.css";
  /* Import Google Fonts in CSS */
  @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
  </style>