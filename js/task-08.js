const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", function (event) {
    event.preventDefault();

    //  const emailEl = event.currentTarget.elements.email.value;
    //  const passwordEl = event.currentTarget.elements.password.value;
  
    const emailEl = event.currentTarget.elements.email.value;
     const passwordEl = event.currentTarget.elements.password.value;
  

  if (emailEl === "" || passwordEl === "") {
    return alert("Заповніть всі поля");
    } 
    
    const object = { emailEl, passwordEl,};
    console.log(object);
  
    return loginFormEl.reset();
});


  

 



