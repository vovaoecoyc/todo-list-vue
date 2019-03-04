import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  state: {
    data: [],
    filter: {
      isFiltred: false,
      filterString: '',
      filterStatus: null,
    },
    loading: false,
  },
  actions,
  getters,
  mutations,
};
