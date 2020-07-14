Component({
  data: {
  },
  properties: {
    title: String,
    showTypes: Array
  },
  methods: {
    /**
     * 类型事件，参数为索引值
     * @param {*} event 
     */
    onItemType: function (event) {
      this.triggerEvent('tapevent', event.currentTarget.dataset.tid)
    }
  }
})