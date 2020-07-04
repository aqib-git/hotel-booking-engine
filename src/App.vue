<template>
  <div id="app">
    <IbeLite/>
  </div>
</template>

<script>

  import IbeLite from "./components/IbeLite";
export default {
  components: {
    IbeLite
  },
  name: 'App',

}
</script>

<style>
.el-date-editor.el-input__inner,
.el-range-editor .el-range-input {
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.el-date-editor--daterange.is-active {
   background-color: white;
}
.el-date-editor--daterange.is-active .el-range-input {
  background-color: white;
}

.el-date-editor .el-range-separator {
  width: 6%;
}
</style>
