import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(getValueOnForm, 500));
formRef.addEventListener('submit', submitForm);

const STORAGE_KEY = 'feedback-form-state';
const dataForm = {};


function getValueOnForm(evt) {
  dataForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function auditLocalStorage() {
  const feedBack = localStorage.getItem(STORAGE_KEY);
  const parsFeedBack = JSON.parse(feedBack);
  if (feedBack) {
    formRef.message.value = parsFeedBack.message || '';
    formRef.email.value = parsFeedBack.email || '';
  }
}

function submitForm(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  const emailValue = e.currentTarget.email.value;
  const messageValue = e.currentTarget.message.value;
  const relustForm = {}
  relustForm.email = emailValue;
  relustForm.message = messageValue;
  console.log(relustForm);
  e.currentTarget.reset();
}

auditLocalStorage();
