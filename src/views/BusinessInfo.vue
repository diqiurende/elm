<script setup>
import Header from "@/components/Header.vue";
import Footer   from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
const router = useRouter()
const toOrder=()=>{
  router.push('/tooder');
}

</script>

<template>
  <html lang="ch">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我的饿了么 商家信息</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="stylesheet" href="../../dist/output.css">
    <link rel="stylesheet" href="../assets/main.css">
    <link rel="stylesheet" href="src/assets/css/font_fbpwmvho3n8/iconfont.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  </head>
  <body class="">
  <div class="w-full h-full">
    <!--herder部分-->
    <header class="flex bg-[#0097FF] justify-center items-center h-28 text-[4.8vw] text-white w-full">
      商家信息
    </header>

    <!--商家logo部分-->
    <div class="flex justify-center items-center mt-6">
      <img class="w-72 h-72 rounded" src="/src/assets/img/sj01.png">
    </div>

    <!--商家信息部分-->
    <div class="flex justify-center items-center w-full h-28 flex-col">
      <p class="flex text-4xl font-semibold mt-2">
        万家饺子（软件园E18店）
      </p>
      <p class="flex text-2xl font-medium text-gray-500 mt-px">&#165;15起送 &#165;3配送</p>
      <p class="flex text-2xl font-medium text-gray-500 mt-px">各种饺子炒菜</p>
    </div>

    <!--食品列表部分-->
    <ul class="w-full mb-7">
      <li class="w-full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center box-content">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp01.png">
          <div class="flex flex-col mx-6 ml-1.5">
            <p class="text-3xl mx-3 font-semibold text-gray-600">纯肉鲜肉（水饺）</p>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">新鲜猪肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;15</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center mr-4">
          <div >
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>3</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w-full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center box-content">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp02.png">
          <div class="flex flex-col mx-6 ml-1.5">
            <p class="text-3xl mx-3 font-semibold text-gray-600">玉米鲜肉（水饺）</p>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">玉米鲜肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;16</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center mr-4">
          <div >
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>2</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp03.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">虾仁三鲜（蒸饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">虾仁三鲜</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;22</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp04.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">素三鲜（蒸饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">素三鲜</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;15</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>
      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp05.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">角瓜鸡蛋（蒸饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">角瓜鸡蛋</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&&#165;16</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp06.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">小白菜肉（水饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">小白菜肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;18</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>

      <li class="w=full box-border mx-3 my-8 p-1.25/1 select-none flex justify-between items-center">
        <div class="flex items-center">
          <img class="ml-3 w-1/3 h-1/3" src="/src/assets/img/sp07.png">
          <div class="ml-1.5">
            <h3 class="text-3xl mx-3 font-semibold text-gray-600">芹菜牛肉（水饺）</h3>
            <p class="text-2xl leading-loose mx-3 font-normal text-gray-500 mt-1">芹菜牛肉</p>
            <p class="text-2xl text-gray-500 mx-3 font-normal mt-1">&#165;18</p>
          </div>
        </div>
        <div class="w-18 flex justify-between items-center">
          <div>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </div>
          <p class="text-3xl text-gray-600"><span>0</span></p>
          <div>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </div>
        </div>
      </li>
    </ul>

    <!--购物车部-->
    <div class="flex w-full h-28 fixed bottom-0">
      <div class="flex  bg-gray-700 basis-2/3">
        <div class=" w-32 h-32 box-border border-solid border-8 border-gray-700 rounded-full bg-blue-500 text-3 text-white flex justify-center items-center -mt-2 -ml-1 relative">
<!--          <i class="fa fa-shopping-cart fa-3x"></i>-->
          <span class="iconfont">&#xea06;</span>
          <div class="w-10 h-10 rounded-full bg-red-600 text-white text-2xl flex justify-center items-center absolute -right-1/4 -top-1/4">3</div>
        </div>
        <div>
          <p class="text-4xl text-white mt-4">&#165;12.88</p>
          <p class="text-1.5 text-gray-500">另需配送费3元</p>
        </div>
      </div>
      <div class="basis-1/3 mr-0">
        <div class="w- h-full bg-green-500 text-white text-4xl font-bold select-none cursor-pointer flex justify-center items-center" @click="toOrder">
          去结算
        </div>
      </div>

    </div>
  </div>
  </body>
  </html>
</template>

<style scoped>
ul{
  padding: 1vw;
}
@font-face {
  font-family: "iconfont logo";
  src: url('https://at.alicdn.com/t/font_985780_km7mi63cihi.eot?t=1545807318834');
  src: url('https://at.alicdn.com/t/font_985780_km7mi63cihi.eot?t=1545807318834#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_985780_km7mi63cihi.woff?t=1545807318834') format('woff'),
  url('https://at.alicdn.com/t/font_985780_km7mi63cihi.ttf?t=1545807318834') format('truetype'),
  url('https://at.alicdn.com/t/font_985780_km7mi63cihi.svg?t=1545807318834#iconfont') format('svg');
}

</style>