# vue主题换肤

## 1、动态切换主题

### 1-1：动态切换css

------

1. 创建两个css主题模板(静态资源一般放在public文件夹下)

2. 在index.html内引入默认css主题(通过link方式引入，其他位置会找不到该文件)

3. ```html
   // index.html
   
       <link rel="stylesheet" type="text/css"
         href="./theme/defaultTheme/theme/index.css" id="themeStyle" />
   ```

4. 在需要切换的事件里面，去替换当前的href路径

   ```vue
   theme(){
   // 选中的主题名称
     const themeName = this.currentSkinName || 'defaultTheme'
   // 主题名称对应的路径
     	const typeObj = {
   		darkTheme:'./theme/darkTheme/theme/index.css',  
   		defaultTheme:'./theme/defaultTheme/theme/index.css'
   	}
   // 获取html中link标签，并替换当前的css路径
   	document.getElementById('themeStyle').href = typeObj[themeName]
   }
   ```

------



### 1-2：动态更改class变量

------



1. ​	利用点击事件，然后替换当前的class样式

   ```html
   
     <div class="box" :class="currentSkinName === 'defaultTheme' ? 'defaultTheme' :  'darkTheme'" ></div>
     
     <style>
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
     
   ```

------

## 2、css变量切换（ CSS3  var  or :root）

------

[参考文章 ]: https://www.ruanyifeng.com/blog/2017/05/css-variables.html

### 2-1:  什么是css变量？

#### 2-1-1：css变量的声明

声明变量的时候，变量名前要加两根连词线(--)

```css
body {
    --foo: red;
    --bar: blue;
}
```

为什么要选择两根连词线( -- )？

$foo:   sass用掉

@foo:  less用掉

为了不产生冲突，官方css变量就改用两个连词线去声明

```css
// 各中值都可以放入css变量
:root{
  --main-color: #4d4e53;
  --main-bg: rgb(255, 255, 255);
  --logo-border-color: rebeccapurple;

  --header-height: 68px;
  --content-padding: 10px 20px;

  --base-line-height: 1.428571429;
  --transition-duration: .35s;
  --external-link: "external link";
  --margin-top: calc(2vh + 20px);
}
```

变量名大小写敏感： --header-color 和 --Header-Color是两个不同变量

------



#### 2-1-2：var()函数

var函数用于读取变量

```
a {
  color: var(--foo);
  text-decoration-color: var(--bar);
}
```

var函数可以使用第二个参数，表示变量的默认值，变量不存在就会使用默认值。

```
color：var(--foo, red)
```

第二个参数不处理内部的逗号或者空格，都视作参数的一部分

```

var(--font-stack, "Roboto", "Helvetica");
var(--pad, 10px 15px 20px);
```

var也可以在变量声明中使用

```
:root {
  --primary-color: red;
  --logo-text: var(--primary-color);
}
```

变量只能用作属性值，不能用作属性名

```
.foo {
  --side: margin-top;
  /* 无效 */
  var(--side): 20px; // error
}
```

------

#### 2-1-3：变量值的类型

变量值是字符串，可以跟其他字符串拼接

```
--bar: 'hello';
--foo: var(--bar)' world';


body:after {
  content: '--screen-category : 'var(--screen-category);
}
```

变量值是数值，不能与数值单位直接连用

```
.foo {
  --gap: 20;
  /* 无效 */
  margin-top: var(--gap)px; //error
}

margin-top: calc(var(--gap) * 1px) // yes
```

变量值带有单位，不能写成字符串

```

/* 无效 */
.foo {
  --foo: '20px'; // 字符串
  font-size: var(--foo);
}

/* 有效 */
.foo {
  --foo: 20px; //非字符串
  font-size: var(--foo);
}
```



------

#### 2-1-4：CSS作用域(根元素:root声明变量，确保所有选择器读取到变量)

```
// 例子
<style>
  :root { --color: blue; }
  div { --color: green; }
  #alert { --color: red; }
  * { color: var(--color); }
</style>

<p>蓝色</p>
<div>绿色</div>
<div id="alert">红色</div>


//  三个标签都声明了 --color 变量，不同元素读取这个变量的时候，会采用优先级最高的规则，所以三段文字
//  颜色是不一致的
```

变量的作用域就是它所在选择器的有效范围， 由于这个原因。全局变量通常放在根元素  :root根元素里面，确保任何选择器都能读取到该变量。

```
:root {
  --main-color: #06c;
}
```

------

### 2-2: 实现css变量切换

#### 	2-2-1：	动态更改css变量

​	// 放在是store实现全局状态共享

```
// 例子
data(){
	return {
        themeColorObj: {
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
        }
	}
}

themen(){
    // 选中的主题名称
      const themeName = this.currentSkinName || 'defaultTheme'
      //  设置主题变量
      const themeColor = this.themeColorObj[themeName];
      
      // 直接赋值在根元素上
      document.documentElement.style.setProperty('--color', thsemeColor.mainColor)
      ....
      or
      const style = document.createElement('style')
      const rootText = `:root { --color:${thsemeColor.mainColor} }`
      style.innelHTML = rootText
      document.head.appendChild(style)
      ....
      
}
```

------

