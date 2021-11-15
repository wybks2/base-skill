### VNC（Virtual NetWork Console）虚拟网络控制台
> nvc viewer
> nvc server


1. 如何运行noVnc
> package.json 脚本运行 没有运行脚本 只有 lint test prepublish 
> node 命令 #/bin 报错
> 回看文档，似乎还需要依赖另一个websocket项目


2. 感觉应该搭建一套服务器环境 目标vnc(需要访问) websocket(连接) noVnc(浏览器访问)

3. onVNC依赖的websockify是python写的  我们需要写一些js脚本运行python文件,我们需要用到child_process模块。当然，图省事的话，直接用现有的一些工具包，比如(node-cmd)。
> 不过既然是抱以学习的态度，我们自然是选择手动写一个js脚本啦
> 先去看看child_process
> 用现成的库吧

>

4. 最后还是使用了js脚本，直接运行。成功， 开始看源码部分\

> rfb.js  RFBextends EventTargetMixin("应该是事件target")

> _updateConnectionState更改连接状态

> _socketClose 根据this._rfbConnectionState 改变connectionState状态


> ui.js 更上层

> ui.start Render default UI and initialize settings menu
> addSettingsHandlers() 

> ui.connect 是连接
> ui.reconnect 是重连
> ui.disconnectFinished 1130
> ui.initSetting() reconnect 是开启的 
> rfb.js 812





> 工程化的思维

> webUtil.js  获取url上的配置参数，没错noVNC的配置参数来自于请求头
> pm2 监控