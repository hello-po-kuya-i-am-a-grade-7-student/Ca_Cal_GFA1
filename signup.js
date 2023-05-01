const form = document.querySelector('#signupform');
const resetform = form.querySelector('[type="reset"]');

resetform.addEventListener('click', () => {
    form.reset();
});