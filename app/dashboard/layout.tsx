// "use client";
// import React, { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   SettingOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Button, Layout, Menu, theme, Popconfirm, message, Avatar } from "antd";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import LOGO from "@/public/cmi_logo.png";
// import type { PopconfirmProps } from "antd";
// import { useRouter } from "next/navigation";

// const { Header, Sider, Content } = Layout;

// const menuItems = [
//   {
//     key: "1",
//     icon: <PieChartOutlined />,
//     label: "Dashboard (Power BI)",
//     href: "/dashboard",
//     allowedRoles: ["admin", "manager", "user"],
//   },
//   {
//     key: "2",
//     icon: <UploadOutlined />,
//     label: "Data Entry & Upload",
//     href: "/dashboard/DataEntry",
//     allowedRoles: ["admin", "manager"],
//   },
//   {
//     key: "3",
//     icon: <TeamOutlined />,
//     label: "Job Rotation",
//     href: "/dashboard/JobRotation",
//     allowedRoles: ["admin"],
//   },
//   {
//     key: "4",
//     icon: <SettingOutlined />,
//     label: "Target Configuration",
//     href: "/dashboard/TargetConfiguration",
//     allowedRoles: ["admin"],
//   },
// ];

// // Mock user Role data
// const user = {
//   fullname: "Santisouk Latikoun",
//   role: "admin", // admin / manager / user
// };

// const cancel: PopconfirmProps["onCancel"] = (e) => {
//   console.log(e);
//   message.error("Click on No");
// };

// const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const selectedKey =
//     menuItems.find((item) => item.href === pathname)?.key || "1";

//   const handleLogout = async () => {
//     // await logout();

//     router.push("/login");
//   };

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sider trigger={null} collapsible collapsed={collapsed} width={220}>
//         <div className="flex items-center gap-3 px-4 py-4 relative">
//           <Image
//             src={LOGO}
//             height={40}
//             width={40}
//             alt="Logo"
//             className="rounded-md"
//           />
//           <div
//             className={`text-sm font-semibold text-white tracking-wide transition-opacity duration-300
//             ${collapsed ? "opacity-0 invisible" : "opacity-100 visible"}`}
//             style={{ position: "absolute", left: 56 }}
//           >
//             <div className="flex flex-col leading-tight p-4 font-bold">
//               CMI KPI System
//               <span className="text-xs opacity-80 -mt-0.5">
//                 Hybrid Power BI
//               </span>
//             </div>
//           </div>
//         </div>
//         <hr className="border-t-2 border-gray-500" />

//         <Menu
//           theme="dark"
//           mode="inline"
//           selectedKeys={[selectedKey]}
//           items={menuItems
//             .filter((item) => item.allowedRoles.includes(user.role)) // filter by role
//             .map((item) => ({
//               key: item.key,
//               icon: item.icon,
//               label: <Link href={item.href}>{item.label}</Link>,
//             }))}
//         />
//       </Sider>

//       <Layout>
//         <Header
//           style={{ padding: 0, background: colorBgContainer }}
//           className="flex items-center gap-4"
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{ fontSize: "16px", width: 64, height: 64 }}
//           />
//           <div className="flex items-center gap-4 justify-end flex-1 mr-6">
//             <div className="flex items-center gap-2">
//               <Avatar size={30} icon={<UserOutlined />} />
//               {/* <UserIcon className="w-5 h-5 text-gray-600" /> */}
//               <div>
//                 <p className="text-sm font-medium text-gray-800">
//                   {user?.fullname}
//                 </p>

//                 <p className="text-xs text-gray-500">{user?.role}</p>
//               </div>
//             </div>

//             <Popconfirm
//               title="ອອກຈາກລະບົບ?"
//               description="ທ່ານຕ້ອງການອອກຈາກລະບົບ ຫຼື ບໍ?"
//               onConfirm={handleLogout}
//               onCancel={cancel}
//               okText="ແມ່ນ"
//               cancelText="ບໍ່ແມ່ນ"
//               placement="topRight"
//             >
//               <Button type="primary" danger>
//                 ອອກຈາກລະບົບ
//               </Button>
//             </Popconfirm>
//           </div>
//         </Header>

//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           {children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;

"use client";

import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  PieChartOutlined,
  TeamOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Popconfirm, message, Avatar } from "antd";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LOGO from "@/public/cmi_logo.png";
import type { PopconfirmProps } from "antd";

const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Dashboard (Power BI)",
    href: "/dashboard",
    allowedRoles: ["admin", "editor", "user"],
  },
  {
    key: "2",
    icon: <UploadOutlined />,
    label: "Data Entry & Upload",
    href: "/dashboard/DataEntry",
    allowedRoles: ["admin", "editor"],
  },
  {
    key: "3",
    icon: <TeamOutlined />,
    label: "Job Rotation",
    href: "/dashboard/JobRotation",
    allowedRoles: ["admin"],
  },
  {
    key: "4",
    icon: <SettingOutlined />,
    label: "Target Configuration",
    href: "/dashboard/TargetConfiguration",
    allowedRoles: ["admin"],
  },
];

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState<User | null>(null); // state เก็บ user จริง
  const pathname = usePathname();
  const router = useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // ดึง user จาก localStorage หลัง component mount
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // no user is redirect login
      router.push("/login");
    }
  }, []);

  const selectedKey =
    menuItems.find((item) => item.href === pathname)?.key || "1";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const cancel: PopconfirmProps["onCancel"] = () => {
    message.error("Click on No");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={220}>
        <div className="flex items-center gap-3 px-4 py-4 relative">
          <Image
            src={LOGO}
            height={40}
            width={40}
            alt="Logo"
            className="rounded-md"
          />
          <div
            className={`text-sm font-semibold text-white tracking-wide transition-opacity duration-300 ${
              collapsed ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
            style={{ position: "absolute", left: 56 }}
          >
            <div className="flex flex-col leading-tight p-4 font-bold">
              CMI KPI System
              <span className="text-xs opacity-80 -mt-0.5">
                Hybrid Power BI
              </span>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-500" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems
            .filter((item) => user && item.allowedRoles.includes(user.role))
            .map((item) => ({
              key: item.key,
              icon: item.icon,
              label: <Link href={item.href}>{item.label}</Link>,
            }))}
        />
      </Sider>

      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex items-center gap-4"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <div className="flex items-center gap-4 justify-end flex-1 mr-6">
            {user && (
              <div className="flex items-center gap-4">
                <Avatar size={30} icon={<UserOutlined />} />
                <div className="pr-4">
                  <p className="text-sm font-bold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
            )}

            <Popconfirm
              title="ອອກຈາກລະບົບ?"
              description="ທ່ານຕ້ອງການອອກຈາກລະບົບ ຫຼື ບໍ?"
              onConfirm={handleLogout}
              onCancel={cancel}
              okText="ແມ່ນ"
              cancelText="ບໍ່ແມ່ນ"
              placement="topRight"
            >
              <Button type="primary" danger>
                ອອກຈາກລະບົບ
              </Button>
            </Popconfirm>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
