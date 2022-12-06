# init
## 文档地址
https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json
https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part2-content-scripts?tabs=v3
https://github.com/sxei/chrome-plugin-demo
脚手架：
  https://github.com/SlowSoulWen/chrome-extension-cli
  https://github.com/lxieyang/chrome-extension-boilerplate-react
技术参考
  https://github.com/muaz-khan/Chrome-Extensions
## 问题记录
edge 的插件好想有 v2和v3的版本区分 在```manifest.json```里的配置项不太一样
2的版本要在2023年删除
git 提交git已经禁用第三方的ssl
  # 2022年10月19日
    整体思路：
      第一版本的简单思路
      在页面上画出需要录制的区域然后保存为视频，通过ffmpeg.wasm```https://github.com/ffmpegwasm/ffmpeg.wasm``` 提取视频帧，然后保存，生成gif图片。
    技术难点：
      怎么去录制？
      怎么将视频提取出的帧数，去生成图片。
      是否需要压缩？
  # 开发流程调整
    今天发现可以通过一些vue、react这些框架的脚手架去开发插件。其实开发之前就有这种想法，既然插件是用JS开发的那么常用的主流插件岂不是可以使用。然后也在github上看到了一份仓库```https://github.com/sxei/chrome-plugin-demo```上面有详细的接受每个模块能干啥，以及说明。发现其实内容还是挺多的。我也clone了几个仓库。比较好的是有些能实时的去构建。当然一写特殊的还是要进行手动刷新。
    目前调整为构建出一个脚手架。
  # 2022年12月06日
    发现一个录屏库 https://github.com/rrweb-io/rrweb