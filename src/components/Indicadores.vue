<template>
  <div class="container">
      
        <div class="d-flex justify-content-between align-items-center colorbarra">
        <button class="btn btn-link" data-toggle="modal" data-target="#dolarModal">
           <span class="badge badge-info badge-pill ">U$D {{dolar | formato}} </span>
            </button> 

           <span class="badge badge-info badge-pill">UF   {{uf | formato}} </span>
           <span class="badge badge-info badge-pill">UTM  {{utm | formato}} </span>
           <span class="badge badge-info badge-pill">Euro {{euro | formato}} </span>
           <span class="badge badge-info badge-pill">IPC  {{ipc | formato}} </span>
        </div>



        <!-- dolar Modal -->
        <div class="modal fade" id="dolarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Valor Dólar en Chile</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div class="modal-body">
                    ...

                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div> <!-- dolar Modal -->



      
  </div>







</template>

<script>
import axios from 'axios';

export default {
    name: 'IndicadoresValores',
    data() {
        return {
            dolar: 0,
            uf:0,
            utm:0,
            euro:0,
            ipc:0
        }
    },
    methods: {
       async indicadorEconomico(){
            try {
                const respuesta = await axios.get('https://mindicador.cl/api');
                //console.log(respuesta.data);
                //console.log(respuesta.data);
                this.dolar = respuesta.data.dolar.valor;
                this.uf = respuesta.data.uf.valor;
                this.utm = respuesta.data.utm.valor;
                this.euro = respuesta.data.euro.valor;
                this.ipc = respuesta.data.ipc.valor;
                //console.log(this.indicadores);
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.indicadorEconomico();
    }
}
</script>

<style>
.colorbarra {
    background-color: #b2e2e8;
    color:black;
}
</style>
