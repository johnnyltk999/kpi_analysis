import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Noto_Sans_Lao } from "next/font/google";
import { ConfigProvider } from "antd";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const notoSansLao = Noto_Sans_Lao({
  weight: ["400", "700"],
  subsets: ["lao"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KPI Dashboard",
  description: "KPI Analysis Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lo">
      <body className={notoSansLao.className}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Noto Sans Lao, sans-serif",
            },
          }}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
