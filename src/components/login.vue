<template>
  <div class="login">
    <div class="box">
      <!-- 标题 -->
      <h2>用户登录</h2>
      <!-- 登录页顶部的结构 -->
      <el-form label-position="top" label-width="80px">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.login {
  width: 100px;
//   利用弹性布局
display: flex;
justify-content: center;
align-items: center;
background-color: #324152;
.box{
    width: 550px;
    padding: 35px;
    border-radius: 10px;
    // 怪异盒模型 就是盒子的内敛
    box-sizing: border-box;
    height: 420px;
    background: white;
    .my-bat{
        width: 100%;
    }
}
}
</style>
