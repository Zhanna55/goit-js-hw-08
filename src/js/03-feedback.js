import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  name: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

let formData = populateFormData();

refs.form.addEventListener('input', throttle(setFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

function setFormData(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
populateForm();

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.form.email.value === '' || refs.form.message.value === '') {
    return alert('Please fill in all the fields!');
  }

  event.currentTarget.reset();
  console.log(formData);
  formData = {};
  localStorage.removeItem('feedback-form-state');
}

function populateForm() {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    try {
      const parseData = JSON.parse(data);
      refs.name.value = parseData.email || '';
      refs.message.value = parseData.message || '';
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}
function populateFormData() {
  const data = localStorage.getItem('feedback-form-state');
  const formData = {};
  if (data) {
    try {
      const parseData = JSON.parse(data);
      formData.email = parseData.email || '';
      formData.message = parseData.message || '';
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
  return formData;
}
