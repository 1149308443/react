import React, { useState, useRef } from 'react';
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
import PropTypes from 'prop-types';
import clsn from 'classnames';

import style from './style';

import Editor from '../../../component/editor';
import EditorAddLink from '../editor';

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

const ModalBox = () => {
  const [addSend] = Form.useForm();
  const editor = useRef();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState('消息群推(个人)');
  const [type, setType] = useState('a');
  const [waring, setWaring] = useState(false);
  const [uploadImg, setUploadImg] = useState(false);
  const [img, setImg] = useState(null);
  const [excelFile, setExcelFile] = useState([]);
  const [pdfFile, setPdfFile] = useState([]);

  const showModal = (type) => {
    setTitle(type);
    setVisible(true);
  };

  // 群推框确认按钮
  const handleOk = () => {
    const inner = editor.current.getEditorInner();
    console.log(inner);

    addSend.validateFields().then((values) => {
      const target = document.querySelector('#editor');
      if (!target.innerHTML && type === 'a') {
        return;
      }
      console.log('send value', values);
      delete values.upload;
      setConfirmLoading(true);

      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
        addSend.resetFields();
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
    setUploadImg(false);
    setImg(null);
  };

  const radioChange = (e) => {
    setType(e.target.value);
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
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('当前只支持 JPG/PNG 格式!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片必须小于 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  // 上传 EXCEL
  const beforeUploadExcel = (file) => new Promise((resolve, reject) => {
    const isXsls = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (!isXsls) {
      message.error('当前只支持 .xsls 格式!');
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject(false);
    }
    return resolve(true);
  });
  const onExcelChaneg = (info) => {
    console.log('onExcelChaneg', info);
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    setExcelFile(fileList);
  };

  // 上传 PDF
  const beforeUploadPdf = (file) => new Promise((resolve, reject) => {
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error('请选择 PDF 文件!');
      // eslint-disable-next-line prefer-promise-reject-errors
      return reject(false);
    }
    return resolve(true);
  });
  const onPdfChange = (info) => {
    console.log('onExcelChaneg', info);
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    setPdfFile(fileList);
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
          initialValues={{
            'radio-group': 'a'
          }}
        >
          <Form.Item
            // name="file"
            label="上传测试"
            rules={[
              {
                required: true
              }
            ]}
          >
            <input type="file" onChange={(envnt) => { console.log(envnt.target.files); }} />
          </Form.Item>
          <Form.Item
            label="富文本编辑器"
          >
            <Editor />
          </Form.Item>
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
            // valuePropName="fileList"
            // getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: '请选择文件'
              }
            ]}
            extra="（第一列为客户资金账号、第一行为表头，数据从第二行开始,仅支持xlsx格式的文件)"
          >
            <div className={style.upload}>
              <Upload
                name="EXCEL"
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="text"
                beforeUpload={beforeUploadExcel}
                showUploadList={{ showRemoveIcon: false }}
                onChange={onExcelChaneg}
                fileList={excelFile}
                customRequest={(option) => {
                  console.log(option);// 阻止表单默认提交
                }}
              >
                <Button>选择文件</Button>
              </Upload>
            </div>
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
                  <span className={style.title}>内容摘要: </span>
                  <div className={style.editor}><EditorAddLink ref={editor} /></div>
                  <p className={style.waringP}>请输入内容</p>
                </div>
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
                      message: '请选择图片'
                    }
                  ]}
                >
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                    customRequest={(option) => {
                      console.log(option);// 阻止表单默认提交
                    }}
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
                  // valuePropName="fileList"
                  // getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: '请选择PDF'
                    }
                  ]}
                >
                  <div className={style.upload}>
                    <Upload
                      name="PDF"
                      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="text"
                      beforeUpload={beforeUploadPdf}
                      showUploadList={{ showRemoveIcon: false }}
                      onChange={onPdfChange}
                      fileList={pdfFile}
                      customRequest={(option) => {
                        console.log(option);// 阻止表单默认提交
                      }}
                    >
                      <Button>选择PDF</Button>
                    </Upload>
                  </div>
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
    </div>
  );
};

ModalBox.propTypes = {
  setStore: PropTypes.func
};

export default ModalBox;
