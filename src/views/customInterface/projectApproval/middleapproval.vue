<template>
  <div class="app-container">
    <middle-project-table></middle-project-table>
  </div>
</template>

<script>
import middleProjectTable from '@/views/customInterface/projectApproval/departmentTable/middleProjectTable'
export default {
  name: "departmentApproval",
  components: {
    middleProjectTable
  },
  data(){
    return{
      type_select_value: ''
    }
  },
  methods: {
    changeZiZhi: function () {

    }
  }
}
</script>

<style scoped>

</style>
