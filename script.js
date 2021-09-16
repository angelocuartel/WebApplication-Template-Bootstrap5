const btn = document.querySelector(".btn-hide");

const tempNavbar = document.querySelector(".temp-sidebar");
const navBar = document.querySelector(".sidebar");
const header = document.querySelector(".sidebar-header")


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Chart for Voters',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



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