<template>
  <div class="table-item">
    <table>
      <slot name="header" />
      <slot name="body" />
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableItem'
}
</script>
<style>
table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
}
</style>
