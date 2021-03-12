<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main> 

    <AppTabBar/>
  </v-app>
</template>

<script>
import AppTabBar from './components/shared/AppTabBar'

export default {
  components: {
    AppTabBar,
  }
}
</script>

<style>

</style>
