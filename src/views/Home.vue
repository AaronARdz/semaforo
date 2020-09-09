<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Intersection msg="Bienvenido al semaforo" />
    <Semaforo v-bind:isVertical="true"> </Semaforo>

  </div>
</template>

<script>
// @ is an alias to /src
import Intersection from "@/components/Intersection.vue";
import Semaforo from "@/components/Semaforo.vue";

export default {
  name: "Home",
  components: {
    Intersection,
    Semaforo
  },
  Data() {
    return {
    }
  }
};
</script>
