<template>
  <div class="home">
    <div class="container">
      
    </div>
    <div class="row">
      <div class="col">
        <div class="alert alert-success" role="alert">
          Duracion inicial: {{semaforoDuration}}
        </div>
        <div class="alert alert-primary" role="alert">
          Duracion Semaforo vertical (ms):  {{ duracionVertical }}
        </div>
        <div class="alert alert-secondary" role="alert">
          Duracion Semaforo horizontal (ms):  {{ duracionHorizontal }}
        </div>
      </div>
      <div class="col">
        <form @submit.prevent="getDuration(initialDuration)">
        <div class="form-group">
          <input class="form-control" type="text" v-model.number="initialDuration" placeholder="Elige la duracion inicial en milisegundos">
          <button type="input" class="btn btn-success mt-2">Aceptar</button>
        </div>
        </form>
      </div>
      <div class="col">
      <button class="btn btn-primary mr-2" @click="startGame">Empezar</button>
      <button class="btn btn-danger" @click="stopGame">Detener</button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
        <img src="../assets/img/oxxo.jpg" alt="" class="w-75">
      </div>
      <div class="col-4 bg-light">
        <div class="float-left">
          <li v-for="(index) of verticalCars" :key="index" class="w-25">
            <Car ></Car>
          </li>
        <Semaforo 
        v-bind:isVertical="false"
        v-bind:positionLeft="true"
        v-bind:redLight="semaforoVertical.red"
        v-bind:greenLight="semaforoVertical.green"
        v-bind:yellowLight="semaforoVertical.yellow"
        ></Semaforo>
        </div>
      </div>
      <div class="col-4">
        <img src="../assets/img/seven-eleven.jpg" alt="" class="w-75">
      </div>
    </div>
    <div class="row bg-light">
      <div class="col-4 mt-auto">
        <li v-for="(index) of horizontalCars" :key="index" class="w-25">
            <Car ></Car>
        </li>
        <Semaforo
         v-bind:isVertical="true" 
         v-bind:positionLeft="true"
         v-bind:redLight="semaforoHorizontal.red"
         v-bind:greenLight="semaforoHorizontal.green"
         v-bind:yellowLight="semaforoHorizontal.yellow"
         ></Semaforo>
      </div>
      <div class="col-4 mx-auto">
        <span class="intersection"></span>
      </div>
      <div class="col-4">
        <Semaforo
         v-bind:isVertical="true" 
         v-bind:positionLeft="false"
         v-bind:redLight="semaforoHorizontal.red"
         v-bind:greenLight="semaforoHorizontal.green"
         v-bind:yellowLight="semaforoHorizontal.yellow"
         ></Semaforo>
        <li v-for="(index) of horizontalCars" :key="index" class="w-25">
            <Car ></Car>
        </li>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <img src="../assets/img/seven-eleven.jpg" alt="" class="w-75">
      </div>
      <div class="col-4 bg-light">
        <div class="float-right">
        <Semaforo 
        v-bind:isVertical="false" 
        v-bind:positionLeft="true"
        v-bind:redLight="semaforoVertical.red"
        v-bind:greenLight="semaforoVertical.green"
        v-bind:yellowLight="semaforoVertical.yellow"
        ></Semaforo>
        <li v-for="(index) of verticalCars" :key="index" class="w-25">
            <Car ></Car>
        </li>
        </div>
      </div>
      <div class="col-4">
        <img src="../assets/img/oxxo.jpg" alt="" class="w-75">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters, mapState} from 'vuex'
import Semaforo from "@/components/Semaforo.vue";
import Car from "@/components/Car.vue";

export default {
  name: "Home",
  components: {
    Semaforo,
    Car
  },
  data() {
    return {
      cars: [1,2,3,4,5,6,7,8],
      initialDuration: ''
    }
  },
  methods: {
    ...mapActions(['startGame', 'stopGame','getDuration'])
  },
  computed: {
    ...mapState(['semaforoVertical', 'semaforoHorizontal','semaforoDuration']),
    ...mapGetters(['horizontalCars', 'verticalCars']),
    duracionVertical() {
      return this.verticalCars * 100;
    },
    duracionHorizontal() {
      return this.horizontalCars * 100;
    }
  }
};
</script>
