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

        <div class="register-form">
            <img
                src="@/assets/D_Logo.png"
                width="60px"
                height="60px"
                style="margin-bottom: 10px; border-radius: 100px;"
            ></img>

            <v-card class="content">
                
                <div class="title">REGISTER</div>

                <v-row wrap>
                    <v-col cols="4">
                        <div class="input-type">First name:</div>

                        <v-text-field
                            v-model="firstName"
                            prepend-inner-icon="mdi-account-circle-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                        ></v-text-field>

                        <div class="input-type">Last name:</div>

                        <v-text-field
                            v-model="lastName"
                            prepend-inner-icon="mdi-account-circle-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                        ></v-text-field>

                        <div class="input-type">Username:</div>

                        <v-text-field
                            v-model="displayName"
                            prepend-inner-icon="mdi-card-account-details-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                        ></v-text-field>

                        <div class="input-type">Email address:</div>

                        <v-text-field
                            v-model="email"
                            prepend-inner-icon="mdi-email-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4" style="margin-left: 200px;">
                        <div class="input-type">Password:</div>

                        <v-text-field
                            v-model="password"
                            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                            :type="visible ? 'text' : 'password'"
                            prepend-inner-icon="mdi-lock-outline"
                            hint="Must be at least 8 characters long, with 1 alphabetical character, 1 digit and 1 special character: .,_!?:;"
                            variant="solo"
                            density="compact"
                            class="donodash-input"
                            rounded
                            @click:append-inner="visible = !visible"
                        ></v-text-field>

                        <div class="input-type">Confirm password:</div>

                        <v-text-field
                            v-model="confirmPassword"
                            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                            :type="visible ? 'text' : 'password'"
                            prepend-inner-icon="mdi-lock-outline"
                            variant="solo"
                            density="compact"
                            class="donodash-input"
                            rounded
                            @click:append-inner="visible = !visible"
                        ></v-text-field>

                        <div class="input-type">YouTube channel:</div>

                        <v-text-field
                            v-model="youtubeChannel"
                            prepend-inner-icon="mdi-video-account"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                        ></v-text-field>

                        <div class="input-type">Profile picture:</div>

                        <v-file-input
                            prepend-icon=""
                            prepend-inner-icon="mdi-camera-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                            @change="onFilePicked"
                        ></v-file-input>
                    </v-col>
                </v-row>

                <v-btn 
                    size="large" 
                    rounded="xl"
                    class="donodash-orange-button"
                    @click="register"
                >
                    REGISTER
                </v-btn>

            </v-card>

            <div style="display: flex; flex-direction: row;">
                <div class="some-text">Already have an account?</div>

                <router-link to="/login" style="text-decoration: none;">
                    <v-btn
                        variant="text"
                        class="login-button"
                    >
                        Login 
                    </v-btn>
                </router-link>

                <div class="some-text">now!</div>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data: () => ({
            visible: false,
            firstName: '',
            lastName: '',
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            youtubeChannel: '',
            profilePicture: null
        }),
        methods: {
            async register() {
                const formData = new FormData();
                formData.append('firstName', this.firstName);
                formData.append('lastName', this.lastName);
                formData.append('displayName', this.displayName);
                formData.append('email', this.email);
                formData.append('password', this.password);
                formData.append('youtubeChannel', this.youtubeChannel);
                if (this.profilePicture) {
                    formData.append('profilePicture', this.profilePicture);
                }
                formData.append('userType', "USER");

                try {
                    const response = await axios.post('http://localhost:8080/donodash/auth/register', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    this.$router.push('/login');
                    console.log('Registration successful');
                } catch (error) {
                    console.error('Registration failed:', error);
                }
            },
            onFilePicked(event) {
                const file = event.target.files[0];
                if (file) {
                    this.profilePicture = file;
                }
            }
        }
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

    .register-form {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 650px;
    }

    .content {
        width: 1000px;
        height: 650px;
        background-color: #25B7A1;
        border-radius: 60px;
        border: 6px solid white;
        margin-left: auto;
        margin-right: auto;
        padding: 5px;
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
        margin-left: 30px;
        margin-bottom: 5px;
        margin-top: 30px;
        width: 400px;
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-size: medium;
        font-style: normal;
        color: white;
    }

    .donodash-input {
        width: 400px;
        height: 30px;
        margin-bottom: 25px;
        margin-left: 20px;
    }

    .donodash-orange-button {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      background-color: #FFA53A;
      color:white;
      width: 200px;
      margin-top: 10px;
      margin-left: 388px;
    }

    .some-text {
        color: #25B7A1;
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: medium;
        margin-top: 6.5px;
    }

    .login-button {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: medium;
      color:#FFA53A;
      text-transform: unset !important;
      width: 57px;
    }

    :deep(.v-messages__message) {
        color: white;
    }
</style>