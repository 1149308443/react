import React, { useState } from 'react';
import {
  Modal,
  Button,
  Form,
  Select,
  Input,
  Radio,
  Upload,
  message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import clsn from 'classnames';
import style from './style.scss';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const ModalBox = () => {
  const [addSend] = Form.useForm();
  const [addLink] = Form.useForm();
  const [visibleLink, setVisibleLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [textareaValue, setTextareaValue] = useState(null);
  const [title, setTitle] = useState('消息群推(个人)');
  const [type, setType] = useState('a');
  const [waring, setWaring] = useState(false);
  const [sendObj, setSendObj] = useState({});
  const [uploadImg, setUploadImg] = useState(false);
  const [img, setImg] = useState(null);

  const showModal = (type) => {
    setTitle(type);
    setVisible(true);
  };

  // 点击添加超链接框确认按钮
  const handleLinkOk = () => {
    addLink.validateFields().then((values) => {
      console.log('link value', values);
      const tag = `${textareaValue || ''}<a href="${values.link}">${values.text}</a>`;
      setTextareaValue(tag);
      setVisibleLink(false);
      addLink.resetFields();
    })
    .catch((info) => {
      console.log('Link Failed:', info);
    });
  };
 // 点击添加超链接框取消按钮
  const handleLickCancel = () => {
    addLink.resetFields();
    setVisibleLink(false);
  };

  // 群推框确认按钮
  const handleOk = () => {
    addSend.validateFields().then((values) => {
      if (!textareaValue) {
        setWaring(true);
        return;
      }
      console.log('send value', values);
      setConfirmLoading(true);
      setSendObj({
        ...values,
        textarea: textareaValue
      });
      addSend.resetFields();
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    })
    .catch((info) => {
      console.log('Send Failed:', info);
    });
  };

  // 群推取消
  const handleCancel = () => {
    addSend.resetFields();
    setVisible(false);
    setWaring(false);
    setUploadImg(false);
    setImg(null);
  };

  const onFinishLink = (values) => {
    console.log('Link values of form: ', values);
  };

  const onFinish = (values) => {
    console.log('Send values of form: ', values);
  };

  const radioChange = (e) => {
    setType(e.target.value);
  };

  // 文本状态下 输入框事件监听
  const changeTextarea = ({ target: { value } }) => {
    if (value) {
      setWaring(false);
    } else {
      setWaring(true);
    }
    setTextareaValue(value);
  };

  // 点击添加文本超链接
  const insertLink = () => {
    setVisibleLink(true);
  };

  // 点击上传图片
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setUploadImg(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setUploadImg(false);
        setImg(imageUrl);
      });
    }
  };

  // 渲染上传图片按钮
  const uploadButton = (
    <div>
      {uploadImg ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <div className={style.container}>
      <div className={style.btnGroup}>
        <Button type="primary" onClick={() => showModal('消息群推(个人)')}>
          消息群推(个人)
        </Button>
        <Button type="primary" onClick={() => showModal('消息群推(团队)')}>
          消息群推(团队)
        </Button>
      </div>

      <Modal
        title={title}
        okText="确定"
        cancelText="取消"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        destroyOnClose
      >
        <Form
          form={addSend}
          name="add_send"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            'radio-group': 'a'
          }}
        >
          <Form.Item
            name="serverType"
            label="客户服务类型"
            hasFeedback
            rules={[
              {
                required: true,
                message: '请选择客户服务类型'
              }
            ]}
          >
            <Select placeholder="请选择客户服务类型">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="upload"
            label="待发送名单"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: '请选择文件'
              }
            ]}
            extra="（第一列为客户资金账号、第一行为表头，数据从第二行开始,仅支持xlsx格式的文件)"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>选择文件</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="radio-group"
            label="消息类型"
            rules={[{ required: true }]}
          >
            <Radio.Group onChange={radioChange}>
              <Radio value="a">文本</Radio>
              <Radio value="b">图片</Radio>
              <Radio value="c">PDF</Radio>
              <Radio value="d">卡片</Radio>
            </Radio.Group>
          </Form.Item>
          {
            type === 'a' && (
              <>
                <div className={clsn([style.textContet, { [style.waring]: waring }])}>
                  <span>内容摘要: </span>
                  <Input.TextArea
                    value={textareaValue}
                    onChange={changeTextarea}
                    placeholder="请输入内容"
                  />
                  <p>请输入内容</p>
                </div>
                <div className={style.insert} onClick={insertLink}>插入超链接</div>
              </>
          )
         }
          {
            type === 'b' && (
              <>
                <Form.Item
                  name="uploadImg"
                  label="选择图片"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: '请选择PDF'
                    }
                  ]}
                >
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {img ? <img src={img} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                </Form.Item>
              </>
          )
         }
          {
            type === 'c' && (
              <>
                <Form.Item
                  name="uploadPDF"
                  label="选择PDF"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: '请选择PDF'
                    }
                  ]}
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>选择PDF</Button>
                  </Upload>
                </Form.Item>
              </>
          )
         }
          {
            type === 'd' && (
              <>
                <Form.Item
                  name="cardTitle"
                  label="卡片标题"
                  rules={[{ required: true, message: '请输入卡片标题' }]}
                >
                  <Input type="text" />
                </Form.Item>
                <Form.Item
                  name="cardContent"
                  label="卡片内容"
                  rules={[{ required: true, message: '请输入卡片内容' }]}
                >
                  <Input.TextArea
                    placeholder="请输入内容"

                  />
                </Form.Item>
                <Form.Item
                  name="cardLink"
                  label="跳转链接"
                  rules={[{ required: true, message: '请输入卡片链接' }]}
                >
                  <Input type="text" />
                </Form.Item>
              </>
          )
         }
        </Form>
      </Modal>
      <Modal
        title="超链接设置"
        okText="确定"
        cancelText="取消"
        visible={visibleLink}
        onOk={handleLinkOk}
        onCancel={handleLickCancel}
        maskClosable={false}
        destroyOnClose
      >
        <Form
          form={addLink}
          name="add_link"
          {...formItemLayout}
          onFinish={onFinishLink}
        >
          <Form.Item
            name="text"
            label="显示文字"
            rules={[{ required: true, message: '请输入内容' }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="link"
            label="链接地址"
            rules={[{ required: true, message: '请输入链接地址' }]}
          >
            <Input type="text" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalBox;
