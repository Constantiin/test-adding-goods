import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [{
      "id": 6462,
      "image": require("../assets/img/card.png"),
      "title": "Наименование товара",
      "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интере",
      "price": "10 000",
      "showCart": false
    },
    {
      "id": 234234,
      "image": require("../assets/img/card.png"),
      "title": "Следующий товар",
      "description": "Довольно-таки интересное описание товара в несколько строк.",
      "price": "4 000",
      "showCart": false
    },
    {
      "id": 64345462,
      "image": require("../assets/img/card.png"),
      "title": "Ещё один товар",
      "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
      "price": "537",
      "showCart": false
    }
  ],

    headerTitle: 'Добавление товара',
  },
  mutations: {
    addCard(state, newCard) {
      const card = {
        id: newCard.id,
        image: newCard.image,
        title: newCard.title,
        description: newCard.description,
        price: newCard.price.toLocaleString(),
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
  },
  actions: {
    addCard({ commit }, newCard) {
      commit('addCard', newCard);
    },

    removeCard({ commit }, id) {
      commit('removeCard', id);
      
      this.dispatch('updateHeaderTitle', 'Товар удалён');
    },
    
    updateHeaderTitle({ commit }, value) {
      commit('updateHeaderTitle', value);

      setTimeout(() => {
        this.state.headerTitle = "Добавление товара";
      }, 3000);
    },
  },
  modules: {
  }
})
