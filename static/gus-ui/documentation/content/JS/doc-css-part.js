var cssPartImg = document.querySelector('.content-css-part-img')

var pageName = window.location.pathname.split("/").pop().replace(".html", "");

cssPartImg.innerHTML = `
<img alt="CSS Part Image ${pageName}" class"css-part-img" src="../content/assets/img/css-parts/${pageName}.png">
`
