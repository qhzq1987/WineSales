Component({
  data: {
    statItems: ['优惠券', '酒店券', '收藏']
  },
  properties: {
    points: Number,
    level: String,
    statValues: {
      type: Array,
      value: [0, 0, 0]
    }
  },
  methods: {
    /**
     * 参看等级
     * @param {*} event 
     */
    onLevel: function (event) {
      this.triggerEvent('tapevents', -1)
    },

    /**
     * 操作类型，根据索引值（根据其它约定标识符也可跳转），跳转不同页面
     * @param {*} event 
     */
    onItems: function (event) {
      this.triggerEvent('tapevents', event.currentTarget.dataset.pid)
    }
  }
})