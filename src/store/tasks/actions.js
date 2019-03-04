import firebase from '@/firebase';
import helpers from '@/helpers';

export default {
  fetchTasks(context) {
    const idUser = context.getters.idUser;
    firebase
      .database()
      .ref(`/Tasks/${idUser}/tasks`)
      .on('value', (snapshot) => {
        context.commit('loadTasks', snapshot.val());
        // console.log(snapshot.val());
      });
  },

  addTask(context, payload) {
    const idUser = context.getters.idUser;
    firebase
      .database()
      .ref(`/Tasks/${idUser}/tasks`)
      .push({ task: payload, completed: false });
  },

  setStatusTask(context, payload) {
    const idUser = context.getters.idUser,
      idTask = payload.id,
      updatedTask = helpers.taskObjectToFormatDB(payload);
    firebase
      .database()
      .ref(`/Tasks/${idUser}/tasks/${idTask}`)
      .update({ ...updatedTask });
  },

  removeTask(context, payload) {
    const idUser = context.getters.idUser,
      idTask = payload.idTask;
    firebase
      .database()
      .ref(`/Tasks/${idUser}/tasks/${idTask}`)
      .remove();
  },
};
