//nRonnieVon
(function ($) {

    var self = $.nRonnieVon = new function () { };

    $.extend(self, {

        nRonnieVonBackgrounds: [
            'https://imgur.com/K1Qgweu.png'
        ],

        nRonnieVonImgs: [
            'https://imgur.com/xquyo8o.jpg',
            'https://imgur.com/TnJrRPH.jpg',
            'https://imgur.com/cNnA0WK.jpg',
            'https://imgur.com/xpTe33R.jpg',
            'https://imgur.com/PZ82D71.jpg',
            'https://imgur.com/KGicqpe.jpg',
            'https://imgur.com/iobfwOj.jpg',
            'https://imgur.com/hOQHKIE.jpg',
            'https://imgur.com/FeU7zqg.jpg',
            'https://imgur.com/GYo4Cxg.jpg',
            'https://imgur.com/xDBeCkb.jpg',
            'https://imgur.com/hewkaDy.jpg',
            'https://imgur.com/3TVYniv.jpg',
            'https://imgur.com/JpiY4vF.jpg',
            'https://imgur.com/6MneaOC.gif',
            'https://imgur.com/H8DvgUh.jpg',
            'https://imgur.com/vJcxUsm.jpg',
            'https://imgur.com/rEgIh1n.jpg',
            'https://imgur.com/9Y1bwkD.jpg',
            'https://imgur.com/ct1modO.jpg',
            'https://imgur.com/G6sSybS.jpg',
            'https://imgur.com/TwQqYkz.jpg',
            'https://imgur.com/Wu9X7MB.jpg',
            'https://imgur.com/XEQMsAN.jpg',
            'https://imgur.com/sQK3pOe.jpg',
            'https://imgur.com/royzpzr.jpg',
            'https://imgur.com/3yoxFWL.jpg',
            'https://imgur.com/F2VKR1g.jpg',
            'https://imgur.com/AKB68Tv.jpg',
            'https://imgur.com/y1dOy0G.jpg',
            'https://imgur.com/ab9wXRj.jpg',
            'https://imgur.com/Sq2P0uQ.jpg',
            'https://imgur.com/AOFshIr.jpg'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nRonnieVonImgs, 3000);
        self.handleLogo(self.nRonnieVonBackgrounds, 3000);
    });
})(jQuery);
