
const getters = {
  doubleCount (state) {
    return state
  },
  theme (state) {
    return state.currentPage.params
  },
  today (state) {
    return state.missions.filter(item => item.type === 'today' && !item.isComplete)
  },
  important (state) {
    return state.missions.filter(item => item.isImportant && !item.isComplete)
  },
  todayTotal (state) {
    return state.missions.filter(item => item.type === 'today' && !item.isComplete).length
  },
  importantTotal (state) {
    return state.missions.filter(item => item.isImportant && !item.isComplete).length
  },
  missionTotal (state) {
    return state.missions.length
  }
}
export default getters
