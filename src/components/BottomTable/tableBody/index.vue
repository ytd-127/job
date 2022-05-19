<template>
  <tbody>
    <tr
      v-for="(row, key1) in data"
      :key="key1"
    >
      <td
        v-for="(col, key2) in columns"
        :key="key2"
      >
        {{ row[col.key] }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TableBody',
  props: {
    columns: {
      type: Array,
      require: true,
      default: () => []
    },
    data: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style>
  td{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
</style>
