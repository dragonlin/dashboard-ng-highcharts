
https://www.positronx.io/handle-cors-in-angular-with-proxy-configuration/


## websocket: socket.io


> npm i socket.io-client --save

> ng g s websocketService


## 创建公共组件 : header and footer

> ng g c shared/components/header

> ng g c shared/components/footer

> ng g c shared/components/sidebar


## 创建入口公共模块

> ng g m shared

由于不小心配置了 proxy.config.json
```
{
    "api/*": {
        "target": "http://10.181.198.237/:3000",
        "secure": false,
        "logLevel": "debug"
    }
}
```
导致所有的 请求代理了
ℹ ｢wdm｣: Compiled successfully.   
[HPM] GET /dash -> http://10.181.198.237/:3000      
[HPM] GET /post -> http://10.181.198.237/:3000   
[HPM] GET /posts -> http://10.181.198.237/:3000  

