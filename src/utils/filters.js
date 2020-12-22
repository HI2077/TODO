import Vue from 'vue'
import { dateFormate } from '@/utils/formate'

Vue.filter('dateFormate', function (val, format = 'M月D日,星期W', needFillZero = false) {
  return dateFormate(val, format, needFillZero)
})
