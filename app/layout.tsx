import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout, Menu } from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  {key: "home", label: <Link href={"/"}>Home</Link>},
  {key: "persons", label: <Link href={"/persons"}>Персонал</Link>}
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHight: "100vh"}}>
          <Header>
          <Menu mode="horizontal" items={items} theme="dark" />
          </Header>
          <Content style={{ padding: "0 48px"}}>{children}</Content>
          <Footer style={{textAlign: "center"}}>ApprovalApp 2024 Created By Artem Grushev</Footer>
        </Layout>
      </body>
    </html>
  );
}
