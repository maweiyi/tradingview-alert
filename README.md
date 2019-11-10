#### TradingViewAlert

##### 基本功能
* [x] 接收TradingView webhook
* [x] 发送消息到Telegram
* [ ] 发送消息到微信
* [ ] 发送消息到Slack
* [ ] 发送邮件
* [ ] 火币自动下单进行交易
* [ ] OKEX自动下单交易
* [ ] 币安自动下单进行交易
* [ ] 交易报表
* [ ] UI
* [ ] 交易日志
* [ ] TradingView策略开发

##### Development
* 需要做好内网穿透
* 在.env文件中设置Telegram相关的环境变量
* npm run development
* 将内网穿透的地址添加到TradingView webhook

##### Deploy
* 绑定域名
* 申请https
* 在.env文件中设置Telegram相关的环境变量
* npm run production
* 添加 https://domain/alert/到TradingView webhook

##### .env example
```
HTTPS_PORT=8081
HTTP_PORT=80
PRODUCTION_HTTPS_PORT=443
TOKEN=Telegram Token
TVINDICATORALERTBOT=chat id
BTCGROUP=chat id
```