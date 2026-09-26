fetch("/components/nav.html").then(res => res.text()).then(data => {
   // console.log(data);
    document.getElementById("navBar").innerHTML = data;
})