'use strict';


function handleCatPictures(){
    $('.thumbnail').on('click', function(event) {

        const targetCat = $(this).find('img').attr('src');
        const targetCatAlt = $(this).find('img').attr('alt');

        console.log(targetCat);

        $('.hero img').attr('src', targetCat).attr('alt', targetCatAlt);
    });
}

$(handleCatPictures);

