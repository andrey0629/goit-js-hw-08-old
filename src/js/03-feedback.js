import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

const saveFormState = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

const populateFormFields = () => {
  const storedFormData = localStorage.getItem(STORAGE_KEY);
  if (storedFormData) {
    const { email, message } = JSON.parse(storedFormData);
    emailInput.value = email;
    messageInput.value = message;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};

form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

populateFormFields();


// const formEl = document.querySelector('.feedback-form');
// const save = (key, value) => {
//     try {
//         const serializedState = JSON.stringify(value);
//         localStorage.setItem(key, serializedState);
//     } catch (error) {
//         console.error("Set state error: ", error.message);
//     }
// };
// const load = key => {
//     try {
//         const serializedState = localStorage.getItem(key);
//         return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//         console.error("Get state error: ", error.message);
//     }
// };
// function localData() {
//     if (load("feedback-form-state")) {
//         const loadData = load("feedback-form-state");
//         formEl.email.value = loadData.email;
//         formEl.message.value = loadData.message;
//     }
// };
// localData();
// const getOutputData = event => {
//     const {
//         email,
//         message,
//     } = event.currentTarget;
//     const outputDataForm = {
//         email: email.value,
//         message: message.value,
//     }
//     save("feedback-form-state", outputDataForm)
// };
// const submitForm = event => {
//     event.preventDefault();
//     console.log(load("feedback-form-state"));
//     event.currentTarget.reset();
//     localStorage.removeItem("feedback-form-state");
// };
// formEl.addEventListener('input', getOutputData);
// formEl.addEventListener('submit', submitForm);



