<template>
  <el-container class="is-vertical">
    <el-main>
      <el-card class="base-table-card">
        <el-form :inline="true" >
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">图书管理</el-breadcrumb-item>
            <el-breadcrumb-item>图书分类</el-breadcrumb-item>
          </el-breadcrumb>
        </el-form>
        <el-divider></el-divider>
        <el-form label-width="100px">
          <el-row>
            <el-col :span="6">
              <el-form-item label="类型名称：" prop="bookName">
                <el-input v-model="form.bookName"   clearable placeholder="请输入类型名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="类型编码：" prop="bookNbr">
                <el-input v-model="form.bookNbr"   clearable placeholder="请输入类型编码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item>
                <el-button @click="getBookList()" type="primary">查询</el-button>
                <el-button type="primary" @click="onOpen('add')">新增</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-divider></el-divider>
        <el-table :data="tableData" v-loading="loading" style="width: 100%;" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="bookId" label="类型标识"></el-table-column>
          <el-table-column prop="bookName" label="类型名称"></el-table-column>
          <el-table-column prop="bookNbr" label="类型编码"></el-table-column>
          <el-table-column prop="uptime" :formatter="dateFormat" label="上架时间"></el-table-column>
          <el-table-column label="操作" :show-overflow-tooltip="false" width="150" align='center'>
            <template slot-scope="scope">
              <el-button type="text" @click="onOpen('edit', scope.row)" >编辑</el-button>
              <el-button type="text" @click="onDelete(scope.row)" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-row  v-if="tableData && tableData.length!=0">
          <el-col :span="1" class="text-left">
            <el-button type="primary" size="mini" :disabled="bookIds.length === 0" @click="batchDelete">
              批量删除
            </el-button>
          </el-col>
          <el-col :span="24" >
            <el-pagination @current-change="onPageChange"
                           @size-change="onSizeChange"
                           :page-size="page.pageSize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :current-page="page.pageNow"
                           :total="page.total"
                           class="page">
            </el-pagination>
          </el-col>
        </el-row>

      </el-card>
    </el-main>
    <dialog-open v-if="showDialog" :data="book" @resolve="onResolve"></dialog-open>
  </el-container>
</template>

<script>
  import http from '@/api/login'
  import clone from 'lodash'
  import * as date from '@/api/date-format'
  import dialogOpen from './dialog/form'

  export default {
    name: 'Index',
    components: {dialogOpen},
    data () {
      return {
        tableData: [],
        loading: false,
        attrIds: [],
        multipleSelection: [],
        user: {
          id: null,
        },
        form: {
          bookId: null,
          bookName: null,
          bookNbr: null,
        },
        page: {
          pageNow: 1,
          pageSize: 10,
          total: 0
        },
        book: {},
        showDialog: false,
        bookIds: [],

      }
    },
    mounted() {
      this.user = this.$store.state.user;
//      console.log("---isLogin--" + this.$store.state.isLogin);
//      console.log("---200--" + JSON.stringify(this.$store.state.user));

      //根据登录id查询相应书籍
      this.getBookList();
    },
    methods : {
      dateFormat: date.formatInTable('YYYY-MM-DD HH:mm:ss'),

      onSizeChange(size) {
        this.page.pageSize = size
        this.getBookList()
      },
      onPageChange(pageNow) {
        this.page.pageNow = pageNow
        this.getBookList()
      },

      //get方式请求
      getBookList() {
        this.loading = true;
        if (this.form.bookName !== null) {
          this.form.bookName = this.form.bookName.replace(/\s*/g, '');
        }
        if (this.form.bookNbr !== null) {
          this.form.bookNbr = this.form.bookNbr.replace(/\s*/g, '');
        }
        http.getBookList({
          bookId: this.form.bookId,
          bookName: this.form.bookName,
          bookNbr: this.form.bookNbr,
        }).then(r => {
          this.loading = false;
//          console.log("查询结果：-" + JSON.stringify(r));
          if(r.data !== null) {
            this.page.total = r.data.length;
            this.tableData = r.data;
          }else{
            this.$message.success(' 查询结果为空');
          }
        })
      },
      onOpen(type, data) {
//        console.log("data---" + JSON.stringify(data))
        this.book = {}
        switch (type) {
          case 'add':
            this.showDialog = true
            break
          case 'edit':
            this.book = clone.clone(data)
            this.showDialog = true
            break
        }
      },

      onDelete(data) {
        this.$confirm('确定删除该书籍？', '删除书籍', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(r => {
          http.delete(data.bookId).then(r => {
            this.getBookList();

          })
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '已取消删除操作!'
          })
        })
      },
      batchDelete() {
        this.$confirm('确定批量删除该书籍？', '批量删除书籍', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(r => {
          http.batchDelete({bookIds: this.bookIds}).then(r => {
            this.getBookList();
          })
        }).catch(() => {
          this.$message({
            type: 'success',
            message: '已取消批量删除操作!'
          })
        })

      },

      handleSelectionChange(val) {
        this.multipleSelection = val
        this.bookIds = []
        for (let index in this.multipleSelection) {
          this.bookIds.push(this.multipleSelection[index].bookId)
        }
      },
      onResolve(type, data) {
        switch (type) {
          case 'dismiss':
            this.showDialog = false
            break
          case 'close':
            this.showDialog = false
            this.getBookList()
            break
        }
      }



    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
