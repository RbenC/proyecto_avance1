<template>
  <div class="container">
    <div class="mt-5" >
        <button type = "button" data-toggle="modal" data-target="#customerModal" class="btn btn-info "><font-awesome-icon icon="plus" class="mr-2"/>Agregar Cliente</button>
    </div>
 
<listCustomers></listCustomers>

<!-- Modal -->
<div class="modal fade" id="customerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Agregar Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
</div>



  </div>





</template>

<script>
import ListCustomers from '@/views/ListCustomers.vue'
export default {
  name: 'Customers',
  components: {
    ListCustomers
  }

}
</script>