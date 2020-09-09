<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Semaforo msg="Bienvenido al semaforo" />
  </div>
</template>

<script>
// @ is an alias to /src
import Semaforo from "@/components/Semaforo.vue";

export default {
  name: "Home",
  components: {
    Semaforo
  }
};
</script>
