// 比较commonJs和 ES6中模块化的区别

let count = 3;

const info = {
    page: 0,
    size: 10
};

function Add() {
    count += 1;
    return count;
}

function changeInfo() {
    info.total = 100;
}
module.exports = {
    count,
    Add,
    info,
    changeInfo
};
