<template>
  <div class="containment">
    <router-link to="/" style="text-decoration: none;">
      <v-btn
        icon="mdi-home-circle-outline"
        size="x-large"
        variant="elevated"
        color="#25B7A1"
        style="margin-top: 15px; margin-left: 15px;"
      >
      </v-btn>
    </router-link>

    <div class="about-area">
      <img
        src="@/assets/D_Logo.png"
        width="60px"
        height="60px"
        style="margin-bottom: 10px; border-radius: 100px;"
      ></img>

      <v-card class="content">

        <div class="title">ABOUT US</div>
        
        <v-row wrap style="margin-top: 10px;">
          <v-col cols="1" style="width: 390px;">
            <div class="some-text">
              &nbsp;&nbsp;&nbsp;&nbsp;Welcome to Donodash, the brainchild of Bogdan Vila, a <br>
              dedicated Comp Sci student from Cluj-Napoca, Romania. <br>
              Donodash is more than a web application...it's a testament <br>
              to Bogdan's passion for software development and his <br>
              commitment to creating innovative solutions. <br><br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;Donodash was born from Bogdan's desire to simplify the<br>
              donation management process for content creators. As a <br> 
              student with a penchant for technology and interest in <br>
              web development, Bogdan embarked on the journey of <br>
              creating Donodash as his Bachelor's diploma project. <br><br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;At Donodash, the mission is simple yet impactful: to <br>
              empower content creators by providing them with a <br>
              centralized platform to manage and analyze donations from <br>
              various sources. Bogdan's vision is to streamline the <br>
              donation process, allowing creators to focus on what they do <br>
              best: creating captivating content for their audience. <br><br><br>
            </div>
          </v-col>
          <v-col cols="1" style="width: 390px; margin-left: 340px;">
            <div class="some-text">
              &nbsp;&nbsp;&nbsp;&nbsp;As Bogdan continues to develop Donodash, he envisions <br>
              a future where the application becomes the go-to solution for <br>
              content creators seeking efficient donation management tools. <br>
              With his dedication, creativity and unwavering commitment <br>
              to excellence, Bogdan is poised to take Donodash to new <br>
              heights. <br><br><br>
              &nbsp;&nbsp;&nbsp;&nbsp;Join Bogdan on this journey as he continues to enhance and <br>
              expand Donodash. Whether you're a content creator looking for <br>
              a great way to manage donations or a supporter of Bogdan's <br>
              innovative project, you're welcomed to be part of the <br>
              Donodash community! <br><br><br> 
              &nbsp;&nbsp;&nbsp;&nbsp;If you have any questions or suggestions regarding Donodash, <br>
              make sure to check the HELP section in the application and <br>
              feel free to reach out Bogdan directly at his email address: <br>
              vilabogdan5112002@gmail.com. Thank you for your support <br>
              and hopefully your experience with Donodash is a great one! <br><br><br>
            </div>
          </v-col>
        </v-row>

      </v-card>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .containment {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-image: url("../assets/background.png");
        background-size: cover;
        overflow-x: auto;
        overflow-y: auto;
  }

  .about-area {
        margin-top: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 700px;
    }

    .content {
        width: 800px;
        height: 500px;
        background-color: #25B7A1;
        border-radius: 60px;
        border: 6px solid white;
        margin-left: auto;
        margin-right: auto;
        padding: 15px;
        padding-bottom: 8px;
    }

    .title {
        margin: 25px auto 0 auto;
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-size: xx-large;
        font-style: normal;
        color: white;
        text-align: center;
    }

    .some-text {
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-size: x-small;
        font-style: normal;
        color: white;
        width: 390px;
    }
</style>
