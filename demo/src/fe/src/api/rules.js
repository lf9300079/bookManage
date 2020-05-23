export function checkReg1(rules, value, callback) {
  // 校验格式为：数字大小写字母中横线下划线
  const reg = /^[0-9a-zA-Z_-]*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为数字大小写字母中横线下划线'))
  } else {
    callback()
  }
}
export function checkReg2(rules, value, callback) {
    // 校验格式为：中文数字大小写字母中横线下划线
  const reg = /^[\u4E00-\u9FA5-0-9a-zA-Z_-]*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为中文数字大小写字母中横线下划线'))
  } else {
    callback()
  }
}
export function checkReg3(rules, value, callback) {
    // 校验格式为：中文数字大小写字母中横线下划线,括号
  const reg = /^[\u4E00-\u9FA5-(-)-0-9a-zA-Z_-]*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为中文数字大小写字母中横线下划线括号'))
  } else {
    callback()
  }
}
export function checkReg4(rules, value, callback) {
    // 校验格式为：数字大小写字母下划线
  const reg = /^[0-9a-zA-Z_]*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为数字大小写字母下划线'))
  } else {
    callback()
  }
}
export function checkReg5(rules, value, callback) {
    // 校验格式为：数字大小写字母中横线
  const reg = /^[0-9a-zA-Z-]*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为数字大小写字母下划线'))
  } else {
    callback()
  }
}
export function checkReg6(rules, value, callback) {
    // 校验格式为：数字大小写字母中横线.
  const reg = /^[0-9a-zA-Z-]*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为数字大小写字母中横线.'))
  } else {
    callback()
  }
}
export function checkReg7(rules, value, callback) {
    // 校验格式为：中文数字大小写字母中横线下划线.%
  const reg = /^([0-9a-zA-Z]|[\u4E00-\u9FA5]|[.]|[%]|[_]|[-])*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为中文数字大小写字母中横线下划线.%'))
  } else {
    callback()
  }
}
export function checkReg8(rules, value, callback) {
    // 校验格式为：数字大小写字母下划线.
  const reg = /^([0-9a-zA-Z]|[.]|[_])*$/
  if (!reg.test(value)) {
    return callback(new Error('输入格式为数字大小写字母下划线.'))
  } else {
    callback()
  }
}
export function checkReg9(rules, value, callback) {
  // 校验格式为：最多小数点后保留两位
  const reg = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
  if (!reg.test(value)) {
    return callback(new Error('金额格式错误.'))
  } else {
    callback()
  }
}
export function checkReg10(rules, value, callback) {
  const reg = /^[a-zA-Z\u4e00-\u9fa5][\w\W]{3,19}$/
  if (!reg.test(value)) {
    return callback(new Error('4-20位英文字母、中文、数字、下划线组成（英文字母或中文开头）'))
  } else {
    callback()
  }
}

export function checkReg11(rules, value, offer, callback) {
  const reg = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
  if (!reg.test(value)) {
    return callback(new Error('折扣格式错误.'))
  } else if (offer && parseFloat(offer.lowerDiscount) > parseFloat(offer.upperDiscount)) {
    return callback(new Error('折扣下限值不能大于折扣上限值.'))
  } else {
    callback()
  }
  /*    else if (!(value >= parseFloat('80.00') && value <= parseFloat('300.00'))) {
    return callback(new Error('折扣范围错误.'))  */
}

export function checkReg12(row, value, callback) {
  // 校验格式为：最多小数点后保留两位
  const reg = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
  if (!reg.test(value)) {
    return callback(new Error('折扣格式错误.'))
  } else if (row && (parseFloat(row.lowerDiscount) > parseFloat(row.upperDiscount))) {
    return callback(new Error('折扣范围错误，折扣下限值不能大于折扣上限值！'))
  } else {
    callback()
  }
/* else if (!(value >= parseFloat('80.00') && value <= parseFloat('300.00'))) {
    return callback(new Error('折扣范围错误，折扣最小值80%，最大值300%！.'))
  } */
}

export function checkReg13(rules, value, callback) {
  const reg = /^[a-zA-Z\u4e00-\u9fa5][\w\W]{0,29}$/
  if (!reg.test(value)) {
    return callback(new Error('1-30位英文字母、中文、数字、下划线组成（英文字母或中文开头）'))
  } else {
    callback()
  }
}

export default {
//   code: [
//     {required: true, validator: checkCode, trigger: 'blur'},
//     {min: 0, max: 10, message: '请输入编码长度不能大于10', trigger: 'blur'}
//   ]
}
