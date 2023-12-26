<script setup>
import Header from "@/components/Header.vue";
import Footer   from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
const router = useRouter()
const toInfo=()=>{
  router.push('/businessInfo');
}

</script>

<template>
  <html >
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我的饿了么 商家列表</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="stylesheet" href="../../dist/output.css">
    <link rel="stylesheet" href="../assets/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  </head>
  <body>
  <div class="w=full h-full">

    <!--header部分-->
    <header class="w-full h-24 basis-full bg-[#0097FF] text-white text-[4.8vw] flex left-0 top-0 z-50 justify-center items-center">
      <p>商家列表</p>
    </header>

    <!--商家列表部分-->
<!--    <ul class="w-full">-->
<!--      <li class="flex  p-4 box-content items-center cursor-pointer     border-solid border-b  border-gray-100"  @click="toInfo">-->
<!--        <div class=" items-center relative">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj01.png">-->
<!--          <div class="flex w-10 h-10 bg-red-600 text-white text-2xl rounded-full justify-center -right-4 -top-3 absolute items-center">3</div>-->
<!--        </div>-->
<!--        <div class="ml-5  ">-->
<!--          <h3 class="font-semibold text-3xl mt-1 leading-relaxed text-gray-600">万家饺子（软件园E18店）</h3>-->
<!--          <p class="text-2xl mt-1 text-gray-500 font-medium leading-relaxed">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl mt-1 text-gray-500 font-medium leading-relaxed">各种饺子炒菜</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj02.png">-->
<!--          <div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">3</div>-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">小锅饭豆腐馆（全运店）</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">特色美食</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj03.png">-->
<!--          <div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">1</div>-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">麦当劳麦乐送（全运路店）</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">汉堡薯条</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj04.png">-->
<!--          &lt;!&ndash;<div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">1</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">米村拌饭（浑南店）</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">各种炒菜拌饭</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj05.png">-->
<!--          &lt;!&ndash;<div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">1</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">申记串道（中海康城店）</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">烤串炸串</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj06.png">-->
<!--          &lt;!&ndash;<div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">1</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">半亩良田排骨米饭</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">排骨米饭套餐</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj07.png">-->
<!--          &lt;!&ndash;<div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">1</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">茶兮鲜果饮品（国际软件园店）</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">甜品饮品</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj08.png">-->
<!--          &lt;!&ndash;<div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">1</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">唯一水果捞（软件园E18店）</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">新鲜水果</p>-->
<!--        </div>-->
<!--      </li>-->

<!--      <li class="w-full p-4 select-none flex items-center cursor-pointer border-solid border-b border-gray-100 " onclick="location.href='businessInfo.html'">-->
<!--        <div class="relative items-center">-->
<!--          <img class="w-[20vw] h-[20vw]" src="/src/assets/img/sj09.png">-->
<!--          &lt;!&ndash;<div class="w-10 h-10 bg-red-600 text-white text-xl rounded-full flex justify-center items-center absolute -right-4 -top-3">1</div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="ml-5">-->
<!--          <h3 class="text-3xl text-gray-600 font-semibold leading-relaxed ">满园春饼（全运路店）</h3>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">&#165;15起送 | &#165;3配送</p>-->
<!--          <p class="text-2xl text-gray-500 font-medium leading-relaxed mt-1">各种春饼</p>-->
<!--        </div>-->
<!--      </li>-->
<!--      <li class="h-16">-->

<!--      </li>-->
<!--    </ul>-->
    <ul>

    </ul>


    <Footer></Footer>
  </div>
  </body>
  </html>

</template>

<style scoped>
ul{
  padding: 0;
}
</style>