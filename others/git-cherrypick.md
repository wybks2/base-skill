1. cherry-pick的使用

> 挑拣某几个commit提交
> -n 多个commit -n 的意思是 no automatically commit
> commit1... commit100 前开后闭

2. 切换分支 直接 git cherry-pick commitId


3. 某几个文件不变 get reset HEAD <file-name>
 > 清空缓存区  不清空则会用缓存区文件替换
 git checkout -- <file_name>
 > git checkout 其实是用版本库里的版本替换工作区的版本，无论是工作区修改还是删除，都可以一键还原
 git commit
 git push
