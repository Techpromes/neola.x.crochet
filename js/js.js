const form = document.getElementById("myForm");

function sendEmail(formData) {
    const bodyMessage = `
        Full Name: ${formData.name}<br>
        Email: ${formData.email}<br>
        Phone Number: ${formData.phone}<br>
        Name of Product: ${formData.watch}<br>
        Message: ${formData.message}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "idudupromise2@gmail.com", 
        Password: "580800E95290FA8997598946B61E9D8D01E8",
        To: 'olabimpeokunowo@gmail.com', 
        From: "idudupromise2@gmail.com",
        Subject: "New Form Submission",
        Body: bodyMessage,
    }).then((message) => {
        if (message === "OK") {
            Swal.fire({
                title: "Success",
                text: "Message sent successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Failed to send message. Please try again later.",
                icon: "error"
            });
        }
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: "", // You need to capture the email value if there's an email input.
        phone: document.getElementById("phone").value,
        watch: "", // You need to capture the watch value if there's a watch input.
        message: document.getElementById("message").value,
    };

    sendEmail(formData);
});


document.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };


  const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('fa-close');
});

document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('fa-close');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};