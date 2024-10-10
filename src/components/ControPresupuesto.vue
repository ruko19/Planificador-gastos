<script setup>
import imagen from '../assets/img/grafico.jpg'
import { formatearCantidades } from '../helpers';

const emit = defineEmits(['resetear-app'])
const props = defineProps({
    presupuesto: {
        type: Number,
        required: true
    },
    disponible: {
        type: Number,
        required: true
    },
    
})

</script>

<template>
    <div class="dos-columnas">
        <div class="contenedor-grafico">
            <img 
                :src="imagen"
            />

        </div>

        <div class="contenedor-presupuesto">

            <button @click="$emit('resetear-app')" class="reset-app">
                Resetear App
            </button>

            <p>
                <span>Presupuesto: </span>
                {{ formatearCantidades(presupuesto) }}
            </p>
            <p>
                <span>Disponible: </span>
                {{ formatearCantidades(disponible) }}
            </p>
            <p>
                <span>Gastado: </span>
                $0
            </p>

        </div>

    </div>
</template>
<style scoped>

    .dos-columnas{
        display: flex;
        flex-direction: column;        
    }

    .dos-columnas > :first-child {
        margin-bottom: 3rem;
    }

    @media (min-width: 768px) {
        .dos-columnas {
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }
        
        .dos-columnas > :first-child {
        margin-bottom: 0;
    }
    }

.reset-app{
    background-color: #db2777;
    border: none;
    padding: 1rem;
    cursor: pointer;
    width: 100%;
    color: var(--blanco);
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 1rem;
    transition-property: background-color;
    transition-duration: 300ms;
}

.reset-app:hover{
    background-color: #a11c58
}

.contenedor-presupuesto {

    width: 100%;

}

.contenedor-presupuesto p {
    font-size: 2.4rem;
    text-align: center;
    color: var(--gris-oscuro);
}

@media (min-width: 768px) {
    .contenedor-presupuesto p {
        text-align: left;
    }
}

.contenedor-presupuesto span {

    font-weight: 900;
    color: var(--azul);

}

</style>