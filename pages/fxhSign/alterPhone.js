// /alterPhone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cells: [
      { name: '旧手机号', placeholder: '请输入手机号', type: 'number', maxlength: 11 },
      { name: '身份证', placeholder: "请输入身份证号", type: 'idcard', maxlength: 18 },
      { name: '会员姓名', placeholder: "请输入姓名", maxlength: 20 },
      { name: '新手机号', placeholder: "请输入手机号码", type: 'number', maxlength: 11 }
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
   * 提交”更改“信息
   */
  onSubmitInfo: function (event) {
    console.log('准备提交...')
  }
})