<template>
  <div class="app-tab-nav">
    <v-bottom-navigation app height="100">
      <v-card-text align="center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" icon color="deep-purple accent-4">
          <v-icon color="#9E2D8C" aria-hidden>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "AppTabBar",
  data() {
    return {
      icons: ["mdi-folder", "mdi-chat-processing", "mdi-book"],
    };
  },
};
</script>

<style scoped></style>
