$(function(){
    var $hd = $('.hdrWrap'),
        $top = $('.top');

    $top.find('button').click(function(){
        $top.animate({height: '0'}, function(){
            $top.css({display: 'none'}),
            $hd.css({top: '0'});
        });
    });

    $hd.find('.hdTop .bars').on({click : function(){
        console.log('$$$$$');
        $hd.find('header').animate({width: '100%'}, function(){
            $hd.find('.clo').css({display: 'block'});
        }).prev().css({display: 'none'});
        
    }});
    $hd.find('.clo').on({click : function(){
        console.log('$$$$$');
        $hd.find('.clo').css({display: 'none'})
        $hd.find('header').animate({width: '0'}, function(){
            $hd.find('.hdTop').css({display: 'flex'});
        });
        
    }});

    $(window).resize(function(){
        var windowW = $(window).width();
        if(windowW = 100+'%'){$hd.find('header').css({width:90+'%'})};
    });
    $(window).resize(function(){
        var windowW = $(window).width();
        if(windowW <= 960){$hd.find('header').css({width:0})};
    });

});