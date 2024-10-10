<script setup>
import iconoCerrarModal from '../assets/img/cerrar.svg'



const emit = defineEmits(['ocultar-modal'])

</script>



<template>
    <div class="modal">
       <div class="cerrar-modal"> 
        <img 
            :src="iconoCerrarModal" 
            alt=""
            @click="$emit('ocultar-modal')"
        >

       </div>
    </div>
</template>

<style scoped>

.modal {
    position: absolute;
    background-color: rgb(0 0 0 / 0.8);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

}

.cerrar-modal{
    position: absolute;
    top: 3rem;
    right: 3rem;

}


.cerrar-modal img{
    width: 3rem;
    cursor: pointer;

}

</style>