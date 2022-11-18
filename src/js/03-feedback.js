const refs = {
  form: document.querySelector('.feedback-form'),
  name: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', setFormData);

function setFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

populeteForm();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populeteForm() {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    const parseData = JSON.parse(data);
    refs.name.value = parseData.email;
    refs.message.value = parseData.message;
  }
}
