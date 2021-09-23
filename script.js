const btn = document.querySelector(".btn-hide");

const tempNavbar = document.querySelector(".temp-sidebar");
const navBar = document.querySelector(".sidebar");
const header = document.querySelector(".sidebar-header")

let isScreenSizeSmall = false;


btn.addEventListener("click",resizeTempNavbar);
window.onresize = toggleSmallScreenNavbar
window.onload = toggleSmallScreenNavbar



function resizeTempNavbar(){
    if(navBar.clientWidth == 250 )toggleNavbar("","35px");
    else if(isScreenSizeSmall){
        navBar.style.width = "250px";
        header.innerHTML = "SYSTEM";
        tempNavbar.style.width = "35px";
    }
    else if(tempNavbar.clientWidth != 250 )
    toggleNavbar('SYSTEM',"250px");

}

function toggleSmallScreenNavbar(){

    if(window.innerWidth <= 683){

        toggleNavbar("","35px");
        isScreenSizeSmall = true;
  
        /*
         
          tempNavbar.style.width
          alert("small screen");*/
  
  
      }
      else{
          isScreenSizeSmall = false;
      }
  
}

function toggleNavbar(textHeader,navbarWidth){
    navBar.style.width = tempNavbar.style.width = navbarWidth;
    header.innerHTML = textHeader;
}