import Vue from "vue";
import Vuex, {} from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    semaforoVertical: {
      green: false,
      yellow: false,
      red: false,
    },
    semaforoHorizontal: {
      green: false,
      yellow: false,
      red: false
    },
    topCars : [1,2,3,4,5,6,7,8,9],
    leftCars: [1,2,3,4,5,6,7,8,9],
    rightCars: [1,2,3,4,5,6,7,8,9],
    bottomCars: [1,2,3,4,5,6,7,8,9],
    counter: 50,
    i: 0,
    interval: '',
    onOff: false
  },
  mutations: {
    setVertical(state, payload) {
      state.semaforoVertical.green = payload;
      state.semaforoVertical.red = !payload;
      state.semaforoVertical.yellow = !payload;
    },
    setHorizontal(state, payload) {
      state.semaforoHorizontal.green = payload;
      state.semaforoHorizontal.red = !payload;
      state.semaforoHorizontal.yellow = !payload;
    },
    setStop(state, payload){
      state.i = payload;
    },
    setOnOff(state,payload) {
      state.onOff = payload
    }
  },
  actions: {
    startGame({dispatch}) {
        console.log("start");
        this.state.interval = setInterval(() => {
          console.log(this.state.onOff)
          dispatch('setSemaforos');

        }, 1000);
        this.state.i++;
    },
    setSemaforos({commit}) {
        commit('setOnOff', !this.state.onOff);
        commit('setVertical', this.state.onOff);
        commit('setHorizontal', !this.state.onOff);
    },
    stopGame() {
      clearInterval(this.state.interval)
    }
  },
  modules: {}
});
