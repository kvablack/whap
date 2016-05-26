function msieversion() { //check for IE

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
    }
    else 
    {
        return false;
    }

    return false;
}

function init() { //check for IE before rendering first panel (just assuming this works, haven't tested yet)
    if (msieversion()) {
        $("body").html("Please use an updated version of Firefox or Chrome to view this site.");
    }
    else {

    }
}   

