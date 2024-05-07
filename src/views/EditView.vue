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
                    ></v-text-field>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="6" class="d-flex justify-center">
                <v-btn 
                    size="large" 
                    rounded="xl"
                    class="donodash-orange-button"
                >
                    Save changes
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

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
        height: 300px;
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
        height: 300px;
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