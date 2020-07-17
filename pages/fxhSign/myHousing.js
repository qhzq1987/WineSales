// pages/fxhSign/myHousing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    housings: [
      { roomId: 1, roomName: '增城云山诗意-C区', address: '增城云山诗意—C区-三期住宅-雅风街-15栋 1501室' },
      { roomId: 2, roomName: '增城云山诗意-C区', address: '增城云山诗意—C区-三期住宅-雅风街-15栋 1501室' },
      { roomId: 3, roomName: '增城云山诗意-C区', address: '增城云山诗意—C区-三期住宅-雅风街-15栋 1501室' },
      { roomId: 4, roomName: '增城云山诗意-C区', address: '增城云山诗意—C区-三期住宅-雅风街-15栋 1501室' },
      { roomId: 5, roomName: '增城云山诗意-C区', address: '增城云山诗意—C区-三期住宅-雅风街-15栋 1501室' }
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
   * Cell选中
   */
  onSelected: function (event) {
    //详情
    var tempObj = this.data.housings[event.currentTarget.dataset.cid]
    wx.navigateTo({
      url: 'housingDetail?roomId=' + tempObj.roomId
        + '&roomName=' + tempObj.roomName
        + '&address=' + tempObj.address,
    })
  }
})