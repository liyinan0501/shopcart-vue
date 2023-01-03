<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light">-</button>
    <input type="number" class="form-control inp" v-model="cObj.goods_count" />
    <button type="button" class="btn btn-light">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cObj: this.obj,
    };
  },
  props: {
    obj: Object,
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
