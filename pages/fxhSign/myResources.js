// pages/fxhSign/myResources.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    segIndex: 0,
    applyingTabs: ['审核中', '已完成', '未通过'],
    applyingIndex: -1,
    applyings: [],
    confirms: [
      { title: '资源消息', content: '您的资源【室内装修设计方案】，有客户提出了沟通申请，请您 尽快查看。', dateTime: '2020-02-21 16:30:45' },
      { title: '资源消息', content: '您的资源【室内装修设计方案】，有客户提出了沟通申请，请您 尽快查看。', dateTime: '2020-02-21 16:30:45' },
      { title: '资源消息', content: '您的资源【室内装修设计方案】，有客户提出了沟通申请，请您 尽快查看。', dateTime: '2020-02-21 16:30:45' },
      { title: '资源消息', content: '您的资源【室内装修设计方案】，有客户提出了沟通申请，请您 尽快查看。', dateTime: '2020-02-21 16:30:45' }
    ],
    communicatings: [
      { title: '资源消息', content: '您沟通的【室内装修设计方案】资源，已经由商家接受，商家将 尽快联系您，请保持手机畅通。', dateTime: '2020-02-21 16:30:45' },
      { title: '资源消息', content: '您沟通的【室内装修设计方案】资源，已经由商家接受，商家将 尽快联系您，请保持手机畅通。', dateTime: '2020-02-21 16:30:45' },
      { title: '资源消息', content: '您沟通的【室内装修设计方案】资源，已经由商家接受，商家将 尽快联系您，请保持手机畅通。', dateTime: '2020-02-21 16:30:45' },
      { title: '资源消息', content: '您沟通的【室内装修设计方案】资源，已经由商家接受，商家将 尽快联系您，请保持手机畅通。', dateTime: '2020-02-21 16:30:45' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let tempObj = [
      { imgUrl: '', company: '凤园椰珍食品有限公司', applyDate: '2020-05-14', project: '广州云山诗意', status: 1 },
      { imgUrl: '', company: '一龙拉面食品有限公司', applyDate: '2020-06-05', project: '广州云山诗意', status: 2 },
      { imgUrl: '', company: '摩打食堂食品有限公司', applyDate: '2020-05-30', project: '广州云山诗意', status: 1 },
      { imgUrl: '', company: 'heytea喜茶食品有限公司', applyDate: '2020-06-17', project: '广州云山诗意', status: 3 },
      { imgUrl: '', company: '乐乐茶食品有限公司', applyDate: '2020-05-22', project: '广州云山诗意', status: 1 }
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
   * 选择类型修改
   */
  onTypeChange: function (event) {
    console.log('来了...')
  },

  /**
   * 
   * @param {*} 参数：点击索引值
   */
  onApplyingChange: function (event) {
    console.log(event.detail)
  },

  /**
   * 处理数据：图片类型、日期格式
   */
  formatterMessages: function (pramas) {
    // 结果
    var tempObj = []
    for (var i = 0; i < pramas.length; i++) {
      var tempVal = pramas[i]
      tempVal['statusImg'] = this.typeImage(tempVal.status)
      tempVal['fmtDate'] = this.formatterTm(tempVal.applyDate)
      tempObj.push(tempVal)
    }
    // 更新
    this.setData({
      applyings: tempObj
    })
  },

  /**
   * 图片类型
   */
  typeImage: function (type) {
    // 图片类型
    var tempObj = {
      img1: 'resources-apply-processing',
      img2: 'resources-apply-successed',
      img3: 'resources-apply-failed'
    }
    // 结果
    var tempVal = '/images/' + tempObj['img' + type] + '.png'
    return tempVal
  },

  /**
   * 处理日期，格式为：*年*月*日
   */
  formatterTm: function (date) {
    // 1、分日期和时间；2、用'-'分日期
    var dt = date.split(' ')
    var joins = ['年', '月', '日']
    var tempVal = ''
    // 组合日期
    dt[0].split('-').forEach((obj, i) => {
      tempVal += (Number(obj) + joins[i])
    })
    // 返回
    return tempVal
  }
})