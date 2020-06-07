<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light colorbarra">
        <a class="navbar-brand" to="/"><h1>Ecer Gestión Clientes</h1></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link"  to='/'><font-awesome-icon icon="home" class="mr-2"/>Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/customers"><font-awesome-icon icon="users" class="mr-2"/>Clientes</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/seguimiento"><font-awesome-icon icon="images" class="mr-2"/>Seguimiento</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/reportes"><font-awesome-icon icon="print" class="mr-2"/>Reportes</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/reportes"><font-awesome-icon icon="sun" class="mr-2"/>Configuración</router-link>
                </li>
            </ul>
        </div>
    </nav>


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>