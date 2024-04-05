<template>
    <v-footer class="donodash-footer">
      <div class="socials">
        <div class="useful-links">
            <v-btn
             color="white"
             variant="text"
             class="link-button"
            >
            About us
            </v-btn>
            <v-btn
             color="white"
             variant="text"
             class="link-button"
            >
            Terms and conditions
            </v-btn>
            <v-btn
             color="white"
             variant="text"
             class="link-button"
            >
            Help
            </v-btn>
        </div>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          size="small"
          variant="text"
          color="white"
        ></v-btn>
      </div>

      <div class="copyright">
        Copyright © 2024 DonoDash. All rights reserved.
      </div>

      <img
          src="@/assets/D_Logo.png"
          width="30px"
          height="30px"
          style="margin-left: 100px; border-radius: 100px;"
      ></img>
    </v-footer>
</template>

<script>
  export default {

    name: 'Footer',

    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
    .donodash-footer {
        background-color: #25B7A1;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 100%;
    }

    .useful-links {
        display:flex;
        flex-direction: column;
    }

    .socials {
        background-color: #25B7A1;
        display: flex;
        width: 100%;
        align-items: end;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .link-button {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      justify-content: left;
    }

    .copyright {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      color: white;
    }
</style>