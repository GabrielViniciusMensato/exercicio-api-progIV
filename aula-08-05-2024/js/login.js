var body = document.querySelector("body");
var singUpButton = document.querySelector("#singUp");
var singInButton = document.querySelector("#singIn");
var registerButton = document.querySelector("#register");
var accessButton = document.querySelector("#access");

body.onload = function () {
    body.className = "on-load";
};

singUpButton.addEventListener("click", function () {
    body.className = "sing-up";
});

singInButton.addEventListener("click", function () {
    body.className = "sing-in";
});

registerButton.addEventListener("click", function (event) {
    event.preventDefault();
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var confirmPassword = document.querySelector('#confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.message || 'Erro ao registrar');
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                window.location.href = '/welcome.html';
            } else {
                alert('Erro ao registrar: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao registrar: ' + error.message);
        });
});

accessButton.addEventListener("click", function (event) {
    event.preventDefault();
    var email = document.querySelector('#loginEmail').value;
    var password = document.querySelector('#loginPassword').value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.message || 'Erro ao fazer login');
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                window.location.href = '/welcome.html';
            } else {
                alert('Erro ao fazer login: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao fazer login: ' + error.message);
        });
});
