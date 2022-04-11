<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <iframe src="http://www.runoob.com" 
    width="800"
    height="800">
      <p>您的浏览器不支持  iframe 标签。</p>
    </iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
