<script setup >
import Header from "@/components/Header.vue";
import Footer   from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
const router = useRouter()

const toBusinessList = () => {
  // 跳转到注册页面
  router.push('/businesslist')
}

</script>

<template>
 <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>我的饿了么 首页</title>

    </head>
 <body>
 <div class="wrapper ">

   <Header></Header>
   <br>
   <!--分类点餐部分-->
   <div class="foodcontent w-full ">
     <ul class="foodtype">
       <li @click="toBusinessList">
         <img src="../assets/img/dcfl01.png">
         <p>美食</p>
       </li>
       <li @click="toBusinessList(2)">
         <img src="../assets/img/dcfl02.png">
         <p>早餐</p>
       </li>
       <li @click="toBusinessList(3)">
         <img src="../assets/img/dcfl03.png">
         <p>跑腿代购</p>
       </li>
       <li @click="toBusinessList(4)">
         <img src="../assets/img/dcfl04.png">
         <p>汉堡披萨</p>
       </li>
       <li @click="toBusinessList(5)">
         <img src="../assets/img/dcfl05.png">
         <p>甜品饮品</p>
       </li>
       <li @click="toBusinessList(6)">
         <img src="../assets/img/dcfl06.png">
         <p>速食简餐</p>
       </li>
       <li @click="toBusinessList(7)">
         <img src="../assets/img/dcfl07.png">
         <p>地方小吃</p>
       </li>
       <li @click="toBusinessList(8)">
         <img src="../assets/img/dcfl08.png">
         <p>米粉面馆</p>
       </li>
       <li @click="toBusinessList(9)">
         <img src="../assets/img/dcfl09.png">
         <p>包子粥铺</p>
       </li>
       <li @click="toBusinessList(10)">
         <img src="../assets/img/dcfl10.png">
         <p>炸鸡炸串</p>
       </li>
     </ul>
   </div>
   <!--横幅广告部份-->
   <div class="mt-1 w-[97%]   bg-contain  box-border ml-4  bg-no-repeat bg-[url('/src/assets/img/index_banner.png')]">
     <div class="h-50 flex flex-col  ml-1">
       <div class="text-xl leading-relaxed mt-2 font-semibold">品质套餐</div>
       <p class="text-xl leading-10 text-gray-600">搭配齐全吃得好</p>
       <a class="mt-1 text-2xl text-orange-400">立即抢购></a>
     </div>
   </div>
   <!--            超级会员-->
   <div class="bg-[#FEEDC1FF] w-full mt-2 h-12 flex items-center">
     <img class="w-8 h-8 ml-8" src="../assets/img/super_member.png">
     <div class=" font-semibold ml-1 mr-1 text-yellow-700">
       超级会员
     </div>
     <p class="ml-1 ">&#8226;每月享超值权限</p>
     <div class=" ml-14  cursor-pointer">立即开通></div>
   </div>

   <!--        推荐商家-->
   <div class="flex flex-wrap justify-center items-center w-full h-10 mt-2 ">
     <div class="w-12 h-0.5 bg-[#888888FF]"></div>
     <p class="mx-8 my-0 text-xl">推荐商家</p>
     <div class="w-12 h-0.5 bg-[#888888FF]"></div>
   </div>
   <!--        推荐方式-->
   <ul class="flex flex-wrap items-center justify-around mt-3  text-[#555555FF]">
     <li class=" flex flex-wrap  items-center justify-around">综合排序
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg></li>
     <li class=" text-[#555555FF]">距离最近</li>
     <li class="">销量最高</li>
     <li class=" flex flex-wrap justify-center items-center">筛选
       <svg class="text-black" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13v7h-4v-7L2.95 4h18.1L14 13Zm-2-.7L16.95 6h-9.9L12 12.3Zm0 0Z"/></svg></li>
   </ul>
   <!--商家列表-->
   <br>

   <ul class="flex  flex-col w-full mt-8 businesslist">

     <li class="ml-1 mb-4  box-border w-full  border-solid flex p-6 border-b-[1px] border-[#DDDDDDFF]">
       <img class="w-20 h-20 " src="../assets/img/sj01.png" />
       <!--                图片右边大盒子-->
       <div class=" box-border w-full pl-2">
         <div class="flex justify-between items-center mb-2">
           <h3 class=" font-semibold text-xl text-[#333333FF]">万家饺子（软件园E18店）</h3>
           <div class="w-3.5 h-7 bg-[#666666FF] text-white text-2xl mr-8 flex justify-center items-center">&#8226;</div>
         </div>
         <div class="flex justify-between items-center">
           <div class="flex items-center">
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <p class="text-[#666666FF] ml-2 ">4.9 月售345单</p>
           </div>
           <div class="bg-[#0097FFFF] text-white rounded-md">
             蜂鸟快送
           </div>
         </div>
         <div>

         </div>
         <div class="flex justify-between ">
           <p>&#165;15起送 | &#165;3配送</p>
           <p>3.22km | 30分钟</p>
         </div>
         <div class="  flex  ">
           <div class="box-border border-[1px] border-[#DDDDDDFF] text-[#555555FF] "> 各种饺子</div>
         </div>

         <div class="flex justify-between items-center mt-1">
           <div class="flex items-center mt-1">
             <div class="w-4 h-4 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center">新</div>
             <div class="text-[#666666FF]  ">饿了么新用户首单立减9元</div>
           </div>
           <div class="flex items-center">
             <div class=" text-[#999999FF]">
               2个活动
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
           </div>


         </div>
         <div class="flex items-center  mt-1 mb-4">

           <div class="w-4 h-4 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
           <p class="text-[#666666FF]  ml-4 ">特价商品5元起</p>
         </div>
       </div>
     </li>

     <li class="ml-1 mb-4  box-border w-full  border-solid flex p-6 border-b-[1px] border-[#DDDDDDFF]">
       <img class="w-20 h-20 " src="../assets/img/sj02.png" />
       <!--                图片右边大盒子-->
       <div class=" box-border w-full pl-2">
         <div class="flex justify-between items-center mb-2">
           <h3 class=" font-semibold text-xl text-[#333333FF]">小锅饭豆腐店（全运店）</h3>
           <div class="w-3.5 h-7 bg-[#666666FF] text-white text-2xl mr-8 flex justify-center items-center">&#8226;</div>
         </div>
         <div class="flex justify-between items-center">
           <div class="flex items-center">
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <p class="text-[#666666FF] ml-2 ">4.9 月售345单</p>
           </div>
           <div class="bg-[#0097FFFF] text-white rounded-md">
             蜂鸟快送
           </div>
         </div>
         <div>

         </div>
         <div class="flex justify-between ">
           <p>&#165;15起送 | &#165;3配送</p>
           <p>3.22km | 30分钟</p>
         </div>
         <div class="  flex  ">
           <div class="box-border border-[1px] border-[#DDDDDDFF] text-[#555555FF] "> 各种饺子</div>
         </div>

         <div class="flex justify-between items-center mt-1">
           <div class="flex items-center mt-1">
             <div class="w-4 h-4 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center">新</div>
             <div class="text-[#666666FF]  ">饿了么新用户首单立减9元</div>
           </div>
           <div class="flex items-center">
             <div class=" text-[#999999FF]">
               2个活动
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
           </div>


         </div>
         <div class="flex items-center  mt-1 mb-4">

           <div class="w-4 h-4 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
           <p class="text-[#666666FF]  ml-4 ">特价商品5元起</p>
         </div>
       </div>
     </li>

     <li class="ml-1 mb-4  box-border w-full  border-solid flex p-6 border-b-[1px] border-[#DDDDDDFF]">
       <img class="w-20 h-20 " src="../assets/img/sj03.png" />
       <!--                图片右边大盒子-->
       <div class=" box-border w-full pl-2">
         <div class="flex justify-between items-center mb-2">
           <h3 class=" font-semibold text-xl text-[#333333FF]">麦当劳麦乐送（全运路店）</h3>
           <div class="w-3.5 h-7 bg-[#666666FF] text-white text-2xl mr-8 flex justify-center items-center">&#8226;</div>
         </div>
         <div class="flex justify-between items-center">
           <div class="flex items-center">
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <p class="text-[#666666FF] ml-2 ">4.9 月售345单</p>
           </div>
           <div class="bg-[#0097FFFF] text-white rounded-md">
             蜂鸟快送
           </div>
         </div>
         <div>

         </div>
         <div class="flex justify-between ">
           <p>&#165;15起送 | &#165;3配送</p>
           <p>3.22km | 30分钟</p>
         </div>
         <div class="  flex  ">
           <div class="box-border border-[1px] border-[#DDDDDDFF] text-[#555555FF] "> 各种饺子</div>
         </div>

         <div class="flex justify-between items-center mt-1">
           <div class="flex items-center mt-1">
             <div class="w-4 h-4 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center">新</div>
             <div class="text-[#666666FF]  ">饿了么新用户首单立减9元</div>
           </div>
           <div class="flex items-center">
             <div class=" text-[#999999FF]">
               2个活动
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
           </div>


         </div>
         <div class="flex items-center  mt-1 mb-4">

           <div class="w-4 h-4 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
           <p class="text-[#666666FF]  ml-4 ">特价商品5元起</p>
         </div>
       </div>
     </li>

     <li class="ml-1 mb-4  box-border w-full  border-solid flex p-6 border-b-[1px] border-[#DDDDDDFF]">
       <img class="w-20 h-20 " src="../assets/img/sj04.png" />
       <!--                图片右边大盒子-->
       <div class=" box-border w-full pl-2">
         <div class="flex justify-between items-center mb-2">
           <h3 class=" font-semibold text-xl text-[#333333FF]">米村拌饭（浑南店）</h3>
           <div class="w-3.5 h-7 bg-[#666666FF] text-white text-2xl mr-8 flex justify-center items-center">&#8226;</div>
         </div>
         <div class="flex justify-between items-center">
           <div class="flex items-center">
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <p class="text-[#666666FF] ml-2 ">4.9 月售345单</p>
           </div>
           <div class="bg-[#0097FFFF] text-white rounded-md">
             蜂鸟快送
           </div>
         </div>
         <div>

         </div>
         <div class="flex justify-between ">
           <p>&#165;15起送 | &#165;3配送</p>
           <p>3.22km | 30分钟</p>
         </div>
         <div class="  flex  ">
           <div class="box-border border-[1px] border-[#DDDDDDFF] text-[#555555FF] "> 各种饺子</div>
         </div>

         <div class="flex justify-between items-center mt-1">
           <div class="flex items-center mt-1">
             <div class="w-4 h-4 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center">新</div>
             <div class="text-[#666666FF]  ">饿了么新用户首单立减9元</div>
           </div>
           <div class="flex items-center">
             <div class=" text-[#999999FF]">
               2个活动
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
           </div>


         </div>
         <div class="flex items-center  mt-1 mb-4">

           <div class="w-4 h-4 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
           <p class="text-[#666666FF]  ml-4 ">特价商品5元起</p>
         </div>
       </div>
     </li>

     <li class="ml-1 mb-4  box-border w-full  border-solid flex p-6 border-b-[1px] border-[#DDDDDDFF]" >
       <img class="w-20 h-20 " src="../assets/img/sj05.png" />
       <!--                图片右边大盒子-->
       <div class=" box-border w-full pl-2">
         <div class="flex justify-between items-center mb-2">
           <h3 class=" font-semibold text-xl text-[#333333FF]">串记串道（中南康城店）</h3>
           <div class="w-3.5 h-7 bg-[#666666FF] text-white text-2xl mr-8 flex justify-center items-center">&#8226;</div>
         </div>
         <div class="flex justify-between items-center">
           <div class="flex items-center">
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
             <p class="text-[#666666FF] ml-2 ">4.9 月售345单</p>
           </div>
           <div class="bg-[#0097FFFF] text-white rounded-md">
             蜂鸟快送
           </div>
         </div>
         <div>

         </div>
         <div class="flex justify-between ">
           <p>&#165;15起送 | &#165;3配送</p>
           <p>3.22km | 30分钟</p>
         </div>
         <div class="  flex  ">
           <div class="box-border border-[1px] border-[#DDDDDDFF] text-[#555555FF] "> 各种饺子</div>
         </div>

         <div class="flex justify-between items-center mt-1">
           <div class="flex items-center mt-1">
             <div class="w-4 h-4 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center">新</div>
             <div class="text-[#666666FF]  ">饿了么新用户首单立减9元</div>
           </div>
           <div class="flex items-center">
             <div class=" text-[#999999FF]">
               2个活动
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
           </div>


         </div>
         <div class="flex items-center  mt-1 mb-4">

           <div class="w-4 h-4 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
           <p class="text-[#666666FF]  ml-4 ">特价商品5元起</p>
         </div>
       </div>
     </li>
     <li style="margin-top: 60px"></li>





   </ul>




















   <Footer></Footer>
 </div>
 </body>
 </html>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.wrapper .foodtype {

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  align-content: center;
  padding: 0;
}
.foodcontent{
  margin-top: 20vw;
}

.wrapper .foodtype li {
  /*一共10个子元素，通过计算，子元素宽度在16.7 ~ 20 之间，才能保证换两行*/
  width: 17vw;
  height: 20vw;

  display: flex;
  /*弹性盒子主轴方向设为column，然后仍然是垂直水平方向居中*/
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2vw;

  user-select: none;
  cursor: pointer;
}

.wrapper .foodtype li img {
  width: 12vw;
  /*视频讲解时高度设置为12vw，实际上设置为10.3vw更佳*/
  height: 10.3vw;
}

.wrapper .foodtype li p {
  font-size: 3.2vw;
  color: #666;
}
.businesslist{
  margin-left: 1px;
}
.businesslist ul li{
  margin:0px;padding:0px;
}
ul,ol,li{
  margin:0px;padding:1px;}
ul{
  list-style-type: none;
}

</style>