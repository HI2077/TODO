<template>
  <div
    ref="item"
    class="to-mission-item"
    :date-s="item"
    @mousedown.stop="show(item,$event)"
  >
    <van-icon
      size="20"
      :name="item.isComplete ? 'certificate' : 'circle'"
      @click="complete(item.id)"
    />
    <div class="content">
      {{ item.content }}
    </div>
    <van-icon
      size="20"
      :name="item.isImportant ? 'star color' : 'star-o'"
      @click="mark(item.id)"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    ...mapMutations(['switchMissionImportantById', 'switchMissionStateById']),
    complete (id) {
      this.switchMissionStateById(id)
    },
    mark (id) {
      this.switchMissionImportantById(id)
    },
    show (item, e) {
      if (e.button === 2) {
        this.$emit('rightClick', e, item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.to-mission-item {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  &:hover{
    background-color: #F5F5F5;
  }
  .content {
    margin-left: 10px;
    -webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;        /* OLD - Firefox 19- */
    width: 20%;              /* For old syntax, otherwise collapses. */
    -webkit-flex: 1;          /* Chrome */
    -ms-flex: 1;              /* IE 10 */
    flex: 1;
    flex: 1;
  }
  ::v-deep{
    .color{
      color: var(--color);
    }
  }
}
</style>
