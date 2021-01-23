<a href="https://github.com/TencentCloudBase/cloudbase-templates"><img src="https://main.qcloudimg.com/raw/d94d993269048beb4827b2612ed53692.png"></a>

# 可以发送联系邮件的 React 网站模版

基于云开发的 React 网站 starter，带有联络表格发送邮件提醒功能，包含 React + 云函数 + 静态网站部署，可以基于 **[CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework)** 框架将项目一键部署到云开发环境

## 线上演示地址

[点击这里](https://mail-9gy6laex0b6476a8-1303259770.tcloudbaseapp.com/)

点击下方按钮使用 [CloudBase Framework](https://github.com/TencentCloudBase/cloudbase-framework) 可以在云端一键部署本项目到自己的云开发账号上。

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2Fkikiren%2Freact-contact-form-starter&branch=main)

## 开发命令及配置

配置环境变量：

**REACT_APP_SENDER_EMAIL** //服务邮箱
**REACT_APP_EMAIL_PASS** // 服务密码

### 本地开发

```
npm start
```

### 上线部署

```
tcb
```

### CloudBase Framework 相关开发配置

查看 [CloudBase Framework 配置](https://github.com/TencentCloudBase/cloudbase-framework).

### React 开发文档

查看 [开发者文档](https://reactjs.bootcss.com/docs/getting-started.html).
