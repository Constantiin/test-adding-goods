<template>
  
    <div class="main__content">

        <list-c />

    </div>

</template>

<script>
import ListC from '@/components/ListC.vue';

export default {

    components: {
        ListC
    },

}
</script>

<style scoped>

.main__content {
    max-width: 300px;
    margin: 0 auto;
}

@media (min-width: 375px) {

.main__content {
    max-width: 332px;
}

}

@media (min-width: 920px) {

.main__content {
    max-width: 100%;
}

}

</style>