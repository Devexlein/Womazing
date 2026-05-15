/* ---- Sticky-menu ---- */

$(window).scroll(function() {

    if ($(this).scrollTop() > 1) {
        $('#menu').addClass('sticky_header');                
    }
    else {
        $('#menu').removeClass('sticky_header');
    }
});

/* ---- Modal-window ---- */

var btnOpen = document.querySelectorAll('.modal-btn');
var wrapper = document.querySelector('.modal-wrapper');
var overlay = document.querySelector('.modal-overlay');
var btnClose = document.querySelector('.btn-close');
var btnCall = document.querySelector('.btn-call');

for (let btn of btnOpen) { 
    btn.addEventListener('click', function(){
        wrapper.classList.add('active');
    });
}
    
    /*Active page*/
window.onload = function() {
    var loc = window.location;
    var li = document.querySelector('li > a[href="' + loc.href + '"]').parentElement;
    li.classList.add('nav__link_active');
}

function closeModal() {
    wrapper.classList.remove('active');
}

/*  Ищем форму, в которой нажата кнопка */

function getParent(btn) {
    var forms = document.querySelectorAll('.js-form');
    for (let form of forms) {        
        if (form.contains(btn)) {
            return form;
        }
    }
    return null;
}


overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

/* ---- Button-info to the modal-window ---- */

$('#modal-btn').click(function() {
    var parent = $(this).attr('data-parent');
    var modal = $(this).attr('data-target');
    $(modal).find('input[name=name]').val(parent);
});

/* ---- Validate and Submitting a form ---- */

$(document).ready(function() {
        $('[data-submit]').on('click', function(e) {
            e.preventDefault();
            var form = getParent(this);
            $(form).submit();

           //$(this).parent('form').submit();
           //$(this).parent().parent('form').submit();
        })
        $.validator.addMethod('regex', function(value, element, regexp) {
                var re = new RegExp(regexp);                
                return this.optional(element) || re.test(value);
            }, 'Пожалуйста, проверьте введенные данные.'
        );
  
    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{10,20}$'
                },
                name: {
                    required: true,
                    regex: '[A-Za-za-яА-Я`-]{2,20}$'
                },
                email: {
                    required: true,
                    email: true
                },
                 country: {
                    required: true,
                    regex: '[A-Za-za-яА-Я`-]{2,20}$'
                }
            },
            messages: {
                tel: {
                    required: 'Это поле является обязательным',
                    regex: 'Телефон должен начинаться со знака + и может содержать символы  - ()',
                    tel: 'Неверный формат номера',
                },
                name: {
                    required: 'Это поле является обязательным',
                    name: 'Неверный формат имени',
                },
                email: {
                    required: 'Это поле является обязательным',
                    email: 'Неверный формат E-mail',
                },
                country: {
                    required: 'Это поле является обязательным',
                    country: 'Неверный формат названия страны',
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');                
                switch ($formId) {                    
                    // Если у формы id="popupResult" - делаем:
                    case 'modal-window-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');                                
                            })
                            .always(function() {
                                console.log('Always');
                                closeModal();
                                setTimeout(function() {
                                    $('#modal-message').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 10);
                                $('#modal-message').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                    case 'contact-form':                        
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                                var successful = document.querySelector('.contact-form__message_successful');
                                successful.classList.remove('d-none');                                                               
                            })
                            .fail(function() {
                                console.log('Fail');
                                var unSuccessful = document.querySelector('.contact-form__message_unsuccessful');
                                unSuccessful.classList.remove('d-none');                                
                            })
                            .always(function() {
                                console.log('Always'); 
                            });
                        break;
                    case 'checkout-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');                                
                            })
                            .always(function() {
                                console.log('Always');
                                closeModal();
                                setTimeout(function() {
                                    $('#modal-message').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 10);
                                $('#modal-message').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;

                }
                return false;
            }
        })
    }

    // Запускаем механизм валидации форм, если у них есть класс .js-form
    $('.js-form').each(function() {
        valEl($(this));
    });
}); 
