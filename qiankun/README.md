# qiankun_parent

#### 1、 为什么给赋值 webpack-public-path ？

 问题核心：父应用加载子应用，由于域名/ip/端口不同导致原本子应用的静态资源加载错误，所以需要判断如果是父应用在加载子引用，需要把静态资源的src切换成子应用的地址

解决：webpack 暴露了一个 **webpack_public_path**的全局变量，我们把地址始终定义在 **webpack_public_path**上，就可以安全的使用。如果不给**webpack_public_path**赋值的话就会引入资源错误

实例：把子应用 src 文件夹下面的 public-path.js 代码去掉，查看主应用 or

查看 js 文件夹下面的图片引入问题

#### 2、为什么不使用 ifream 去做微前端？

1、刷新页面之后，在 iframe 里面的操作，无法前进后退，

2、浏览器没有 iframe 的历史记录，

3、样式很难调整，

4、内存变量无法共享，浏览器存储可以解决这个问题，但是用起来特别麻烦

5、每次进入都要重新加载资源，如果资源过大，加载时间过长还需要优化。给用户不佳的体验
实例：子应用 router

#### todo

qiankun实战中的一些坑

例子：

1、如何把多个子应用用一个标签加载

2、子应用未启动，如何屏蔽子应用？进行怎样的优化

3、qiankun的生命周期
