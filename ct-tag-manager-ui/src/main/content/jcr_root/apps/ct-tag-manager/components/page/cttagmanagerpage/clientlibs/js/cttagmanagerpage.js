
$(document).ready(function () {

    // call regex colorizer to color all regex text
    RegexColorizer.colorizeAll();

    // bind key events for path tester
    var $tags = $('.tm-tag');
    var $pathTesterNumApplicable = $('#pathTesterNumApplicable');
    var $pathTesterPath = $('#pathTesterPath');
    $pathTesterPath.on('keyup', function () {

        // extract value and then loop through tags, see which ones match
        var numApplicable = 0;
        var value = $(this).val();
        var isBlank = !$.trim(value);
        $tags.each(function () {

            var $tag = $(this);
            var regex = $tag.data('regex');

            // is there a value and is this tag applicable?
            // note: regex is given start and end delimiters so it matches the WHOLE path exactly, otherwise match()
            //  would match substrings of the value
            if(isBlank || !isBlank && value.match('^' + regex + '$')) {

                // this is applicable, show it
                numApplicable++;
                $tag.show();

            } else {

                // not applicable, hide it
                $tag.hide();

            }

        });

        if(!isBlank) {

            var pluralize = numApplicable === 1 ? 'tag applies' : 'tags apply';
            $pathTesterNumApplicable.html(numApplicable + ' ' + pluralize + ' to this path.');

        } else {

            $pathTesterNumApplicable.html('');

        }

    });

});
