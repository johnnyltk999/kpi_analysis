// "use client";
// import React from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Form, Input, Flex, ConfigProvider } from "antd";
// import LOGO from "@/public/cmi_logo.png";
// import Image from "next/image";

// const App: React.FC = () => {
//   interface LoginFormValues {
//     username: string;
//     password: string;
//     remember?: boolean;
//   }

//   const onFinish = (values: LoginFormValues) => {
//     console.log("Received values of form: ", values);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorBgContainer: "#ffffff",
//           colorBgLayout: "#f5f5f5",
//           colorPrimary: "#1677ff",
//         },
//       }}
//     >
//       <div className="w-full h-screen flex justify-center items-center bg-[#001529]">
//         <Form
//           name="login"
//           initialValues={{ remember: true }}
//           style={{
//             maxWidth: 360,
//             width: "100%",
//             padding: "30px",
//             borderRadius: "12px",
//             background: "#ffffff",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           }}
//           onFinish={onFinish}
//         >
//           <Image
//             src={LOGO}
//             width={200}
//             height={200}
//             alt="Logo"
//             className="mx-auto mb-4"
//           ></Image>
//           <h1 className="text-center text-2xl font-bold mb-4">
//             KPI Analysis System
//           </h1>
//           {/* <h1 className="text-center text-2xl font-bold mb-6">Login</h1> */}

//           <Form.Item
//             name="username"
//             rules={[{ required: true, message: "Please input your Username!" }]}
//           >
//             <Input prefix={<UserOutlined />} placeholder="Username" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: "Please input your Password!" }]}
//           >
//             <Input
//               prefix={<LockOutlined />}
//               type="password"
//               placeholder="Password"
//             />
//           </Form.Item>

//           <Form.Item>
//             <Flex justify="space-between" align="center"></Flex>
//           </Form.Item>

//           <Form.Item>
//             <Button block type="primary" htmlType="submit" href="/dashboard">
//               Log in
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </ConfigProvider>
//   );
// };

// export default App;

"use client";

import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, ConfigProvider, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LOGO from "@/public/cmi_logo.png";

interface LoginFormValues {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

const LoginPage: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok) {
        message.error(data.message || "Login failed");
        return;
      }

      // เก็บ token และ user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      message.success(data.message || "Login successful");

      // redirect ไป dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      message.error("Cannot connect to server");
    }
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
          onFinish={onFinish}
          style={{
            maxWidth: 360,
            width: "100%",
            padding: "30px",
            borderRadius: "12px",
            background: "#ffffff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src={LOGO}
            width={200}
            height={200}
            alt="Logo"
            className="mx-auto mb-4"
            priority
          />

          <h1 className="text-center text-2xl font-bold mb-6">
            KPI Analysis System
          </h1>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" size="large">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default LoginPage;
