<template>
  
    <ul class="main__list">

        <card-c v-if="$store.state.goods.length" />

        <h2 v-else>Список пуст</h2>

    </ul>

</template>

<script>
import CardC from '@/components/CardC.vue';

export default {

    components: {
        CardC
    },

}
</script>

<style scoped>

.main__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

@media (min-width: 768px) {
    
    .main__list {
        gap: 25px;
    }    

}

@media (min-width: 920px) {

    .main__list {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px;
    }

}

@media (min-width: 1024px) {

    .main__list {
        gap: 35px;
        margin: 0 0 0 16px;
    }

}

@media (min-width: 1440px) {

    .main__list {
        justify-content: center;
        gap: 16px;
    }

}

</style>