document.addEventListener("DOMContentLoaded", function(event) {
  const get = element => document.getElementById(element);

  //Targeting the ID
  let open = get("menu-btn");
  let nav = get("nav");
  let exit = get("exit-btn");
  
  
  //Targeting when somebody open the hamburger SVG
  open.addEventListener('click', () =>{
    nav.classList.add('open-nav');
  })
  
  //Targeting when somebody click the close SVG
  exit.addEventListener('click', () =>{
    nav.classList.remove('open-nav');
  })
  
  var thumbnailElement = document.getElementById("smart_thumbnail");

  thumbnailElement.addEventListener("click", function() {
    if(thumbnailElement.className = "small"){
      thumbnailElement.className = ""
    } else{
      thumbnailElement.className = "small"
    }
  });
  
});



