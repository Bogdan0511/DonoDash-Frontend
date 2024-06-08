import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    youtubeChannel: '',
    profilePicture: '',
    userType: '',
  }),
  actions: {
    setUser(data) {
      this.id = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.displayName = data.displayName;
      this.email = data.email;
      this.youtubeChannel = data.youtubeChannel;
      this.profilePicture = data.profilePicture;
      this.userType = data.userType;
      this.saveState();
    },
    clearUser() {
      this.$reset();
      localStorage.removeItem('userState');
    },
    saveState() {
      localStorage.setItem('userState', JSON.stringify(this.$state));
    },
    restoreState() {
      let state = localStorage.getItem('userState');
      if (state) {
        this.$state = JSON.parse(state);
      }
    },
  },
});
