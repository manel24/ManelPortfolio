var header = document.getElementById("nav");
var sticky = header.offsetTop;
var read_more = document.getElementById("read-more")

function stickHeader() {
    if (window.pageYOffset >= sticky) {
        header.classList.remove("header");
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        header.classList.add("header");
    }
}

function toggleVisibility() {
    var p = document.getElementById("hidden-description");
    if (p.style.display === "none") {
        p.style.display = "block";
        read_more.innerText = "Read less";
    } else {
        p.style.display = "none";
        read_more.innerText = "Read more";

    }
}

window.onscroll = function () {
    stickHeader()
};
