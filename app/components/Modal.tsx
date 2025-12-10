"use client";
import React from "react";
import { Modal } from "antd";

interface CustomModalProps {
  open: boolean;
  title?: string;
  loading?: boolean;
  width?: number | string;
  heigth?: number | string;
  children?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title = "Modal",
  loading = false,
  width = 800,
  heigth = "800",
  children,
  onOk,
  onCancel,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      width={width}
      height={heigth}
      confirmLoading={loading}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
