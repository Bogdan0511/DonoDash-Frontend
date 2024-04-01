<template>
    <v-toolbar
        extension-height="50"
        extended
        color="#25B7A1"
      >
  
        <img
          src="@/assets/D_Logo.png"
          width="50px"
          height="50px"
          style="margin-left: 50px; border-radius: 100px;"
        ></img>
  
        <img
          src="@/assets/DonoDash.png"
          width="300px"
          height="75px"
        ></img>
  
        <v-spacer></v-spacer>
  
        <v-btn 
          size="large" 
          rounded="xl" 
          class="donodash-white-button"
        >
          Login
        </v-btn>
  
        <v-btn 
          size="large" 
          rounded="xl"
          class="donodash-orange-button"
        >
          Register
        </v-btn>
  
      </v-toolbar>
</template>
  
<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
      .donodash-white-button {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      background-color: white;
      color:black;
      width: 200px;
      margin-right: 30px;
    }
  
    .donodash-orange-button {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      background-color: #FFA53A;
      color:white;
      width: 200px;
    }
</style>