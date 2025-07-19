(() => {
    const form = document.getElementById("email-form");
    const successMsg = document.getElementById("success-message");
    const errorMsg = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        fetch("https://api.muvelapp.com/api/v1/site/register-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                email: email
            })
        })
            .then(response => {
                form.style.display = "none";
                if (response.ok) {
                    console.log("✔️ Email registrado correctamente.");
                    successMsg.style.display = "block";
                } else {
                    console.log("❌ Error al enviar el email.");
                    errorMsg.style.display = "block";
                }
            })
            .catch(error => {
                console.error("❌ Error de red o CORS:", error);
                form.style.display = "none";
                errorMsg.style.display = "block";
            });
    });
})();
