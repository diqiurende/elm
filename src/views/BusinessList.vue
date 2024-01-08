<script setup>
import Header from "@/components/Header.vue";
import Footer   from "@/components/Footer.vue";
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const toInfo=()=>{
  router.push('/businessInfo');
}
const businesses = ref([]);

// 在组件挂载时向后端请求商家数据
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/elm/UserController/getAllBusinesses');
    businesses.value = response.data;
  } catch (error) {
    console.error('Error fetching business data:', error);
  }
});

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

    <div>

      <ul>
        <li v-for="(business, index) in businesses" :key="business.businessId" class="ml-1   w-full flex p-6  border-solid border border-[#DDDDDDFF]"
            :style="{ marginBottom: index === businesses.length - 1 ? '9vw' : '' }">
          <img :src="business.businessImg" alt="商家图片" style="max-width: 100px; max-height: 100px;">
          <!--                图片右边大盒子-->
          <div class=" box-border w-full pl-2">
            <div class="flex justify-between items-center mb-2">
              <h3 class=" font-semibold text-xl text-[#333333FF]">{{ business.businessName }}</h3>

            </div>

            <div>

            </div>
            <div class="flex justify-between ">
              <p>&#165;15起送 | &#165;3配送</p>

            </div>
            <div class="  flex  ">
              <div class="box-border border-[1px] border-[#DDDDDDFF] text-[#555555FF] "> {{ business.businessExplain }}</div>
            </div>


            <div class="flex items-center  mt-1 mb-4">


            </div>
          </div>
          <el-divider v-if="index !== businesses.length - 1"></el-divider>
        </li>
      </ul>
    </div>





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