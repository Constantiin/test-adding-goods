<template>
  
  <transition-group name="cardsList">
    <li
        class="main__item card"
        v-for="card in sortedGoods"
        :key="card.id"
        @mouseenter="card.showCart = true"
        @mouseleave="card.showCart = false"
    >
        <button class="card__cart"
            v-if="card.showCart"
            @click.stop="removeCard(card.id)"
        ></button>
        <div class="card__image"
            :style="{backgroundImage: `url(${card.image})`}"
        ></div>
        <div class="card__content">
            <div class="card__title"><p>{{ card.title }}</p></div>
            <div class="card__description"><p>{{ card.description }}</p></div>
            <div class="card__price"><p>{{ card.price.toLocaleString() }} руб.</p></div>
        </div>
    </li>
  </transition-group>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions([
            'removeCard'
        ]),
    },

    computed: {
        ...mapGetters([
            'sortedGoods'
        ]),
    },

}
</script>

<style scoped>

.card {
    position: relative;
    max-width: 260px;
    min-height: 423px;
    background: #FFFEFB;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
}

.card__image {
    display: block;
    max-width: 332px;
    height: 200px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 4px 4px 0px 0px;
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

.cardsList-enter-active,
.cardsList-leave-active {
  transition: all 1s ease-in;
}
.cardsList-enter-from,
.cardsList-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.cardsList-move {
  transition: transform .9s ease-in-out;
}

@media (min-width: 768px) {

.card {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
}

}

@media (min-width: 920px) {

.card {
    min-width: 260px;
    box-shadow: none;
}

}

@media (min-width: 1024px) {

.card {
    min-width: 300px;
    font-size: 16px;
}

}

@media (min-width: 1440px) {

.card {
    min-width: 332px;
}

}

</style>