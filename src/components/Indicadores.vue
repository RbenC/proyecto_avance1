<template>
  <div class="container">
      
        <div class="d-flex justify-content-between align-items-center colorbarra"  >      
          USD  <span class="badge badge-info badge-pill">{{dolar | formato}} </span>
          UF   <span class="badge badge-info badge-pill">{{uf | formato}} </span>
          UTM  <span class="badge badge-info badge-pill">{{utm | formato}} </span>
          Euro <span class="badge badge-info badge-pill">{{euro | formato}} </span>
          IPC  <span class="badge badge-info badge-pill">{{ipc | formato}} </span>
        </div>


      
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
    background-color: #91ba7b;
    color:black;
}
</style>
