<!-- <template>
  <div>
    <ProgressBar :progress="progress" />
    <button @click="increaseProgress">增加进度</button>
    <button @click="zeroProgress">进度清零</button>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    increaseProgress() {
      if (this.progress < 100) {
        this.progress += 10;
      }
    },
    zeroProgress(){
      this.progress = 0;
    }
  },
};
</script> -->
<template>
  <div>
    <Steps
      :currentStep="3"
      :totalSteps="5"
      :stepsLabel="stepsLabel"
      :stepsDesc="stepsDesc"
      :totalWidth="900"
      :descMaxWidth="160"
      @change="onChange" />
  </div>
</template>

<script>
import Steps from './Steps.vue'
  export default {
    components: {
    Steps
},
data () {
    return {
      stepsLabel: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
      stepsDesc: ['description 1', 'description 2', 'description 3', 'description 4', 'description 5']
    }
},
methods: {
    onChange (index) { // 父组件获取切换后的选中步骤
      console.log('current:', index)
    }
}
  }
</script>

<style lang="scss" scoped>

</style>



