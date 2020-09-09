<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Para una guia y explicacion de como funciona este programa por favor visita
      la documentacion.
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >Documentacion @github</a
      >.
    </p>
   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
