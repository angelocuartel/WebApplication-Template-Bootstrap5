const btn = document.querySelector(".btn-hide");

const tempNavbar = document.querySelector(".temp-sidebar");
const navBar = document.querySelector(".sidebar");
const header = document.querySelector(".sidebar-header")


btn.onclick = function(){



    if(tempNavbar.style.width == "250px"){
        navBar.style.width = tempNavbar.style.width = "35px";
        header.innerHTML ='';
    }
    else{
        navBar.style.width = tempNavbar.style.width = "250px";
        header.innerHTML = "SYSTEM";
    }

}