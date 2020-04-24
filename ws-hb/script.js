var titles = [];
var titleInput = document.getElementById("title");
var messageBox = document.getElementById("display");

function Allow()
    {
    if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="")
        {
            user.title.value="";
            alert("Please Enter only alphabets");
        }
        window.location.reload()
    }

function insert () {
    titles.push(titleInput.value);
    clearAndShow();
}

function clearAndShow () {
    titleInput.value = "";
    messageBox.innerHTML = "";
    messageBox.innerHTML += " " + titles.join("<br/> ") + "<br/>";
}