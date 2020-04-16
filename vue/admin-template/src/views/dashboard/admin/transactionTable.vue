<template>
  <el-table :data="list">
    <el-table-column label="订单编号">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="价格" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.price | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="状态" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: 'TransactionTable',
  filters: {
    statusFilter (status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter (str) {
      return str.substring(0, 30)
    }
  },
  data () {
    return {
      list: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.list = []
      let data = {
        order_no: 'Ff9edACE-764D-d08f-D4Dd-117C77',
        price: '12854.60',
        status: 'success'
      }
      for (let i = 0; i < 4; i++) {
        this.list.push(data)
      }
      data = {
        order_no: '648Bd4BA-49d1-D4ca-5ED8-fCB2EB',
        price: '8790.37',
        status: 'pending'
      }
      for (let i = 0; i < 4; i++) {
        this.list.push(data)
      }
    }
  }
}
</script>
