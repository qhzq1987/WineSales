// /mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../images/code-db-onQuery.png',
    userInfo: {
      phone: "186****3588"
    },
    points: 4000,
    level: '白金会员',
    stats: [1, 4, 25],
    fxhs: [
      { icon: '../../images/mine-orders.png', name: '我的社群' },
      { icon: '../../images/mine-orders.png', name: '我的活动' },
      { icon: '../../images/mine-orders.png', name: '我的资源' },
      { icon: '../../images/mine-orders.png', name: '我的订单' }
    ],
    others: [
      { icon: '../../images/mine-orders.png', name: '消息中心' },
      { icon: '../../images/mine-orders.png', name: '邀请有礼' },
      { icon: '../../images/mine-orders.png', name: '帮助中心' },
      { icon: '../../images/mine-orders.png', name: '设置' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 个人信息中心
   */
  onInfoCenter: function () {
    wx.navigateTo({
      url: 'infoCenter'
    })
  },

  /**
   * 操作类型，根据索引值（根据其它约定标识符也可跳转），跳转不同页面
   * -1：查看等级
   * @param {*} event 
   */
  onPoints: function (event) {
    var $this = this;
    console.log(event.detail)
  },

  /**
   * 我的方心汇跳转
   * @param {*} event 
   */
  onFxcluster: function (event) {
    console.log('onFxcluster' + event.detail)
    // 类型
    var url = ''
    switch (event.detail) {
      case 1:
        url = 'my-activities'
        break
      case 2:
        url = 'myResources'
        break
    }
    // 跳转
    wx.navigateTo({
      url: url
    })
  },

  /**
   * 其他功能模块"跳转"事件处理
   */
  onOthers: function (event) {
    // 类型
    var url = ''
    switch (event.detail) {
      case 0:
        url = 'msgCenter'
        break
      case 2:
        url = 'helpCenter'
        break
      case 3:
        url = 'setting'
        break
    }
    // 跳转
    wx.navigateTo({
      url: url
    })
  }
})