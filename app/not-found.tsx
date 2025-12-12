import React from "react";
import { Button, Result } from "antd";

const App: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#001529]">
    <Result
      status="404"
      title={<span className="text-6xl font-bold text-gray-50">404</span>}
      subTitle={
        <span className="text-gray-400">
          Sorry, the page you visited does not exist.
        </span>
      }
      extra={
        <Button type="primary" href="/dashboard">
          Back Home
        </Button>
      }
    />
  </div>
);

export default App;
