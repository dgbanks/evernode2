import React from "react";
import ReactDOM from "react-dom"
import { Form, Modal, Input } from "antd";
import styled from "styled-components";

const CustomModal = Form.create()(({ form, close }) => {
  return (
    <Modal
    title="New Canvas"
    visible
    destroyOnClose
    onCancel={close}
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
})

export default () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const destroyModal = () => {
    if (ReactDOM.unmountComponentAtNode(div) && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  ReactDOM.render(
    <CustomModal close={destroyModal} />, div)
};
