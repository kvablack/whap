function msieversion() { //check for IE

    if (/MSIE 10/i.test(navigator.userAgent)) {
        // This is internet explorer 10
        return true;
    }

    if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
        // This is internet explorer 9 or 11
        return true;
    }

    if (/Edge\/\d./i.test(navigator.userAgent)){
    // This is Microsoft Edge
        return true;
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

function choose(file) { //takes an html file as an argument and appends the file to the body
    $.get("static/" + file, function(data){
        $("body").append(data);
    });
}
