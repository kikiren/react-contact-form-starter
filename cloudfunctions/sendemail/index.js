const cloud = require("@cloudbase/node-sdk");
const nodemailer = require("nodemailer");

const app = cloud.init({
  env: cloud.SYMBOL_CURRENT_ENV,
});

require("dotenv").config();

const config = {
  host: "smtp.qq.com", //网易163邮箱 smtp.163.com
  port: 465, //网易邮箱端口 25
  auth: {
    user: process.env.REACT_APP_SENDER_EMAIL, //邮箱 例如:"123@qq.com"
    pass: process.env.REACT_APP_EMAIL_PASS, //邮箱的授权码
  },
};

const transporter = nodemailer.createTransport(config);

exports.main = async (event, context) => {
  const { name, email, message } = event;

  // 创建一个邮件对象
  const mail = {
    from: process.env.REACT_APP_SENDER_EMAIL, // 发件人
    subject: `You got a message from your website`, // 主题
    to: process.env.REACT_APP_SENDER_EMAIL, // 收件人
    text: `
    ${message}

    from ${name} ( ${email} )
    `, // 邮件内容，text或者html格式
  };

  let res = await transporter.sendMail(mail);

  return res;
};
