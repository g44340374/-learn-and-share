<template>
  <div class="children">{{ currentSkinName }}</div>
</template>

<script>
export default {
  inject: ['currentSkinName'],

  created() {
    console.log(this.currentSkinName);
  },
};
</script>
