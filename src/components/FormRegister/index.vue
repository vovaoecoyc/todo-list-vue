<template>
  <form class="mt-3" @submit.prevent="submitForm" v-if="!isLoading">
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        :class="{'is-invalid': $v.email.$error}"
        id="email"
        placeholder="Enter email"
        v-model.lazy="email"
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
        v-model.lazy="password"
        @blur="$v.password.$touch()"
      >
      <div
        class="invalid-feedback"
        v-if="!$v.password.minLength"
      >Password must be a {{ $v.password.$params.minLength.min }} symbols</div>
      <div class="invalid-feedback" v-if="!$v.password.required">This is field must be required</div>
    </div>
    <div class="form-group">
      <label for="confirm-pass">Confirm password</label>
      <input
        type="password"
        class="form-control"
        :class="{'is-invalid': $v.confirmPassword.$error}"
        id="confirm-pass"
        placeholder="Confirm password"
        v-model.lazy="confirmPassword"
        @blur="$v.confirmPassword.$touch()"
      >
      <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Incorrect confirm password</div>
    </div>
    <div class="register-feedback-error mb-2 invalid-feedback" v-if="error">{{ error }}</div>
    <div class="form-group d-flex justify-content-center">
      <button :disabled="$v.$invalid" class="btn btn-info">Register</button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "FormRegister",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
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
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs("password")
    }
  },
  methods: {
    submitForm() {
      const userData = {
        email: this.email,
        password: this.password
      };
      // this.$store.commit("changeLoadingStatus");
      this.$store.dispatch("registerUser", userData);
      this.password = "";
      this.confirmPassword = "";
      this.$v.$reset();
      // $v.confirmPassword.sa = true;
    }
  }
};
</script>

<style>
form {
  width: 30%;
  margin: auto;
}

.register-feedback-error {
  display: block;
}
</style>


