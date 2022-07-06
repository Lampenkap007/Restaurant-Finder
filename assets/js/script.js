function ApplyFilter() {
   console.log(document.querySelectorAll("#restaurant"))

   var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("typeInput");
    filter = input.value;
    ul = document.getElementById("restaurantsList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.innerHTML;
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

