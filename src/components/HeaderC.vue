<template>
    <header class="header">
        <h1 class="header__title"
            :class="{
                'header__title_add-card': headerTitle === 'Товар добавлен',
                'header__title_remove-card': headerTitle === 'Товар удалён',
            }"
        >
            {{ headerTitle }}
        </h1>

        <select class="header__sort-select"
            @change="changeSortParam"
        >
            <option value="all" selected>По умолчанию</option>
            <option value="min">По цене min</option>
            <option value="max">По цене max</option>
            <option value="title">По названию</option>
        </select>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState([
            'headerTitle'
        ]),
    },

    methods: {
        ...mapActions([
            'changeSortParam'
        ]),
    },
}
</script>

<style scoped>

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto 20px;
}

.header__title {
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 5px;
    transition: transform .8s ease-out, color .8s ease-out;
}

.header__title.header__title_add-card {
  color: #57A639;
}

.header__title.header__title_remove-card {
  color: #ff8484;
}

.header__sort-select {
    width: 141px;
    height: 36px;
    border: 0;
    background-color: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    color: #B4B4B4;
}

.header__sort-select:focus {
    outline: 1px solid #57A639;
}

@media (min-width: 768px) {

.header {
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 32px 16px;
}

.header__title {
    margin-bottom: 0;
}

}

@media (min-width: 1024px) {

.header__title.header__title_add-card {
  transform: translateX(1em);
}

.header__title.header__title_remove-card {
  transform: translateX(1em);
}

}

@media (min-width: 1440px) {

.header {
    margin-left: 0;
    margin-right: 0;
}

}

</style>