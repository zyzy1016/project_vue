<template>
    <div class="m-steps-area" :style="`width: ${totalWidth}px;`">
      <div class="m-steps">
        <div :class="['m-steps-item',
            {
              'finished': current > n,
              'process': current === n && n !== totalSteps,
              'last-process': current === totalSteps && n === totalSteps,
              'middle-wait': current < n && n !== totalSteps,
              'last-wait': current < n && n === totalSteps
            }
          ]"
          v-for="n in totalSteps"
          :key="n">
          <div class="m-info-wrap" @click="onChange(n)">
            <div class="m-steps-icon">
              <span class="u-icon" v-if="current<=n">{{ n }}</span>
              <svg class="u-icon" v-else viewBox="64 64 896 896" data-icon="check" aria-hidden="true" focusable="false"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
            </div>
            <div class="m-steps-content">
              <div class="u-steps-title">{{ stepsLabel[n-1] }}</div>
              <div class="u-steps-description" v-show="stepsDesc[n-1]" :style="`max-width: ${descMaxWidth}px;`">{{ stepsDesc[n-1] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'Steps',
    props: {
      stepsLabel: { // 步骤标题数组
        type: Array,
        default: () => {
          return []
        }
      },
      stepsDesc: { // 步骤描述数组
        type: Array,
        default: () => {
          return []
        }
      },
      totalSteps: { // 步骤总数
        type: Number,
        default: 3
      },
      currentStep: { // 当前选中的步骤
        type: Number,
        default: 1
      },
      totalWidth: { // 步骤条总宽度
        type: Number,
        default: 900
      },
      descMaxWidth: { // 描述文本最大宽度
        type: Number,
        default: 140
      }
    },
    data () {
      return {
        // 若当前选中步骤超过总步骤数，则默认选择步骤1
        current: this.currentStep > this.totalSteps ? 1 : this.currentStep
      }
    },
    methods: {
      onChange (index) { // 点击切换选择步骤
        // e.stopPropagation()
        console.log('index:', index)
        if (this.current !== index) {
          this.current = index
          this.$emit('change', index)
        }
      }
    }
  }
  </script>
  <style lang="less" scoped>
  @themeColor: #1890FF;
  .m-steps-area {
    margin: 0px auto;
    .m-steps {
      padding: 30px 0;
      display: flex;
      .m-steps-item {
        display: inline-block;
        overflow: hidden;
        font-size: 16px;
        line-height: 32px;
        &:not(:last-child) {
          margin-right: 16px;
          flex: 1; // 弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容
        }
        .m-info-wrap {
          display: inline-block;
          cursor: pointer;
          .m-steps-icon {
            display: inline-block;
            margin-right: 8px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            text-align: center;
          }
          .m-steps-content {
            display: inline-block;
            vertical-align: top;
            .u-steps-title {
              position: relative;
              display: inline-block;
              padding-right: 16px;
            }
            .u-steps-description {
              font-size: 14px;
              word-wrap: break-word;
            }
          }
        }
      }
      .u-tail {
        background: #e8e8e8;
        position: absolute;
        top: 16px;
        left: 100%;
        display: block;
        width: 3000px;
        height: 1px;
        content: "";
      }
      .finished {
        &:hover {
          .m-steps-content {
            .u-steps-title {
              color: @themeColor;
            }
            .u-steps-description {
              color: @themeColor;
            }
          }
        }
        .m-steps-icon {
          background: #fff;
          border: 1px solid rgba(0,0,0,.25);
          border-color: @themeColor;
          .u-icon {
            fill: @themeColor;
            width: 16px;
            height: 16px;
            vertical-align: top;
            margin-top: 8px;
          }
        }
        .m-steps-content {
          color: rgba(0,0,0,.65);
          .u-steps-title {
            color: rgba(0,0,0,.65);
            &:after {
              .u-tail();
              background: @themeColor;
            }
          }
          .u-steps-description {
            color: rgba(0,0,0,.45);
          }
        }
      }
      .process {
        .m-steps-icon {
          background: @themeColor;
          border: 1px solid rgba(0,0,0,.25);
          border-color: @themeColor;
          .u-icon {
            color: #fff;
          }
        }
        .m-steps-content {
          color: rgba(0,0,0,.65);
          .u-steps-title {
            font-weight: 600;
            color: rgba(0,0,0,.85);
            &:after {
              .u-tail();
            }
          }
          .u-steps-description {
            color: rgba(0,0,0,.65);
          }
        }
      }
      .last-process {
        .m-steps-icon {
          background: @themeColor;
          border: 1px solid rgba(0,0,0,.25);
          border-color: @themeColor;
          .u-icon {
            color: #fff;
          }
        }
        .m-steps-content {
          color: rgba(0,0,0,.65);
          .u-steps-title {
            font-weight: 600;
            color: rgba(0,0,0,.85);
          }
          .u-steps-description {
            color: rgba(0,0,0,.65);
          }
        }
      }
      .middle-wait {
        &:hover {
          .m-steps-icon {
            border: 1px solid @themeColor;
            .u-icon {
              color: @themeColor;
            }
          }
          .m-steps-content {
            .u-steps-title {
              color: @themeColor;
            }
            .u-steps-description {
              color: @themeColor;
            }
          }
        }
        .m-steps-icon {
          background: #fff;
          border: 1px solid rgba(0,0,0,.25);
          .u-icon {
            color: rgba(0,0,0,.25);
          }
        }
        .m-steps-content {
          color: rgba(0,0,0,.65);
          .u-steps-title {
            color: rgba(0,0,0,.45);
            &:after {
              .u-tail();
            }
          }
          .u-steps-description {
            color: rgba(0,0,0,.45);
          }
        }
      }
      .last-wait {
        margin-right: 0;
        &:hover {
          .m-steps-icon {
            border: 1px solid @themeColor;
            .u-icon {
              color: @themeColor;
            }
          }
          .m-steps-content {
            .u-steps-title {
              color: @themeColor;
            }
            .u-steps-description {
              color: @themeColor;
            }
          }
        }
        .m-steps-icon {
          background: #fff;
          border: 1px solid rgba(0,0,0,.25);
          .u-icon {
            color: rgba(0,0,0,.25);
          }
        }
        .m-steps-content {
          color: rgba(0,0,0,.65);
          .u-steps-title {
            color: rgba(0,0,0,.45);
          }
          .u-steps-description {
            color: rgba(0,0,0,.45);
          }
        }
      }
    }
  }
  </style>