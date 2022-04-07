<template>
  <div class="container">
    <h1 class="text-center mb-2">Listado de Tareas</h1>

    <div class="row">
      <div class="col-6 offset-3 mb-5">
        <div class="text-center">
          <router-link to="/agregar">
            <button type="button" class="btn btn-sm btn-outline-success"> Agregar Tarea</button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 offset-3">
        <ul class="list-group">
          <li class="list-group-item" v-for="tarea in tareas" :key="tarea.id">
            <!-- {{ tarea.nombre }} - {{ tarea.id }} -->
            {{ tarea.nombre }}
            <button class="float-end btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>

            <router-link class="float-end" :to="{ name: 'editar', params: {id: tarea.id}}">
              <button class="btn btn-success btn-sm mx-1"><i class="fas fa-pencil-alt"></i></button>
            </router-link>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(['getTareas'])
  },
  computed: {
    ...mapState(['tareas'])
  },
  created() {
    this.getTareas();
  }
}
</script>

<style>

</style>