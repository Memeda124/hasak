$('.rem img:nth-child(3)').click(function() {
    //   console.log(this);
    // 获取输入框中的值
    var v_num = $(this).siblings('span').text();
    // 输入框中的值增加1
    v_num++;
    // 将增加后的值重新赋值给输入框
    $(this).siblings('span').text(v_num);
  })
  // 减少商品数量
$('.rem img:nth-child(1)').click(function() {
  var v_num = $(this).siblings('span').text();
  if (v_num <= 1) {
    return

  }
  v_num--;
  $(this).siblings('span').text(v_num);


})


// 左滑删除
$('.show').on('swipeLeft', function() {
    var long = -80;
    $(this).css('transform', `translateX(${long}px)`);
    $('.hide').show().css({ 'right': '-100%' });
    // $('.hide').show();
  })
  // 右滑隐藏
$('.show').on('swipeRight', function() {
  var long = 0;
  $(this).css('transform', `translateX(${long}px)`);
  $('.hide').hide()
    // $('.hide').show();
})