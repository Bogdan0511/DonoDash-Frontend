<template>
  <v-footer class="donodash-footer">
    <div class="socials">
      <div class="useful-links">
        <router-link to="/about" style="text-decoration: none">
          <v-btn color="white" variant="text" class="link-button">
            About us
          </v-btn>
        </router-link>

        <router-link to="/terms-and-conditions" style="text-decoration: none">
          <v-btn color="white" variant="text" class="link-button">
            Terms and conditions
          </v-btn>
        </router-link>

        <router-link to="/help" style="text-decoration: none">
          <v-btn color="white" variant="text" class="link-button">Help</v-btn>
        </router-link>
      </div>

      <v-btn
        v-for="social in socialLinks"
        :key="social.icon"
        :icon="social.icon"
        class="mx-4"
        size="small"
        variant="text"
        color="white"
        :href="social.link"
        target="_blank"
      ></v-btn>
    </div>

    <div class="copyright">
      Copyright © 2024 DonoDash. All rights reserved.
    </div>

    <img
      src="@/assets/D_Logo.png"
      width="30px"
      height="30px"
      style="margin-left: 100px; border-radius: 100px"
    />
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      socialLinks: [
        {
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/profile.php?id=100007165783895',
        },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/bogdan-vila-384695268/',
        },
        {
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/bogdan.vila/',
        },
      ],
    }),
  };
</script>

<style scoped>
  .donodash-footer {
    background-color: #25b7a1;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }

  .useful-links {
    display: flex;
    flex-direction: column;
  }

  .socials {
    background-color: #25b7a1;
    display: flex;
    width: 100%;
    align-items: end;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .link-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    justify-content: left;
  }

  .copyright {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
  }
</style>
