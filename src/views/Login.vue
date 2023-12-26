<script setup>
import Footer from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
import {ref} from "vue";
import axios from "axios";

const router = useRouter();

const toRegister = () => {
  // 跳转到注册页面
  router.push('/register');
};
const myuserID=ref('')
const myPassword=ref('');




const login = async () => {
  try {
    if (myuserID.value === '' || myPassword.value === '') {
      alert('User ID and Password cannot be empty');
      return; // 如果有一个为空，直接返回，不执行后续逻辑
    }

    // 拼接请求URL
    const url = `http://localhost:8080/elm/UserController/getUserById?userId=${myuserID.value}`;

    // 发送 GET 请求获取用户信息
    const response = await axios.get(url);


    // 获取返回的用户信息
    const userInfo = response.data;
    if(userInfo===''){
      alert("未查询到此用户，请先注册");
    }else {

      // 检查密码是否匹配
      if (userInfo.password === myPassword.value) {
        // 密码匹配，跳转到 index 页面
        // 使用 router.replace('/index') 或其他你的路由跳转方式
        alert('Password matched! jumping to index...');
        router.push('/');
      } else {
        // 密码不匹配，处理逻辑（例如弹出错误提示）
        alert('Password does not match');
      }
    }
  } catch (error) {
    // 处理请求错误
    console.error('Error fetching user information:', error);
  }

};





</script>

<template>


  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>我的饿了么 用户登陆</title>
    <link rel="stylesheet" href="../../dist/output.css">
  </head>

  <header class="w-full h-24 bg-[#0097FFFF] text-white text-4xl fixed left-0 top-0 z-50 flex justify-center items-center">
    <p>用户登录</p>
  </header>
  <div class="w-full h-full">
    <div class="flex bg-[#0097FFF] w-full h-24 items-center justify-center">
      <div class=" text-4xl text-white ml-6">用户登录</div>
    </div>
    <ul class="w-full  h-24 mt-8 px-[3vw]">
      <li class="flex items-center  box-border pt-10  ">
        <div class="flex items-center text-2xl font-bold text-[#666666FF]">手机号码:</div>
        <div class="flex-1">
          <input class="w-full h-8 ml-4 text-2xl border-none outline-none" type="text" placeholder="手机号码" v-model="myuserID">
        </div>
      </li>
      <li class="flex items-center  box-border pt-10  ">
        <div class="flex items-center text-2xl font-bold text-[#666666FF]">密码:</div>
        <div class="flex-1">
          <input class="w-full h-8 ml-4 text-2xl border-none outline-none" type="text"  v-model="myPassword" placeholder="密码">
        </div>
      </li>
      <li class="w-full box-border flex flex-col  justify-center items-center">
        <div class="w-full h-30 flex flex-col   mr-12 justify-center items-center mt-10">
          <button class="w-full h-20 bg-[#38CA73FF] rounded-[4px]  text-3xl text-white font-bold justify-center items-center" @click="login">登录</button>
          <div class="w-full h-30 flex flex-col  justify-center items-center mt-10">
            <button class="w-full h-20 text-3xl font-bold text-[#666666FF] bg-[#DDDDDDFF] rounded-[4px] border-none outline-none" @click="toRegister">去注册</button>
          </div>
        </div>
      </li>
    </ul>


    <Footer></Footer>

  </div>


</template>

<style scoped>
ul {
  margin-left: 5vw;
  padding-left: 0;
}
</style>