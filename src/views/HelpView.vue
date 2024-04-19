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

        <div class="help-area">
            <img
                src="@/assets/D_Logo.png"
                width="60px"
                height="60px"
                style="margin-bottom: 10px; border-radius: 100px;"
            ></img>

            <v-card class="content">

                <div class="title">HELP</div>

                <v-row wrap style="margin-top: 10px;">
                    
                    <v-col cols="1" style="width: 390px;">
                        
                        <div class="some-text">
                            &nbsp;&nbsp;&nbsp;&nbsp;Donodash is designed to work as a donations dashboard for <br>
                            content creators, centralizing different donations sources. <br>
                            The home page serves as a place to discover the application's <br>
                            goal, to access links to the about page, terms and conditions <br>
                            page, social platforms of Bogdan, the creator of the app, as well <br>
                            as to jump into logging in with your Donodash account or <br>
                            registering a new account.<br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;In the header, there are buttons linked to the login and <br>
                            register pages, while the footer provides buttons that forward <br>
                            the user to the useful pages and social accounts of Bogdan. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;A new user has to create an account by completing all <br>
                            the required fields on the register page. By providing the name <br>
                            of their YouTube account, the app will be able to fetch data <br>
                            about donations from their livestreams. After successfully <br>
                            creating the account, the user can now log in with the email <br>
                            and the password they have chosen. In case of forgetting the <br>
                            password, users can reset it via email. <br><br>
                        </div>

                    </v-col>
                    
                    <v-col cols="1" style="width: 390px; margin-left: 340px;">

                        <div class="some-text">
                            &nbsp;&nbsp;&nbsp;&nbsp;After successfully logging into their accounts, users are <br>
                            provided with a menu containing the following options: My <br>
                            donations, Analytics, Top contributors, Edit account, Report <br>
                            a problem and Logout. My donations will display the history of <br>
                            all donations received by the user, providing the possibility to <br>
                            sort and filter them. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Analytics has the purpose of providing information regarding <br>
                            the amounts of donations received throughout time (months, <br>
                            years), the top sources of donations and some other different <br>
                            milestones such as the biggest donation ever received. <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Top contributors has the role of displaying the fans that <br>
                            contributed the most with donations, specifying the total sum <br>
                            and the number of donations. On edit account, the user can <br>
                            update different aspects of their account such as the name, <br>
                            the username or the YouTube channel that they're linked to. <br>
                            Finally, users can suggest improvements for the application on <br>
                            the report a problem page and logout to keep their data private. <br><br>
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

    .help-area {
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