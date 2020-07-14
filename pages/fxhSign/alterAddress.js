// pages/fxhSign/alterAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cells: [
      { name: '收件人', value: '', placeholder: '请填写收货人姓名' },
      { name: '所在区域', value: '', placeholder: '请选择所在省份市区', readonly: true, arrow: true },
      { name: '具体地址', value: '', placeholder: '请填写详细地址' },
      { name: '联系方式', value: '', placeholder: '请填写收货人手机号', type: 'number' }
    ],
    cancelTitle: '删除地址'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 标题和操作按钮
    var titleVal = '编辑地址'
    var optVal = '删除地址'
    // 新增/修改？
    if (options.isNew) {
      optVal = '取消'
      titleVal = '新增地址'
    }
    that.setData({
      cancelTitle: optVal
    })
    // 修改标题
    wx.setNavigationBarTitle({
      title: titleVal,
      success: function(res) {
        // success
      }
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

  },

  /**
   * 提交”更改/新增地址“信息
   */
  onSubmitInfo: function (event) {
    console.log('准备提交...')
  }
})