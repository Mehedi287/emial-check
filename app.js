document.getElementById('btn').addEventListener('click', function () {
    const getEmail = document.getElementById('email');
    const email = getEmail.value;

    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
        const valid = document.getElementById('valid');
        valid.style.display = 'block';
        const invalid = document.getElementById('invalid');
        invalid.style.display = 'none'
    }
    else {
        const invalid = document.getElementById('invalid');
        invalid.style.display = 'block';
        const valid = document.getElementById('valid');
        valid.style.display = 'none';
    }

    console.log(email);
    getEmail.value = '';

})