'use strict';


function handleCatPictures(){
    $('.thumbnail').on('click', function(event) {

        const targetCat = $(event.currentTarget).find('img').attr('src');

        console.log(targetCat);

        $('.hero img').attr('src', targetCat);
    });
}

$(handleCatPictures);