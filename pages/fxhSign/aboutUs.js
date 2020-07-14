// pages/fxhSign/aboutUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoText: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 介绍内容
    let tempVal = '是东方文化地产的践行者和现代东方人居生活全产业链运营服务的集成者， ' 
    + '为客户提供全生命周期的高质量服务，' 
    + '截至2020年，已连续14年跻身“中国房地产百强企业”，并荣获中国民营企业500强以及广东省百强民营企业称号。'
    this.setData({
      infoText: tempVal
    })
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

  }
})