# mockrestapiserver

Restful接口模拟工具，方便测试。支持get、post、put、delete请求方式，但需要根据需求自定义返回数据结构，app.js为主程序，对应的方法均有注释，根据注释进行修改即可。
* put、delete方法只修改接口返回的数据，不会真正修改文件数据。
* 基于v12版本node，需要部署node。

### run.sh脚本：
<pre>
./run.sh 
Usage:
./run.sh start|stop|restart|status
</pre>
