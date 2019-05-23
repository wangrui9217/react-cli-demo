import * as home from './action-type';

let defaultState = {
    orderSum: '111', //金额
    name: '222', //姓名
    phoneNo: '333', //手机号
    imgpath: '444', //图片地址
}

// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
    switch(action.type){
        case home.SAVEFORMDATA:
            return {...state, ...{[action.datatype]: action.value}};
        default:
            return state;
    }
}
