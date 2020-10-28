<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
  </div>
</template>

<script>
import ListOne from './components/ProductListOne.vue';
import ListTwo from './components/ProductListTwo.vue';

export default {
  components:{
    'product-list-one':ListOne,
    'product-list-two':ListTwo
  },

  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;

}
</style>
