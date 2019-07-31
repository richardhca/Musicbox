function show_hidden_password() {
    var password_type = document.getElementById('password');
    var password_comfirm_type = document.getElementById('password_comfirm');
    if (password_type.type === 'password') {
        password_type.type = 'text';
        password_comfirm_type.type = 'text';
    }
    else {
        password_type.type = 'password';
        password_comfirm_type.type = 'password';
    }
}