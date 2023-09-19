<template>
  <div class="dashboard-container">
    <div class="dashboard-text">username: {{ username }}</div>
    <div class="dashboard-text">role: {{ role }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getInfo } from '@/api/user'

export default {
  name: 'Dashboard',
  data() {
    return {
      username: '',
      role: ''
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created: function() {
    console.log('created')
    this.loadInfo()
  },
  methods: {
    loadInfo() {
      console.log('loadInfo')
      getInfo().then(response => {
        console.log('getInfo')
        this.username = response.data.username
        this.role = response.data.roles[0]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
