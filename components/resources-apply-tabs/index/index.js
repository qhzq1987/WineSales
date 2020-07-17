Component({
  data: {
    tabs: ['审核中', '已完成', '未通过'],
  },
  properties: {
    selectedIndex: {
      type: Number,
      value: -1
    },
  },
  methods: {
    /**
     * 点击事件处理，获取索引值后回调
     */
    onClick: function (event) {
      this.triggerEvent('tabchanged', event.target.dataset.aid)
      // 更新索引
      this.setData({
        selectedIndex: event.target.dataset.aid
      })
    }
  }
})