https://blog.csdn.net/qzw752890913/article/details/106245718

将项目dynamic-smooth-line推入远程仓CodeMarket

dynamic-smooth-line 上一级目录 js 经 git init 成为 git仓

js目录 下会生成 .git目录，删除.git 相当于 撤销 git init

在这里插入图片描述
进入dynamic-smooth-line，，经git add、git commit、git push将该所需文件推入远程仓CodeMarket
在这里插入图片描述
dynamic-smooth-line成功进入远程仓
在这里插入图片描述
将项目MyCounter推入远程仓CodeMarket
MyCounter 上一级目录 react 经 git init 成为 git仓
在这里插入图片描述
进入MyCounter，经git add、git commit、git push将相应文件推入远程仓CodeMarket
在这里插入图片描述
但是，失败了!
在这里插入图片描述
git也给了我们提示：之所以被拒绝，是因为 本地 不包含 远程仓所包含的。并且，给我们指了条"明路"：git pull。刚刚把dynamic-smooth-line推送到了远程仓，而本地的react目录下没有dynamic-smooth-line
那就是试试。
git pull origin master，依旧失败了
在这里插入图片描述
这次被拒绝的原因是，远程仓CodeMarket认为，react这个本次仓和自己不相关。
能不能心大点，不关心相关与否。诶~还真有个办法。
git pull origin master --allow-unrelated-histories，OK
可能进入编辑状态，输入:wq即可退出编辑状态
在这里插入图片描述
重新git push origin master
在这里插入图片描述
MyCounter成功进入远程仓
在这里插入图片描述
