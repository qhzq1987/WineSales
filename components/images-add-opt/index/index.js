Component({
  data: {
    imgs: [
      { isAdd: true, imgUrl: '' }
    ]
  },
  properties: {
    maxCount: {
      type: Number,
      value: 9
    }
  },
  methods: {
    /**
     * 删除图片
     */
    onDelete: function () {
      console.log('delete...')
    },

    /**
     * 选择图片
     */
    onAdd: function (event) {
      var that = this;
      // 是否为添加？
      let tempVal = that.data.imgs[event.target.dataset.iid].isAdd
      if (!tempVal) {
        return
      }
      //剩余数量
      const imgNumber = that.properties.maxCount - (that.data.imgs.length - 1)
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        count: imgNumber,
        success: function (res) {
          var imgArray = []
          // 重组结果
          res.tempFilePaths.forEach((obj, i) => {
            imgArray.push({ imgUrl: obj })
          });
          // debugger;
          // 先删除最后的"添加"标识
          that.data.imgs.pop()
          // 添加结果
          var tempObj = that.data.imgs.concat(imgArray)
          if (tempObj.length < that.properties.maxCount) {
            // "添加"标识
            tempObj.push({ isAdd: true })
          }
          that.setData({
            imgs: tempObj
          })
        }
      })
    },
    canAdd: function () {
      var that = this;
      // 最后一张是否为添加？
      return 0
    }
  }
})