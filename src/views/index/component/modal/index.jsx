import React, { PureComponent } from 'react';
import {
    Modal,
    Button,
    Form,
    Select,
    Input,
    Radio,
    Upload
} from 'antd';
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

class ModalBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visibleLink: false,
            visible: true,
            confirmLoading: false,
            textareaValue: '',
            waring: false
        };
        this.Btn = React.createRef();
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleLinkOk = () => {
        this.setState({
            visibleLink: false
        });
    }

    handleLickCancel = () => {
        this.setState({
            visibleLink: false
        });
    }

    handleOk = () => {
        this.Btn.current.click();
        const { textareaValue } = this.state;
        if (!textareaValue) {
            this.setState({
                waring: true
            });
            return;
        }

        this.setState({
            confirmLoading: true
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
            waring: false
        });
    };

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    radioChange = (e) => {
        console.log(e.target.value);
    }

    changeTextarea = ({ target: { value } }) => {
        console.log(value);
        if (value) {
            this.setState({
                textareaValue: value,
                waring: false
            });
        } else {
            this.setState({
                textareaValue: value,
                waring: true
            });
        }
    }

    insertLink = () => {
        const { textareaValue } = this.state;
        console.log(textareaValue);
        this.setState({
            textareaValue: `${textareaValue}<a herf="www.baidu.com">百度</a>`,
            visibleLink: true
        });
    }

    render() {
        const {
            visible, confirmLoading, textareaValue, waring, visibleLink
        } = this.state;
        return (
          <div className={style.container}>
            <div className={style.btnGroup}>
              <Button type="primary" onClick={this.showModal}>
                消息群推(个人)
              </Button>
              <Button type="primary" onClick={this.showModal}>
                消息群推(团队)
              </Button>
            </div>

            <Modal
              title="消息群推(个人)"
              okText="确定"
              cancelText="取消"
              visible={visible}
              confirmLoading={confirmLoading}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              maskClosable={false}
              destroyOnClose
            >
              <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={this.onFinish}
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
                  <Radio.Group onChange={this.radioChange}>
                    <Radio value="a">文本</Radio>
                    <Radio value="b">图片</Radio>
                    <Radio value="c">PDF</Radio>
                    <Radio value="d">卡片</Radio>
                  </Radio.Group>
                </Form.Item>
                {/* <Form.Item label="内容摘要" rules={[{ required: true, message: '请输入内容' }]}>
                  <Input.TextArea
                    value={textareaValue}
                    onChange={this.changeTextarea}
                    placeholder="请输入内容"
                  />
                </Form.Item> */}
                <div className={clsn([style.textContet, { [style.waring]: waring }])}>
                  <span>内容摘要: </span>
                  <Input.TextArea
                    value={textareaValue}
                    onChange={this.changeTextarea}
                    placeholder="请输入内容"
                  />
                  <p>请输入内容</p>
                </div>
                <div className={style.insert} onClick={this.insertLink}>插入超链接</div>
                <div style={{ display: 'none' }}>
                  <Form.Item
                    wrapperCol={{
                        span: 12,
                        offset: 6
                    }}
                  >
                    <Button type="primary" htmlType="submit" ref={this.Btn}>
                                    Submit
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </Modal>
            <Modal
              title="超链接设置"
              okText="确定"
              cancelText="取消"
              visible={visibleLink}
              onOk={this.handleLinkOk}
              onCancel={this.handleLickCancel}
              maskClosable={false}
              destroyOnClose
            />
          </div>
        );
    }
}

export default ModalBox;
