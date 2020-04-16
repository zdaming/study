<template>
  <section class="dashboard-container">
    <panel-group />
    <el-row class="chart-rows">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row class="table-rows">
      <transaction-table />
    </el-row>
  </section>
</template>

<script>
import PanelGroup from './panelGroup'
import LineChart from './lineChart'
import TransactionTable from './transactionTable'
import userAPI from '@api/user'

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    TransactionTable
  },
  data () {
    return {
      lineChartData: {
        actualData: [120, 82, 91, 154, 162, 140, 145]
      }
    }
  },
  created () {
    this.test()
  },
  methods: {
    test () {
      userAPI.test({
        username: 'zdm',
        password: '123456'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .chart-rows {
    margin-bottom: 20px;
    padding: 20px 20px 0;
    background: #fff;
  }
  .table-rows {
    background-color: #fff;
  }
</style>
