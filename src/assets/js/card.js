
var card = (function() {
    'use strict';

    const colors = [
        {"class": "checkmark-color-gray"},
        {"class": "checkmark-color-dark-blue"},
        {"class": "checkmark-color-brown"},
        {"class": "checkmark-color-beige"},
        {"class": "checkmark-color-silver"}
    ];

    var colorList = null;

    function init() {
        $(".product-selection-list.product-size").click(function(event) {
            if($(event.target).is(':radio')) {
                colorList = $(this).closest(".product-card").find(".product-selection-list")[1];
                clearCards();
                printRandomColorElements();  
            }
        });
    };

    function clearCards() {
        if(colorList !== null) {
            colorList.innerHTML = '';
        }
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length) + 1;
    }

    function printRandomColorElements() {
        const num = getRandomNumber();

        for(var i = 0; i < num; i++) {
            var li = $('<li/>').addClass('radio-container').appendTo(colorList);
            var radio = "<input type='radio' name='product-color'><label class='checkmark checkmark-color " + colors[i].class + "'></label>";
            $(radio).appendTo(li);
        }
    }

    return {
        init: init
    }
}());