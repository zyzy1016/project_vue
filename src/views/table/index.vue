<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="书名">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="作者">
        <template slot-scope="scope">
          {{ scope.row.author }}
        </template>
      </el-table-column>

      <el-table-column>
        <el-popover v-model="visible" placement="top" width="160">
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
          <el-button slot="reference">删除</el-button>
        </el-popover>
      </el-table-column>

      <el-table-column label="是否删除">
        <template slot-scope="scope">
          {{ scope.row.is_delete ? '是' : '否' }}
        </template>
      </el-table-column>
      <!-- <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
// import { getList } from '@/api/table'
import { getBookList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      visible: false
    }
  },
  created() {
    // this.fetchData()
    this.fetchBook()
  },
  methods: {
    // fetchData() {
    //   this.listLoading = true
    //   getList().then(response => {
    //     this.list = response.data.results
    //     this.listLoading = false
    //   })
    // },
    fetchBook() {
      this.listLoading = true
      getBookList().then(response => {
        this.list = response.data.results
        this.listLoading = false
      })
    }
  }
}
</script>
