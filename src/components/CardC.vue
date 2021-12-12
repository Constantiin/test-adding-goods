<template>
  
    <li
        class="main__item card"
        v-for="card in goods"
        :key="card.id"
        @mouseenter="card.showCart = true"
        @mouseleave="card.showCart = false"
    >
        <button class="card__cart" v-if="card.showCart"></button>
        <img class="card__image" :src="card.image" :alt="card.title">
        <div class="card__content">
            <div class="card__title"><p>{{ card.title }}</p></div>
            <div class="card__description"><p>{{ card.description }}</p></div>
            <div class="card__price"><p>{{ card.price }} руб.</p></div>
        </div>
    </li>

</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            goods: 'goods',
        }),
    },

}
</script>

<style scoped>

.card {
    position: relative;
    min-height: 423px;
    background: #FFFEFB;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 4px;
    cursor: pointer;
}

.card__image {
    margin-bottom: 16px;
}

.card__content {
    position: relative;
    min-height: 223px;
    padding: 0 16px;
    margin-bottom: 15px;
}

.card__title {
    font-size: 20px;
    line-height: 25px;
    font-weight: 600;
    margin-bottom: 16px;
}

.card__description {
    line-height: 20px;
    margin-bottom: 32px;
}

.card__price {
    position: absolute;
    bottom: 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
}

.card__cart {
    position: absolute;
    top: -10px;
    right: -12px;
    display: block;
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: transparent;
    background-image: url('../assets/img/cart.png');
    background-repeat: no-repeat;
    background-position: center;
    z-index: 5;
}

/* .visible-cart {
    display: block;
} */

@media (min-width: 768px) {

.card {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
}

}

@media (min-width: 920px) {

.card {
    max-width: 260px;
    box-shadow: none;
}

}

@media (min-width: 1024px) {

.card {
    max-width: 300px;
}

}

@media (min-width: 1440px) {

.card {
    min-width: 332px;
}

}

</style>