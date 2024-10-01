
<script setup>

import Presopuesto from './components/Presopuesto.vue';


</script>


<template>
  <div>
    <header>
      <h1>Planificador de Gastos</h1>
      <div class="contenedor contenedor-header sombra">

        <Presopuesto
  
        />

      </div>
    </header>

    
   
  </div>
</template>

<style>
  :root {
    --azul: #3282f6;
    --blanco: #fff;
    --gris-claro: : #F5F5F5
    --gris: #94a3b8;
    --gris-oscuro: #64748b
    --negro: #000;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;

  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    background-color: var(--gris-claro);
  }

  h1 {
    font-size: 4rem;
  }
  h2{
    font-size: 3rem;
  }
header{
  background-color: var(--azul);
}

header h1 {
  padding: 3rem 0;
  margin: 0;
  color: var(--blanco);
  text-align: center;
}

.contenedor {

  width: 90%;
  max-width: 80rem;
  margin: 0 auto;

}

.contenedor-header {

}

.sombra {

}



</style>