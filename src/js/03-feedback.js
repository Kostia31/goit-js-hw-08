import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(getValueOnForm, 500));
formRef.addEventListener('submit', submitForm);

const dataForm = {};

function getValueOnForm(evt) {
  dataForm[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function auditLocalStorage() {
  const feedBack = localStorage.getItem('feedback-form-state');
  const parsFeedBack = JSON.parse(feedBack);
  if (feedBack) {
    formRef.message.value = parsFeedBack.message || '';
    formRef.email.value = parsFeedBack.email || '';
  }
}

function submitForm(e) {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  const emailValue = e.currentTarget.email.value;
  const messageValue = e.currentTarget.message.value;
  const relustForm = {}
  relustForm.email = emailValue;
  relustForm.message = messageValue;
  console.log(relustForm);
  e.currentTarget.reset();
}

auditLocalStorage();
