'use strict';

app
    .directive('scrollToFixedTop', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, ctrl) {
                var top = element[0].offsetTop;
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    if (scroll >= top) {
                        element.addClass('navbar-fixed-top');
                    } else {
                        element.removeClass('navbar-fixed-top');
                    }
                });
            }
        }
    })
    .directive('masonry', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, ctrl) {
                $(element).imagesLoaded(function() {
                    $(element).masonry({
                        itemSeleteor: ".thumbnail"
                    });
                });
            }
        }
    });