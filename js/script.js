// alert("start studying for week 2")

let fomm = $("#formm");


function submit(event) {
  event.preventDefault();
  var errors = [];

  //Nb => inputs of the user
  vall1 = $("input[name='third-value']").val();
  vall2 = $("input[name='fourth-value']").val();
  vall3 = $("input[name='fifth-value']").val();

  if (vall1.length > 0 && vall2.length > 0 && vall3.length) {
    $("#formm").empty();
    fomm.append(
      $("<div></div>")
        .html(`${vall1} ${vall2} <br/> ${vall3}`)
        .css({ color: "darkcyan" })
    );
    $(".box h4").text("registered");
  } else {
    if (vall1.length == 0) {
      errors.push("First name field is required");
    }

    if (vall2.length == 0) {
      errors.push("Last name field is required");
    }

    if (vall3.length == 0) {
      errors.push("email field is required");
    }
  }

  if (errors.length > 0 && $(".errorDisplay").text().length == 0) {
    let ErrorsDisplay = $(".errorDisplay");


    for (var i = 0; i < errors.length; i++) {
      ErrorsDisplay.append(errors[i] + "<br>");
    }
  }
}


$("input").focus(function () {  
        if ($(".errorDisplay").text().length>1) {
          $(".errorDisplay").remove();
        }

        $(this).css({ border: "solid blue","border-width":"1px 1px 2px ","background-color":""}) 
        
});


$("input").blur(function (e) {
    $(this).css({ border: "1px solid"});
});



fomm.submit(submit);





function submitForm(event) {


  event.preventDefault();

  //Nb => inputs of the user
  firstName = $(".box2 input[name='third-value']").val();
  lastName = $(".box2 input[name='fourth-value']").val();
  email = $(".box2 input[name='fifth-value']").val();
  pass = $("#password").val();

  if (email.length === 0) {
    $(".box2 input[name='fifth-value']").css("background-color", "#FFDCE2");
  } else if (firstName.length === 0) {
    $(".box2 input[name='third-value']").css("background-color", "#FFDCE2");
  } else if (lastName.length === 0) {
    $(".box2 input[name='fourth-value']").css("background-color", "#FFDCE2");
  } else if (pass.length == 0) {
    $("#password").css("background-color", "#FFDCE2");
  } else {
    $("#form").empty();
    submissionForm.append(
      $("<div></div>")
        .html(`${firstName} ${lastName} <br/> ${email}`)
        .css({ color: "darkcyan" })
    );
    $(".box2 h4").text("registered");
  }
}

let submissionForm = $(".box2 form");

submissionForm.submit(submitForm);

$(".box2 input").focus(function () {
//   if ($(".errorDisplay").text().length > 1) {
//     $(".errorDisplay").remove();
//   }

  $(this)
    .css({
      "border-bottom": "solid #FE8402",
      "border-width": "1px 1px 2px ",
      "background-color": "",
    })
    .fadeIn(2000);
});

$(".box2 input").blur(function (e) {
  $(this).css({ border: "1px solid" });
});


function togglePasswordField() {
  var passwordField = document.getElementById("password");
  var toggleButton = document.getElementById("togglePassword");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.style.setProperty("text-decoration", "none");
  } else {
    passwordField.type = "password";
    toggleButton.style.setProperty("text-decoration", "line-through");
  }
}