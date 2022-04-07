import { createStore } from 'vuex';
import { db } from '../firebase';
import router from '../router'
export default createStore({
  state: {
    tareas: [],
    tarea: {}
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
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
    },
    agregarTarea({commit}, nombreTarea){
      console.log(nombreTarea);
      db.collection('tareas').add({
        nombre: nombreTarea
      })
      .then( document => {
        console.log(document.id);
        router.push('/'); // hacemos una redirección al home
      })
    },
    editarTarea({commit}, tarea) {
      console.log(tarea);
    },
    getTarea({commit}, idTarea) {
      // vamos a obtener la tarea por id
      db.collection('tareas').doc(idTarea).get().then(document => {
        console.log(document.id);
        const tareaObtenida = document.data(); // la tarea es documento que es un objeto
        tareaObtenida.id = document.id;
        console.log(tareaObtenida);
        commit('setTarea', tareaObtenida)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
