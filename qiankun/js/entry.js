const render = ($) => {
    $('#purehtml-container').html('Hello, render with jQuery');
    return Promise.resolve();
};
  
        // 如果父级引用子应用
  if (window.singleSpaNavigate) { // 父应用加载微应用时为true
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ // webpack自带的方法，把目录改成服务器地址
    purehtml.innerHTML = `<img src="${__webpack_public_path__}/1.png" alt="">`
  }
  ((global) => {
    global['purehtml'] = {
      bootstrap: () => {
        console.log('purehtml bootstrap');
        return Promise.resolve();
      },
      mount: () => {
        console.log('purehtml mount');
        return render($);
      },
      unmount: () => {
        console.log('purehtml unmount');
        return Promise.resolve();
      },
    };
  })(window);