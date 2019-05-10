<template>
  <div>
    <p>首页</p>
    <Footers :active="2"></Footers>
  </div>
</template>

<script>
import Footers from '@/component/footer'

export default {
  

  data() {
    return {
    }
  },
	components: {
  	Footers
  },
  computed: {
  },

  methods: {
    
  }
};
</script>

<style lang="less">

</style>
