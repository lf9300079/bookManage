<template>
  <el-container>
      <el-header>图书管理</el-header>
        <el-main>
          <el-card class="box-card">
            <el-form :model="user" label-width="80px" :rules="rules">
              <el-row>
                <el-col >
                  <el-form-item label="用户名: " prop="id">
                    <el-input v-model="user.id" placeholder="请输入用户名"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col >
                  <el-form-item label="密码: " prop="password">
                    <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-button type="button" @click="login()" >登录</el-button>
            </el-form>
          </el-card>
        </el-main>
  </el-container>

</template>

<script>
  import http from '@/api/login'
  import * as rule from '@/api/rules'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        form: {},
        user: {
          id: null,
          password: "",
        },
        rules: {
          id: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 0, max: 30, message: '用户名长度不能大于30', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 0, max: 30, message: '密码长度不能大于30', trigger: 'blur'}
          ],
        },
      }
    },
    methods : {
      //get方式请求
      login() {
        console.log("11111" + this.user);
        if(this.user.id === null || this.user.password === null) {
          this.$message.warning('用户名或密码不能为空');
        }else {
          http.login(this.user).then(r => {
            if (r.data) {
              this.$message.success('登录成功');
              this.$store.commit('saveUser', this.user);
              this.$store.commit('saveToken', r.data);

              this.toIndex(this.user);
            } else {
              this.$message.warning('用户名或密码错误');
            }
          })
        }
      },
      // 登录成功跳转到首页
      toIndex(data){
        this.$router.push({
            path: 'base/index',
          }
        )
      },

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .box-card {
    width: 30%;
    margin-left: 35%;
  }
</style>
