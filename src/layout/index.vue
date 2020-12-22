<template>
  <article
    :style="{
      '--color': theme.color || '#ffffff',
    }"
    class="page"
  >
    <aside class="aside">
      <to-menu />
    </aside>
    <section class="container">
      <header>
        <van-icon
          name="apps-o"
          size="30"
          class="menu-icon"
          @click="show = !show"
        />
        <div class="d-flex between">
          <van-col>
            <div class="d-flex">
              <van-icon
                size="30"
                style="margin-right:5px"
                :name="currentPage.meta.icon"
              />
              <h1 class="title">
                {{ currentPage.meta.title }}
              </h1>
            </div>
            <time class="date">
              {{ date | dateFormate }}
            </time>
          </van-col>
          <div>
            <div class="plain-btn">
              ···
            </div>
          </div>
        </div>
      </header>
      <van-popup
        v-model="show"
        position="left"
        style="height: 100%; width: 70%"
      >
        <to-menu />
      </van-popup>
      <main class="main">
        <router-view />
      </main>
    </section>
  </article>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import ToMenu from './components/ToMenu.vue'
export default {
  components: { ToMenu },
  data () {
    return {
      date: new Date(),
      show: false
    }
  },
  computed: {
    ...mapGetters(['theme']),
    ...mapState(['currentPage'])
  },
  created () {

  },
  methods: {
    ...mapMutations(['initCurrentPage'])

  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 10px;
}
.date {
  font-size: 0.8rem;
}
.menu-icon {
  display: none;
  padding: 2px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
@media screen and (max-width:800px) {
  .menu-icon{
    display: inline-block;
  }
  .aside{
    display: none !important;
  }
}

.page {
  min-width: 360px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  flex: 1;
  color: #000;
  color: var(--white);
  background-color: var(--color);
  transition: .5s;
  display: flex;
  .aside {
    width: 260px;
    display: block;
    background-color: #fff;
  }
  .container {
    flex: 1;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
  }
}
</style>
