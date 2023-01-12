import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  //   submitBtn: document.querySelector('.feedback-form  button'),
};
const USER = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', onSubmit);
function onTextareaInput(evt) {
  formData.email = refs.form.email.value;
  formData.message = refs.form.message.value;

  //   formData[evt.target.name] = evt.target.value;
  localStorage.setItem(USER, JSON.stringify(formData));
  //   console.log(evt.target);
  //   console.log(JSON.parse(USER_DATA));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (!refs.form.email.value || !refs.form.message.value) {
    alert('Не всі поля заповнені!');
    return;
  }
  evt.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem(USER);
  formData = {
    email: ' ',
    message: ' ',
  };
}

populateTextarea();
function populateTextarea() {
  const USER_DATA = localStorage.getItem(USER);
  const PARSEDATA = JSON.parse(USER_DATA);

  if (PARSEDATA) {
    refs.form.elements.email.value = PARSEDATA.email;
    refs.form.elements.message.value = PARSEDATA.message;
  }
}
// populateTextarea();
//   refs.form.elements.email.value = 'b.email';
//   refs.form.elements.message.value = 'b.message';
//   //   console.log(refs.form.message.value);
// }

// refs.submitBtn.addEventListener('submit', onFormSubmit);
// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log(USER);
//   localStorage.removeItem(USER);
//   evt.currentTarget.reset();
// }

// if ( b.email && !b.message || b.message && !b.email)
