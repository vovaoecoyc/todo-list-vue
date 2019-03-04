import helpers from '@/helpers';

export default {
  loadTasks(state, payload) {
    const data = helpers.objectToArray(payload);
    state.data = data;
  },

  setFilterString(state, payload) {
    state.filter = { ...state.filter, ...payload };
  },

  setFilterStatus(state, payload) {
    state.filter = { ...state.filter, ...payload };
  },

  removeFilterStatus(state, payload) {
    state.filter = { ...state.filter, ...payload };
  },
};
