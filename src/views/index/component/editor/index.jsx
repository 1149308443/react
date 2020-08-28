import React, {
 useState, useImperativeHandle, forwardRef
} from 'react';
import { Modal, Form, Input } from 'antd';
import { useThrottleFn, useDebounceFn } from 'ahooks';
import { throttle, debounce } from 'lodash';
import * as style from './style.less';

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};

const EditorAddLink = (props, editor) => {
    const [visibleLink, setVisibleLink] = useState(false);
    const [addLink] = Form.useForm();
    const [cursorPos, setCursorPos] = useState(null); // 获取到的文本框光标位置
    const [cursorEle, setCursorEle] = useState(null); // 获取到的光标焦点元素

    useImperativeHandle(editor, () => ({
        getEditorInner: () => { // 父组件通过传递ref给子组件, 可以在父组件中通过 ref.current.子组件方法 调用子组件方法
            console.log(111);
            const { innerHTML } = document.querySelector('#editorLink');
            return innerHTML;
        }
      }));
    const insertEl = (el) => {
        const target = document.querySelector('#editorLink');

        if (cursorEle !== null && cursorEle.parentNode) {
            if (cursorEle.parentNode.nodeName === 'A') {
                if (cursorPos === 0) { // 再元素的前面则在标签之前插入
                    target.insertBefore(el, cursorEle.parentNode);
                } else { // 否则在a标签之后插入
                    target.insertBefore(el, cursorEle.parentNode.nextSibling);
                }
            } else {
                // 在其他的样式标签中
                // 光标在文本中或者在文本的最后,  通过位置将文本分成 前  a  后
                // 插入顺序  后  a  前  移除原有文本
                const { data } = cursorEle;
                const strBefore = document.createTextNode(data.slice(0, cursorPos));
                const strAfter = document.createTextNode(data.slice(cursorPos));
                cursorEle.parentNode.insertBefore(strAfter, cursorEle.nextSibling);
                cursorEle.parentNode.insertBefore(el, cursorEle.nextSibling);
                cursorEle.parentNode.insertBefore(strBefore, cursorEle.nextSibling);
                cursorEle.remove();
            }
        } else {
            // 光标在最后或者没输入元素的时候  直接添加
            target.appendChild(el);
        }
    };

    // 点击添加超链接框确认按钮
    const handleLinkOk = () => {
        addLink.validateFields().then((values) => {
            console.log('link value', values);
            const a = document.createElement('a');
            a.href = values.link;
            a.innerHTML = values.text;
            insertEl(a); // 插入超链接
            setVisibleLink(false);
            addLink.resetFields();
        })
            .catch((info) => {
                console.log('Link Failed:', info);
            });
    };

    // 编辑器的复制事件
    const editorPaste = (e) => {
        e.stopPropagation(); // 阻止冒泡
        e.preventDefault();// 阻止默认行为
        const text = e.clipboardData.getData('text/plain');
        if (text) {
            const el = document.createTextNode(text);
            insertEl(el);

            // 设置光标位置
            const range = window.getSelection().getRangeAt(0);
            range.setStart(el, text.length);
            range.setEnd(el, text.length);
            range.collapse(true);
        }
    };

    // 选中元素被拖拽进编辑器中触发
    const editorDrop = (e) => {
        e.stopPropagation(); // 阻止冒泡
        e.preventDefault();// 阻止默认行为
    };

    // 点击输入或者键盘抬起的时候监获取光标在输入框的位置
    const getAtPos = () => {
        const obj = {};
        const x = obj?.x || '1';
        console.log(x);
        const anchor = window.getSelection().getRangeAt(0);
        const target = document.querySelector('#editorLink');
        const { endContainer, endOffset } = anchor;
        if (endContainer !== target) {
            setCursorEle(endContainer);
            setCursorPos(endOffset);
        }
    };
    // 防抖一下输入框的键盘事件
    // 单位时间内多次触发只会执行最后一次
    // const debounced = debounce(getAtPos, 1000); // lodash的防抖函数
    // const debounced = useDebounceFn(getAtPos, { wait: 1500 }).run; // ahooks的防抖函数

    // 单位时间内多次触发单位时间内会执行一次
    // const debounced = throttle(getAtPos, 1000); // lodash的节流函数
    const debounced = useThrottleFn(getAtPos, { wait: 100 }).run; // ahooks的节流函数


    // 点击添加超链接框取消按钮
    const handleLickCancel = () => {
        addLink.resetFields();
        setVisibleLink(false);
    };
    // 点击添加文本超链接
    const insertLink = () => {
        setVisibleLink(true);
    };

    return (
      <>
        <div className={style.editorBox}>
          <div
            className={style.editor}
            id="editorLink"
            contentEditable
            onKeyUp={debounced}
            onClick={debounced}
            onPaste={editorPaste}
            onDrop={editorDrop}
          />
          <div className={style.insert} onClick={insertLink}>插入超链接</div>
        </div>

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
      </>
    );
};

export default forwardRef(EditorAddLink);
