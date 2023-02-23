<script setup>
import navbar from './components/uploadNav.vue'
import uploadItem from './components/uploadItem.vue'
import uploadFooter from './components/uploadFooter.vue'
</script>

<template>
  <header>
    <navbar/>
  </header>

  <main>
    <uploadItem/>
  </main>
  <footer>
    <uploadFooter/>
  </footer>
</template>

<style scoped>
header {
  background: #FFFAF4;
  padding: 18px 0;
}
main{
  height: calc(100vh - (61px + 99px));
  background: #EEEDE8;
  padding: 30px 0;
}
footer{
  background: #FFFAF4;
  padding: 20px 0;
}
</style>
