<template>
  <div>
    <h3>测试页面</h3>
    <button @click="pinia">pinia</button>

  </div>
</template>

<script>

export default {
  components: {},
  props: {},
  data() {
    return {

    }
  },
  methods: {

    pinia() {
      this.$router.push({
        path: '/test/testPinia'
      })
    }

  }
}
</script>

<style scoped lang="less"></style>
