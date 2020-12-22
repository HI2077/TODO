<template>
  <div class="page-container">
    <to-mission
      style="margin-top:10px"
      :missions="today"
    />
    <to-input
      :value.sync="input"
      @keydown.enter="addToday"
    />
  </div>
</template>

<script>
import ToInput from '../components/ToInput.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import ToMission from '../layout/components/ToMission.vue'
export default {
  name: 'Today',
  components: {
    ToInput,
    ToMission
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters(['today'])
  },
  watch: {
    today: {
      handler (val) {
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations(['addMission']),
    ...mapActions(['addCountSync']),
    addToday () {
      this.addMission({ type: 'today', content: this.input })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
