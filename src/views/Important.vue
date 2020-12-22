<template>
  <div class="page-container">
    <to-mission
      style="margin-top:10px"
      :missions="important"
    />
    <to-input
      :value.sync="value"
      @keydown.enter="addImportant"
    />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import ToInput from '../components/ToInput.vue'
import ToMission from '../layout/components/ToMission.vue'

export default {
  name: 'Important',
  components: {
    ToInput,
    ToMission
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters(['important'])
  },
  methods: {
    ...mapMutations(['addMission']),
    addImportant () {
      this.addMission({
        content: this.value,
        isImportant: true
      })
    }
  }
}
</script>
