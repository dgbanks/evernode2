import React from "react";
import { Form, Modal, Input } from "antd";

export default Form.create()(({ form, open, toggle }) => {
  return (
    <Modal
    title="New Canvas"
    visible={open}
    destroyOnClose
    onCancel={toggle}
    okButtonProps={{ disabled: !form.getFieldValue("title") }}
    onOk={() => {
      console.log(form.getFieldValue("title"));
    }}
    >
      <Form.Item label="Title">
        {form.getFieldDecorator('title', {
          initialValue: ""
        })(
          <Input placeholder="Title..." />
        )}
      </Form.Item>
    </Modal>
  )
});
