<template>
  <!-- 整体容器 -->
  <el-container class="index-container">
    <!-- 头部 -->
    <el-header class="my-header">
      <el-row>
        <el-col :span="4">
          <img src="../assets/logo.png" alt>
        </el-col>
        <el-col :span="18">
          <h2>牛逼的车车网</h2>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="logout">退出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="my-container">
      <!-- 侧边栏 -->
      <el-aside class="my-aside" width="200px">
        <!-- 使用饿了么ui的 导航菜单实现 -->
        <el-menu router default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="users">
              <span class="el-icon-menu"></span> 选项1
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体区域 -->
      <el-main class="my-main">
        <!-- 出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  methods: {
    logout(){
      // 删除缓存
      window.sessionStorage.removeItem("taken");
      // 样式编程  去登陆页
      this.$router.push('/login')
    }
  },
  // 这里因为不需要组件中的数据,只是缓存数据 跟组件无关 尽可能早
  beforeCreate() {
    if(window.sessionStorage.getItem("token")){

    }else{
      this.$message.error("老铁,记得登录");
      this.$router.push("/login");
    }
  },
};
</script>

<style lang='scss'>
.index-container {
  height: 100%;
  // display: flex;
  // flex-direction: column;
  .my-header {
    height: 60px;
    background: #b3c0d1;
    line-height: 60px;
    h2 {
      margin: 0;
      padding: 0;
      text-align: center;
    }
  }
  .my-container {
    flex: 1;
    .my-aside {
      background: skyblue;
    }
    .my-main {
      background-color: #e9eef3;
      padding-top: 0;
    }
  }
}
</style>
