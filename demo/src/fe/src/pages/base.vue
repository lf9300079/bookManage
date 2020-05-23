<template>
  <el-container>
    <el-header>图书管理</el-header>
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu default-active="1">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <router-link to="/base/index">热门书籍</router-link>
            </el-menu-item>

            <el-menu-item  index="2">
              <i class="el-icon-star-on"></i>
              <router-link to="/base/book">图书分类</router-link>
            </el-menu-item>

            <el-menu-item disabled  index="3" >
              <i class="el-icon-document"></i>
              <router-link to="/base/book1">我的书架</router-link>
            </el-menu-item>

            <el-menu-item disabled index="4">
              <i class="el-icon-setting"></i>
              <router-link to="/base/book2">个人中心</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-main>

        <transition>
          <router-view/>
        </transition>

      </el-main>

    </el-container>
  </el-container>
</template>

<script>
//  import { mapstate,mapMutations } from 'vuex'

  export default {
    data () {
      return {

      }
    },
    mounted() {
      this.isLogin();
    },
    methods: {
      isLogin() {
        if(!this.$store.state.isLogin) {
          this.$store.commit('saveUser',JSON.parse(sessionStorage.getItem("user")));
//          this.$store.commit('update',true);
        }
      }

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    line-height: 100%;
    /*margin: 0;*/
    /*padding: 0;*/
  }
  .router-link-active {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
</style>
