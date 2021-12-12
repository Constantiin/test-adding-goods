<template>
  
    <main class="main">
        
        <form-c />

        <content-c />

    </main>

</template>

<script>
import FormC from '@/components/FormC.vue';
import ContentC from '@/components/ContentC.vue';

export default {

    components: {
        FormC,
        ContentC
    },

}
</script>

<style scoped>

.main {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {

    .main {
        flex-direction: row;
    }

}


</style>