<template>
  <div class="my-header" :style="{ backgroundColor: background, color }">
    {{ title }}
  </div>
</template>

<script>
// Header 组件自定义
// 自定义：背景色，文字颜色，文字内容
// 对props的变量值进行校验
export default {
  props: {
    background: String,
    color: {
      type: String,
      default: "#fff",
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
