jQuery(document).ready(function($) {

    function fadeOut(el, duration) {
        var s = el.style,
            step = 25 / (duration || 300);
        s.opacity = s.opacity || 1;
        (function fade() {
            (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25);
        })();
    }
    
    $('#tech_anket .anket-container .screen').eq(1).find('.screen-content').addClass('owl-carousel').owlCarousel({
                responsiveClass: true,
                nav: true,
                loop: false,
                navText: ['<', '>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    700: {
                        items: 3
                    },
                    1000: {
                        items: 4,
                    }
                }

            });
    $('#tech_anket .anket-container .screen').eq(1).find('.screen-content').addClass('owl-hidden-by-client');

    $('#tech_anket .anket-container .screen').eq(2).find('.screen-content').addClass('owl-carousel').owlCarousel({
                responsiveClass: true,
                nav: true,
                loop: false,
                navText: ['<', '>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    700: {
                        items: 3
                    },
                    1000: {
                        items: 4,
                    }
                }

            });
    $('#tech_anket .anket-container .screen').eq(2).find('.screen-content').addClass('owl-hidden');

	$('#tech_anket .anket-container .screen').eq(3).find('.screen-content').addClass('owl-carousel').owlCarousel({
                responsiveClass: true,
                nav: true,
                loop: false,
                navText: ['<', '>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    700: {
                        items: 3
                    },
                    1000: {
                        items: 4,
                    }
                }

            });
	$('#tech_anket .anket-container .screen').eq(3).find('.screen-content').addClass('owl-hidden');
	

    $('#tech_anket .buttons a').click(function(event) {
        event.preventDefault();

        if ($(this).hasClass('disabled')) return false;
        $('#tech_anket .buttons a').addClass('disabled');

        var progressBar = document.getElementById('tech_anket_progress'),
            progressSpan = document.getElementById('currentPercent'),
            active_index = $('#tech_anket .anket-container .screen.active').index();

        if ($(this).hasClass('next')) {
            if (!AnketScreenValid(active_index)) {
                $('#tech_anket .buttons a').removeClass('disabled');
                AnketShowError(active_index);
                return;
            }
            if (active_index == 0) {
                $(this).removeClass('long').html('Далее');
                $('#tech_anket .buttons a.prev').removeClass('not-visible');
            }
            if(active_index==6)
            {
            	$('#tech_anket .buttons a').addClass('not-visible');
            }
            var next_index = active_index + 1;
            if (active_index == 8) {
                next_index = 0;
                active_index = 8;
                var fstStepEl = document.getElementById('fstStep'),
                    sndStepEl = document.getElementById('sndStep'),
                    thrdStepEl = document.getElementById('thrdStep'),
                    fourthStepEl = document.getElementById('fourthStep'),
                    fifthStepEl = document.getElementById('fifthStep'),
                    sixthStepEl = document.getElementById('sixthStep'),
                    seventhStepEl = document.getElementById('seventhStep'),
                    eighthStepEl = document.getElementById('eighthStep');

                setTimeout(function() {
                    fstStepEl.parentNode.removeChild(fstStepEl)
                }, 500);
                setTimeout(function() {
                    sndStepEl.parentNode.removeChild(sndStepEl)
                }, 500);
                setTimeout(function() {
                    thrdStepEl.parentNode.removeChild(thrdStepEl)
                }, 500);
                setTimeout(function() {
                    fourthStepEl.parentNode.removeChild(fourthStepEl)
                }, 500);
                setTimeout(function() {
                    fifthStepEl.parentNode.removeChild(fifthStepEl)
                }, 500);
                setTimeout(function() {
                    sixthStepEl.parentNode.removeChild(sixthStepEl)
                }, 500);
                setTimeout(function() {
                    seventhStepEl.parentNode.removeChild(seventhStepEl)
                }, 500);
                setTimeout(function() {
                    eighthStepEl.parentNode.removeChild(eighthStepEl)
                }, 500);
                setTimeout(function() {
                    progressBar.style.opacity = '0'
                }, 500);

                $('#tech_anket .buttons a.next').addClass('long').html('Начать');
                $('#tech_anket .anket-container .screen').find('input[type=radio]:checked').removeAttr('checked');
                $('#tech_anket .anket-container .screen').find('label').find('.checker').remove();
                $('#tech_anket .anket-container .screen').find('input[type=text]').val('');

            }
            AnketScreenRightProgress(active_index);
        }
        if ($(this).hasClass('prev')) {
            var next_index = active_index - 1;
            if (next_index == 0) {
                $(this).addClass('not-visible');
                $('#tech_anket .buttons a.next').addClass('long').html('Начать');
            }

            AnketScreenLeftProgress(active_index);
        }
        $('#tech_anket .anket-container .screen').eq(active_index).fadeOut(300, function() {
            $('#tech_anket .anket-container .screen').removeClass('active');
            $('#tech_anket .anket-container .screen').eq(next_index).fadeIn(300, function() {
                if (next_index > active_index) AnketDopAction(next_index);
                $('#tech_anket .anket-container .screen').eq(next_index).addClass('active');
                $('#tech_anket .buttons a').removeClass('disabled');
            });
        });
    });

    $('input[name=phone]').mask('+7 (000) 000-00-00', {
        placeholder: "+7 (xxx) xxx-xx-xx"
    });


    $(document).on('change', '#tech_anket label input[type=radio]', function() {
        $(this).closest('.screen').find('label').find('.checker').remove();
        $(this).closest('label').prepend('<div class="checker"><svg viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle id="bg" fill="#f4de64" cx="20" cy="20" r="20"></circle><path id="arrow" fill="#000" d="M13.707 20.293l-1.414 1.414L17 26.414l10.707-10.707-1.414-1.414L17 23.586z"></path></g></svg></div>');
        $(this).closest('label').find('.checker').fadeIn(300);

    });

    $(document).on('click', '#tech_anket label input[type=checkbox]', function() {
        var checkboxElParent = $(this).parents('label'),
            checkboxElStage  = $(this).parents('.owl-stage'),
            checkboxElCheker = checkboxElParent.children('.checker'),
            checkboxState    = $(this),
            counter          = checkboxElStage.find('.checker').length;
            
            if (counter < 10) {
                if (checkboxElCheker.length > 0) {
                    checkboxElCheker.hide();
                    checkboxElParent.children('.checker').remove();
                } else {
                    checkboxElParent.prepend('<div class="checker"><svg viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle id="bg" fill="#f4de64" cx="20" cy="20" r="20"></circle><path id="arrow" fill="#000" d="M13.707 20.293l-1.414 1.414L17 26.414l10.707-10.707-1.414-1.414L17 23.586z"></path></g></svg></div>');
                    checkboxElParent.children('.checker').fadeIn(300);
                }        
            } else {
                if (checkboxElCheker.length > 0) {
                    checkboxElCheker.hide();
                    checkboxElParent.children('.checker').remove();
                } else {
                    $(this).prop('checked', false);
                    alert('Можно выбрать только 3 элемента!');
                }
            }

    });


    function AnketScreenRightProgress(screen) {
        var progressBar = document.getElementById('tech_anket_progress'),
            svgAppend = document.getElementById('svgAppend'),
            svgProgressText = document.getElementById('progressText'),
            svgProgressInnerBackground = document.getElementById('progressInnerBackground'),
            svgNS = "http://www.w3.org/2000/svg",
            progressSpan = document.getElementById('currentPercent');

        switch (screen) {
            case 0:
                progressBar.style.display = 'block';
                progressBar.style.opacity = '1';

                var fstStep = document.createElementNS(svgNS, "path"),
                    progressTextNode = document.createTextNode('1/6');

                fstStep.setAttributeNS(null, "id", "fstStep");
                fstStep.setAttributeNS(null, "cx", 16);
                fstStep.setAttributeNS(null, "cy", 16);
                fstStep.setAttributeNS(null, "r", 16);
                fstStep.setAttributeNS(null, "d", "M 16,0 A 16,16 0 0 1 29.856406,7.9999996 L 16,16 Z");
                fstStep.setAttributeNS(null, "fill", "#f4de64");
                fstStep.setAttributeNS(null, "stroke", "none");

                svgProgressText.appendChild(progressTextNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgAppend.insertBefore(fstStep, svgProgressInnerBackground)
            break;
            case 1:
                var sndStep = document.createElementNS(svgNS, "path"),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('2/6');

                sndStep.setAttributeNS(null, "id", "sndStep");
                sndStep.setAttributeNS(null, "cx", 16);
                sndStep.setAttributeNS(null, "cy", 16);
                sndStep.setAttributeNS(null, "r", 16);
                sndStep.setAttributeNS(null, "d", "M 29.856406,7.9999996 A 16,16 0 0 1 29.856406,24 L 16,16 Z");
                sndStep.setAttributeNS(null, "fill", "#f4de64");
                sndStep.setAttributeNS(null, "stroke", "none");

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                svgAppend.insertBefore(sndStep, svgProgressInnerBackground);
                break;
            case 2:
                var thrdStep = document.createElementNS(svgNS, "path"),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('3/6');

                thrdStep.setAttributeNS(null, "id", "thrdStep");
                thrdStep.setAttributeNS(null, "cx", 16);
                thrdStep.setAttributeNS(null, "cy", 16);
                thrdStep.setAttributeNS(null, "r", 16);
                thrdStep.setAttributeNS(null, "d", "M 29.856406,24 A 16,16 0 0 1 16,32 l 0,-16 z");
                thrdStep.setAttributeNS(null, "fill", "#f4de64");
                thrdStep.setAttributeNS(null, "stroke", "none");

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                svgAppend.insertBefore(thrdStep, svgProgressInnerBackground);
                break;
            case 3:
                var fourthStep = document.createElementNS(svgNS, "path"),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('4/6');

                fourthStep.setAttributeNS(null, "id", "fourthStep");
                fourthStep.setAttributeNS(null, "cx", 16);
                fourthStep.setAttributeNS(null, "cy", 16);
                fourthStep.setAttributeNS(null, "r", 16);
                fourthStep.setAttributeNS(null, "d", "M 16,32 A 16,16 0 0 1 2.1435934,24 L 16,16 Z");
                fourthStep.setAttributeNS(null, "fill", "#f4de64");
                fourthStep.setAttributeNS(null, "stroke", "none");

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                svgAppend.insertBefore(fourthStep, svgProgressInnerBackground);
                break;
            case 4:
                var fifthStep = document.createElementNS(svgNS, "path"),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('5/6');

                fifthStep.setAttributeNS(null, "id", "fifthStep");
                fifthStep.setAttributeNS(null, "cx", 16);
                fifthStep.setAttributeNS(null, "cy", 16);
                fifthStep.setAttributeNS(null, "r", 16);
                fifthStep.setAttributeNS(null, "d", "m 2.1435934,24 a 16,16 0 0 1 -10e-8,-15.9999996 L 16,16 Z");
                fifthStep.setAttributeNS(null, "fill", "#f4de64");
                fifthStep.setAttributeNS(null, "stroke", "none");

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                svgAppend.insertBefore(fifthStep, svgProgressInnerBackground);
                break;
            case 5:
                var sixthStep = document.createElementNS(svgNS, "path"),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('6/6');

                sixthStep.setAttributeNS(null, "id", "sixthStep");
                sixthStep.setAttributeNS(null, "cx", 16);
                sixthStep.setAttributeNS(null, "cy", 16);
                sixthStep.setAttributeNS(null, "r", 16);
                sixthStep.setAttributeNS(null, "d", "M 2.1435933,8.0000004 A 16,16 0 0 1 16,0 l 0,16 z");
                sixthStep.setAttributeNS(null, "fill", "#f4de64");
                sixthStep.setAttributeNS(null, "stroke", "none");

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                svgAppend.insertBefore(sixthStep, svgProgressInnerBackground);
                break;
            case 6:
                progressBar.style.opacity = '0';
                break;
        }
    }

    function AnketScreenLeftProgress(screen) {
        var svgAppend = document.getElementById('svgAppend'),
            svgProgressText = document.getElementById('progressText'),
            progressBar = document.getElementById('tech_anket_progress');

        switch (screen) {
            case 0:
                var fstStepEl = document.getElementById('fstStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode(' ');
                
                fadeOut(fstStepEl, 500);
                setTimeout(function() {
                    fstStepEl.parentNode.removeChild(fstStepEl)
                }, 500);
                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);
                setTimeout(function() {
                    progressBar.style.opacity = '0'
                }, 500);
                break;
            case 1:
                var fstStepEl = document.getElementById('fstStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode(' ');
                
                fadeOut(fstStepEl, 500);
                setTimeout(function() {
                    fstStepEl.parentNode.removeChild(fstStepEl)
                }, 500);
                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);
                setTimeout(function() {
                    progressBar.style.opacity = '0'
                }, 500);
                break;
            case 2:
                var sndStepEl = document.getElementById('sndStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('1/6');

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                fadeOut(sndStepEl, 500);
                setTimeout(function() {
                    sndStepEl.parentNode.removeChild(sndStepEl)
                }, 500);
                break;
            case 3:
                var thrdStepEl = document.getElementById('thrdStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('2/6');

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                fadeOut(thrdStepEl, 500);
                setTimeout(function() {
                    thrdStepEl.parentNode.removeChild(thrdStepEl)
                }, 500);
                break;
            case 4:
                var fourthStepEl = document.getElementById('fourthStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('3/6');

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                fadeOut(fourthStepEl, 500);
                setTimeout(function() {
                    fourthStepEl.parentNode.removeChild(fourthStepEl)
                }, 500);
                break;
            case 5:
                var fifthStepEl = document.getElementById('fifthStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('4/6');

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                fadeOut(fifthStepEl, 500);
                setTimeout(function() {
                    fifthStepEl.parentNode.removeChild(fifthStepEl)
                }, 500);
                break;
            case 6:
                var sixthStepEl = document.getElementById('sixthStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('5/6');

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                fadeOut(sixthStepEl, 500);
                setTimeout(function() {
                    sixthStepEl.parentNode.removeChild(sixthStepEl)
                }, 500);
                break;
            case 7:
                var seventhStepEl = document.getElementById('seventhStep'),
                    textOldNode = svgProgressText.childNodes[0],
                    progressTextNode = document.createTextNode('6/6');

                svgProgressText.removeChild(textOldNode);
                svgProgressText.setAttributeNS(null, "dx", 10);
                svgProgressText.appendChild(progressTextNode);

                fadeOut(seventhStepEl, 500);
                setTimeout(function() {
                    seventhStepEl.parentNode.removeChild(seventhStepEl)
                }, 500);
                break;
        }
    }

    function AnketScreenValid(screen) {
        switch (screen) {
            case 1:
                if (!$('#tech_anket .anket-container .screen').eq(1).find('.screen-content').find('input[type=checkbox]:checked').length) return false;
                break;
            case 2:
                if (!$('#tech_anket .anket-container .screen').eq(2).find('.screen-content').find('input[type=checkbox]:checked').length) return false;
                break;
            case 3:
                if (!$('#tech_anket .anket-container .screen').eq(3).find('.screen-content').find('input[type=checkbox]:checked').length) return false;
                break;
            case 4:
                if (!$('#tech_anket .anket-container .screen').eq(4).find('.screen-content').find('input[type=radio]:checked').length) return false;
                break;
            case 5:
                var inputs = $('#tech_anket .anket-container .screen').eq(5).find('.screen-content').find('input[type=text]');
                for (var i = 0; i < inputs.length; i++) {
                    if (!$(inputs[i]).val().length) return false;
                }
                break;
            case 6:
                if (!$('#tech_anket .anket-container .screen').eq(6).find('.screen-content').find('input[type=text]').val().length) return false;
                break;
            case 7:
                if (!$('#tech_anket .anket-container .screen').eq(7).find('.screen-content').find('input[type=text]').val().length) return false;
                break;
        }
        return true;
    }


    function AnketShowError(screen) {
        var error = false;
        switch (screen) {
            case 1:
                error = 'Выберите тип техники';
                break;
            case 2:
                error = 'Выберите цвет ';
                break;
            case 3:
                error = 'Выберите производителя';
                break;
            case 4:
                error = 'Выберите ';
                break;
            case 5:
                error = 'Введите ваше имя';
                break;
            case 6:
                error = 'Введите ваш номер телефона и электронную почту';
                break;
            case 7:
                error = ' ';
                break;
        }
        if (error) {
            $('#tech_anket #error').html(error).animate({
                bottom: 0
            }, 300, function() {
                setTimeout(function() {
                    $('#tech_anket #error').html(error).animate({
                        bottom: '-30px'
                    }, 300, function() {
                        $('#tech_anket #error').html('');
                    });
                }, 1000);
            });
        }
    }


    function AnketDopAction(screen) {
        switch (screen) {
            case 1:
                $('#tech_anket .anket-container .screen').eq(1).find('.screen-content').removeClass('owl-hidden-by-client');


            break;
            case 2:
            break;
            case 3:
            break;
            case 4:
            break;
            case 7:
                var data = $('.tech_anket form').serialize();
                $.ajax({
                    method: "POST",
                    url: ajaxtechAnketUrl,
                    data: data + '&screen=7',
                    success: function(data) {

                    }
                }, 'json');
                break;
        }
        return true;
    }
});