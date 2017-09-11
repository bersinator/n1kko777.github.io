$("document").ready(function() {
    
    $("#inv_form").submit(function() {

      $("#sub_inv").html("Отправляем...");
      $("#sub_inv").attr('disabled',true);

       $.ajax({
           type: "POST",
           url: "php/feedback.php",
           data: {name : $("#inv_name").val(), phone : $("#inv_phone").val()},
           success: function(){
                alert('Спасибо за заявку! Мы скоро с вами свяжемся.');
                $("#inviteBox").addClass("hidden");
                $("#bt_neff").addClass("hidden");
                $("#bt_elica").addClass("hidden");
                $("#bt_libh").addClass("hidden");
                $("#bt_miele").addClass("hidden");
                $("#bt_bosch").addClass("hidden");
                $("#bt_smeg").addClass("hidden");
                $("#bt_map").addClass("hidden");

            },
            error: function(){
                alert('Произошла ошибка! Повторите попытку или свяжитесь с нами. \n8 (3452) 57-91-50');
                $("input[type=text]").val("");
                $("#sub_inv").removeAttr('disabled');
                $("#sub_inv").html("Записаться");

            }
       });
        
        return false;
    });

    $("#myCarousel").swiperight(function() {
      $("#myCarousel").carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
      $("#myCarousel").carousel('next');
    });
    
    $("#photocarusel").swiperight(function() {
    $("#photocarusel").carousel('prev');
    });
    $("#photocarusel").swipeleft(function() {
      $("#photocarusel").carousel('next');
    });
    
    $("#t_form").submit(function() {
          
      $("#t_sub").html("Отправляем...");
      $("#t_sub").attr('disabled',true);
          
        var t_main = "";
        var what = [];
        var color = [];
        var which = [];
        var as_soon = "";

        $(".get_what").each(function(){

            if($(this).is(":checked"))
                {
                    what.push($(this).val());
                }
        });

        $(".get_color").each(function(){

            if($(this).is(":checked"))
                {
                    color.push($(this).val());
                }
        });

        $(".get_which").each(function(){

            if($(this).is(":checked"))
                {
                    which.push($(this).val());
                }
        });

            if($(".as_soon").is(":checked")) {
                
                  as_soon = $(".as_soon:checked").val();
                }else {
                    as_soon = "—";
                };
    

            what = what.toString();
            color = color.toString();
            which = which.toString();

            t_main = "Выбор Клиента: \n1)Бытовая техника: " + what + "\n2)Цвет: " + color + "\n3)Бренды: " + which + "\n4)Сроки: " + as_soon + "\n";

            $.ajax({
           type: "POST",
           url: "php/test.php",
           data: ({choose : t_main, 
                   t_city : $("#t_city").val(),
                   t_name : $("#t_name").val(),
                   t_mail : $("#t_mail").val(),
                   t_phone : $("#t_phone").val()
                  }),
           success: function(){
                alert('Спасибо за заявку! Мы скоро с вами свяжемся.');
                $("#myTest").modal("hide");

            },
            error: function(){
                alert('Произошла ошибка! Повторите попытку или свяжитесь с нами. \n8 (3452) 57-91-50');
                
                $("#t_sub").removeAttr('disabled');
                $("#t_sub").html("Отправить заявку");
                $("#myTest").modal("hide");

            }
       });
    });

    $("#q_form").submit(function() {

      $("#q_sub").html("Отправляем...");
      $("#q_sub").attr('disabled',true);

       $.ajax({
           type: "POST",
           url: "php/quest.php",
           data: {q_name : $("#q_name").val(), 
                  q_mail : $("#q_mail").val(),
                  q_text : $("#q_text").val()
                },
                    
           success: function(){
                alert('Спасибо за заявку! Мы скоро с вами свяжемся.');
                $("#myQuest").modal("hide");;
            },
            error: function(){
                alert('Произошла ошибка! Повторите попытку или свяжитесь с нами. \n8 (3452) 57-91-50');
                $("#q_sub").removeAttr('disabled');
                $("#q_sub").html("Отправить заявку");
                $("#myQuest").modal("hide");;
            }
       });
        $("#q_text").val("");
        return false;
    });
    
});
