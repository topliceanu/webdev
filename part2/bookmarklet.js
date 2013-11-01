(function () {

    var title = $('h1:first').text();
    var id = '1234';

    var largest = function ($elements) {
        var width = 0, height = 0, $out = $([]);
        $elements.each(function (i, el) {
            var $this = $(this);
            var thisHeight = $this.outerHeight(true);
            var thisWidth = $this.outerWidth(true);
            if (thisHeight * thisWidth > width * height) {
                width = thisWidth;
                height = thisHeight;
                $out = $this;
            }
        });
        return $out;
    };

    var content = largest($('div')).text();
    var image = largest($('img')).attr('src');

    $.ajax({
        method: 'get',
        url: 'http://webdev-2013.heroku.com/bucket/'+id+'/add',
        dataType: 'jsonp',
        data: {
            data: {
                title: title,
                content: content,
                image: image
            }
        }
    });

})();
