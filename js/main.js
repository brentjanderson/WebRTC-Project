/*jslint browser: true */
/*global $:false */
/*properties
    pageTitle, promptTimer, toggleClass
*/

(function () {
    "use strict";

    var App = {};

    App.pageTitle = 'IS 542';

    App.promptTimer = function () {
        setTimeout(function () {
            $('.dialog').toggleClass('visible');
        }, 10 * 1000);
    };

    App.promptTimer();

}());
