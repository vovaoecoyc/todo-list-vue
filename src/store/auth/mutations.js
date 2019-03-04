import firebase from '@/firebase';
import router from '@/router';

export default {
  setLoginUser(state, payload) {
    if (payload.idUser) {
      // state.loading && (state.loading = false);
      // state = { ...state, isAuthorized: true, idUser: payload.idUser, error: null };
      state.isAuthorized = true;
      state.idUser = payload.idUser;
      state.error = null;
      router.push('/tasks');
    }
  },

  unsetAndLogoutUser(state) {
    firebase.auth().signOut();
    // state = { ...state, isAuthorized: false, idUser: null, error: null };
    state.isAuthorized = false;
    state.idUser = null;
    state.error = null;
    router.push('/login');
  },

  setError(state, payload) {
    // state = { ...state, ...payload };
    state.error = payload.error;
  },

  clearErrorRegister(state) {
    state.erro = null;
  },

  setLoading(state) {
    state.loading = true;
  },

  unsetLoading(state) {
    state.loading = false;
  },
};
