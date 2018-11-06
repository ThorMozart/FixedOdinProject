const contact = () => {
  var cinfo = document.createElement('div');
  var holler = document.createElement('h2');
  holler.textContent = "Give us a holler y'hear!"
  var phone = document.createElement('p')
  phone.textContent = 'By phone: 111-1111';
  var email = document.createElement('p');
  email.textContent = 'By intarweb: bubrestauraunt@notarealemailaddress.pu';
  var shout = document.createElement('p');
  shout.textContent = 'Or just walk in and yell "Hey Bub!"'
  cinfo.appendChild(holler);
  cinfo.appendChild(phone);
  cinfo.appendChild(email);
  cinfo.appendChild(shout);
  return cinfo
}

export { contact }
