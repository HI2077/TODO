<template>
  <van-sidebar
    v-model="activeKey"
    class="to-menu"
  >
    <van-sidebar-item
      v-for="item in menu"
      :key="item.path"
      :to="{name:item.name||item.filePath,params:item.theme}"
    >
      <div
        slot="title"
        :style="{color:item.theme.color}"
        class="title"
      >
        <div class="d-flex center">
          <van-icon
            :name="item.theme.icon"
            size="20"
            style="margin-right:5px"
          />
          <div style="flex-grow:1">
            {{ item.title }}
          </div>
        </div>
        <div>
          <template v-if="item.filePath==='Today'">
            {{ todayTotal }}
          </template>
          <template v-if="item.filePath==='Important'">
            {{ importantTotal }}
          </template>
          <template v-if="item.filePath==='Mission'">
            {{ missionTotal }}
          </template>
        </div>
      </div>
    </van-sidebar-item>
  </van-sidebar>
</template>

<script>
import commonRouters from '@/router/menus'
import { routersToMenu } from '@/router/util'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      activeKey: 0,
      commonRouters,
      menu: []
    }
  },
  computed: {
    ...mapGetters(['todayTotal', 'importantTotal', 'missionTotal'])
  },
  created () {
    this.menu = routersToMenu(this.commonRouters)
  }
}
</script>

<style lang="scss" scoped>
.to-menu{
  ::v-deep{
    .van-sidebar-item--select{
      .title,.van-icon{
        font-weight: 800;
      }
    }
    .van-sidebar-item__text{
      width: 100%;
    }
    .van-sidebar-item--select::before{
      background-color: var(--color);
    }

  }
  .title{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    color: #000000;
    color: var(--color);
  }

}
</style>
