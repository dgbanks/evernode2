import React from "react";
import ReactDOM from "react-dom"
import { Modal } from "antd";
import styled from "styled-components";

const CustomModal = ({ close }) => (
  <Modal
  title="hello"
  visible
  destroyOnClose
  onCancel={close}
  />
)

export default () => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(
    <CustomModal
      close={() => {
        // update visible prop, then unmount to restore transition
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }}
    />, div)
};
