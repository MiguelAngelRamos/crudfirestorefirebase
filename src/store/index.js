import { createStore } from 'vuex';
import { db } from '../firebase';

export default createStore({
  state: {
    tareas: [],
    tarea: {}
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload;
    }
  },
  actions: {
    // para obtener la colección de tareas que existe en la base datos firebase
    getTareas({commit}) {
      db.collection('tareas').get().then( response => {
        const tareasTemp = [];
        response.forEach( document => {
          //console.log(document.id);
          // console.log(document.data());
          // vamos a construir un objeto
          const objectTarea = document.data()
          // console.log(objectTarea);
          // agregamos una nueva propiedad al objeto
          objectTarea.id = document.id;
          // console.log(objectTarea);
          tareasTemp.push(objectTarea)
        });
        commit('setTareas', tareasTemp);
      });
    }
  },
  getters: {
  },
  modules: {
  }
})
