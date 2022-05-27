<template>
  <div
    class="box"
    :class="currentSkinName === 'defaultTheme' ? 'defaultTheme' : 'darkTheme'"
  >
    <div class="header">
      <p>主题切换</p>
      <div>
        <el-select
          v-model="currentSkinName"
          style="width: 120px"
          placeholder="请选择"
          @change="switchTheme"
        >
          <el-option
            v-for="(item, index) in Object.keys(themeColorObj)"
            :key="index"
            :label="themeColorObj[item].title"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <el-scrollbar style="height: 92vh"></el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSkinName: 'defaultTheme',
      themeColorObj: {
        // 此处代码应该放在store里，这里做演示
        defaultTheme: {
          title: '浅色主题', // 主题名称
          mainColor: '#ffffff', // 全局主题色
          mainTextColor: 'black', // 全局默认文字颜色
          mainBgColor: '#f0f2f5', // 全局默认背景色
        },
        darkTheme: {
          title: '深色主题',
          mainColor: '#01305F',
          mainTextColor: '#ffffff',
          mainBgColor: '#012447',
        },
      },
    };
  },
  provider: {
    currentSkinName: 'defaultTheme',
  },
  methods: {
    switchTheme() {
      let themeName = this.currentSkinName || 'defaultTheme';
      //  设置主题变量
      const themeColor = this.themeColorObj[themeName];
      console.log('themeColor', themeColor);
      document.documentElement.style.setProperty(
        '--mainColor',
        themeColor.mainColor
      );
      document.documentElement.style.setProperty(
        '--mainTextColor',
        themeColor.mainTextColor
      );
      document.documentElement.style.setProperty(
        '--mainBgColor',
        themeColor.mainBgColor
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
    height: 7vh;
    font-size: 30px;
    font-weight: bold;
    color: yellow;
    background: blue;
  }

  .container {
    margin: 0.5vw 1vh;
    width: 99vw;
  }
}
.defaultTheme {
  background: red;
}
.defaultTheme header {
  color: yellow;
  background: blue;
}
.darkTheme {
  background: aqua;
}
.darkTheme .header {
  color: steelblue;
  background: fuchsia;
}
</style>
