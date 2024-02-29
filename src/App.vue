<template>
  <div>
    <TheHeader/>
   <div class="main">
    <TheNavbar/>
    <TheContent/>
   </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheContent from './components/layout/TheContent.vue';
import TheNavbar from './components/layout/TheNavbar.vue';


export default {
  name: 'App',
  components: {
    TheHeader,TheContent,TheNavbar
  }
}
</script>

<style>
@import url("./style/main.css");
/* @import url("./style/page/employ.css"); */

</style>
