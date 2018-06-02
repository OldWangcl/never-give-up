// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:false,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    // 轮播图 end
    /**内容 start*/
    contentUrls: []
    /**内容 end*/
  },
  // 刷新界面
  onRefreshTap: function () {
    var that = this;
    wx.showToast({
      title: '正在刷新',
      icon: 'loading',
      duration: 1000,
      success:function(res){
        wx.request({
          url: 'https://295u.cn/api/XcxGetTitle.html',
          data: {

          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            // console.log(res.data);
            var itemLi = res.data;
            var reverse = itemLi.reverse();
            console.log(reverse);
            that.setData({
              contentUrls: reverse
            })
          }
        })
      }
    });
  },
  // 跳转到更多界面
  onMoreTap: function (e) {
    var txt = e.currentTarget.dataset.index;
    var cid = e.currentTarget.dataset.id;
    var img = e.currentTarget.dataset.img;
    // wx.setStorageSync('img', img);
    console.log(img);
    wx.navigateTo({
      url: 'More/More?id=' + txt + '&cid=' + cid
    })
    wx.showToast({
      title: '加载中',
      duration: 1000,
      icon: 'loading',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.requestTap();
  },
  // 获取服务器数据
  requestTap:function(res){
    var that = this;
    wx.request({
      url: 'https://295u.cn/api/XcxGetTitle.html',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data);
        var itemLi = res.data;
        // console.log(itemLi);
        // var reserve = itemLi.reverse();
        // console.log(reserve);
        that.setData({
          contentUrls: itemLi
        })
      }
    })
    wx.stopPullDownRefresh();
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
    this.requestTap();

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