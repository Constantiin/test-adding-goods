import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [{
      "id": 6462,
      "image": require("../assets/img/card.png"),
      "title": "Наименование товара",
      "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интере",
      "price": 10000
    },
    {
      "id": 3213694,
      "image": require("../assets/img/card.png"),
      "title": "sdfsdf",
      "description": "sdfwerwe н",
      "price": 4000
    },
    {
      "id": 3213694,
      "image": require("../assets/img/card.png"),
      "title": "sdfsdf",
      "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      "price": 4000
    }],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
