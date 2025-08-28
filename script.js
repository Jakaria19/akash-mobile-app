//* login button

document
  .getElementById("login-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("login button clicked");

    const mobileNumber = 01712345678;
    const pinNumber = 1234;

    const mobileNumberValue = parseInt(
      document.getElementById("mobile-number").value
    );

    const pinNumberValue = parseInt(
      document.getElementById("pin-number").value
    );

    if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
      //! ekhane login korar por input field faka hocche na

      window.location.href = "./home.html";
    } else {
      alert("Invalid credentials");
    }
  });
