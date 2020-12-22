<template>
  <div class="to-input">
    <van-icon
      size="20"
      name="circle"
      style="color:--color"
    />
    <van-field
      custom-style="input"
      :value="value"
      @keydown.enter="handleEnter"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    backGround: {
      type: String,
      default: '#6B7FD0'

    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    handleInput (val) {
      this.$emit('update:value', val)
    },
    handleEnter (e) {
      if (this.value !== '') {
        this.$emit('keydown', e)
        this.handleInput('')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.to-input{
  display: flex;
  align-items: center;
  background-color:var(--background);
  overflow: hidden;
  border-radius: 2px;
  width: 100%;
  position: relative;
  ::v-deep{
    .van-cell{
      background-color: transparent;
    }
    .van-icon{
      margin-left: 10px;
    }
    .van-field__control{
      color:  #fff
    }
  }
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.2);
  }
}
</style>
