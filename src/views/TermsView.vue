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

        <div class="terms-area">
            <img
                src="@/assets/D_Logo.png"
                width="60px"
                height="60px"
                style="margin-bottom: 10px; border-radius: 100px;"
            ></img>

            <v-card class="content">

                <div class="title">TERMS AND CONDITIONS</div>

                <v-row wrap style="margin-top: 10px;">
                    <v-col cols="1" style="width: 390px;">
                        <div class="some-text">
                            &nbsp;&nbsp;&nbsp;&nbsp;Introduction and definitions: Welcome to Donodash! These <br>
                            terms and conditions govern your use of our application. <br>
                            Throughout these terms, "we", "our" and "us" refer to Donodash, <br>
                            and "you", "your" refer to the user. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Acceptance of terms: By accessing or using Donodash, you <br>
                            agree to be bound by these terms and conditions. If you do not <br>
                            agree with any part of these terms, you may not access or use <br>
                            the application. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Description of services: Donodash is a web application <br>
                            designed to serve as a donations dashboard for content creators. <br>
                            It allows its users to centralize donations from various sources <br>
                            such as YouTube and Revolut by integrating with the APIs <br>
                            of these 3rd parties. Our app provides analytics in order to <br>
                            observe the activity within the fan communities of its users<br>
                            with ease. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Intellectual property rights: Donodash retains all rights to its <br>
                            intellectual property, including copyrights and trademarks. <br>
                            You may not reproduce, modify or distribute any content from <br>
                            the application without prior written consent. <br><br>
                        </div>
                    </v-col>
                    <v-col cols="1" style="width: 390px; margin-left: 340px;"> 
                        <div class="some-text">
                            &nbsp;&nbsp;&nbsp;&nbsp;User registration: To access the features of Donodash, you <br>
                            are required to create an account. You are responsible for <br>
                            mentaining the confidentiality of your account credentials <br>
                            and for all activities that occur under your account. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;User conduct: Users of Donodash must use the application <br>
                            in compliance with all applicable laws and regulations. <br>
                            Prohibited activities include but are not limited to unauthorized <br>
                            access, spamming, hacking or infringing on the rights of others. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Termination of services: We reserve the right to terminate <br>
                            or suspend your access to Donodash at any time for any reason <br>
                            without prior notice. Termination may result in the loss of <br>
                            access to account data or other information associated with <br>
                            your account. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Changes to terms and conditions: We may update or modify <br>
                            these terms and conditions at any time without prior notice. <br>
                            Changes will be effective immediately upon posting to the <br>
                            application. Continued use of Donodash constitutes acceptance <br>
                            of those changes. <br><br>
                        </div>
                    </v-col>
                </v-row>

            </v-card>
        </div>
    </div>
</template>

<script>

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

    .terms-area {
        margin-top: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 700px;
    }

    .content {
        width: 800px;
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

    .some-text {
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-size: x-small;
        font-style: normal;
        color: white;
        width: 390px;
    }
</style>