// accessing the form details
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const confirmPassword = document.getElementById("cpassword");
// accessing signUp btn
const signUpBtn = document.getElementById("btn");

// accessing Logout btn
const logoutButton = document.getElementById("l-btn");

// saving the userData in the local-storage
const accsessToken = generateAccessToken()
signUpBtn.addEventListener("click", () => {
  if(accsessToken !== localStorage.getItem("token")){
    if (Password.value === confirmPassword.value) {
      localStorage.setItem("FullName", Name.value);
      localStorage.setItem("Email", Email.value);
      localStorage.setItem("Password", Password.value);
      //let accessToken = generateAccessToken();
      if(accsessToken){
      document.getElementById("profileContainer").innerHTML = `
      <div>
      <span>FULL NAME:- ${localStorage.getItem("FullName")}</span>
      </div>
      <div>
      <span>EMAIL:- ${localStorage.getItem("Email")}</span>
      </div>
      <div>
      <span>PASSWORD:- ${localStorage.getItem("Password")}</span>
      </div>
      `;
      document.getElementById("form").style.display = "none";
      document.getElementById("profile-page").style.display = "block";
      localStorage.setItem("token",accsessToken);
      localStorage.setItem("appStatus", "signIn");
    }
   }
   else{
    alert("Password is incorect")
   }
  }
  else{
    alert('User already exists.....!!!')
  }
});


// logout btn functionalities
logoutButton.addEventListener("click", () => {
  document.getElementById("form").style.display = "block";
  document.getElementById("profile-page").style.display = "none";
  localStorage.setItem("appStatus", "signOut");
  Name.value ='';
  Email.value ='';
  Password.value ='';
  confirmPassword.value ='';
});

function generateAccessToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const tokenLength = 16;
  let token = '';

  for (let i = 0; i < tokenLength; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
}


