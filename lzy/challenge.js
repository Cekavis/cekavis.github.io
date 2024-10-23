$('#btn_submit').click(function(){
    var score = 0;
    score += $('input[name=problem1]:checked').val() == 4 ? 1 : 0;
    score += $('input[name=problem2]:checked').val() == 3 ? 1 : 0;
    score += $('input[name=problem3]:checked').val() == 3 ? 1 : 0;
    score += $('input[name=problem4]:checked').val() == 2 ? 1 : 0;
    score += $('input[name=problem5]:checked').val() == 1 ? 1 : 0;
    score += $('input[name=problem6]:checked').val() == 4 ? 1 : 0;
    score += $('input[name=problem8]:checked').val() == 3 ? 1 : 0;
    score += $('input[name=problem9]:checked').val() == 3 ? 1 : 0;
    var answer7 = 0;
    $('input[name=problem7]:checked').each(function(){
        answer7 += 1;
    });
    var answer0 = 0;
    $('input[name=problem0]:checked').each(function(){
        answer0 += $(this).val() <= 3 ? 1 : -1;
    });

    score += answer7 == 5 ? 1 : 0;
    score += answer0 == 3 ? 1 : 0;
    $('#score').html('你的得分：' + score + '/10');
    if (6 <= score && score < 10)
        $('#comments').html('你及格了！');
    else if (score == 10)
        $('#comments').html('凭此截图找txc领取一句夸夸！');
    else
        $('#comments').html('快去找txc挨骂！');
    if (score >= 6){
        $('#hint-of-hint').html('下一步的提示在这个页面的某个地方哦。');
        $('#hint').html('x.xx/+Uad5NYh0txnIGpay，“某桌の日常”。');
    }
});