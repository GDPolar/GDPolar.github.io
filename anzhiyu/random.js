var posts=["post/Docker更改安装路径/","post/Hexo引入Mermaid/","post/C++刷题注意/","post/JS学习笔记1：基本数据类型及逻辑运算/","post/JS学习笔记4：作用域与声明提升/","post/JS学习笔记2：比较/","post/JS学习笔记5：let与var/","post/JDK学习/","post/JUC/","post/JVM1/","post/Java Stream/","post/JVM2/","post/JS学习笔记3：对象与函数/","post/JS学习笔记6：内建对象/","post/Java学习笔记/","post/MongoDB入门笔记/","post/SpringMCV乱码/","post/Java 集合部分源码/","post/Vmware虚拟机使用主机代理/","post/Redis学习笔记/","post/Java巩固基础/","post/d2l房价预测练习/","post/从0开始部署项目/","post/利用JSDelivr和Github Action白嫖CDN/","post/Vue笔记1/","post/leetcode记录/","post/博客设置文章加密访问/","post/基于hexo与github的博客/","post/刷题笔记/","post/Vue笔记2/","post/安卓学习笔记1/","post/实验室服务器连接/","post/操作系统学习笔记1：引导扇区/","post/微机原理期末复习/","post/操作系统学习笔记3：计算机系统概述/","post/操作系统学习笔记4：进程管理1/","post/操作系统学习笔记2：系统调用及用户级线程切换/","post/操作系统学习笔记7：文件管理/","post/操作系统学习笔记6：内存管理/","post/操作系统学习笔记5：进程管理2/","post/操作系统学习笔记8：IO管理/","post/深度学习入门/","post/计组期末复习/","post/计网学习笔记1：概论/","post/计网学习笔记2：物理层/","post/计网学习笔记4：数据链路层2/","post/计网学习笔记3：数据链路层1/","post/计网学习笔记5：网络层/","post/计网学习笔记6：运输层/","post/计网学习笔记7：应用层/","post/论文润色/","post/论文笔记/","post/论文整理/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};