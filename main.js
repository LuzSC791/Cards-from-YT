function openWindow() {
    let nav = document.getElementById("navegation-window-content");
    if (Object.entries(nav.style.display).length==0)
        nav.style.display = "none";

    if (nav.style.display == "none") 
        nav.style.display = "block";
    else 
        nav.style.display = "none";
}