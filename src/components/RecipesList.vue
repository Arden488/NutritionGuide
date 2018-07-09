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
import axios from 'axios';

function collectData(data) {
  let newIngrArray = [];

  data.forEach((element, index, array) => {
    const promises = [];
  
    element.ingredients.forEach(i => {
      promises.push(
        axios.get(`http://localhost:3000/ingredients/${i.id}`)
      );
    });

    axios.all(promises).then(response => {
      response.forEach(el => {
        let amount = 0;
        let ingredientData;

        element.ingredients.forEach(e => {
          if(e.id === el.data.id) 
            ingredientData = e;
        });
        
        newIngrArray.push(`${el.data.title} (${ingredientData.amount} ${el.data.measure_unit})`);
      });

      array[index].ingredients = newIngrArray.join(', ');
    })
  });

  return data;
}

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/recipes")
      .then(response => {
        const data = response.data.slice();
        this.tableData = collectData(data);
      });
  }
}
</script>

<style></style>
