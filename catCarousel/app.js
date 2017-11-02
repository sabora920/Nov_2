'use strict';


function handleCatPictures(){
    $('.thumbnail').on('click', function(event) {

        const targetCat = $(event.currentTarget).find('img').attr('src');
        const targetCatAlt = $(event.currentTarget).find('img').attr('alt');

        console.log(targetCat);

        $('.hero img').attr('src', targetCat).attr('alt', targetCatAlt);
    });
}

$(handleCatPictures);

