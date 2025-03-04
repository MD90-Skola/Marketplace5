document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;

    // Kolla om dark mode var aktiverat senast
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // När användaren klickar på knappen
    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.removeItem("dark-mode");
        }
    });
});








function toggleOrgNumber() {
    const userType = document.getElementById("userType").value;
    const orgNumberInput = document.getElementById("orgNumber");

    if (userType === "foretag") {
        orgNumberInput.disabled = false; // Aktivera fältet
        orgNumberInput.placeholder = "Fyll i ditt organisationsnummer";
    } else {
        orgNumberInput.disabled = true; // Inaktivera fältet
   
        orgNumberInput.value = ""; // Rensa fältet
        orgNumberInput.placeholder = "Endast för företag";
    }
}





document.addEventListener("DOMContentLoaded", function () {
    // Se till att formuläret existerar
    const form = document.querySelector("form");
    if (!form) {
        console.error("❌ Formuläret hittades inte!");
        return;
    }

    // Lyssna på formulärens submit-händelse
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Hindrar sidan från att laddas om

        // Hämta användardata
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();

        // Kontrollera att alla fält är ifyllda
        if (!firstName || !lastName || !email) {
            alert("⚠️ Fyll i alla fält innan du registrerar dig!");
            return;
        }

        // Skapa bekräftelsemeddelandet
        const message = `
            <strong>Tack, ${firstName} ${lastName}!</strong> 🎉
            <br> Din registrering är klar. 
            <br> En verifieringslänk har skickats till <strong>${email}</strong>.
            <br> Vänligen kolla din e-post och följ instruktionerna.
        `;

        // Sätt texten i modalens innehåll
        document.getElementById("registerMessage").innerHTML = message;

        // Hämta modal-elementet
        const registerModal = document.getElementById("registerModal");
        if (!registerModal) {
            console.error("❌ Modal-fönstret hittades inte!");
            return;
        }

        // Initialisera och visa Bootstrap Modal
        const modalInstance = new bootstrap.Modal(registerModal);
        modalInstance.show();

        // Återställ formuläret efter registrering
        form.reset();
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");

    if (passwordInput && togglePasswordBtn) {
        togglePasswordBtn.addEventListener("click", function () {
            const icon = this.querySelector("i");

            if (passwordInput.type === "password") {
                passwordInput.type = "text"; // Visa lösenordet
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                passwordInput.type = "password"; // Dölj lösenordet
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        });
    } else {
        console.error("Lösenordsfältet eller knappen hittades inte!");
    }
});



document.querySelector("form").addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        e.preventDefault(); // Stoppa formuläret från att skickas
        alert("Lösenorden matchar inte! 🔒");
    }
});



document.querySelector("form").addEventListener("submit", function (e) {
    const terms = document.getElementById("terms");

    if (!terms.checked) {
        e.preventDefault(); // Stoppa registrering
        alert("Du måste godkänna villkoren innan du registrerar dig!");
    }
});