<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <h3 class="text-center">Formulario de edición de tareas</h3>

        <form class="mt-5">
          <div class="mb-3">
            <label for="tarea" class="form-label">Editar Tarea</label>
            <input class="form-control" type="text" id="tarea">
          </div>

          <div class="d-grid gap-2">
            <button class="btn btn-success" type="submit">Editar</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Editar',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['getTarea'])
  },
  created() {
    this.getTarea(this.id)
  },
  computed: {

  }

}
</script>

<style>

</style>