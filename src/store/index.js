import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [{
      "id": 6462,
      "image": require("../assets/img/card.png"),
      "title": "Наименование товара",
      "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интере",
      "price": 10000,
      "showCart": false
    },
    {
      "id": 3213694,
      "image": require("../assets/img/card.png"),
      "title": "sdfsdf",
      "description": "sdfwerwe н",
      "price": 4000,
      "showCart": false
    },
    {
      "id": 3213694,
      "image": require("../assets/img/card.png"),
      "title": "sdfsdf",
      "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      "price": 4000,
      "showCart": false
    }],
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
  },
  actions: {
    addCard({ commit }, newCard) {
      commit('addCard', newCard);
    },
  },
  modules: {
  }
})
