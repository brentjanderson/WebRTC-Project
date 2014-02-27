/*jslint browser: true */
/*global $:false,App:false*/
/*properties
    appendTo, click, get, getElementsByTagName, href, location, pageTitle,
    promptTimer, text, toggleClass
*/

$(function () {
    "use strict";
    $.get('templates/header.html', function (d) {
        $(d).appendTo('header');
    });

    $.get('templates/footer.html', function (d) {
        $(d).appendTo('footer');
    });

    $.get('templates/dialog.html', function (d) {
        $(d).appendTo('body');

        $('.dialog button[data-evt="extend"]').click(function () {
            $('.dialog').toggleClass('visible');
            App.promptTimer();
        });

        $('.dialog button[data-evt="end"]').click(function () {
            window.location.href = 'https://www.google.com';
        });
    });

    $('title').html(App.pageTitle + ' | WebRTC Project');
});
