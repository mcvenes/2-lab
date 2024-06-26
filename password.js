function displayPasswords() {
    let passwords = JSON.parse(window.localStorage.getItem('passwords'));
    if (passwords == undefined) {
        return
    }
    let parent = document.getElementById('passwords');
    parent.innerHTML = '';
    for (let password of passwords) {
        let element = document.createElement('p');
        element.innerText = `login: ${password.login} password: ${password.password} url: ${password.url}`;
        parent.appendChild(element);
    }
}

window.onload = function () {
    displayPasswords();
};

function addPassword() {
    let login = document.getElementById('login');
    let password = document.getElementById('password');
    let url = document.getElementById('url');
    let data = {
        login: login?.value,
        password: password?.value,
        url: url?.value,
    };
    for (let key in data) {
        if (data[key] == undefined || data[key] == '') {
            return;
        }
    }
    let passwords = JSON.parse(window.localStorage.getItem('passwords'));
    if (passwords == undefined) {
        passwords = [data];
    } else {
        passwords = passwords.concat(data);
    }
    window.localStorage.setItem('passwords', JSON.stringify(passwords));
    login.value = '';
    password.value = '';
    url.value = '';
    displayPasswords();
}
