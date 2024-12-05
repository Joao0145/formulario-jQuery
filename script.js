// script.js
$(document).ready(function() {
    // Armazenar dados no localStorage
    const storageKey ='userData';

    // Exibir mensagem personalizada ao enviar o formulario
     function showSucessMessage(name) {
        $('#user-name').text(name); //  Mostrar nome do usuario
        $('#sucess-message').fadeIn(500); // Exibe a mensagem de sucesso com animaçao
        $('#contact-form')[0].reset(); // Limpa o formulario
     }

     // Exibir a mensagem de erro
     function showErrorMensage() {
        $('#error-message').fadeIn(500); // Exibe a mensagem de erro com animaçao

     }

     // Validar os campos do formulario
      function validateForm() {
        let isValid = true;

        // Validar nome
        const name = $('#name').val();
        if (name.trim() === '') {
            $('#name-error').fadeIn(300); // Exibe a mensagem de erro para o nome
            isValid = false;


        } else {
            $('#name-error').fadeout(300); // oculta a mensagem de erro para o nome
        }

        // validar email
        const email = $('#email').val();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            $('#email-error').fadeIn(300); // Exibe a mensagem de erro para o email

           return isValid;
        }

        // Lidar com o envio do formulario
        $('#contact-form').on('submit', function(event) {
            event.preventDefault(); // Impede o envio padrao do formulario

            if (validateForm()) {
                const name = $('#name').val();
                const email = $('#email').val();

                // Armazenar dados no localStorge (apenas para este exemplo)

                const userData = {
                    name: name,
                    email: email
                };

                localStorage.setItem(storageKey, JSON.stringify(userData));

                showSucessMessage(name); // Exibe a mensagem de sucesso
                $('#error-message').fadeout(300); // Esconde a mensagem de erro, se houver

            } else {
                showErrorMessage(); // Exibe a mensagem de erro

            }
        });

        // Limpar a mensagem de erro ao digitar no campo 
        $('#name, #email').on('input', function() {
            $('#error-message').fadeout(300);
            $('#name-error').fadeout(300);
            $('#email-error').fadeout(300);
        });

        // Exibir mensagem personalizada apos o carregamento da pagina, se houver dados no localStorage
        const storeData = JSON.parse(localStorge.getItem(storageKey));
        if (storedData) {
            $('#user-name').text(storeData.name);
            $('#success-message').fadeIn(500);
        }
      }
});