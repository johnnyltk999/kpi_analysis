"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex, ConfigProvider } from "antd";
import LOGO from "@/public/cmi_logo.png";
import Image from "next/image";

const App: React.FC = () => {
  interface LoginFormValues {
    username: string;
    password: string;
    remember?: boolean;
  }

  const onFinish = (values: LoginFormValues) => {
    console.log("Received values of form: ", values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#ffffff",
          colorBgLayout: "#f5f5f5",
          colorPrimary: "#1677ff",
        },
      }}
    >
      <div className="w-full h-screen flex justify-center items-center bg-[#001529]">
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{
            maxWidth: 360,
            width: "100%",
            padding: "30px",
            borderRadius: "12px",
            background: "#ffffff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
          onFinish={onFinish}
        >
          <Image
            src={LOGO}
            width={200}
            height={200}
            alt="Logo"
            className="mx-auto mb-4"
          ></Image>
          <h1 className="text-center text-2xl font-bold mb-4">
            KPI Analysis System
          </h1>
          {/* <h1 className="text-center text-2xl font-bold mb-6">Login</h1> */}

          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center"></Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" href="/dashboard">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default App;
