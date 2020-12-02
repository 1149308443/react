import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

const Index = (props) => {
    const {
        type, handleOk, visible, showObj
    } = props;
    const [form] = Form.useForm();
    useEffect(() => {
        console.log(type);
    }, []);
    useEffect(() => {
        form.setFieldsValue({
            username: showObj.name
        });
    }, [showObj]);
    const onOk = () => {
        form.validateFields().then((values) => {
            console.log(values);
            handleOk();
        }).catch((err) => {
            console.log(err);
        });
    };
    const onCancel = () => {
        form.resetFields();
        handleOk();
    };
    // console.log(showObj);
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={onOk}
          onCancel={onCancel}
          forceRender
        >
          <Form
            name="info"
            form={form}
        //     initialValues={{
        //       Username: showObj.name
        //   }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              {/* <Input value={showObj.name} defaultValue={showObj.name} /> */}
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
};

Index.propTypes = {
    type: PropTypes.string,
    visible: PropTypes.bool,
    // handleCancel: PropTypes.func,
    handleOk: PropTypes.func,
    showObj: PropTypes.object
};
Index.defaultProps = {
    type: 'show',
    visible: false,
    handleOk: () => {},
    // handleCancel: () => {}
    showObj: {}
};

export default Index;
