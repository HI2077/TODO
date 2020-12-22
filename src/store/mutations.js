import { createId } from '@/utils/util'
const mutations = {
  setCurrentPage (state, page) {
    state.currentPage = page
  },
  initCurrentPage (state) {
    state.currentPage = ''
  },
  addMission (state, mission) {
    state.missions.unshift({
      id: createId(),
      createTime: new Date(),
      isComplete: false,
      isImportant: false,
      ...mission
    })
  },
  switchMissionStateById (state, id) {
    const item = state.missions.find(e => e.id === id)
    const oldState = item.isComplete
    item.isComplete = !oldState
  },
  switchMissionImportantById (state, id) {
    const item = state.missions.find(e => e.id === id)
    const isImportant = item.isImportant
    item.isImportant = !isImportant
  },
  deleteMissionById (state, id) {
    const index = state.missions.findIndex(e => e.id === id)
    state.missions.splice(index, 1)
  }
}
export default mutations
