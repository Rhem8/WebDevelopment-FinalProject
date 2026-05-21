// ALERT + FORM
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const newsForm = document.getElementById('newsForm');

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
  alertPlaceholder.append(wrapper);
};

newsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('userName').value;
  appendAlert(`Welcome, ${name}! Your subscription is active.`, 'success');
  newsForm.reset();
});

// MODAL SHOW EVENT
const readMoreModal = document.getElementById('readMoreModal');
readMoreModal.addEventListener('show.bs.modal', (event) => {
  console.log("A news modal was opened!");
});

// ACCORDION EVENT
const faqAccordion = document.getElementById('faqAccordion');
faqAccordion.addEventListener('shown.bs.collapse', (event) => {
  const question = event.target.previousElementSibling.querySelector('button').textContent;
  appendAlert(`FAQ opened: ${question}`, 'info');
});