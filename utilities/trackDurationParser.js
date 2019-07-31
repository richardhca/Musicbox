const durationParser = function (duration) {
    var hours   = Math.floor(duration / 3600);
    var minutes = Math.floor((duration - (hours * 3600)) / 60);
    var seconds = Math.floor(duration - (hours * 3600) - (minutes * 60));

    if (hours === 0 && minutes === 0) {
        if (seconds < 10) {
            return minutes + ":" + "0" + seconds;
        }
        else {
            return minutes + ":" + seconds;
        }
    }

    if (hours === 0) {
        if (seconds < 10) {
            return minutes + ":" + "0" + seconds;
        }
        else {
            return minutes + ":" + seconds;
        }
    }

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
};

module.exports = {
    durationParser : durationParser
};