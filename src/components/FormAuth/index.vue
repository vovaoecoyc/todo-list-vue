<template>
  <form @submit.prevent="submitForm" class="mt-3" v-if="!isLoading">
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        :class="{'is-invalid': $v.email.$error}"
        id="email"
        placeholder="Enter email"
        v-model="email"
        @blur="$v.email.$touch()"
      >
      <div class="invalid-feedback" v-if="!$v.email.required">This is field must be required</div>
      <div class="invalid-feedback" v-if="!$v.email.email">Incorrect e-mail address</div>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        :class="{'is-invalid': $v.password.$error}"
        id="password"
        placeholder="Enter password"
        v-model="password"
        @blur="$v.password.$touch()"
      >
      <div class="invalid-feedback" v-if="!$v.password.required">This is field must be required</div>
      <div
        class="invalid-feedback"
        v-if="!$v.password.minLength"
      >Password must be a {{ $v.password.$params.minLength.min }} symbols</div>
    </div>
    <div class="login-feedback-error invalid-feedback mb-2">{{ error }}</div>
    <div class="form-group d-flex justify-content-center">
      <button :disabled="$v.$invalid" class="btn btn-info">Login</button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormAuth",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    error() {
      return this.$store.state.auth.error;
    },
    isLoading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    submitForm() {
      const userData = {
        email: this.email,
        password: this.password
      };
      // this.$store.commit("changeLoadingStatus");
      this.$store.dispatch("loginUser", userData);
      this.password = "";
      this.$v.$reset();
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>

<style>
form {
  width: 30%;
  margin: auto;
}

.login-feedback-error {
  display: block;
}
</style>

