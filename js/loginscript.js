function showSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function togglePassword(id) {
    let input = document.getElementById(id);
    let icon = input.nextElementSibling;
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function showToast(message) {
    let toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 3000);
}

document.getElementById("login").addEventListener("submit", function(e) {
    e.preventDefault();
    showToast("Login Successful 🚀");
});

document.getElementById("signup").addEventListener("submit", function(e) {
    e.preventDefault();
    showToast("Account Created Successfully 🎉");
});

let scrollBtn = document.getElementById("scrollTop");
window.onscroll = function() {
    scrollBtn.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
};
scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
