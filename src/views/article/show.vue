<template>
  <div class="article_detail">
    <el-form :model="form" v-loading="loading" ref="form" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :lg="6" :md="12" :sm="16">
          <el-form-item label="标题：">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="14" :md="12" :sm="16">
          <el-form-item label="内容：">
            <div class="editor-container">
              <tinymce :height=400 ref="editor" v-model="form.content"></tinymce>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :lg="6" :md="12" :sm="16">
          <el-form-item>
            <router-link :to="{ path: '/article/index'}">
              <el-button >取消</el-button>
            </router-link>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { articleShow } from '@/api/article'
import Tinymce from '@/components/Tinymce'
export default {
  name: 'articleShow',
  components: { Tinymce },
  data() {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.loading = true
      articleShow({ id: this.$route.query.id }).then(response => {
        if (response.data.code === 0) {
          this.form = {
            title: response.data.data.title,
            content: response.data.data.content
          }
          this.loading = false
        } else if (response.data.code === -1) {
          this.$notify({
            title: '警告',
            message: response.data.msg,
            type: 'warning'
          })
          this.$router.back(-1)
        }
      })
    }
  }
}
</script>

<style scoped>
.article_detail{
  margin-top: 20px;
}
</style>
