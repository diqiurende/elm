<script setup>
import Header from "@/components/Header.vue";
import Footer   from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
const router = useRouter()
const topayment=()=>{
  router.push('/topayment')
}
</script>

<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我的饿了么 确认订单</title>
    <link rel="stylesheet" href="../../dist/output.css">
    <link rel="stylesheet" href="../assets/main.css">
  </head>
  <body>
  <div class="w-full h-full">

    <!--header部分-->
    <header class="flex w-full h-24 font-medium justify-center items-center bg-[#0097FFFF] text-4xl  fixed left-0 top-0 z-50 text-white ">
      <p>确认订单</p>
    </header>
    <!--订单信息部分-->
    <div class="w-full mt-24 bg-[#0097FFFF] box-border p-[2vw] text-white">
      <h5 class="text-2xl font-light">订单配送至：</h5>
      <div class="flex w-full justify-between items-center font-bold select-none cursor-pointer ">
        <p class="w-[90%] text-4xl">沈阳市浑南区智慧四街1-121号</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"/></svg>

      </div>
      <p class="text-2xl mt-3">习近平先生 13656785432</p>
    </div>


    <h3 class="box-border p-[3vw] text-3xl font-bold text-[#666666FF]   border-b-2  border-black pb-5 border-b-[#DDDDDDFF]">万家饺子（软件园E18店）</h3>

    <!--        订单明细部分-->
    <ul class="w-full">
      <li class="w-full h-32 box-border p-[3vw] text-[#666666FF] flex justify-between items-center ">
        <div class="flex items-center">
          <img src="../assets/img/sp01.png"
               height="40" width="40"/>
          <p class="text-3xl ml-6">纯肉鲜肉（水饺） x 2</p>
        </div>
        <p class="text-3xl">&#165;15</p>
      </li>
      <li class="w-full h-32 box-border p-[3vw] text-[#666666FF] flex justify-between items-center">
        <div class="flex items-center">
          <img src="../assets/img/sp02.png"
               height="40" width="40"/>
          <p class="text-3xl ml-6">玉米鲜肉（水饺） x 1</p>
        </div>
        <p class="text-3xl">&#165;16</p>
      </li>
    </ul>

    <div class="flex justify-between items-center w-full h-32  text-[#666666FF] text-3xl p-[3vw]">
      <p class="">配送费</p>
      <p class="">&#165;3</p>
    </div>



    <div class="w-full h-28 fixed left-0 bottom-0 flex">
      <div class="flex bg-[#505051FF]  basis-2/3 text-white justify-center font-bold select-none items-center text-4xl">
        &#165;49
      </div >
      <div class="flex bg-[#38CA73FF] basis-1/3 text-white justify-center font-bold select-none items-center cursor-pointer  text-4xl" onclick="location.href='payment.html'" @click="topayment">
        去支付
      </div>

    </div>
  </div>
  </body>
  </html>
</template>

<style scoped>
ul
{
  padding: 1vw;
}

</style>