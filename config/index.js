export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxd458725f85336293",
    // 公众号appSecret
    appSecret: "3cfab6c7f3ef891c6a22af16439e47d0",
    // 模板消息id
    templateId: "_1i4oH0Ka7Ivf7a957q2IH7Y_F2tE3LSwo0vUMU8Rco",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oQ0v86nV5zL0Hvw3ENKUmm8HOeJ0"],
     
    // 信息配置
    // 所在省份
    province: "湖北",
    // 所在城市
    city: "武汉",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1992", "date": "01-17", "type": 'new'},
      {"name": "家公", "year": "1992", "date": "12-18", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2013-05-01",
    // 结婚纪念日
    marryDate: "2018-09-15"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
