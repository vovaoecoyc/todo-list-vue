<template>
  <div id="app">
    <Navigation/>
    <Spinner v-if="isLoading"/>
    <router-view/>
  </div>
</template>

<script>
import firebase from "./firebase";

import Navigation from "./components/Navigation";
import Spinner from "./components/UI/Spinner";

export default {
  name: "App",
  components: { Navigation, Spinner },
  computed: {
    isLoading() {
      return this.$store.getters.loading;
    }
  },
  beforeMount() {
    this.$store.commit("setLoading");
    firebase.auth().onAuthStateChanged(response => {
      if (response) {
        this.$store.commit("setLoginUser", { idUser: response.uid });
        this.$store.dispatch("fetchTasks");
      } else {
        this.$store.commit("unsetAndLogoutUser");
      }
      this.$store.commit("unsetLoading");
    });
  }
};
</script>

<style>
</style>
