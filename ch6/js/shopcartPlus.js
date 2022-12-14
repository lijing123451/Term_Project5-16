/* 
*购物车功能JS
 */
$(function(){
    /* 把三个类型的input分别先获取 */
    var $theadInput = $('thead input[type=checkbox]');//表头中的全选框
    var $tbodyInputs = $('tbody input[type=checkbox]');//表格中的每一行的选择框
    var $totalPriceInput = $('totalPrice input[type=checkbox]');//计算总价中的全选框
    /* 全选 */
    /* 
    1.给表头中的全选按钮 绑定点击事件 点击的时候 获取到它的选中状态（true/false）
    2.给表格中每一行的数据的input选择框，赋值为表头的选中状态（true/false）
    3.给计算总价中的全选框，也赋值为表头的选中状态（true/false）
    */
    $theadInput.change(function(){
        var checkState = $(this).prop('checked');//获取全选框的选中状态
        $tbodyInputs.prop('checked', checkState);//把状态给表格中的选择框
        $totalPriceInput.prop('checked', checkState);//把状态给计算总价中的全选框
    })
})
