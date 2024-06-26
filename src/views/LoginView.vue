<template>
  <div class="containment">
    <router-link to="/" style="text-decoration: none">
      <v-btn
        icon="mdi-home-circle-outline"
        size="x-large"
        variant="elevated"
        color="#25B7A1"
        style="margin-top: 15px; margin-left: 15px"
      ></v-btn>
    </router-link>

    <div class="login-form">
      <img
        src="@/assets/D_Logo.png"
        width="60px"
        height="60px"
        style="margin-bottom: 10px; border-radius: 100px"
      />

      <v-card class="content">
        <div class="title">LOGIN</div>

        <div class="input-type">Email address:</div>

        <v-text-field
          prepend-inner-icon="mdi-email-outline"
          variant="solo"
          class="donodash-input"
          density="compact"
          rounded
          v-model="email"
        ></v-text-field>

        <div class="input-type">Password:</div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          variant="solo"
          density="compact"
          class="donodash-input"
          rounded
          v-model="password"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          size="large"
          rounded="xl"
          class="donodash-orange-button"
          @click="login"
        >
          LOGIN
        </v-btn>

        <v-overlay>
          <v-progress-circular
            v-if="loading"
            indeterminate
            color="white"
            size="64"
            style="margin-top: 20px"
          ></v-progress-circular>
        </v-overlay>

        <v-btn color="white" variant="text" class="link-button">
          Forgot your password?
        </v-btn>
      </v-card>

      <div style="display: flex; flex-direction: row">
        <div class="some-text">New user?</div>

        <router-link to="/register" style="text-decoration: none">
          <v-btn variant="text" class="register-button">Register</v-btn>
        </router-link>

        <div class="some-text">now!</div>
      </div>

      <v-dialog v-model="loginFailed" persistent max-width="290px">
        <v-card
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 35px;
          "
        >
          <v-card-title style="font-family: 'Archivo Black', 'sans-serif'">
            Login failed!
          </v-card-title>
          <v-card-text
            style="font-family: 'Archivo', 'sans-serif'; font-size: large"
          >
            {{ errorMessage }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="orange-button"
              rounded
              @click="
                errorMessage = '';
                loginFailed = false;
              "
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/stores/userStore';

  export default {
    data: () => ({
      email: '',
      password: '',
      visible: false,
      loading: false,
      loginFailed: false,
      errorMessage: '',
    }),
    setup() {
      const router = useRouter();
      const userStore = useUserStore();
      return { router, userStore };
    },
    methods: {
      async login() {
        this.loading = true;
        this.errorMessage = '';
        try {
          const response = await axios.post(
            'http://localhost:8080/donodash/auth/login',
            {
              email: this.email,
              password: this.password,
            },
            {
              withCredentials: true,
            }
          );

          this.userStore.setUser(response.data);
          this.userStore.saveState();

          setTimeout(() => {
            this.loading = false;
            this.router.push('/main/my-donations');
          }, 1000);
        } catch (error) {
          this.loading = false;
          this.loginFailed = true;
          this.errorMessage = 'Wrong email or password';
        }
      },
    },
  };
</script>

<style scoped>
  .containment {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/background.png');
    background-size: cover;
    overflow-x: auto;
    overflow-y: auto;
  }

  .login-form {
    margin-top: 30px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 700px;
  }

  .content {
    width: 450px;
    height: 500px;
    background-color: #25b7a1;
    border-radius: 60px;
    border: 6px solid white;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    padding-bottom: 8px;
  }

  .title {
    margin: 25px auto 0 auto;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-size: xx-large;
    font-style: normal;
    color: white;
    text-align: center;
  }

  .input-type {
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 30px;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-size: medium;
    font-style: normal;
    color: white;
  }

  .donodash-input {
    width: 410px;
    height: 30px;
    margin-bottom: 25px;
  }

  .donodash-orange-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #ffa53a;
    color: white;
    width: 200px;
    margin-top: 30px;
    margin-left: 104px;
  }

  .orange-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #ffa53a;
    color: white;
  }

  .link-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: medium;
    justify-content: center;
    margin-top: 70px;
    margin-left: 79px;
    text-transform: unset !important;
    width: 250px;
  }

  .register-button {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: medium;
    color: #ffa53a;
    text-transform: unset !important;
    width: 95px;
  }

  .some-text {
    color: #25b7a1;
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: medium;
    margin-top: 6px;
  }
</style>
