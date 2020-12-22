<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    window.onload = () => {
      const store = JSON.parse(sessionStorage.getItem('store'))
      this.$store.replaceState(
        Object.assign({},
          this.$store.state,
          store
        )
      )
    }
    document.oncontextmenu = function () {
      return false
    }
    window.onbeforeunload = () => {
      sessionStorage.setItem(
        'store',
        JSON.stringify(this.$store.state))
    }
  }
}
</script>
<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
