import React from "react";
import { connect } from "react-redux";
import { Form, Modal, Input } from "antd";
import { toggleForm } from "actions/ui_actions";
import { createCanvas } from "actions/canvas_actions";

const CanvasForm = Form.create()(({ form, open, toggle, createCanvas }) => (
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
);

const mapStateToProps = state => ({
  open: state.ui.formOpen,
  submitting: state.canvases.formSubmit
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleForm()),
  createCanvas: canvas => dispatch(createCanvas(canvas))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasForm);
