Page({
  data:{
    userId: '',
    userPwd: '',
    response: '',
    modalHidden: true,
    codeUrl: '',
    codeNum: ''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  // 输入学号
  userIdInput: function(e){
    this.setData({
      userId: e.detail.value
    });
    // console.log(this.data.userId);
    if(e.detail.value.length >= 12){
      wx.hideKeyboard();
    }
  },
  // 输入密码
  userPwdInput: function(e){
    this.setData({
      userPwd: e.detail.value
    });
    // console.log(this.data.userPwd);
  },
  //输入验证码
  codeNumInput: function(e){
    this.setData({
      codeNum: e.detail.value
    });
    console.log(this.data.codeNum);
  },
  //提交
  formSubmit: function(){
    var page = this;//这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      url: 'http://localhost/zafujwc/code.php',
      data: {//发送给后台的数据
        username: page.data.userId,
        password: page.data.userPwd
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      // header: {
      //   'Content-Type': 'application/json;charset=UTF-8;'
      // },
      success: function(res){
        console.log(res.data);
        page.setData({
          codeUrl: res.data,
          modalHidden: false
        });
      },
      fail: function(res) {
        console.log(res);
        console.log("is failed");
      },
      complete: function(res) {
        // complete
      }
    })
  },
  //验证码弹窗确认
  modalConfirm: function(){
    var page = this;
    wx.request({
      url: 'https://URL',
      data: {
        codenum: page.data.codeNum//
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  //验证码弹窗取消
  modalCancel: function(){
    this.setData({
      modalHidden: true
    });
  }
})
