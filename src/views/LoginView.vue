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

        <div class="login-form">

            <img
                src="@/assets/D_Logo.png"
                width="60px"
                height="60px"
                style="margin-bottom: 10px; border-radius: 100px;"
            ></img>

            <v-card class="content">
                <div class="title">LOGIN</div>

                <div class="input-type">Email address:</div>

                <v-text-field
                    prepend-inner-icon="mdi-email-outline"
                    variant="solo" 
                    class="donodash-input"
                    density="compact"
                    rounded
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
                    @click:append-inner="visible = !visible"
                ></v-text-field>

                <v-btn 
                    size="large" 
                    rounded="xl"
                    class="donodash-orange-button"
                >
                    LOGIN
                </v-btn>

                <v-btn
                    color="white"
                    variant="text"
                    class="link-button"
                >
                    Forgot your password?
                </v-btn>
            </v-card>

            <div style="display: flex; flex-direction: row;">
                <div class="some-text">New user?</div>
                
                <router-link to="/register" style="text-decoration: none;">
                    <v-btn
                    variant="text"
                    class="register-button"
                    >
                        Register 
                    </v-btn>
                </router-link>

                <div class="some-text">now!</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            visible: false
        })
    }
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

    .input-type {
        margin-left: 10px;
        margin-bottom: 5px;
        margin-top: 30px;
        font-family: "Archivo Black", sans-serif;
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
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      background-color: #FFA53A;
      color:white;
      width: 200px;
      margin-top: 30px;
      margin-left: 104px;
    }

    .link-button {
      font-family: "Archivo Black", sans-serif;
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
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: medium;
      color:#FFA53A;
      text-transform: unset !important;
      width: 95px;
    }

    .some-text {
        color: #25B7A1;
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: medium;
        margin-top: 6px;
    }
</style>