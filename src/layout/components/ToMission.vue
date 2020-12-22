<template>
  <div
    class="to-missions"
  >
    <to-mission-item
      v-for="item in missions"
      :key="item.id"
      :item="item"
      @rightClick="showContextMenu"
    />
    <div
      class="context-menu"
      :style="{
        height:context.height,
        left:context.left,top:context.top,
        transitionDuration:0
      }"
    >
      <ul>
        <li
          v-for="(item,index) in context.menu"
          :key="index"
          class="menu-item"
          @click="handleCommand(item.method)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ToMissionItem from './ToMissionItem.vue'
import { mapMutations } from 'vuex'

export default {
  components: { ToMissionItem },
  props: {
    missions: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      context: {
        height: 0,
        menu: [],
        item: {}
      }
    }
  },
  mounted () {
    document.body.addEventListener('click', () => {
      this.context.height = 0
    }, false)
  },
  methods: {
    ...mapMutations(['switchMissionImportantById', 'switchMissionStateById', 'deleteMissionById']),
    showContextMenu (e, item) {
      this.context.menu = [
        { title: '添加到我的一天', method: 'changeType' },
        { title: item.isImportant ? '取消标记为重要' : '标记为重要', method: 'switchMissionImportantById' },
        { title: item.isComplete ? '标记为未完成' : '标记为完成', method: 'switchMissionStateById' },
        { title: '删除任务', method: 'deleteMissionById' }
      ]
      this.context.height = `${40 * this.context.menu.length}px`
      const {
        clientX,
        clientY
      } = e
      this.context = Object.assign({}, this.context, {
        left: clientX + 'px',
        top: clientY + 'px',
        item
      })
    },
    handleCommand (method) {
      this[method](this.context.item.id)
    }
  }
}
</script>

<style lang='scss' scoped>
.to-missions{
    width: 100%;
    flex:1;
    overflow: auto;
    margin-bottom:10px ;
    background: linear-gradient(transparent 54px, rgba(0,0,0,.1) 54px);
    background-size:100% 55px;
    .context-menu{
      width: 300px;
      height: 0;
      overflow: hidden;
      position: absolute;
      box-shadow: 0,0,5px,2px,rgba(0,0,0,1);
      border-radius: 2px;
      background-color: #fff;
      color: #000;
      transition: height .2s ease-in;
      .menu-item{
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        cursor: pointer;
        border-bottom: #eee 1px solid;
        &:hover{
          background-color: #F5F6F7;
        }
        &:last-of-type{
          border: none;
        }
      }
    }
    .to-mission-item{
        margin-bottom: 5px;
    }
}
</style>
