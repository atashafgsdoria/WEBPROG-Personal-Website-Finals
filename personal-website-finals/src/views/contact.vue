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
    <br><br>
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
          <li>Email: <a href="mailto:asdoria@student.apc.edu.ph"> asdoria@student.apc.edu.ph</a></li>
          <li>LinkedIn: <a class="socials" href="https://www.linkedin.com/in/atasha-frances-gayle-doria-897399219/" target="_blank">Atasha Frances Gayle Doria</a></li> 
        </ul>
      </div>
  
      <br>
      <div data-layer="Line 1" class="Line1"></div>
      <br>
      
      <h6>SHARE YOUR COMMENTS</h6>
      <div class="flex-item-survey">
        <p v-if="message" :class="messageType">{{ message }}</p>
        <input type="text" v-model="inpName" placeholder="Name">
        <input type="text" v-model="inpSuggestion" placeholder="Comment/s*">
        <button @click="submitSuggestion" :disabled="loading">
          {{ loading ? "Submitting..." : "Submit" }}
        </button>
        <br><br>
        <br>
        <div data-layer="Line 1" class="Line1"></div>
        <br>
        <h6>YOUR COMMENTS</h6>
        <table class="comment-table" v-if="comments.length">
          <thead>
            <tr>
              <th>Name</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comment in comments" :key="comment.id">
              <td>{{ comment.name }}</td>
              <td>{{ comment.suggestion }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else>No comments yet. Be the first to share your thoughts!</p>
        </div>
    </div>
  </template>
  
  <script>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase";

export default {
  setup() {
    const inpName = ref("");
    const inpSuggestion = ref("");
    const loading = ref(false);
    const message = ref("");
    const messageType = ref(""); 
    const comments = ref([]); 

    const showMessage = (msg, type) => {
      message.value = msg;
      messageType.value = type;
      setTimeout(() => {
        message.value = "";
      }, 3000);
    };

    const fetchComments = async () => {
      const { data, error } = await supabase.from("comments").select("*").order("id", { ascending: false });
      if (error) {
        console.error("Error fetching comments:", error.message);
      } else {
        comments.value = data;
      }
    };

    const submitSuggestion = async () => {
      if (!inpSuggestion.value.trim()) {
        showMessage("I'd love to hear your thoughts. Thank you!", "error");
        return;
      }

      loading.value = true;
      message.value = "";

      const { error } = await supabase.from("comments").insert([{ 
        name: inpName.value || "Anonymous", 
        suggestion: inpSuggestion.value 
      }]);

      loading.value = false;

      if (error) {
        console.error("Error submitting suggestion:", error.message);
        showMessage("Submission failed, please try again.", "error");
      } else {
        showMessage("Thank you for sharing your thoughts!", "success");
        inpName.value = "";
        inpSuggestion.value = "";
        fetchComments(); 
      }
    };

    onMounted(fetchComments);

    return { inpName, inpSuggestion, loading, submitSuggestion, message, messageType, comments };
  }
};
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
  
  .flex-item-socials ul {
    text-align: left;
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }
  .socials {
    color: black; 
    text-decoration: none;
  }

  .socials:hover {
    color: black;
    text-decoration: underline; 
  }
  a[href^="mailto"] { 
    color: black; 
    text-decoration: none; 
  }

  a[href^="mailto"]:hover {
    text-decoration: underline; 
    color: black; 
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
  }

.flex-item-survey input[type="text"] {
  width: 100%;
  padding: 10px;
  border: #DBD8D1;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: "Poppins", serif;
}

.flex-item-survey button {
  padding: 10px 20px;
  background-color: #31589B; 
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  width: auto; 
  font-family: "Poppins", serif;
  float: left;
}


.flex-item-survey button:hover {
  background-color: #787774; 
}

.success {
  color: green;
  background-color: #DBD8D1;
  font-weight: bold;
  font-family: "Poppins", serif;
  font-size: 16px;  
  width: 100%; 
}
.error {
  color: red;
  background-color: #DBD8D1;
  font-weight: bold;
  font-family: "Poppins", serif;
  font-size: 16px;  
  width: 100%; 
}

.comment-table {
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

.comment-table th,.comment-table td, .comment-table tr:nth-child(odd) {
  border: 1px solid #DBD8D1; 
  padding: 10px;
}

@media (max-width: 600px) {
  .comment-table th,
  .comment-table td {
    padding: 8px;
    font-size: 16px;
  }
}
  </style>