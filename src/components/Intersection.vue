<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
   <div class="container">

     <div class="row mt-5">
        <div class="col-4 mx-auto">
         <span class="tienda">
           <img src="../assets/img/oxxo.jpg" alt="">
         </span>
       </div>
       <div class="col-4 mt-auto">
          <span class="float-left circle red-c horizontal-line"></span>
          <span class="float-left circle green-c horizontal-line"></span>
          <span class="float-left circle yellow-c horizontal-line"></span>
       </div>
        <div class="col-4 mx-auto">
            <span class="tienda">
              <img src="../assets/img/seven-eleven.jpg" alt="">
            </span>
       </div>
     </div>
     
    <div class="row mt-4">
       <div class="col-4 mt-auto">
          <span class="ml-auto circle red-c vertical-line"></span>
          <span class="ml-auto circle green-c vertical-line"></span>
          <span class="ml-auto circle yellow-c vertical-line"></span>
       </div>
       <div class="col-4 mx-auto">
         <span class="intersection"></span>
       </div>
        <div class="col-4 mb-auto">
          <span class="mr-auto circle red-c vertical-line"></span>
          <span class="mr-auto circle green-c vertical-line"></span>
          <span class="mr-auto circle yellow-c vertical-line"></span>
       </div>
     </div>

      <div class="row mt-5">
        <div class="col-4 mx-auto">
          <span class="tienda">
           <img src="../assets/img/seven-eleven.jpg" alt="">
          </span>
       </div>
       <div class="col-4 mb-auto">
          <span class="float-right circle red-c horizontal-line"></span>
          <span class="float-right circle green-c horizontal-line"></span>
          <span class="float-right circle yellow-c horizontal-line"></span>
       </div>
       <div class="col-4 mx-auto">

          <span class="tienda">
           <img src="../assets/img/oxxo.jpg" alt="">
         </span>
       </div>
     </div>

   </div>
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

</style>
