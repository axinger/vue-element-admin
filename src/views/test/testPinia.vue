<template>
  <div>
    <h3>home组件</h3>
    <p>pinia中的num：{{ test.num }}</p>
    <p>pinia中的price：{{ test.price }}</p>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

  </div>
</template>

<script>
// 引入pinia index导出的是Test
import Test from '@/store/test.js'
export default {
  components: {},
  props: {},
  data() {
    return {
      // 创建Test的pinia实例
      test: Test()
    }
  },
  methods: {

    increment() {
      this.test.num++
    },

    decrement() {
      this.test.num--
    }
  }
}
</script>

<style scoped lang="less"></style>
