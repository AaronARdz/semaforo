<template>
  <div class="home">
    <div class="container">
      <button class="btn btn-primary mr-2" @click="startGame">Empezar</button>
      <button class="btn btn-danger" @click="stopGame">Detener</button>
    </div>
    <div class="row mt-5">
      <div class="col-4">
        <p>empty</p>
      </div>
      <div class="col-4 bg-light">
        <div class="float-left">
          <li v-for="(index) of this.cars" :key="index" class="w-25">
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
        <p>empty</p>
      </div>
    </div>
    <div class="row bg-light">
      <div class="col-4 mt-auto">
        <li v-for="(index) of this.cars" :key="index" class="w-25">
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
        <li v-for="(index) of this.cars" :key="index" class="w-25">
            <Car ></Car>
        </li>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <p>empty</p>
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
        <li v-for="(index) of this.cars" :key="index" class="w-25">
            <Car ></Car>
        </li>
        </div>
      </div>
      <div class="col-4">
        <p>empty</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState} from 'vuex'
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
      cars: [1,2,3,4,5,6,7,8]
    }
  },
  methods: {
    ...mapActions(['startGame', 'stopGame'])
  },
  computed: {
    ...mapState(['semaforoVertical', 'semaforoHorizontal'])
  }
};
</script>
