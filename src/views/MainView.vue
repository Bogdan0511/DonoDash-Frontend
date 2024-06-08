<template>
  <v-layout>
    <Sidebar></Sidebar>
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue';

  export default {
    components: {
      Sidebar,
    },
  };
</script>

<style scoped></style>
