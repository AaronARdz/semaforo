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
    interval: Function,
    onOff: false,
    verticalTimeout: Function,
    horizontalTimeout:  Function,
    semaforoDuration: 3000,
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
      state.stop = payload;
    },
    setOnOff(state,payload) {
      state.onOff = payload
    },
    setDuration(state,payload) {
      state.semaforoDuration = payload;
    }
  },
  actions: {
    startGame({dispatch,state}) {
        console.log("start");
          state.interval = setInterval(() => {
            console.log(state.onOff)
            dispatch('setSemaforos');
            dispatch('moveCars');
          }, state.semaforoDuration);
    },
    setSemaforos({commit,state}) {
        commit('setOnOff', !state.onOff);
        commit('setVertical', state.onOff);
        commit('setHorizontal', !state.onOff);
    },
    stopGame({state}) {
      clearInterval(state.interval);
      clearInterval(state.verticalTimeout);
      clearInterval(state.horizontalTimeout);
    },
    verticalPop({state}) {
      state.topCars.pop()
      state.bottomCars.pop()
      state.rightCars.push(1)
      state.leftCars.push(1)
    },
    horizontalPop({state}) {
      state.rightCars.pop()
      state.leftCars.pop()
      state.topCars.push(1)
      state.bottomCars.push(1)
    },
    moveCars({state, dispatch}) {
      if (state.semaforoVertical.green == true) {
        clearInterval(state.verticalTimeout);
        state.horizontalTimeout = setInterval(() => {
          console.log('vertical')
          dispatch('verticalPop');
        }, state.topCars.length * 100);
        console.log(state.topCars.length)
      } else {
        clearInterval(state.horizontalTimeout);
        state.verticalTimeout = setInterval(() => {
          console.log('horizontal')
          dispatch('horizontalPop');
        }, state.bottomCars.length * 100);
      }
    },
    getDuration ({commit}, duration) {
      commit('setDuration', duration * 1000)
    }
  },
  getters: {
    horizontalCars(state) {
      return state.rightCars.length
    },
    verticalCars(state) {
      return state.topCars.length
    }
  },
  modules: {}
});
