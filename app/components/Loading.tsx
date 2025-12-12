"use client";

import React from "react";
import { Spin } from "antd";

export default function SpinLoader({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <Spin spinning={loading} tip="Loading...">
      {children}
    </Spin>
  );
}
