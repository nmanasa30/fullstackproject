const API_URL = "http://localhost:5000";

// ✅ Load services
fetch(`${API_URL}/services`)
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(s => {
      html += `<div class="card"><h4>${s.name}</h4></div>`;
    });
    document.getElementById("servicesList").innerHTML = html;
  });

// ✅ Load products
fetch(`${API_URL}/products`)
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(p => {
      html += `<div class="card"><h4>${p.name}</h4><p>₹${p.price}</p></div>`;
    });
    document.getElementById("productsList").innerHTML = html;
  });

// ✅ Load news
fetch(`${API_URL}/news`)
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(n => {
      html += `<li>${n.title}</li>`;
    });
    document.getElementById("newsList").innerHTML = html;
  });

// ✅ Register Form
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();

  const regData = {
    name: document.getElementById("regName").value,
    email: document.getElementById("regEmail").value,
    password: document.getElementById("regPassword").value,
  };

  fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(regData),
  })
    .then(res => res.json())
    .then(data => alert(data.message || "Registered successfully!"));
});

// ✅ Login Form
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const loginData = {
    email: document.getElementById("loginEmail").value,
    password: document.getElementById("loginPassword").value,
  };

  fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  })
    .then(res => res.json())
    .then(data => alert(data.message || "Logged in!"));
});

// ✅ Contact Form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const contactData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      document.getElementById("contactForm").reset();
    });
});
