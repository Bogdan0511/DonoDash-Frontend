<template>
  <v-layout style="display: flex; flex-grow: 1;">
    <Header></Header>
    <Footer></Footer>
    <v-main class="content">
      <img
          src="@/assets/donations.png"
          width="534px"
          height="434px"
          style="margin-left: 50px; border-radius: 40px; border: 10px solid white; align-self: center; margin-right: 10%;"
       ></img>

       <div class="presentation">
        <div class="platforms">
          <img
          src="@/assets/Youtube_logo.png"
          width="112px"
          height="77px"
          class="logo"
          style="margin-right: 60px;"
          ></img>

          <img
          src="@/assets/Revolut_logo.png"
          width="63px"
          height="83px"
          class="logo"
          style="margin-right: 25px;"
          ></img>

          <img
          src="@/assets/cash-app_logo.png"
          width="133px"
          height="100px"
          class="logo"
          ></img>

          <img
          src="@/assets/PayPal_logo.png"
          width="120px"
          height="116px"
          class="logo"
          ></img>

          <img
          src="@/assets/Venmo-Logo.png"
          width="100px"
          height="70px"
          class="logo"
          ></img>

        </div>

        <div class="title">
          All your donations are <br>
          now in one place!
        </div>

        <div class="description">
          Gather information about donations <br>
          coming from various sources and <br>
          enhance the process of reviewing the <br>
          activity of your fan community
        </div>

        <v-btn 
          size="x-large" 
          rounded="xl"
          class="donodash-orange-button"
        >
          GET STARTED
        </v-btn>

       </div>
    </v-main>

  </v-layout>
</template>

<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>

<style scoped>

  .content {
  display: flex;
  flex-direction: row;
  min-height: 614px;
  flex: 1;
  background-image: url("../assets/background.png");
  background-size: cover;
  overflow-x: auto;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
  }

  .platforms {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 150px;
    width: 600px;
    align-items: center;
    margin-bottom: 3%;
  }

  .logo {
    opacity: 0.5;
  }

  .title {
    margin-bottom: 3%;
    margin-left: 25%;
    width: fit-content;
    font-family: "Archivo Black", sans-serif;
    font-weight: 400;
    font-size: x-large;
    font-style: normal;
  }

  .description {
    margin: 0 auto;
    width: max-content;
    font-family: "Archivo", sans-serif;
    font-weight: 400;
    font-size: large;
    font-style: normal;
  }

  .donodash-orange-button {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      background-color: #FFA53A;
      color:white;
      width: 300px;
      margin: 20px auto 0 auto;
    }
</style>