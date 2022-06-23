$(document).ready(function () {
    $("#btnCopiarRe").hide();
    $("#btnCopiarTce").hide();
    $("#btnExportTce").hide();
    $("#btnExportRe").hide();
    $(".firmaTCE").hide();
    $(".firmaRE").hide();

    $(".btnPais").append(
        "<a href='#' class='btnCol change'>COl</a>" +
        "<a href='#' class='btnPer change'>PER</a>"
    );
    $(".btnCol").click(function () {
        $(".btnPer").attr("valor", "");
        $(".btnCol").attr("valor", "true");
        $(".btnCol").toggleClass("on");
        $(".btnPer").removeClass("on");

        $("#correoF").html(
            "colaborador@alupar.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
        );
        $("#celExtF").html(
            "<p>Cel.: + 57 " + "000 000 0000" + "</p><p>Ext.: " + "0000" + "</p> <br>"
        );
    });
    $(".btnPer").click(function () {
        $(".btnCol").attr("valor", "");
        $(".btnPer").attr("valor", "true");
        $(".btnPer").toggleClass("on");
        $(".btnCol").removeClass("on");

        $("#correoF").html(
            "colaborador@alupar.com.pe</br><a href='http://www.alupar.com.br'>www.alupar.com.pe</a></br>"
        );

        $("#celExtF").html(
            "<p>Cel.: + 51 " + "000 000 0000" + "</p><p>Ext.: " + "0000" + "</p> <br>"
        );
    });



    $(".alp").click(function () {
        $(".logo").attr("src", "https://s3.amazonaws.com/mzprodassets/customer/alupar/alupar_logo_azul_RGB.PNG");
        $(".navbar").css("background", "#0f3e80");
        $(".line").css("background", "#0f3e80");
        $(".label").css("color", "#0f3e80");
        $("nav,ul,li").css("--c", "#0f3e80");
        $(".footer").css("background", "#0f3e80");
        $(".navbar").css("transition", ".2s ease-in-out");

        $(".btn").attr("numero", "1");


        $(".item").hover(function (e) {
            $(this).css("background", e.type === "mouseenter" ? "#134791" : "transparent");
            $(this).css("border-bottom", e.type === "mouseenter" ? "6px solid #0e9604" : "transparent");
        })

        $(".btnPais").html(
            "<a href='#' class='btnCol change'>COl</a>" +
            "<a href='#' class='btnPer change'>PER</a>"
        );
        $(".btnCol").click(function () {
            $(".btnPer").attr("valor", "");
            $(".btnCol").attr("valor", "true");
            $(".btnCol").toggleClass("on");
            $(".btnPer").removeClass("on");

            $("#correoF").html(
                "colaborador@alupar.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
            );
            $("#celExtF").html(
                "<p>Cel.: + 57 " + "000 000 0000" + "</p><p>Ext.: " + "0000" + "</p> <br>"
            );
        });
        $(".btnPer").click(function () {
            $(".btnCol").attr("valor", "");
            $(".btnPer").attr("valor", "true");
            $(".btnPer").toggleClass("on");
            $(".btnCol").removeClass("on");

            $("#correoF").html(
                "colaborador@alupar.com.pe</br><a href='http://www.alupar.com.br'>www.alupar.com.pe</a></br>"
            );
            $("#celExtF").html(
                "<p>Cel.: + 51 " + "000 000 0000" + "</p><p>Ext.: " + "0000" + "</p> <br>"
            );
        });

        $(".lineGive").addClass("lineCorreo");
        $("#btnCopiarTce").hide();
        $("#btnCopiarRe").hide();
        $("#btnExportTce").hide();
        $("#btnExportRe").hide();
        $("#btnExport").show();
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
        $(".footer").css("background", "#009fe3");
        $(".navbar").css("transition", ".2s ease-in-out");

        $(".btn").attr("numero", "2");


        $(".item").hover(function (e) {
            $(this).css("background", e.type === "mouseenter" ? "#08a5e9" : "transparent");
            $(this).css("border-bottom", e.type === "mouseenter" ? "6px solid #fff" : "transparent");
        })

        $(".line").removeClass("lineCorreo");
        $(".btnCol,.btnPer").hide();
        $(".btnCol2,.btnPer2").hide();
        $("#btnCopiarTce").show();
        $("#btnExportTce").show();
        $("#btnExport").hide();
        $("#btnExportRe").hide();
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
        $(".footer").css("background", "#109206");
        $(".navbar").css("transition", ".2s ease-in-out");

        $(".btn").attr("numero", "3");



        $(".item").hover(function (e) {
            $(this).css("background", e.type === "mouseenter" ? "#12a308" : "transparent");
            $(this).css("border-bottom", e.type === "mouseenter" ? "6px solid #134791" : "transparent");
        });

        $(".btnPais").html(
            "<a href='#' class='btnCol2'>COl</a>" +
            "<a href='#' class='btnPer2'>PER</a>"
        );

        $(".btnCol2").click(function () {
            $(".btnPer2").attr("valor", "");
            $(".btnCol2").attr("valor", "true");
            $(".btnCol2").toggleClass("on2");
            $(".btnPer2").removeClass("on2");

            $("#imgChange").html(
                "<img src='https://risaraldaenergia.com.co/wp-content/themes/moqueca/images/logo-risaralda.png' width='120' height='60' alt='' />"
            );

            $("#correoFRE").html(
                "colaborador@risaraldaenergia.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
            );
            $("#celExtFRE").html(
                "<p>Cel.: + 57 " + "000 000 0000" + "</p><p>Ext.: " + "0000" + "</p> <br>"
            );
        });
        $(".btnPer2").click(function () {
            $(".btnCol2").attr("valor", "");
            $(".btnPer2").attr("valor", "true");
            $(".btnPer2").toggleClass("on2");
            $(".btnCol2").removeClass("on2");

            $("#imgChange").html(
                "<img src='https://lavirgen.com.pe/wp-content/themes/moqueca/images/logo-lavirgen.png' width='120' height='60' alt='' />"
            );
            $("#correoFRE").html(
                "colaborador@lavirgen.com.pe</br><a href='http://www.lavirgen.com.pe'>www.lavirgen.com.pe</a></br>"
            );
            $("#celExtFRE").html(
                "<p>Cel.: + 51 " + "000 000 0000" + "</p><p>Ext.: " + "0000" + "</p> <br>"
            );
        });

        $(".line").addClass("lineCorreo");
        $(".btnCol,.btnPer").hide();
        $("#btnCopiarTce").hide();
        $("#btnExportRe").show();
        $("#btnExport").hide();
        $("#btnExportTce").hide();
        $("#btnCopiarRe").show();
        $("#btnCopiar").hide();
        $(".firmaRE").fadeIn();
        $(".firmaTCE").hide();
        $(".firmaAlupar").hide();

    });

    $("#btnLimpiar").click(function () {
        $(".input").val("");
        $(".btnCol,.btnPer").removeClass("on");
    })

    $("#btnGenerar").click(function () {
        var nombre = $(".nombre").val();
        var rol = $(".rol").val();
        var celular = $(".cel").val();
        var extension = $(".ext").val();
        var correo = $(".correo").val();
        var COL = $(".btnCol").attr("valor");
        var PER = $(".btnPer").attr("valor");
        var COL2 = $(".btnCol2").attr("valor");
        var PER2 = $(".btnPer2").attr("valor");

        if (nombre, rol, celular, extension, correo == "") {
            swal("Alto!", "Asegurate De Llenar Todos Los Campos!", "error");
        }
        else {
            swal("Buen Trabajo!", "Tu Firma Ha Sido Generada!", "success");
            $("#nombreF").html(
                nombre + "</br><strong style='font-size: 9px; color: #079541;text-transform: uppercase;'>" + rol + "</strong>"
            );

            if (COL == "true") {
                $("#celExtF").html(
                    "<p>Cel.: + 57 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
                );
                $("#correoF").html(
                    correo + "@alupar.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
                );
            } else {
                $("#celExtF").html(
                    "<p>Cel.: + 57 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
                );
                $("#correoF").html(
                    correo + "@alupar.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
                );
            }
            if (PER == "true") {
                $("#celExtF").html(
                    "<p>Cel.: + 51 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
                );
                $("#correoF").html(
                    correo + "@alupar.com.pe</br><a href='http://www.alupar.com.br'>www.alupar.com.pe</a></br>"
                );
            }


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

            if (COL2 == "true") {
                $("#imgChange").html(
                    "<img src='https://risaraldaenergia.com.co/wp-content/themes/moqueca/images/logo-risaralda.png' width='120' height='60' alt='' />"
                );
                $("#celExtFRE").html(
                    "<p>Cel.: + 57 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
                );
                $("#correoFRE").html(
                    correo + "@alupar.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
                );
            } else {
                $("#imgChange").html(
                    "<img src='https://risaraldaenergia.com.co/wp-content/themes/moqueca/images/logo-risaralda.png' width='120' height='60' alt='' />"
                );
                $("#celExtFRE").html(
                    "<p>Cel.: + 57 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
                );
                $("#correoFRE").html(
                    correo + "@alupar.com.co</br><a href='http://www.alupar.com.br'>www.alupar.com.co</a></br>"
                );
            }
            if (PER2 == "true") {

                $("#imgChange").html(
                    "<img src='https://lavirgen.com.pe/wp-content/themes/moqueca/images/logo-lavirgen.png' width='120' height='60' alt='' />"
                );
                $("#celExtFRE").html(
                    "<p>Cel.: + 51 " + celular + "</p><p>Ext.: " + extension + "</p> <br>"
                );
                $("#correoFRE").html(
                    correo + "@lavirgen.com.pe</br><a href='http://www.lavirgen.com.pe'>www.lavirgen.com.pe</a></br>"
                );
            }
        }

    })

    var alp = document.getElementById('btnCopiar').addEventListener('click', copiarAlPortapapelesAlp);
    var tce = document.getElementById('btnCopiarTce').addEventListener('click', copiarAlPortapapelesTce);
    var re = document.getElementById('btnCopiarRe').addEventListener('click', copiarAlPortapapelesRe);

    function copiarAlPortapapelesAlp(ev) {
        var codigoACopiar = document.getElementById('copAlp');
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        document.execCommand('copy');
        swal("Firma De Alupar Copiada!");
    }

    function copiarAlPortapapelesTce(ev) {
        var codigoACopiar = document.getElementById('copTce');
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        document.execCommand('copy');
        swal("Firma de TCE Copiada!");
    }

    function copiarAlPortapapelesRe(ev) {
        var codigoACopiar = document.getElementById('copRe');
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        document.execCommand('copy');
        swal("Firma de RE Copiada!");
    }

    $("#btnExport").click(function (e) {
        swal({
            title: "Quieres Expotar Esta Firma?",
            text: "De ser así click en OK!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Exportado", {
                        icon: "success",

                    });
                    var nombre = $(".nombre").val();
                    var rol = $(".rol").val();
                    var celular = $(".cel").val();
                    var extension = $(".ext").val();
                    var correo = $(".correo").val();
                    var COL = $(".btnCol").attr("valor");
                    var PER = $(".btnPer").attr("valor");
                    

                    window.open("exportAlp.html?nombre=" + nombre + "&rol=" + rol + "&celular=" + celular + "&extension=" + extension + "&correo=" + correo + "&COL=" + COL + "&PER=" + PER);

                } else {
                    swal("Sigue Editando!");
                }
            });

    });
    $("#btnExportTce").click(function (e) {
        swal({
            title: "Quieres Expotar Esta Firma?",
            text: "De ser así click en OK!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Exportado", {
                        icon: "success",

                    });
                    var nombre = $(".nombre").val();
                    var rol = $(".rol").val();
                    var celular = $(".cel").val();
                    var extension = $(".ext").val();
                    var correo = $(".correo").val();

                    window.open("exportTce.html?nombre=" + nombre + "&rol=" + rol + "&celular=" + celular + "&extension=" + extension + "&correo=" + correo);
                } else {
                    swal("Sigue Editando!");
                }
            });
    });
    $("#btnExportRe").click(function (e) {
        swal({
            title: "Quieres Expotar Esta Firma?",
            text: "De ser así click en OK!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Exportado", {
                        icon: "success",

                    });
                    var nombre = $(".nombre").val();
                    var rol = $(".rol").val();
                    var celular = $(".cel").val();
                    var extension = $(".ext").val();
                    var correo = $(".correo").val();
                    var COL2 = $(".btnCol2").attr("valor");
                    var PER2 = $(".btnPer2").attr("valor");

                    window.open("exportRe.html?nombre=" + nombre + "&rol=" + rol + "&celular=" + celular + "&extension=" + extension + "&correo=" + correo + "&COL2=" + COL2 + "&PER2=" + PER2);
                } else {
                    swal("Sigue Editando!");
                }
            });
    });

});