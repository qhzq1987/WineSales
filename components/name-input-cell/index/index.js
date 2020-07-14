Component({
  data: {},
  properties: {
    // 标题名称
    name: String,
    // 值
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请输入验证码'
    },
    // 其值只能为：side、all、left3种样式
    seperatorType: {
      type: String,
      value: ''
    },
    inputType: {
      type: String,
      value: 'type'
    },
    maxLength: {
      type: Number,
      value: -1
    }
  },
  methods: {}
})