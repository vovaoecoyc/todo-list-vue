<template>
  <div class="navigation d-flex justify-content-center">
    <ul class="nav" v-if="authorized">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" :to="{name: 'Tasks'}">Tasks</router-link>
      </li>
      <li class="nav-item">
        <!-- <router-link class="nav-link" active-class="active" :to="{name : 'FormAuth'}">Logout</router-link> -->
        <a class="nav-link" @click="clickLogout" href="javascript:void(0)">Logout</a>
      </li>
    </ul>
    <ul class="nav" v-else>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" :to="{name: 'FormAuth'}">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" :to="{name: 'FormRegister'}">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    authorized() {
      return this.$store.state.auth.isAuthorized;
    }
  },
  methods: {
    clickLogout() {
      this.$store.commit("unsetAndLogoutUser");
    }
  }
};
</script>

<style>
.navigation {
  width: 100%;
}

.nav-link {
  color: gray;
}

.nav-link.active {
  color: #007bff;
}
</style>

