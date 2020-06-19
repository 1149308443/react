/**
 * 基于a标签实现的下载,支持下载链接,相对路径绝对路径,二进制流文件
 * 直接路径的还需要在同域下,否则可能存在兼容问题,直接打开页面或者其他行为表现
 * 注意如果是后端直接返回文件流的话, 需要在请求的时候加上 responseType = 'blob'
 * @param  path 下载地址/ 文件流
 * @param {string} name  下载文件的名字 / 重命名  考虑兼容性问题,最好加上后缀名
 * @param {string} type  下载文件类型
 */
export default (path, name, type) => {
    let url = path;
    if (type) {
        const blob = new Blob([path], { type });
        url = URL.createObjectURL(blob);
    }
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
