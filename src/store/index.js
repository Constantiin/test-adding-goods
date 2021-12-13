import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [
      {
        "id": 6462,
        "image": require("../assets/img/card.png"),
        "title": "Наименование товара",
        "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интере",
        "price": 10000,
        "showCart": false
      },
      {
        "id": 234234,
        "image": require("../assets/img/card.png"),
        "title": "Следующий товар",
        "description": "Довольно-таки интересное описание товара в несколько строк.",
        "price": 4000,
        "showCart": false
      },
      {
        "id": 64345462,
        "image": require("../assets/img/card.png"),
        "title": "Ещё один товар",
        "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        "price": 537,
        "showCart": false
      }
    ],

    headerTitle: 'Добавление товара',

    sortParam: '',
  },
  mutations: {
    addCard(state, newCard) {
      const card = {
        id: newCard.id,
        image: newCard.image,
        title: newCard.title,
        description: newCard.description,
        price: newCard.price,
        showCart: newCard.showCart
      };
      state.goods.push(card);
    },
    
    removeCard(state, id) {
      state.goods = state.goods.filter(item => item.id !== id);
    },
    
    updateHeaderTitle(state, value) {
      state.headerTitle = value;
    },

    getSavedGoods(state) {
      state.goods = JSON.parse(localStorage.getItem('goods'));
    },

    changeSortParam(state, param) {
      state.sortParam = param;
    },
  },

  actions: {
    addCard({ commit }, newCard) {
      commit('addCard', newCard);
      this.dispatch('saveGoods');

      this.dispatch('updateHeaderTitle', 'Товар добавлен');
    },

    removeCard({ commit }, id) {
      commit('removeCard', id);
      this.dispatch('saveGoods');
      
      this.dispatch('updateHeaderTitle', 'Товар удалён');
    },
    
    updateHeaderTitle({ commit }, value) {
      commit('updateHeaderTitle', value);

      setTimeout(() => {
        this.state.headerTitle = "Добавление товара";
      }, 3000);
    },

    saveGoods({ state }) {
      localStorage.setItem('goods', JSON.stringify(state.goods));
    },

    getSavedGoods({ commit }) {
      commit('getSavedGoods');
    },

    changeSortParam({ commit }, event) {
      commit('changeSortParam', event.target.value);
    },
  },

  getters: {
    sortedGoods(state) {
      
      if (state.sortParam === "min") {
        return state.goods.sort((item1, item2) => item1.price - item2.price);
      } 
      else if (state.sortParam === "max") {
        return state.goods.sort((item1, item2) => item2.price - item1.price);
      }
      else if (state.sortParam === "title") {
        return state.goods.sort((item1, item2) => item1.title - item2.title);
      }
      else {
        return state.goods;
      };
    },
  },
})