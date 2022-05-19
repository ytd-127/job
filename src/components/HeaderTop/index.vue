<template>
  <div class="header-container">
    <div>
      <div>
        <input v-permission="['admin']" type="text" placeholder="我是input" />
        <select v-permission="['admin']" name="" id="">
          <option value="">我是select</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js"; // 权限判断指令
import checkPermission from "@/utils/permission"; // 权限判断函数
export default {
  name: "Header",
  data() {
    return {
      key: 1, // 为了能每次切换权限的时候重新初始化指令
    };
  },
  directives: {
    permission,
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++;
    },
  },
};
</script>

<style scoped>
.header-container {
  background: red;
  width: 100%;
  height: 100px;
}
</style>