// infoCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../images/code-db-onQuery.png',
    userInfo: {
      nickName: '带路小妖',
      userName: '方晓媛',
      idNo: "443459198901090889",
      gender: '女',
      level: '白金会员',
      email: 'hwfr@finland.com',
      contact: '15834590938'
    },
    isArrow: false,
    urlTset: 'address',
    nickName: '带路小妖',
    cells: [
      { name: '姓名', value: '方晓媛' },
      { name: '身份证', value: '443459198901090889' },
      { name: '性别', value: '女' },
      { name: '我的等级', value: '白金会员' },
      { name: '电子邮箱', value: 'hwfr@finland.com', arrow: true, navUrl: '' },
      { name: '联系方式', value: '15834590938', arrow: true, navUrl: 'alterPhone' },
      { name: '地址管理', arrow: true, navUrl: 'address' }
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

  }
})