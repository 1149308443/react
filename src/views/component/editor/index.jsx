import React, { useEffect } from 'react';
import Editor from 'wangeditor';
import * as style from './style';

const EditorComponent = () => {
    useEffect(() => {
        const editor = new Editor('#editorCom');
        editor.customConfig.zIndex = 0;
        // 自定义菜单配置
        editor.customConfig.menus = [
            'link' // 插入链接
        ];
        editor.create();
        return () => {
            // 相当于compomentWillMount
        };
    }, []);

    return (
      <>
        <div id="editorCom" className={style.editor} />
      </>
    );
};

export default EditorComponent;
