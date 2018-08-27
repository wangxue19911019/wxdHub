const Mock = require('mockjs')

Mock.mock('/api/login','get',{
  "code":"success",
})

Mock.mock('/api/forgetpassword','get',{
  'name':'@name',
  'age|1-100':100,
  'color':'@color'
})

Mock.mock('/api/threemonth','get',{
  "code":"success",
  "data":{
    "bid_amount":"554749745.00",
    "bid_user":"13918"
  }
})
