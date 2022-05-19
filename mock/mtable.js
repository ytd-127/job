const Mock = require('mockjs')

const data = Mock.mock({
  'items|3': [{
    'name|+1': ['Allen', 'Kell', 'Moris'],
    'phone|+1': ['152346729001', '13256379102', '13323648121'],
    'realName|+1': ['ytd', '127', 'yaq'],
    'subject|1': ['计算机', '金融', '生物'],
    'workTitle|1': ['项目经理', '小组长', '研发工程师'],
    'workTime|1': ['10年', '五年', '三年'],
    time: '@datetime'
  }]
})
const columns = Mock.mock({
  'items|7': [
    {
      'title|+1': ['昵称', '手机号', '真实姓名', '所属学科', '职位', '工作年限', '录入时间'],
      'key|+1': ['name', 'phone', 'realName', 'subject', 'workTitle', 'workTime', 'time']
    }
  ]
})

module.exports = [
  {
    url: '/vue-admin-template/mtable/data',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/mtable/columns',
    type: 'get',
    response: config => {
      const items = columns.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
