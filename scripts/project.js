var name;

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

function init() { //check for IE before rendering first panel
    if (msieversion()) {
        $("body").html("Please use an updated version of Firefox or Chrome to view this site.");
    }
    else {
        $(".section-wrapper").fadeIn(1000);

    }
}   

function choose(file) { //takes an html file as an argument and appends the file to the body
    $(".options-wrapper").last().children().attr("onclick", ""); //disable buttons on last decision page
    $.get("static/" + file, function(data){
        var $div = $("<div>", {class: "section-wrapper"});
        $div.html(data);
        $("body").append($div);
        $('#name').text('"' + name + '."').html();
        $div.fadeIn(1000);
        scroll();
    });
}

function getPersonalInfo() {
    var s = $("#name_input").val();
    if (s === null || s === undefined || s === "") {
        name = "Erdogan";
        $("#name_input").val("Erdogan");
    }
    else {
        name = s;
    }
    choose("primary_decision.html");
}

function refresh() {
    location.reload();
}

function scroll() {
    scrollto = $(".section-wrapper").last().offset();
    if (scrollto != undefined && scrollto != null) {
        setTimeout(function() {
            $('html, body').animate({scrollTop:scrollto.top}, 1000); //smooth scroll to next section wrapper to make sure it doesn't go off the top of the screen
        }, 500);
         
    }
   
}