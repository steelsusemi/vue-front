<template>
  <div>
    <Header />
    <router-link to="/">홈페이지</router-link>
    <router-link to="/list">리스트페이지</router-link>
    <router-view :apple="apple"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/fragments/header';
import Footer from './components/fragments/footer';
// import appleProduct from './assets/appleProduct.js';
export default {
  name: 'App',
  data(){
    return {
      // apple : appleProduct
    }
  },
  components: {
    Header,
    Footer,
  }
}
</script>