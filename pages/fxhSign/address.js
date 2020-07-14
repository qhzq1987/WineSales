// /address.js
import Dialog from '@vant/weapp/dialog/dialog'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses: [{
      name: '向冰',
      phone: '18620914219',
      address: '广东省广州市番禺区厦滘兴华街8巷8号',
      isDefault: false
    },
    {
      name: '李浩然',
      phone: '15521273745',
      address: '广东省广州市天河区体育东路28号东门物业',
      isDefault: true
    },
    {
      name: '黄然',
      phone: '18620154785',
      address: '广东省广州市番禺区厦滘兴华街8巷8号',
      isDefault: false
    }]
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
   * 编辑、删除地址
   */
  onCellOpt: function (event) {
    // 处理类型
    switch (event.detail) {
      case 'cell':
        wx.navigateTo({
          url: 'alterAddress'
        })
        break
      case 'right':
        console.log('删除...')
        break
    }
    //   // 是否滑动”右侧“点击？
    //   if ('right' != event.detail) {
    //     return
    //   }
    //   Dialog.confirm({
    //     title: '询问',
    //     message: '确定删除？'
    //   }).then(() => {

    //   }).catch(() => {

    //   })
  },

  /**
   * 新增收货地址
   */
  onNewAddress: function() {
    wx.navigateTo({
      url: 'alterAddress?isNew=true'
    })
  }
})