/**
 * Created by xiaoqiu on 15/5/21.
 */
if(typeof jQuery == 'undefined') throw new Error('Not fount jQuery model~!');
$('#search').bind('click',search);
$('#text').keypress(function(event){
    if(event.keyCode == 13){
        search();
    }
});
var search = function(){
    if($('#text').val()){
        location.href = '/admin/?query=' + $('#text').val();
    }
};