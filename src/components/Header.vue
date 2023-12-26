<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}

window.addEventListener('scroll', function() {
  let firstDiv = document.getElementById('location');
  let secondDiv = document.getElementById('search');

  let rect = firstDiv.getBoundingClientRect();

  if (rect.bottom <= 0) {
    secondDiv.classList.add('sticky', 'top-0');
  } else {
    secondDiv.classList.remove('sticky', 'top-0');
  }
});
</script>

<template>

<div class="w-full h-full">

  <el-header class=" bg-[#0097FF] w-full h-24 items-center fixed-header" id="location">
    <el-row :gutter="10" justify="center" align="middle" class="full-height el-row">
      <el-col>
        <svg class="transform scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2">
            <path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/>
            <path d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5c-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z"/>
          </g>
        </svg>
      </el-col>
      <el-col :span="12" class="text-white text-6xl font-bold full-height with-margin" style="font-size: 20px;">
        世界最高城理塘
      </el-col>
      <el-col >
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 32 32">
          <path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>

      </el-col>

    </el-row>


    <el-row  class="el-ro" id="search">
      <div class="w-full flex h-15 items-center justify-center bg-[#0097FF]  no-gap-row">
        <el-input v-model="input" placeholder="请输入内容"
                  class="bg-white h-10  w-11/12 flex rounded-md justify-center items-center text-gray-300 " >
         请输入商家或者美食
        </el-input>
      </div>

    </el-row>


  </el-header>


</div>


</template>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0097FF;



  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.full-height {

  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.with-margin {
  margin: 0 0px; /* 调整边距 */
}
.no-gap-row {
  margin-top: 0px; /* 调整为适当的负值 */
}
.el-ro{

  margin-top: 25vw;
  margin-bottom: 20px;
}


</style>