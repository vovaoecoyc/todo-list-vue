import firebase from '@/firebase';

export default {
  registerUser(context, payload) {
    context.commit('setLoading');
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        context.dispatch('loginUser', { ...payload });
        context.commit('clearErrorRegister');
      })
      .catch((error) => {
        context.commit('setError', { error: error.message });
        context.commit('unsetLoading');
        // console.log('error registerUser', error);
      });
  },

  loginUser(context, payload) {
    !context.getters.loading && context.commit('setLoading');
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      // .signInWithEmailAndPassword('firstuser@gmail.com', '123123')
      .then((response) => {
        context.commit('setLoginUser', { idUser: response.user.uid });
        context.commit('unsetLoading');
      })
      .catch((error) => {
        context.commit('setError', { error: error.message });
        context.commit('unsetLoading');
        console.log('error loginUser', error);
      });
  },
};
