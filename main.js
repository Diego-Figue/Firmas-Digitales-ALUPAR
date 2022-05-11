$(document).ready(function () {
    $("#btnCopiarRe").hide();
    $("#btnCopiarTce").hide();
    $(".firmaTCE").hide();
    $(".firmaRE").hide();


    $(".alp").click(function () {
        $(".logo").attr("src", "https://s3.amazonaws.com/mzprodassets/customer/alupar/alupar_logo_azul_RGB.PNG");
        $(".navbar").css("background", "#0f3e80");
        $(".line").css("background", "#0f3e80");
        $(".label").css("color", "#0f3e80");
        $("nav,ul,li").css("--c", "#0f3e80");
        $(".navbar").css("transition", ".2s ease-in-out");

        $(".btn").attr("numero", "1");


        $(".item").hover(function (e) {
            $(this).css("background", e.type === "mouseenter" ? "#134791" : "transparent");
            $(this).css("border-bottom", e.type === "mouseenter" ? "6px solid #0e9604" : "transparent");
        })

        $("#btnCopiarTce").hide();
        $("#btnCopiarRe").hide();
        $("#btnCopiar").show();
        $(".firmaTCE").hide();
        $(".firmaRE").hide();
        $(".firmaAlupar").fadeIn();
    });

    $(".tce").click(function () {
        $(".logo").attr("src", "https://tce.com.co/wp-content/themes/moqueca/images/logo-ce.png");
        $(".navbar").css("background", "#009fe3");
        $(".line").css("background", "#009fe3");
        $(".label").css("color", "#009fe3");
        $("nav,ul,li").css("--c", "#009fe3");
        $(".navbar").css("transition", ".2s ease-in-out");

        $(".btn").attr("numero", "2");


        $(".item").hover(function (e) {
            $(this).css("background", e.type === "mouseenter" ? "#08a5e9" : "transparent");
            $(this).css("border-bottom", e.type === "mouseenter" ? "6px solid #fff" : "transparent");
        })

        $("#btnCopiarTce").show();
        $("#btnCopiarRe").hide();
        $("#btnCopiar").hide();
        $(".firmaAlupar").hide();
        $(".firmaRE").hide();
        $(".firmaTCE").fadeIn();
    });

    $(".re").click(function () {
        $(".logo").attr("src", "https://risaraldaenergia.com.co/wp-content/themes/moqueca/images/logo-risaralda.png");
        $(".navbar").css("background", "#109206");
        $(".line").css("background", "#109206");
        $(".label").css("color", "#109206");
        $("nav,ul,li").css("--c", "#109206");
        $(".navbar").css("transition", ".2s ease-in-out");

        $(".btn").attr("numero", "3");



        $(".item").hover(function (e) {
            $(this).css("background", e.type === "mouseenter" ? "#12a308" : "transparent");
            $(this).css("border-bottom", e.type === "mouseenter" ? "6px solid #134791" : "transparent");
        })

        $("#btnCopiarTce").hide();
        $("#btnCopiarRe").show();
        $("#btnCopiar").hide();
        $(".firmaRE").fadeIn();
        $(".firmaTCE").hide();
        $(".firmaAlupar").hide();

    });

    $("#btnLimpiar").click(function () {
        $(".input").val("");
    })

    $("#btnGenerar").click(function () {
        var nombre = $(".nombre").val();
        var rol = $(".rol").val();
        var celular = $(".cel").val();
        var extension = $(".ext").val();
        var correo = $(".correo").val();

        if (nombre, rol, celular, extension, correo == "") {
            alert("Llene los campos para generar la firma");
        }
        else {
            $("#nombreF").html(
                nombre + "</br><strong style='font-size: 9px; color: #079541;text-transform: uppercase;'>" + rol + "</strong>"
            );

            $("#celExtF").html(
                "<p>Cel.: + 57 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
            );

            $("#correoF").html(
                correo + "@alupar.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
            );

            $("#nombreFTCE").html(
                nombre + "</br><strong style='font-size: 9px; color: #009fe3;text-transform: uppercase;'>" + rol + "</strong>"
            );

            $("#celExtFTCE").html(
                "<p>Cel.: + 57 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
            );

            $("#correoFTCE").html(
                correo + "@tce.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
            );

            $("#nombreFRE").html(
                nombre + "</br><strong style='text-transform: uppercase; font-size: 9px; color: #079541;'>" + rol + "</strong>"
            );

            $("#celExtFRE").html(
                "<p>Cel.: + 57 " + celular + "</p><p>Ext.: " + extension + "</br>"
            );

            $("#correoFRE").html(
                correo + "@risaraldaenergia.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
            );
        }

    })

    var copyTextareaBtn = document.querySelector('.copyAlp');

    copyTextareaBtn.addEventListener('click', function (event) {
        var copyTextarea = document.querySelector('.copAlp');
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    })

});