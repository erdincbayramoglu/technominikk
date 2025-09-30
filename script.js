// Randevu formu
const appointmentForm = document.getElementById("appointmentForm");
appointmentForm.addEventListener("submit", submitAppointment);

async function submitAppointment(e) {
  e.preventDefault();
  const payload = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    service: document.getElementById('serviceSelect').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    notes: document.getElementById('notes').value,
  };

  try {
    const res = await fetch("https://technominikk-backend.onrender.com/api/appointment", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    document.getElementById('apMsg').innerText = data.message;
  } catch (err) {
    document.getElementById('apMsg').innerText = "Sunucuya bağlanılamadı.";
  }
}

// İletişim formu
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", submitContact);

async function submitContact(e) {
  e.preventDefault();
  const payload = {
    name: document.getElementById('cname').value,
    email: document.getElementById('cemail').value,
    message: document.getElementById('cmsg').value,
  };

  try {
    const res = await fetch("https://technominikk-backend.onrender.com/api/contact", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    document.getElementById('cMsg').innerText = data.message;
  } catch (err) {
    document.getElementById('cMsg').innerText = "Sunucuya bağlanılamadı.";
  }
}
