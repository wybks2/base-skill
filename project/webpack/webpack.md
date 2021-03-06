### webpack学习官网

1. cli 命令行接口 Command Line interface， 用来对构建（build）进行配置和交互

> -h --help
> --config 指定其他配置文件
> --config-register, -r webpack配置文件加载钱先预加载一个或者多个模块
> --env 当配置文件是一个函数时，传入环境变量
> --json > stats.json 手动输出统计信息，输出的文件可以被webpack用来分析
> 环境选项
> 配置选项
>> 输出配置
>> debug配置
>> 模块配置 用于绑定webpack允许的模块
>> watch 选项 可以用于观察依赖文件的变换
>> 性能优化配置 限制chunk的数量 限制chunk的大小 压缩混淆
>> resolve配置 别名
>> 统计数据配置
>> 高级配置
>> profiling 选项捕获编译时每个步骤的时间信息
2. 模块， webpack理解不同的模块语法
3. Node 更细粒度的控制，需要通过node接口实现。包括传递多个配置文件，可编程方式的编译执行或观察文件，以及手机概要信息。
4. loader 转译模块源代码的转换规则。 接受源代码作为参数的函数，并返回转换过的新版本代码
url-loader less-loader css-loader file-loader image-loader 
5. plugin 插件接口， 帮助用户直接触及到编译过程（compliation process）。插件可以将处理函数，注册到编译过程的不同事件点上运行的生命周期函数上。当执行每个钩子时，插件能完全访问刀编译的当前状态。



#### webpack externals
1. 在html中引入第三方的cdn
2. 在webpacks中配置externals
3. 在js中引用

不会将第三方工具包 打包到boundles中




#### webpack [性能优化方案]（https://zhuanlan.zhihu.com/p/150731200）
1. 提高构建速度
> 1. 通过exclude,include 缩小搜索范围
> 2. 合理使用resolve配置
>> 配置resolve.module 去某些目录查找第三方模块 否则层层上找
>> 对庞大的第三方模块设置resolve.alias 配置别名来映射一个路径，让webpack更快找到路径，副作用影响tree-shaking，适合对整体性比较强的库使用
>> resolve.extensions 表名文件后缀列表，减少文件查找
> 缓存之前构建过的js
>> 将babel编译过的文件缓存起来，下次只要编译更改过的代码文件即可,大幅度加快打包时间。
> 提前构建第三方库
>> 处理第三方库的方法有很多种，externals
2. 压缩打包体积


3. 优化运行速度


4. 提高开发效率
> 1. dev-server 自动刷新 热更新
> 2. sourceMap提高调试效率

