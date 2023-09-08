<template>
  <div>
    <h3>测试页面</h3>
    <button @click="pinia">pinia</button>

    <el-input v-model="text" label="文字" />

    <router-link to="/test/testPinia">
      <el-button type="primary" size="small" icon="el-icon-edit">
        Edit
      </el-button>
    </router-link>

  </div>
</template>

<script>

export default {
  name: 'TestPage2',
  components: {},
  props: {},
  data() {
    return {

      text: null
    }
  },

  created() {
    console.log('created======================')
  },

  mounted() {
    console.log('mounted======================')
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
