---
layout: page
title: mysqldump的使用
tags: mysql mysqldump
---

1. 导出整个数据库
   mysqldump -u 用户名 -p 数据库名 > 导出的文件名  

         mysqldump -u wcnc -p smgp_apps_wcnc > wcnc.sql
 
2. 导出一个表
   mysqldump -u 用户名 -p 数据库名 表名> 导出的文件名

         mysqldump -u wcnc -p smgp_apps_wcnc users> wcnc_users.sql
 
3. 导出一个数据库结构

          mysqldump -u wcnc -p -d --add-drop-table smgp_apps_wcnc >d:\wcnc_db.sql
    
   -d 没有数据 --add-drop-table 在每个create语句之前增加一个drop table 
 
4. 导入数据库
   常用source 命令
   进入mysql数据库控制台，
   如mysql -u root -p 
  
   mysql>use 数据库
   然后使用source命令，后面参数为脚本文件（如这里用到的.sql）

          mysql>source d:\wcnc_db.sql
