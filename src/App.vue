<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Home from "@/components/Header.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Index from "@/views/Index.vue";
import Loginin from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import BusinessInfo from "@/views/BusinessInfo.vue";
import OrderList from "@/views/OrderList.vue";
import Order from "@/views/Order.vue";
import PayMent from "@/views/PayMent.vue";
</script>

<template>
  <div id="app">
    <router-view></router-view>

  </div>
<!--<Index></Index>-->

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
