<template>
  <v-container fluid class="content">
    <v-row justify="center">
      <v-col cols="12" md="8" style="margin-top: 75px">
        <v-card class="report-card">
          <v-card-title class="headline">Write your report here:</v-card-title>
          <v-card-text>
            <v-textarea
              variant="solo-filled"
              bg-color="white"
              rows="10"
              rounded="xl"
              class="some-text"
              label="To the Donodash team..."
            ></v-textarea>
          </v-card-text>
        </v-card>
        <div class="submit-button-container">
          <v-btn
            class="donodash-orange-button"
            @click="submitReport"
            size="large"
            rounded="xl"
          >
            Submit
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped>
  .content {
    padding-top: 20px;
    background-image: url('../assets/background.png');
    background-size: cover;
    overflow-x: auto;
    height: 100vh;
    min-height: 100vh;
  }

  .report-card {
    padding: 20px;
    border-radius: 8px;
    background-color: #25b7a1;
    border-radius: 50px;
  }

  .v-card-title {
    font-family: 'Archivo Black', sans-serif;
    font-size: large;
    color: white;
    text-align: center;
  }

  .some-text {
    font-family: 'Archivo Black', sans-serif;
    font-size: medium;
    color: black;
  }

  .submit-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .donodash-orange-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #ffa53a;
    color: white;
    width: 200px;
    margin-top: 10px;
  }
</style>
