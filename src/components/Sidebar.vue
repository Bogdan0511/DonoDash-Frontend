<template>
  <v-navigation-drawer
      permanent
      color="#25B7A1"
  >   

      <img
        src="@/assets/D_Logo.png"
        width="30px"
        height="30px"
        style="border-radius: 100px; margin-top: 5px; margin-left: 5px;"
      ></img>

      <div class="user-area">
          <div class="profile-photo" :style="{ 'background-image': 'url(' + profileImageUrl + ')' }"></div>
          <div class="names">{{ userStore.firstName }} {{ userStore.lastName }}</div>
          <div class="username">{{ userStore.displayName }}</div>
      </div>

      <v-list nav>
        <router-link to="/main/my-donations" style="text-decoration: none; color: inherit;">
          <v-list-item rounded="xl" class="options" :class="{ 'list-item': $route.name === 'my-donations' }" prepend-icon="mdi-hand-coin" title="My donations" value="my_donations"></v-list-item>
        </router-link>
        <router-link to="/main/analytics" style="text-decoration: none; color: inherit;">
          <v-list-item rounded="xl" class="options" :class="{ 'list-item': $route.name === 'analytics' }" prepend-icon="mdi-finance" title="Analytics" value="analytics"></v-list-item>
        </router-link>
        <router-link to="/main/top-contributors" style="text-decoration: none; color: inherit;">
          <v-list-item rounded="xl" class="options" :class="{ 'list-item': $route.name === 'top-contributors' }" prepend-icon="mdi-account-group" title="Top contributors" value="top_contributors"></v-list-item>
        </router-link>
        <router-link to="/main/edit-account" style="text-decoration: none; color: inherit;">
          <v-list-item rounded="xl" class="options" :class="{ 'list-item': $route.name === 'edit-account' }" prepend-icon="mdi-account-edit" title="Edit account" value="edit_account"></v-list-item>
        </router-link>
        <router-link to="/main/report-a-problem" style="text-decoration: none; color: inherit;">
          <v-list-item rounded="xl" class="options" :class="{ 'list-item': $route.name === 'report-a-problem' }" prepend-icon="mdi-alert" title="Report a problem" value="report_problem"></v-list-item>
        </router-link>
          <v-list-item rounded="xl" class="options" prepend-icon="mdi-logout" title="Logout" value="logout" style="margin-top: 215px;" @click="logout"></v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '@/stores/userStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Sidebar',
  setup() {
      const userStore = useUserStore();
      const router = useRouter();
      const profileImageUrl = computed(() => {
          return userStore.profilePicture ? `http://localhost:8080${userStore.profilePicture}` : '';
      });

      function logout() {
          axios.post('http://localhost:8080/donodash/auth/logout', {}, { withCredentials: true })
              .then(() => {
                  userStore.clearUser();
                  router.push('/login');
              })
              .catch(error => {
                  console.error('Logout failed:', error);
              });
      }

      return { userStore, profileImageUrl, logout };
  }
}
</script>

<style scoped>
  .user-area {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .profile-photo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
  }

  .names {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-size: large;
      font-style: normal;
      color: white;
      text-align: center;
  }

  .username {
      font-family: "Archivo", sans-serif;
      font-size: small;
      font-style: normal;
      color: white;
      text-align: center;
      margin-bottom: 60px;
  }

  .list-item {
      background-color: #FFA53A;
  }

  .options {
      font-family: "Archivo Black", sans-serif;
      font-weight: 400;
      font-size: medium;
      font-style: normal;
      color: white;
  }
</style>
