import { week } from '@/utils/enums'

// 将分转化成元
export function fenToYuan (val) {
  if (val == null) {
    return null
  }
  const s = val + ''
  if (s.length === 0) {
    return 0
  }
  if (s.length === 1) {
    return '0.0' + val
  }
  if (s.length === 2) {
    return '0.' + val
  }
  const i = s.indexOf('.')
  if (i < 0) {
    return s.substring(0, s.length - 2) + '.' + s.substring(s.length - 2)
  }
  const num = s.substring(0, i) + s.substring(i + 1)
  if (i === 1) {
    // 1位整数
    return '0.0' + num
  }
  if (i === 2) {
    return '0.' + num
  }
  if (i > 2) {
    return num.substring(0, i - 2) + '.' + num.substring(i - 2)
  }
}

export function yuanToFen (val) {
  if (val == null || val.length === 0) return null
  if (isNaN(val * 1)) {
    return 'Not a number!'
  }
  // 价格转为整数
  const index = val.indexOf('.')
  let p
  if (index === -1) {
    // 无小数
    p = val + '00'
  } else if (index === val.length - 1) {
    p = val.replace('.', '') + '00'
  } else if (index === val.length - 2) {
    // 1位小数
    p = val.replace('.', '') + '0'
  } else {
    // 2位小数
    p = val.replace('.', '')
  }
  return p
}

/**
 * 补零
 * @param {Number|String}number 数字
 * @param {Number}digits 目标位数
 * @return {string}
 */
export function fillZero (number, digits) {
  number = String(number)
  const length = number.length
  if (number.length < digits) {
    for (let i = 0; i < digits - length; i++) {
      number = '0' + number
    }
  }
  return number
}

export function dateFormate (date, format, needFillZero) {
  // format 默认的时间格式
  if (date == null) {
    return null
  }
  date = new Date(date)
  const config = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    W: week[date.getDay()]
  }
  for (const key in config) {
    format = format.replace(key, key !== 'W' && needFillZero ? fillZero(config[key], 2) : config[key])
  }
  return format
}
export function moneyFormate (number, places = '2', symbol = '') {
  number = number || 0
  const negative = number < 0 ? '-' : ''
  const i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + ''
  const j = (i.length) > 3 ? i.length % 3 : 0
  return symbol + negative + (j ? i.substr(0, j) + ',' : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',') + (places ? '.' + Math.abs(number - i).toFixed(places).slice(2) : '')
}
