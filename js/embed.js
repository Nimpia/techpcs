$(document).ready(function(){
    $('#header').load('https://nimpia.github.io/TechPcs/header.html');
    $('#footer').load('https://nimpia.github.io/TechPcs/footer.html');
    $('#login').load('https://nimpia.github.io/TechPcs/login.html');
$lang = $('<div class="langBox"><ul><li><img src="images/lang1.svg" alt="한국어">한국어</img></li><li><img src="images/lang2.svg" alt="중국어">中文</img></li><li><img src="images/lang3.svg" alt="일본어">日語</img></li><li><img src="images/lang4.svg" alt="영어(미국)">English(US)</img></li><li><img src="images/lang5.svg" alt="영어(영국)">English(UK)</img></li><li><img src="images/lang6.svg" alt="프랑스어">French</img></li><li><img src="images/lang7.svg" alt="스페인어">Castellano</img></li><li><img src="images/lang8.svg" alt="힌디어">Hindi</img></li></ul></div>');
$search = $('<div id="searchBox"><form method="post"><p class="underLine"><input type="search"><input type="image" src="images/search.svg" alt="찾아보기"></p></form></div>');
$modal = $('<div id="modal"></div>');
    let searchToggle='off';
    $('#header>*').ready(function(){
        $('#headLang').on('click',function(){
            $lang.remove();
            $lang.prependTo($('body'));
            $lang.addClass('lbHead');
            $lang.removeClass('lbFoot');
        });
        $('.login').on('click' ,function(){
            $modal.prependTo($('body'));
            $('#login').removeClass('hidden');
        });
        $('.search').on('click' ,function(){
            if(searchToggle=='off'){
                $search.prependTo($('#header'));
                searchToggle='on';
            }
            else{
                $search.detach();
                searchToggle='off';
            } 
        });
    });
    $modal.on('click' ,function(){
        $modal.detach();
        $('#login').addClass('hidden');
    });
    $('.formToggle').ready(function(){
        $('.formToggle').on('click', function(){
            if($('.loginTextBox').hasClass('textBoxRight')){
                $('.loginTextBox').removeClass('textBoxRight');
                $('.loginTextBox').addClass('textBoxLeft');
                $('.loginTextRight').addClass('hidden');
                $('.loginTextLeft').removeClass('hidden');
            }else {
                $('.loginTextBox').removeClass('textBoxLeft');
                $('.loginTextBox').addClass('textBoxRight');
                $('.loginTextLeft').addClass('hidden');
                $('.loginTextRight').removeClass('hidden');
            }
        });
    });
    $('#footLang').ready(function(){
        $('#footLang').on('click',function(){
            $lang.remove();
            $lang.prependTo($('#footer'));
            $lang.removeClass('lbHead');
            $lang.addClass('lbFoot');
        });
    });
});