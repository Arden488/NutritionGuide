<template>
  <el-menu
    :router="true" 
    :default-active="'1'"
    class="header-navigation"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item 
      class="header-navigation__item" 
      index="1" 
      :route="'/'"
    >
      Обзор недели
    </el-menu-item>
    <el-menu-item 
      index="2"
      :route="'/recipes'"
      class="header-navigation__item"
    >
      Рецепты
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'navigation',
}
</script>

<style>
.header-navigation__item {
  text-decoration: none;
}
</style>
