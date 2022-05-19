<template>
  <div class="text-continer">
    <switch-roles @change="handleRolesChange" />

    <header-top :key="key" style="margin-top: 30px"></header-top>


    <table-item>
      <template #header>
        <table-header :columns="columns" />
      </template>
      <template #body>
        <table-body :columns="columns" :data="data" />
      </template>
    </table-item>
  </div>
</template>

<script>
import SwitchRoles from "./components/SwitchRoles";
import HeaderTop from "@/components/HeaderTop/index.vue";



import tableItem from "@/components/BottomTable/tableItem/index.vue";
import tableHeader from "@/components/BottomTable/tableHeader/index.vue";
import tableBody from "@/components/BottomTable/tableBody/index.vue";
import queryData from "./queryData";
export default {
  components: {
    SwitchRoles,
    HeaderTop,

    tableItem,
    tableHeader,
    tableBody,
  },
  mixins: [queryData],
  data() {
    return {
      key: 1, // 为了能每次切换权限的时候重新初始化指令
      columns: null,
      data: null,
    };
  },
  directives: {},
  methods: {
    handleRolesChange() {
      this.key++;
    },
  },
};
</script>

<style>
</style>