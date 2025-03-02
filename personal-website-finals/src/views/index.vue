<template>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined">
</head>
<div class="container">
    <div class="row">
    <div class="col-md-9">
        <h2>HELLO,</h2>
        <h1>I AM ATASHA!</h1>
        <p>
        My full name is Atasha Frances Gayle Doria, but you can call me Atasha for short.
        <br><br>
        I am interested in many things, and we might share something in common. To learn more about me, feel free to browse my website.
        </p>

        <RouterLink to="/education" class="education-icons" data-tooltip="I, AS A STUDENT...">
        <span class="material-symbols-outlined">school</span>
        </RouterLink>&nbsp;&nbsp;&nbsp;

        <RouterLink to="/favorite" class="favorite-icons" data-tooltip="LET'S UNLOCK...">
        <span class="material-symbols-outlined">favorite</span>
        </RouterLink>&nbsp;&nbsp;&nbsp;

        <RouterLink to="/contact" class="comment-icons" data-tooltip="CONNECT...">
        <span class="material-symbols-outlined">mode_comment</span>
        </RouterLink>&nbsp;&nbsp;&nbsp;

        <RouterLink to="/references" class="search-icons" data-tooltip="SOURCES">
        <span class="material-symbols-outlined">search</span>
        </RouterLink>&nbsp;&nbsp;&nbsp;
    </div>
    <div class="col-6 col-md-3">
        <img src="@/assets/images/HomePage-img.png" class="img-fluid" alt="Graduation Picture for Home Page">
    </div>
    </div>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
  @import "@/assets/css/style.css";
  @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
</style>

