// pages/fxhSign/msgCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tempObj = [
      { title: '积分变动', subTitle: '您有新的积分变动', createTime: '2020-02-13 16:35:30', type: 1 },
      { title: '会员通知', subTitle: '恭喜您！您的会员级别上升到白金级别您的会员级别上升到白金级别您的会员级别上升到白金级别！', createTime: '2020-07-02 16:35:30', type: 2 },
      { title: '资源通知', subTitle: '恭喜您！您的社群申请已通过！', createTime: '2020-12-21 16:05:30', type: 3 },
      { title: '方心商家通知', subTitle: '商家给您发来了新的消息！', createTime: '2020-06-17 16:45:30', type: 4 },
      { title: '退款进度', subTitle: '您的退款进度已更新！', createTime: '2020-04-29 16:35:30', type: 1 },
      { title: '系统通知', subTitle: '您有一条新的系统消息！', createTime: '2020-06-15 16:35:30', type: 2 },
      { title: '积分兑换商城通知', subTitle: '商家给您发来了新的消息！', createTime: '2020-07-22 06:35:30', type: 5 }
    ]
    // 处理数据
    this.formatterMessages(tempObj)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 处理数据：图片类型、日期格式
   */
  formatterMessages: function (pramas) {
    // 结果
    var tempObj = []
    for (var i = 0; i < pramas.length; i++) {
      var tempVal = pramas[i]
      tempVal['typeImg'] = this.typeImage(tempVal.type)
      tempVal['fmtTm'] = this.formatterTm(tempVal.createTime)
      tempObj.push(tempVal)
    }
    // 更新
    this.setData({
      messages: tempObj
    })
  },

  /**
   * 图片类型
   */
  typeImage: function (type) {
    // 图片类型
    var tempObj = {
      img1: 'msg-center-member',
      img2: 'msg-center-notice',
      img3: 'msg-center-points',
      img4: 'msg-center-refund',
      img5: 'msg-center-resource'
    }
    // 结果
    var tempVal = '/images/' + tempObj['img' + type] + '.png'
    return tempVal
  },

  /**
   * 处理日期，格式为：*年*月*日 00:00
   */
  formatterTm: function (tm) {
    // 1、分日期和时间；2、用'-'分日期；3、截取时分段
    var dt = tm.split(' ')
    var joins = ['年', '月', '日']
    var tempVal = ''
    // 组合日期
    dt[0].split('-').forEach((obj, i) => {
      tempVal += (Number(obj) + joins[i])
    })
    // 时间
    tempVal += ' ' + dt[1].substr(0, 5)
    return tempVal
  }
})