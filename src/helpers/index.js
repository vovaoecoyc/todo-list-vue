export default {
  objectToArray(data) {
    let result = [],
      number = 0;
    for (const i in data) {
      const item = {
        id: i,
        itemNumber: ++number,
        completed: data[i].completed,
        task: data[i].task,
      };
      result.push(item);
    }
    return result;
  },

  taskObjectToFormatDB(data) {
    const result = {};
    for (const i in data) {
      if (i === 'task' || i === 'completed') {
        result[i] = data[i];
      }
    }
    return result;
  },
};
