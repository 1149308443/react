import {
 delay, cancel, fork, race, take
} from 'redux-saga/effects';

/**
 * @param {string} watchKey 轮询的action类型 会自动在前面加上UN_作为取消轮询的action类型
 * @param {Function} callback 传入的轮询方法
 * @param {number} timer 轮询的时间 默认设置1000毫秒
*/
const pollingEffect = function* (watchKey, callback, timer) {
    // 轮询方法
    const doWatch = function* (action) {
        try {
        while (true) {
            if (callback) {
            yield callback(action);
            }
            yield delay(timer || 1000);
        }
        } catch (e) {
        console.error(e);
        }
    };

    // 这边会注册轮询和关闭轮询两个任务, 当触发其中任意一个action时都会关闭轮询,如果触发的是轮询是会重置进行轮询
    let cancelTask = null;
    // console.log(1);
    while (true) {
        // console.log(2);
        const { watch } = yield race({
            watch: take(watchKey),
            unwatch: take(`UN_${watchKey}`)
        });
        if (cancelTask) {
            console.log(3);
            yield cancel(cancelTask);
        }
        if (watch) {
            cancelTask = yield fork(doWatch, watch.payload);
        }
    }
};
export default pollingEffect;
