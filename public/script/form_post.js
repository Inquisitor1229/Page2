function user_post(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const modal1 = document.getElementById("modal1");
  const modal2 = document.getElementById("modal2");
  const span1 = document.getElementsByClassName("modal__close")[0];
  const span2 = document.getElementsByClassName("modal__close")[1];

  if ((email!='') && (password!=''))
  {
    modal1.style.display = "block";
    
    span1.onclick = function () {
      modal1.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    }

    let response = fetch('url', {
      method: 'POST',
      body: new FormData(login_form)
    });
  }
  else {
    modal2.style.display = "block";

    span2.onclick = function () {
      modal2.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
  }
}