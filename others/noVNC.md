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