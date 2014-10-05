(function () {

    var onLoad = function () {

        var title = $('h1:first').text(); var id = '1234';

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

        var image = largest($('img')).attr('src');
        var url = window.location.href;

        $.ajax({
            method: 'get',
            url: 'http://webdev-2013.heroku.com/bucket/'+id+'/add',
            dataType: 'jsonp',
            data: {
                data: {
                    title: title,
                    url: url,
                    image: image
                }
            }
        });
    };

    var script = document.createElement('script');
    script.setAttribute('src', 'http://code.jquery.com/jquery-2.0.3.min.js');
    script.addEventListener('load', onLoad);
    document.body.appendChild(script);

})();
