import React from "react";
import { Form, Input, Button, Select, InputNumber, Card } from "antd";

import QuestionTable from "./QuestionTable";

const { Option } = Select;
const { TextArea } = Input;
const AddQueForm = () => {
  return (
    <>
      <Card className="has-margin-top-1 has-margin-right-1 has-margin-left-1">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          className="has-margin-top-2"
        >
          <Form.Item label="Question">
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item label="Option One">
            <Input />
          </Form.Item>
          <Form.Item label="Option Two">
            <Input />
          </Form.Item>
          <Form.Item label="Option Three">
            <Input />
          </Form.Item>
          <Form.Item label="Option Four">
            <Input />
          </Form.Item>
          <Form.Item label="Marks">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Correct Option">
            <Select className="has-width-10">
              <Option value="1">Option One</Option>
              <Option value="2">Option Two</Option>
              <Option value="3">Option Three</Option>
              <Option value="4">Option Four</Option>
            </Select>
          </Form.Item>
          <div className="is-center has-margin-top-2 has-margin-bottom-2">
            <Button type="primary">Add</Button>
          </div>
        </Form>
        <QuestionTable />
      </Card>
    </>
  );
};

export default AddQueForm;
