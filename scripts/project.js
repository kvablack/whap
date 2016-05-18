	map = ["start.png", ["option 1", 2, "option 2", 3],
       "golive.png", ["continue...", 4],
       "debateleft.png", ["continue...", 4],
       "end.png", ["the end"]
		]
function init() { //check for IE before rendering first panel
	var body = document.getElementsByTagName("body")[0];
    body.innerHTML = ""; //in IE, this Javascript will not even compile, so the body will continue to be an error message
    renderNext(0);
}


function choose(text, name) {
    var placeholders = document.getElementsByClassName("option-placeholder");
    if (name == "58") {
        placeholders[placeholders.length - 1].style.background = "rgba(0,0,0,0)";
    }
    if (text != "continue...") {
        placeholders[placeholders.length - 1].firstChild.innerHTML = text;
        if (name != "58") {
            placeholders[placeholders.length - 1].style.background = "white";
        }
        
    }
    document.getElementsByClassName("options showing")[0].remove();
    renderNext(Number(name - 1));
}

function renderNext(index) {
    var body = document.getElementsByTagName("body")[0];
    body.innerHTML = body.innerHTML.toString() + `<div class="panel showing" style="position: relative; margin: 9px;"><img src="images/${map[index * 2]}" style="position: static; vertical-align: top;"><span class="option-placeholder" style="position: absolute; top: 10px; left: 8px; height: 108px; width: 186px; text-align: center; font-family: xkcd; font-size: 15px; color: rgb(0, 0, 0); overflow: hidden;"><span style="position: absolute; left: 0px; right: 0px; bottom: 0px;"></span></span>
    <ul class="options showing">
        <li class="option-line">
            <div onclick="choose(this.innerHTML, this.className.substring(12))" class="option-text ${map[index * 2 + 1][1]}" style="font-family: xkcd; font-size: 15px;">${map[index * 2 + 1][0]}</div>
        </li>
        <li class="option-line">
            <div onclick="choose(this.innerHTML, this.className.substring(12))" class="option-text ${map[index * 2 + 1][3]}" style="font-family: xkcd; font-size: 15px;">${map[index * 2 + 1][2]}</div>
        </li>
        <li class="option-line">
            <div onclick="choose(this.innerHTML, this.className.substring(12))" class="option-text ${map[index * 2 + 1][5]}" style="font-family: xkcd; font-size: 15px;">${map[index * 2 + 1][4]}</div>
        </li>
        <li class="option-line">
            <div onclick="choose(this.innerHTML, this.className.substring(12))" class="option-text ${map[index * 2 + 1][7]}" style="font-family: xkcd; font-size: 15px;">${map[index * 2 + 1][6]}</div>
        </li>
    </ul>
</div>`;
    cleanUp();
}

function cleanUp() {
    var choices = document.getElementsByClassName("option-line");
    for (var i = choices.length - 1; i >= 0; i--) {
        if (choices[i].getElementsByTagName("div")[0].innerHTML.toString() == "continue...") {
            var placeholders = document.getElementsByClassName("option-placeholder");
            placeholders[placeholders.length - 1].remove();
        }
        if (choices[i].getElementsByTagName("div")[0].innerHTML.toString() == "the end") {
            var placeholders = document.getElementsByClassName("option-placeholder");
            placeholders[placeholders.length - 1].remove();
            var options = document.getElementsByClassName("options showing");
            options[options.length - 1].remove();
        }
        if (choices[i].getElementsByTagName("div")[0].innerHTML.toString() == "undefined") {
            choices[i].remove();
        }
        setTimeout(function(){
            window.scrollBy(0, 1000);
        }, 100);
       
    }
}