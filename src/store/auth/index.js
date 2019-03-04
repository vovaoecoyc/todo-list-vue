import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: {
    isAuthorized: false,
    idUser: null,
    error: null,
    loading: false
  },
  actions,
  mutations,
  getters,
};
