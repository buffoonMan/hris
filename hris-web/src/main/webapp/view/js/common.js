$(function() {
    // class中包含有date的则设置今天的日期和时间
    $('.date').datepicker().datepicker('setValue', new Date());

    // 找到所有class是canzhao的btn，如果点击，则将这个标签中的data-value的值放在前一个input中
    $('.canzhao').click(function() {
        var canzhao = $(this);
        var input = $(canzhao).prev('div').find('input');

        input.val(canzhao.data('value'))
        return false;
    });

    

});