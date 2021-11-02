window.addEventListener('load', solution);

function solution() {

  const [fullName, email, phoneNumber, adress, postCode] = document.querySelectorAll('#form input');
  const preview = document.getElementById('infoPreview');
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const successDiv = document.getElementById('block');

  let clientInfo = {
    "Full Name": fullName,
    "Email": email,
    "Phone Number": phoneNumber,
    "Address": adress,
    "Postal Code": postCode
  }

  let archive = []

  submitBtn.addEventListener('click', onSubmit);
  editBtn.addEventListener('click', onEdit);
  continueBtn.addEventListener('click', onContinue);

  function onSubmit() {
    
    if (fullName.value === '' || email.value === '') {
      alert('Full name and Email are required!')
      throw new Error('Full name and Email are required!')
    }

    Object.entries(clientInfo)
      .map(([placeHolder, info]) => e('li', `${placeHolder}: ${info.value}`))
      .forEach(el => preview.appendChild(el))

    Object.entries(clientInfo)
      .map(([, info]) => archive.push(info.value));

    fullName.value = '';
    email.value = '';
    phoneNumber.value = '';
    adress.value = '';
    postCode.value = '';

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
  }

  function onEdit() {
    fullName.value = archive[0];
    email.value = archive[1];
    phoneNumber.value = archive[2];
    adress.value = archive[3];
    postCode.value = archive[4];

    archive = [];
    preview.innerHTML = '';

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  }

  function onContinue() {
    successDiv.innerHTML= '';
    successDiv.appendChild(e('h3', "Thank you for your reservation!"))
  }

  function e(type, content) {
    const result = document.createElement(type);
    result.textContent = content;

    return result;
  }
}
