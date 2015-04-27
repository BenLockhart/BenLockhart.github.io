(function () {
    "use strict";

    var endpoint = 'http://api.worldweatheronline.com/free/v2/';
    var key = '69b1131f478c2b6cc21b326cb010a';
    
    var main = function () {    
        
        function localWeatherLookup(input) {
    var url = endpoint + 'weather.ashx?q=' + input.query + '&format=' + input.format + '&extra=' + input.extra + '&num_of_days=' + input.num_of_days + '&date=' + input.date + '&fx=' + input.fx + '&cc=' + input.cc + '&includelocation=' + input.includelocation + '&show_comments=' + input.show_comments + '&key=' + key;

    getJSONP(url, input.callback);
}
        
// Using a helper method instead...replacing the way I was calling the object before.
function getJSONP(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
        },
        error: function (e) {
            console.log(e.message);
        }
    });
    }
        
}
    
    $(document).ready(main());
    
    
}());