Page({
    data: {
        name: '亲子营养早餐活动',
        subName: '亲子交流，做饭也是好玩的事情',
        tm: '2020年6月30 14:30至17:30',
        address: '广州市珠江新城方圆月岛小区内',
        userName: '方文青',
        phone: '15839485960',
        infoCells: [
            { name: '会员级别', value: '白金会员' },
            { name: '身份证号', value: '445302198907239807' },
            { name: '联系方式', value: '15874893098' },
            { name: '所在楼盘', value: '广州云山诗意' },
            { name: '是否缴费', value: '是' },
            { name: '其他人员', value: '黄然' }
        ],
        feeCells: [
            { name: '报名状态', value: '已报名' },
            { name: '缴费状态', value: '已缴费' }
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
     * 活动详情
     */
    onGoDetail: function () {
        console.log('转详情...')
    },

    /**
     * 取消活动
     */
    onCancel: function () {
        console.log('取消...')
    }
});

