document.addEventListener("DOMContentLoaded", function () {
  
    // DARK MODE
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;
  
    if (toggleSwitch) {
      if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
      }
  
      toggleSwitch.addEventListener("change", function () {
        body.classList.toggle("dark-mode", this.checked);
        localStorage.setItem("dark-mode", this.checked ? "enabled" : "disabled");
      });
    }
  
    // TOGGLE ORGANISATIONSNUMMER
    const userType = document.getElementById("userType");
    const orgNumberInput = document.getElementById("orgNumber");
  
    if (userType && orgNumberInput) {
      userType.addEventListener("change", function() {
        orgNumberInput.disabled = (this.value !== "foretag");
        orgNumberInput.placeholder = (this.value === "foretag") ? 
          "Fyll i organisationsnummer" : "Endast för företag";
        if(this.value !== "foretag") orgNumberInput.value = "";
      });
    }
  
    // VISA/DÖLJ LÖSENORD
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");
  
    if (passwordInput && togglePasswordBtn) {
      togglePasswordBtn.addEventListener("click", () => {
        const icon = togglePasswordBtn.querySelector("i");
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
        icon.classList.toggle("fa-eye", !isPassword);
        icon.classList.toggle("fa-eye-slash", isPassword);
      });
    }
  
    // FORMULÄR SUBMIT-HANTERING (ENDAST OM FORMULÄR FINNS)
    const form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const firstName = document.getElementById("firstName")?.value.trim();
        const lastName = document.getElementById("lastName")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const password = document.getElementById("password")?.value;
        const confirmPassword = document.getElementById("confirmPassword")?.value;
        const terms = document.getElementById("terms")?.checked;
  
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
          alert("⚠️ Fyll i alla fält!");
          return;
        }
  
        if (password !== confirmPassword) {
          alert("🔒 Lösenorden matchar inte!");
          return;
        }
  
        if (!terms) {
          alert("✅ Du måste godkänna villkoren!");
          return;
        }
  
        const registerMessage = document.getElementById("registerMessage");
        const registerModal = document.getElementById("registerModal");
  
        if (registerMessage && registerModal) {
          registerMessage.innerHTML = `
            <strong>Tack, ${firstName} ${lastName}!</strong> 🎉<br>
            En verifieringslänk har skickats till <strong>${email}</strong>.
          `;
          const modalInstance = new bootstrap.Modal(registerModal);
          modalInstance.show();
          form.reset();
        }
      });
    }
  
    // GOOGLE MAPS - DÖLJ OVERLAY
    const startBtn = document.getElementById("startBtn");
    const heroOverlay = document.getElementById("heroOverlay");
  
    if (startBtn && heroOverlay) {
      startBtn.addEventListener("click", () => {
        heroOverlay.classList.add("hide-overlay");
      });
    }
  
  });