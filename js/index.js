/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
    require(['jquery','carousel'],function($,Carousel){
        $(document).on('selectstart',function(){ return false; });
        var oContainer=document.getElementById('container1');
        var witha=oContainer.offsetWidth-115;
        console.log(witha);
        var setting1={
            selecter:'#container1',
            width:witha,
            height:280,
            arrowPos:'center',
            imgArr:['img/2.jpg','img/1.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'],
            listStyle:'circle',
            speed:2000
        };
        var carousel1=new Carousel(setting1);
        carousel1.init();
    });