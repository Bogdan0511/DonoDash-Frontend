<template>
    <v-container fluid class="content">
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="pa-3" outlined>
                    <div class="title">Change your first name:</div>
                    <v-text-field
                            prepend-inner-icon="mdi-account-circle-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                            v-model="firstName"
                    ></v-text-field>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="pa-4" outlined>
                    <div class="title">Change your last name:</div>
                    <v-text-field
                            prepend-inner-icon="mdi-account-circle-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                            v-model="lastName"
                    ></v-text-field>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="pa-4" outlined>
                    <div class="title">Change your username:</div>
                    <v-text-field
                            prepend-inner-icon="mdi-card-account-details-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                            v-model="displayName"
                    ></v-text-field>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="pa-3" outlined>
                    <div class="title">Change your YouTube channel:</div>
                    <v-text-field
                            prepend-inner-icon="mdi-video-account"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                            v-model="youtubeChannel"
                    ></v-text-field>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="pa-3" outlined>
                    <div class="title">Change your email:</div>
                    <v-text-field
                            prepend-inner-icon="mdi-email-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                            v-model="email"
                    ></v-text-field>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="pa-4" outlined>
                    <div class="title">Change your profile picture:</div>
                    <v-file-input
                            prepend-icon=""
                            prepend-inner-icon="mdi-camera-outline"
                            variant="solo" 
                            class="donodash-input"
                            density="compact"
                            rounded
                            @change="onFilePicked"
                        ></v-file-input>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="6" class="d-flex justify-center">
                <v-btn 
                    size="large" 
                    rounded="xl"
                    class="donodash-orange-button"
                    @click="updateUser"
                >
                    Save changes
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        data: () => ({
            firstName: '',
            lastName: '',
            displayName: '',
            email: '',
            youtubeChannel: '',
            profilePicture: null
        }),
        methods: {
            async updateUser() {
                const formData = new FormData();
                formData.append('firstName', this.firstName);
                formData.append('lastName', this.lastName);
                formData.append('displayName', this.displayName);
                formData.append('email', this.email);
                formData.append('youtubeChannel', this.youtubeChannel);
                if (this.profilePicture) {
                    formData.append('profilePicture', this.profilePicture);
                }

                try {
                    const userId = localStorage.getItem("id");
                    const response = await axios.put(`http://localhost:8080/donodash/user/update/${userId}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        withCredentials: true
                    });
                    const { firstName, lastName, displayName, youtubeChannel, profilePicture, email, userType, id } = response.data;
                        localStorage.setItem('firstName', firstName);
                        localStorage.setItem('lastName', lastName);
                        localStorage.setItem('displayName', displayName);
                        localStorage.setItem('youtubeChannel', youtubeChannel);
                        localStorage.setItem('profilePicture', profilePicture);
                        localStorage.setItem('email', email);
                        localStorage.setItem('userType', userType);
                        localStorage.setItem('id', id);
                    console.log('Update successful');
                } catch (error) {
                    console.error('Update failed:', error);
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
    .content {
        padding-top: 20px;
        background-image: url("../assets/background.png");
        background-size: cover;
        overflow-x: auto;
        height: 100vh;
        min-height: 100vh;
    }

    .title {
        font-size: 1.2rem;
        margin-bottom: 30px;
        text-align: center;
    }

    .pa-3 {
        padding: 16px !important;
        height: 190px;
        align-items: center;
        justify-content: center;
        align-content: center;
        background-color: #25B7A1;
        color: white;
        font-family: 'Archivo Black', sans-serif;
        border-radius: 50px;
    }

    .pa-4 {
        padding: 16px !important;
        height: 190px;
        align-items: center;
        justify-content: center;
        align-content: center;
        background-color: #FFA53A;
        color: white;
        font-family: 'Archivo Black', sans-serif;
        border-radius: 50px;
    }

    .v-text-field.solo input {
        padding: 10px;
        font-size: 1.1rem;
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