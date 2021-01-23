import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { app } from "../../tcb";

export default function ContactForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await app.callFunction({
        name: "sendemail",
        data: values,
      });
      message.success("Email sent");
      form.resetFields();
    } catch (e) {
      message.error(e.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Typography.Title
        level={3}
        style={{ color: "#fff", paddingBottom: "2rem" }}
      >
        Get in touch
      </Typography.Title>
      <Form
        name="contactForm"
        layout="vertical"
        onFinish={onFinish}
        style={{ width: "30vw" }}
        form={form}
      >
        <Form.Item
          required
          name="name"
          rules={[{ required: true, message: "Enter name." }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          required
          name="email"
          rules={[
            { required: true, message: "Enter email." },
            { type: "email", message: "Enter valid email." },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          required
          name="message"
          rules={[{ required: true, message: "Enter message." }]}
        >
          <Input.TextArea placeholder="Message" rows={5} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
