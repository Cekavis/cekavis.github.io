window.onload = function(){
    if ($('#toc').length > 0){
        $('#toc').addClass('is-sticky');
    }
    else{
        $('.column-left').addClass('is-sticky');
    }
}