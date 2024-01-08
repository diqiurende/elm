<script setup>
import Footer from "@/components/Footer.vue";
import { useRouter } from 'vue-router';
const router = useRouter()
import qs from "qs";
import axios from "axios";



const user = {
  userId: '',
  password: '',
  userName: '',
  userSex: 1
};

let confirmPassword = '';


const checkUserId = async () => {
  if (user.userId === '') {
    alert('手机号码不能为空！');
    return;
  }
  if (user.password === '') {
    alert('密码不能为空！');
    return;
  }
  if (user.password !== confirmPassword) {
    alert('两次输入的密码不一致！');
    return;
  }
  if (user.userName === '') {
    alert('用户名不能为空！');
    return;
  }

  try {
    // 拼接请求URL


    const response = await axios.post(`http://localhost:8080/elm/UserController/saveUser`,user);

    // 获取返回的用户信息
    const userInfo = response.data;
    alert(userInfo)
    router.push('/login')
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>我的饿了么 用户注册</title>
  <link rel="stylesheet" href="../../dist/output.css">
  <link rel="stylesheet" href="../assets/main.css">
</head>
<body>
<div class="w-full h-full">

  <!--header部分-->
  <header class="w-full h-24 bg-[#0097EFFF] text-white text-4xl fixed  top-0 z-50 flex justify-center items-center">
    <p class="">用户注册</p>
  </header>

  <!--表单部分-->
  <ul class="mt-24 w-full ">
    <li class="box-border pt-[6vw] px-[3vw] pb-0 flex flex-row">
      <div class="flex-shrink-0 flex-grow-0 flex-basis-18[vw] text-2xl font-bold text-[#666666FF]" >
        手机号码：
      </div>
      <div class="flex ">
        <input class="border-none outline-none w-full h-8 text-2xl ml-4" type="text" v-model="user.userId" placeholder="手机号码">
      </div>
    </li>
    <li class="box-border pt-[6vw] px-[3vw] pb-0 flex flex-row">
      <div class="flex-shrink-0 flex-grow-0 flex-basis-18[vw] text-2xl font-bold text-[#666666FF]">
        密码：
      </div>
      <div class="flex flex-1">
        <input class="border-none outline-none w-full h-8 text-2xl ml-4" type="password" placeholder="密码" v-model="user.password">
      </div>
    </li>
    <li class="box-border pt-[6vw] px-[3vw] pb-0 flex flex-row">
      <div class="flex-shrink-0 flex-grow-0 flex-basis-18[vw] text-2xl font-bold text-[#666666FF]">
        确认密码：
      </div>
      <div class="flex flex-1">
        <input class="border-none outline-none w-full h-8 text-2xl ml-4" type="password" placeholder="确认密码" v-model="confirmPassword">
      </div>
    </li>
    <li class="box-border pt-[6vw] px-[3vw] pb-0 flex flex-row">
      <div class="  text-2xl font-bold text-[#666666FF]">
        用户姓名：
      </div>
      <div class="flex ">
        <input class="border-none outline-none w-full h-8 text-2xl ml-4" type="password" placeholder="用户姓名" v-model="user.userName">
      </div>
    </li>
    <li class="box-border pt-[6vw] px-[3vw] flex ">
      <div class="  text-2xl font-bold text-[#666666FF]">
        性别：
      </div>
      <div class="flex flex-1" style="font-size:3vw;">
        <input class="ml-20" type="radio" v-model="user.userSex" name="sex" checked style="width:6vw;height: 3.2vw;">男
        <input class="ml-16" type="radio" v-model="user.userSex" name="sex" style="width:6vw;height: 3.2vw;">女
      </div>
    </li>
    <div class="w-full  h-30 flex box-border pt-[4vw] px-[3vw] justify-center items-center">
      <button class="w-full h-20 text-3xl font-bold text-white bg-[#38CA73FF] rounded-[4px]" @click="checkUserId">注册</button>
    </div>
  </ul>

  <!--底部菜单部分-->
  <Footer></Footer>
</div>
</body>
</html>
</template>

<style scoped>
ul{
  padding: 1vw;
}

</style>