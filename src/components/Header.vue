<template>
  <v-app-bar color="#25B7A1" scroll-behavior="elevate">
    <img
      src="@/assets/D_Logo.png"
      width="50px"
      height="50px"
      style="margin-left: 50px; border-radius: 100px"
    />

    <img src="@/assets/DonoDash.png" width="300px" height="75px" />

    <v-spacer></v-spacer>

    <router-link to="/login" class="link">
      <v-btn size="large" rounded="xl" class="donodash-white-button">
        Login
      </v-btn>
    </router-link>

    <router-link to="/register" class="link">
      <v-btn size="large" rounded="xl" class="donodash-orange-button">
        Register
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style scoped>
  .donodash-white-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: white;
    color: black;
    width: 200px;
    margin-right: 30px;
  }

  .donodash-orange-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #ffa53a;
    color: white;
    width: 200px;
  }

  .link {
    text-decoration: none;
  }
</style>
