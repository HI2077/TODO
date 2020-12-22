<template>
  <div class="page-container">
    <to-mission
      style="margin-top:10px"
      :missions="missions"
    />
    <to-input
      :value.sync="value"
      @keydown.enter="addMiss"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import ToInput from '../components/ToInput.vue'
import ToMission from '../layout/components/ToMission.vue'
export default {
  components: { ToInput, ToMission },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState(['missions'])
  },
  methods: {
    ...mapMutations(['addMission']),
    addMiss () {
      this.addMission({ content: this.value })
    }
  }
}
</script>

<style>

</style>
