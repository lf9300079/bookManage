<template>
  <el-dialog :title="title" :close-on-click-modal="false" :visible="dialogVisible" @close="onClose" width="580px" append-to-body>
    <el-form :model="form" label-width="120px" ref="data" size="medium" :rules="rules">
      <el-form-item label="书籍标识" prop="bookId">
      <el-input v-model="form.bookId" :disabled="isEdit" auto-complete="off" placeholder="请输入书籍标识"></el-input>
      </el-form-item>
      <el-form-item label="书籍名称" prop="bookName">
        <el-input v-model="form.bookName" clearable auto-complete="off" placeholder="请输入书籍名称"></el-input>
      </el-form-item>
      <el-form-item label="书籍编码" prop="bookNbr">
        <el-input v-model="form.bookNbr" clearable auto-complete="off" placeholder="请输入书籍编码"></el-input>
      </el-form-item>
      <el-form-item label="上架时间" prop="uptime">
        <el-date-picker
          v-model="form.uptime"
          type="datetime"
          placeholder="选择上架时间">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" align="center">
      <el-button type="primary" @click="confirm()" >保存</el-button>
      <el-button  @click="dialogVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import http from '@/api/login'
  import * as rule from '@/api/rules'
  export default {
    props: ['data'],
    data() {
      return {
        form: {
          bookId: null,
          bookName: null,
          bookNbr: null,
          uptime: null,
        },
        title: '',
        isEdit: null,
        dialogVisible: true,
        rules: {
          bookId: [
            {required: true, message: '请输入书籍标识', trigger: 'blur'},
//            {min: 0, max: 30, message: '书籍标识长度不能大于30', trigger: 'blur'},
            {validator: this.validateBook, trigger: ['blur', 'change']},
          ],
          bookName: [
            {required: true, message: '请输入书籍名称', trigger: 'blur'},
            {min: 0, max: 30, message: '书籍名称长度不能大于30', trigger: 'blur'}
          ],
          bookNbr: [
            {required: true, message: '请输入书籍编码', trigger: 'blur'},
            {min: 0, max: 30, message: '书籍编码长度不能大于30', trigger: 'blur'}
          ],
          uptime: [
            {required: true, message: '请选择上架时间', trigger: 'blur'},
          ],
        },
      }
    },
    mounted() {
      console.log("弹出层;---" + JSON.stringify(this.data));
      if (this.data && Object.keys(this.data).length > 0) {
        this.title = '书籍修改'
        this.isEdit = true
        this.form = this.data
      } else {
        this.isEdit = false
        this.title = '书籍新增'
      }
    },
    methods: {
      onClose() {
        this.$emit('resolve', 'dismiss')
      },
      confirm() {
            if (this.isEdit) {
              this.update(this.form)
            } else {
              this.$refs['data'].validate(valid => {
                if (valid) {
              this.save(this.form)
            }
              })
          }


      },
      validateBook(rule, value, callback) {
        if(!this.isEdit) {
          if (value.trim()) {
            http.validateBook(value).then(r => {
              if (r.data === '') {
                callback()
              } else {
                  callback(new Error('书籍标识已存在，请重新输入'))
              }
            })
          } else {
            callback(new Error('请输入书籍标识'))
          }
        }

      },

      save(params) {
        this.$confirm('确定新增？', '新增书籍', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(r => {
          http.save(params).then(res => {
            this.$emit('resolve', 'close')
            if (res.data) {
              this.$message({
                message: '新增成功!',
                type: 'success'
              })
            } else {
              this.$message({
                message: '新增失败',
                type: 'error'
              })
            }
          })
        })
      },
      update(params) {
        this.$confirm('确定修改？', '修改书籍', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(r => {
          http.update(params).then(r => {
            this.$emit('resolve', 'close')
            this.$message({
              message: '修改成功!',
              type: 'success'
            })
          })
        })
      }



    }

  }
</script>

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped lang="scss">-->
<!--</style>-->
