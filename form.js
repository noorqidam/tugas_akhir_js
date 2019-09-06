function buatlogin() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem);
  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Mendaftar";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p)
  var form = document.createElement("Form")
  element.appendChild(form)
  // Label Username
  var label = document.createElement("Label")
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_user = document.createElement("input")
  input_user.type = "text";
  input_user.name = "username";
  input_user.className = "form_login";
  input_user.placeholder = "Nama User..";
  form.appendChild(input_user);
  // Label No Handphone
  var label2 = document.createElement("Label")
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);
  var input_nohandphone = document.createElement("input")
  input_nohandphone.type = "number";
  input_nohandphone.name = "username";
  input_nohandphone.className = "form_login";
  input_nohandphone.placeholder = "Nomor Handphone.";
  form.appendChild(input_nohandphone);
  // Label Username
  var label3 = document.createElement("Label")
  label3.innerHTML = "Username";
  form.appendChild(label3);
  var input_username = document.createElement("input")
  input_username.type = "email";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau email ..";
  form.appendChild(input_username);
  // Label Password
  var label2 = document.createElement("Label")
  label2.innerHTML = "Password";
  form.appendChild(label2);
  var input_password = document.createElement("input")
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password ..";
  form.appendChild(input_password);
  // Submit
  var tombol = document.createElement("input")
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "DAFTAR SEKARANG";
  form.appendChild(tombol);
}
