<template>
  <div class="login">
    <div class="box">
      <!-- 标题 -->
      <h2>用户登录</h2>
      <!-- 登录页顶部的结构 -->
      <el-form
        label-position="top"
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit(loginForm)">登录</el-button>
          <el-button type="success" @click="resetForm(loginForm)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      //表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 表单验证  验证规则和表单是平级的
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trugger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trugger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符", trigger: "blur" }
        ]
      }
    };
  },
  //  方法
  methods: {
    // 表单提交
    submit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 成功提交
          let res = await this.$axios.post("login", this.loginForm);
          console.log(res);

          if (res.data.meta.statys === 400) {
            this.$message.success(res.data.meta.msg);
          } else if (this.$message.error(res.data.meatus === 200)) {
            //  缓存数据
            window.sessionStorage.setItem("token", res.data.data.token);
            //   跳转到主页
            this.$router.push("/");
          }
        } else {
          // 失败
          this.$message.error("数据格式错误,请根据提示修改");
          return false;
        }
      });
    },
    // 重置表单   获取饿了么表单 调用 重置方法
    resetForm(formName) {
      this.$refs[formName].resetFields;
    }
  }
};
</script>

<style lang='scss'>
.login {
  height: 100%;
  //   利用弹性布局
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #324152;
  .box {
    width: 550px;
    padding: 35px;
    border-radius: 10px;
    // 怪异盒模型 就是盒子的内敛
    box-sizing: border-box;
    height: 420px;
    background: white;
    .my-btn {
      width: 100%;
    }
  }
}
</style>

