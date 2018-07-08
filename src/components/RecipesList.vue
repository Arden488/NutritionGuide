<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="title"
        label="Recipe title"
        width="250">
      </el-table-column>
      <el-table-column
        prop="ingredients"
        label="Ingredients">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '1',
        title: 'Spaghetti',
        ingredients: 'One, two, three'
      }, {
        id: '1',
        title: 'Spaghetti',
        ingredients: 'One, two, three'
      }, {
        id: '1',
        title: 'Spaghetti',
        ingredients: 'One, two, three'
      }]
    }
  }
}
</script>

<style></style>
