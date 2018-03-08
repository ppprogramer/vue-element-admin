<template>
    <div class="article_list">
        <div slot="header">
            <div class="list_search">
                <el-form :inline="true"  class="demo-form-inline">
                    <el-form-item label="标题">
                        <el-input v-model="params.title" placeholder="标题"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                    <el-button type="success" @click="reset">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <el-table v-loading="loading" :data="tableData" border stripe style="width: 100%">
            <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
            <el-table-column prop="content" label="内容" show-overflow-tooltip></el-table-column>
            <el-table-column prop="source_author" label="作者"></el-table-column>
            <el-table-column label="日期">
                <template slot-scope="scope">
                    {{ createTime(scope.row) }}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="detail(scope.row)">详情</el-button>
                    <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.currentPage"
            :page-sizes="pagination.pageSizes"
            :page-size="pagination.pageSizes[0]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination.total">
        </el-pagination>
    </div>
</template>

<script>
import { articleIndex } from '@/api/article'
export default{
  name: 'articleList',
  data() {
    return {
      tableData: [],
      loading: true,
      params: {
        title: ''
      },
      pagination: {
        currentPage: 1,
        pageSizes: [10, 20, 30, 50],
        total: 1,
        pageParam: {
          page: 1,
          nub: 10
        }
      }
    }
  },
  created() {
    this.clean()
    this.init()
  },
  methods: {
    init() {
      this.loading = true
      var param = Object.assign({}, this.pagination.pageParam, this.params)
      articleIndex(param).then(response => {
        this.tableData = response.data.list.data
        this.pagination.total = response.data.list.total
        this.pagination.currentPage = response.data.list.currentPage
        this.loading = false
      })
    },
    detail(row) {
      this.$router.push({ path: '/article/show', query: { id: row.id }})
    },
    edit(row) {
      this.$router.push({ path: '/article/edit', query: { id: row.id }})
    },
    reset() {
      this.clean()
      this.search()
    },
    clean() {
      this.params = {
        title: ''
      }
    },
    search() {
      this.pagination.total = 1
      this.init()
    },
    handleSizeChange(val) {
      this.pagination.pageParam.nub = val
      this.pagination.pageParam.page = 1
      this.init()
    },
    handleCurrentChange(val) {
      this.pagination.pageParam.page = val
      this.init()
    },
    createTime(row) {
      if (row && row.create_time) {
        return this.moment(row.create_time * 1000).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
}
</script>

<style scoped>
.list_search{
  margin-left: 10px;
}
.article_list{
  margin-top: 20px;
}

</style>