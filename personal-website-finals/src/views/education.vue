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
        <h1>I, AS A STUDENT</h1>
        <p>Hi! On this page, I will share more about my life as a student.</p>
      </div>

      <div data-layer="Line 1" class="Line1"></div>

      <br/>

      <div class="flex-item-college">
        <h6>COLLEGE</h6>
        <ul>
          <li>Asia Pacific College</li>
          <li>
            Program: Bachelor of Science in Information Technology with
            specialization in Mobile and Internet Technologies
          </li>
          <li>August 2023-Present</li>
        </ul>

        <div class="college-highlight">
          <h6>HIGHLIGHTS</h6><div data-layer="Line 2" class="Line2"></div>
          <div class="card1">
            <img
              src="@/assets/images/AY 23-24 Recognition Day.png"
              class="card-img-top"
              alt="Academic Year 2023-2024 Recognition Day"
            />
            <div class="card-body">
              <h6 class="card-event-title">RECOGNITION DAY</h6>
              <p class="card-text">
                I attended the Recognition Rites for the 2023-2024 Academic Year
                with my friends on November 12, 2024.
              </p>
            </div>
          </div>

          <div class="card2">
            <img
              src="@/assets/images/ICAS Presentation.jpg"
              class="card-img-top"
              alt="ICAS Presentation"
            />
            <div class="card-body">
              <h6 class="card-event-title">ICAS PRESENTATION</h6>
              <p class="card-text">
                I experienced presenting our research paper at the 5th
                International Conference of the Arts and Sciences, held at the
                College of Arts and Sciences, Cebu Normal University, together
                with my senior high school blockmates and paper adviser on
                September 20, 2023.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br/>

      <div class="flex-item-shs">
        <h6>SENIOR HIGH SCHOOL</h6>
        <ul>
          <li>Asia Pacific College</li>
          <li>
            Program: Science, Technology, Engineering, and Information and
            Technology
          </li>
          <li>August 2021-2023</li>
        </ul>

        <div class="shs-highlight">
          <h6>HIGHLIGHTS</h6><div data-layer="Line 2" class="Line2"></div>
          <div class="card3">
            <img
              src="@/assets/images/SHS Graduation Day.png"
              class="card-img-top"
              alt="SHS Graduation Day"
            />
            <div class="card-body">
              <h6 class="card-event-title">SHS GRADUATION DAY</h6>
              <p class="card-text">
                I graduated from Senior High School with High Honors on August 8,
                2023.
              </p>
            </div>
          </div>

          <div class="card4">
            <img src="@/assets/images/DUNONG.png" class="card-img-top" alt="DUNONG" />
            <div class="card-body">
              <h6 class="card-event-title">DUNONG</h6>
              <p class="card-text">
                My group was one of the groups chosen to present at the DUNONG:
                Kumperensiyang Pampananaliksik sa Araling Filipino on November 14,
                2022.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div class="flex-item-jhs">
        <h6>JUNIOR HIGH SCHOOL</h6>
        <ul>
          <li>St. Theodore School, Inc.</li>
          <li>Academic Year 2017-2021</li>
        </ul>

        <div class="jhs-highlight">
          <h6>HIGHLIGHTS</h6><div data-layer="Line 2" class="Line2"></div>
          <div class="card5">
            <img
              src="@/assets/images/Moving Up Ceremony.png"
              class="card-img-top"
              alt="JHS Moving Up Ceremony"
            />
            <div class="card-body">
              <h6 class="card-event-title">JHS MOVING UP</h6>
              <p class="card-text">
                I graduated from Junior High School with Honors on June 5, 2021.
              </p>
            </div>
          </div>

          <div class="card6">
            <img src="@/assets/images/Journalism.png" class="card-img-top" alt="School Jounalism" />
            <div class="card-body">
              <h6 class="card-event-title">JOURNALISM</h6>
              <p class="card-text">
                Back in junior high school, I also tried competing in a school
                journalism contest as an editorial writer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div data-layer="Line 1" class="Line1"></div>

      <br />

      <div class="flex-item-achievements">
        <h6>ACHIEVEMENTS</h6>
        <ul>
          <li>Academic Awardee, 2023-2024</li>
          <li>Senior High School Graduate, With High Honors</li>
          <li>Junior High School Completer, With Honors</li>
        </ul>
      </div>

      <br />

      <div data-layer="Line 1" class="Line1"></div>

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
          <tr>
            <td>Database for Non-life Insurance Company</td>
            <td>
              Designed ERD for a non-life insurance company in the Philippines
              using MySQL.
            </td>
            <td>2024</td>
          </tr>
          <tr>
            <td>Laro Tayo</td>
            <td>Developed a web-based game application using Python.</td>
            <td>2023</td>
          </tr>
          <tr>
            <td>Paws n' Friends</td>
            <td>
              Developed a responsive web application using HTML, CSS, and
              JavaScript.
            </td>
            <td>2023</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationPage",
};
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
  .Line2 {
    width: 90%;
    height: 0px;
    border: 1px black solid;
    position: absolute;
    margin-top: 18px;
    margin-bottom: 0; 
    margin-left: 130px;
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
  .flex-item-college, .flex-item-shs, .flex-item-jhs, .flex-item-achievements, .flex-item-itexp {
    padding: 10px;
    flex: 50%;
  }

  .flex-item-college, .flex-item-shs, .flex-item-jhs, .flex-item-achievements, .flex-item-itexp > p{
    font-family: "Poppins", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    text-align: center;
  }
  
  .flex-item-college ul {
    text-align: left;
  }
  .flex-item-shs ul {
    text-align: left;
  }
  .flex-item-jhs ul {
    text-align: left;
  }
  .flex-item-achievements ul {
    text-align: left;
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

  .college-highlight, .shs-highlight, .jhs-highlight {
    display: flex; 
    justify-content: space-between; 
    position: relative;
  }

  .card1, .card2, .card3, .card4, .card5, .card6 {
    flex: 1;
    margin-top: 100px;
    margin-right: 150px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
    width: auto;
    border-radius: 7px;
  }

  img {
    width: 450px; 
    height: 216px; 
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  .card-event-title{
    text-align: center;
  }
  .card-text{
    text-align: justify;
    font-size: 16px;
    padding: 15px;
  }

  @media (max-width: 768px) { 
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%; 
    }
  
    .college-highlight, .shs-highlight, .jhs-highlight {
      flex-direction: column; 
      align-items: flex-start; 
    }
  
    @media (max-width: 768px) { 
      .card1, .card2, .card3, .card4, .card5, .card6 {
        margin-right: 0;
        flex-basis: 100%; 
        width: 356px auto;
      }
    }

    p {
      text-align: justify; 
    }
    .flex-item-college ul,
    .flex-item-shs ul,
    .flex-item-jhs ul,
    .flex-item-achievements ul {
      text-align: justify; 
    }

    .Line2 {
      width: 50%;
      margin-left: 130px; 
      margin-right: 30px; 
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

@media (max-width: 768px) {
    .flex-container {
      flex-direction: column;
    }
  }
</style>