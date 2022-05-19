<template>
  <thead>
    <tr>
      <th
        v-for="(item, key) in columns"
        :key="key"
      >{{ item.title }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    columns: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style>
 th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
</style>
