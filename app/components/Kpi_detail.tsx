"use client";

import { Card, Row, Col, Tag, Typography, Space, Divider } from "antd";
import { ClockCircleOutlined, AppstoreOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function KPIDetailBreakdown() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* ===== Page Header ===== */}
      <div className="mb-6">
        <Space align="start">
          {/* <AppstoreOutlined style={{ fontSize: 20 }} /> */}
          <div>
            {/* <Title level={4} className="mb-0">
              KPI Detail Breakdown
            </Title> */}
            <Text type="secondary">History & Job Rotation Performance</Text>
          </div>
        </Space>
      </div>

      {/* ===== Position 1 ===== */}
      <div className="mb-4">
        <Card className="mb-6">
          {/* Header */}
          <Row justify="space-between" align="middle">
            <Col>
              <Space direction="vertical" size={0}>
                <Space>
                  <Tag color="blue">Position 1</Tag>
                  <Text strong>P82070</Text>
                </Space>
                <Text type="secondary">Department: 102</Text>
              </Space>
            </Col>

            <Col>
              <Tag icon={<ClockCircleOutlined />}>
                01/01/2025 - 30/05/2025 (5 ເດືອນ)
              </Tag>
            </Col>
          </Row>

          <Divider />

          <Row gutter={24}>
            {/* KPI Organization */}
            <Col span={12}>
              <Title level={5} type="secondary">
                KPI ອົງກອນ (ORGANIZATION)
              </Title>

              <Space direction="vertical" className="w-full">
                <Row justify="space-between">
                  <Text>KPI1</Text>
                  <Tag color="green">89%</Tag>
                </Row>

                <Row justify="space-between">
                  <Text>KPI4</Text>
                  <Tag color="gold">73%</Tag>
                </Row>
              </Space>
            </Col>

            {/* KPI Tasks */}
            <Col span={12}>
              <Title level={5} type="secondary">
                KPI ວຽກງານ (TASKS)
              </Title>

              <Space direction="vertical" className="w-full">
                <Row justify="space-between">
                  <Text>KPI6</Text>
                  <Tag color="blue">100%</Tag>
                </Row>

                <Row justify="space-between">
                  <Text>KPI204103</Text>
                  <Tag color="red">0%</Tag>
                </Row>

                <Row justify="space-between">
                  <Text>KPI204003</Text>
                  <Tag color="green">109%</Tag>
                </Row>
              </Space>
            </Col>
          </Row>
        </Card>
      </div>

      {/* ===== Position 2 ===== */}
      <Card>
        <Row justify="space-between" align="middle">
          <Col>
            <Space direction="vertical" size={0}>
              <Space>
                <Tag color="purple">Position 2</Tag>
                <Text strong>P62010</Text>
              </Space>
              <Text type="secondary">Department: 101</Text>
            </Space>
          </Col>

          <Col>
            <Tag icon={<ClockCircleOutlined />}>
              01/06/2025 - 31/12/2025 (7 ເດືອນ)
            </Tag>
          </Col>
        </Row>

        <Divider />

        <Row gutter={24}>
          <Col span={12}>
            <div className="border border-dashed rounded p-6 text-center text-gray-400">
              <AppstoreOutlined className="text-2xl mb-2" />
              <div>KPI ອົງກອນ ຍັງບໍ່ມີຂໍ້ມູນ</div>
            </div>
          </Col>

          <Col span={12}>
            <Title level={5} type="secondary">
              KPI ວຽກງານ (TASKS)
            </Title>

            <Space direction="vertical" className="w-full">
              <Row justify="space-between">
                <Text>KPI6</Text>
                <Tag color="blue">100%</Tag>
              </Row>

              <Row justify="space-between">
                <Text>KPI19103</Text>
                <Tag color="green">88%</Tag>
              </Row>

              <Row justify="space-between">
                <Text>KPI4003</Text>
                <Tag color="gold">70%</Tag>
              </Row>
            </Space>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
