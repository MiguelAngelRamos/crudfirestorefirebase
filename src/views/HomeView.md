HomeView
======== 
- Se renderizan todas las tareas
- Las tareas son un objetos que contienen las siguiens propiedades:
{
  uid: 'fjfkejf383747',
  nombre: 'tarea cualquiera'
}

Dentro de HomeView tenemos varios eventos
- Agregar una Tarea
- Editar una Tarea (ruta la cual la estamos llamando por el "nombre"
y le pasamos por parametro el id).

De manera de que cuando presiono el editar tarea me hace una redireccion
hacia el componente "EditarView.vue" (recibe el parametro id)
- Borrar Tarea


En vuex

tenemos un getTarea(idTarea) va servir para traer una tarea por id de la base de datos

Trae el objeto que corresponde a esa id

entonces la propiedad tarea (objeto) ya no esta vacio contiene la tarea por id

computed mapea el state. (tarea)