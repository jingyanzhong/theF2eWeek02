<script setup>
import {ref , reactive} from 'vue';
import navbar from './components/uploadNav.vue'
import step2Item from './components/step2Item.vue'
import uploadFooter from './components/uploadFooter.vue'
const childIsBlock = ref('false');

function childBlock(val){
  childIsBlock.value = val;
  console.log(childIsBlock.value);
}

</script>
<template>
  <header>
    <navbar/>
  </header>

  <main>
    <step2Item 
    @child-block="childBlock" 
    @canvas-start = "startPosition"
    @canvas-finish = "finishedPosition"
    @canvas-draw = "draw"/>
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
  display: flex;
  height: calc(100vh - (61px + 99px));
  background: #EEEDE8;
}
footer{
  background: #FFFAF4;
  padding: 20px 0;
}
</style>
