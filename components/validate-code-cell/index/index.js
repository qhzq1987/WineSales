Component({
  data: {
    // 计时器
    timer: '',
    tm: 60,
    btnName: '获取验证码',
    isTimer: false
  },
  properties: {
    // 标题名称
    name: {
      type: String,
      value: '验证码'
    },
    placeholder: {
      type: String,
      value: '请输入验证码'
    },
    // 其值只能为：side、all、left3种样式
    seperatorType: {
      type: String,
      value: ''
    }
  },
  methods: {
    onValidateCode: function () {
      var that = this;
      // 是否在进行？
      if (that.data.isTimer) {
        return
      }
      // 定时器
      that.data.timer = setInterval(function () {
        that.timeCountdown()
      }, 1000)
      // 先执行一次
      that.timeCountdown()
    },
    timeCountdown: function () {
      var that = this;
      // 计算时间
      var tempVal = that.data.tm - 1
      var btnVal = tempVal + "S"
      var isTm = true
      if (tempVal < 1) {
        clearInterval(that.data.timer)
        tempVal = 60
        btnVal = '获取验证码'
        isTm = false
      }
      // 更新值
      that.setData({
        tm: tempVal,
        btnName: btnVal,
        isTimer: isTm
      })
    }
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    clearTimeout(that.data.timer)
  }
})