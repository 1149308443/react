import React from 'react';
import {
    Modal,
    Button,
    Form
} from 'antd';
import PropTypes from 'prop-types';

const img = '/static/images/timg.jpg';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

const ModalRow = ({ visibleRow, handleRowCancel, data }) => {
    const type = 'c';

    return (
      <Modal
        title="查看消息"
        visible={visibleRow}
        onCancel={handleRowCancel}
        maskClosable={false}
        destroyOnClose
        footer={[
            // 定义右下角 按钮的地方 可根据需要使用 一个或者 2个按钮
          <Button key="back" onClick={handleRowCancel}>关闭</Button>]}
      >
        <Form
          name="add_link"
          {...formItemLayout}
        >
          <Form.Item
            name="serverType"
            label="客户服务类型"
            rules={[{ required: true }]}
          >
            <div>专属投顾</div>
          </Form.Item>
          <Form.Item
            name="upload"
            label="发送名单"
            rules={[{ required: true }]}
          >
            <div>专属投顾.xsls</div>
          </Form.Item>
          <Form.Item
            name="type"
            label="消息类型"
            rules={[{ required: true }]}
          >
            <div>文本</div>
          </Form.Item>
          {
              type === 'a' && (
              <Form.Item
                name="type"
                label="内容摘要"
                rules={[{ required: true }]}
              >
                <div>这是一个活动XXXXXXXXXX这是一个</div>
              </Form.Item>
            )
          }
          {
              type === 'b' && (
              <Form.Item
                name="img"
                label="发送的图片"
                rules={[{ required: true }]}
              >
                <div>
                  <img style={{ width: '50%' }} src={img} alt="" />
                </div>
              </Form.Item>
            )
          }
          {
              type === 'c' && (
              <Form.Item
                name="PDF"
                label="发送的PDF"
                rules={[{ required: true }]}
              >
                <div><a href={img} target="_blank" download="PDf">这是一个PDF</a></div>
              </Form.Item>
            )
          }
          {
              type === 'd' && (
              <>
                <Form.Item
                  name="cardTitle"
                  label="卡片标题"
                  rules={[{ required: true }]}
                >
                  <div>这是一个活动XXXXXXXXXX</div>
                </Form.Item>
                <Form.Item
                  name="cardContext"
                  label="内容摘要"
                  rules={[{ required: true }]}
                >
                  <div>这是一个活动XXXXXXXXXX这是一个</div>
                </Form.Item>
                <Form.Item
                  name="cardLink"
                  label="跳转链接"
                  rules={[{ required: true }]}
                >
                  <div>http://www.baidu.com</div>
                </Form.Item>
              </>
            )
          }
        </Form>
      </Modal>
    );
};
ModalRow.propTypes = {
    visibleRow: PropTypes.bool,
    handleRowCancel: PropTypes.func,
    data: PropTypes.object
};

export default ModalRow;
