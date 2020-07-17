// pages/fxhSign/housingDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomName: '增城云山诗意-C区',
    address: '增城云山诗意—C区-三期住宅-雅风街-15栋 1501室',
    details: [
      { name: '户型', value: '三房两厅' },
      { name: '建筑面积', value: '110.05000m²' },
      { name: '套内面积', value: '89.6200m²' },
      { name: '合同交付日期', value: '2018-04-30 18:49:23' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('点击索引 = ' + options.roomId)
    // 房屋参数
    this.setData({
      roomName: options.roomName,
      address: options.address
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