

function set_username(params) {
    var username = document.getElementById("username").value;
    setLocalStorageItem("username", username)
}

function check_username(params) {
    var username = document.getElementById("username").value;
    var value = getLocalStorageItem("username");
    console.log(value);
    if (value == username) {
        alert('已存在');
    }
}

function setLocalStorageItem(key, value) {
    window.localStorage.setItem(key, value)
}

function getLocalStorageItem(key) {
    var value = window.localStorage.getItem(key)
    return value
}

