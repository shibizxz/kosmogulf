const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
const year = document.getElementById('year');
const sendBtn = document.getElementById('sendBtn');

if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name')?.value?.trim() || 'Client';
    const company = document.getElementById('company')?.value?.trim() || 'Company';
    const email = document.getElementById('email')?.value?.trim() || '';
    const msg = document.getElementById('msg')?.value?.trim() || 'Please share your requirement details.';

    const subject = encodeURIComponent(`New Enquiry from ${company}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nRequirement:\n${msg}`
    );
    window.location.href = `mailto:admin@kosmogulf.com?subject=${subject}&body=${body}`;
  });
}
