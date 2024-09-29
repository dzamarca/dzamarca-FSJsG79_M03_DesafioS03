document.addEventListener("keydown", function (event) {

    let color1 = "";
    let color2 = "";

    if (event.key === "a") {
        color1 = "pink";
    } else if (event.key === "s") {
        color1 = "orange";
    } else if (event.key === "d") {
        color1 = "cyan";
    } else if (event.key === "q") {
        color2 = "purple";
    } else if (event.key === "w") {
        color2 = "grey";
    } else if (event.key === "e") {
        color2 = "brown";
    }

    if (color1 != "") {
        let boxcolor = document.querySelector("#key");
        boxcolor.style.backgroundColor = color1;
    }

    if (color2 != "") {
        let boxcolor2 = document.querySelector(".color2");
        boxcolor2.style.backgroundColor = color2;
    }
});
