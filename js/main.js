(function () {
	"use strict";

	var regalo = document.getElementById('regalo');
      
       

	document.addEventListener('DOMContentLoaded', function(){
        
        if (document.getElementById('mapa')) {
		var map = L.map('mapa').setView([-30.737114, -59.644411], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-30.737114, -59.644411]).addTo(map)
        .bindPopup('GLDWebCamp 2020 <br> Boletos ya disponibles')
        .openPopup();
        }
        
        var nombre = document.getElementById('nombre'); 
        var apellido = document.getElementById('apellido'); 
        var email = document.getElementById('email'); 

        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error'); 
        var botonregistro = document.getElementById('btnRegistro'); 
        var lista_productos = document.getElementById('lista_productos');
        var suma = document.getElementById('suma_total');

        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');

        if (document.getElementById('calcular')) {

        calcular.addEventListener('click', calcularmontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur',validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

        function validarCampos(){
            if(this.value == '') {
            	errorDiv.style.display = 'block';
            	errorDiv.innerHTML = "Este campo es obligatorio";
            	this.style.border = '1px solid red';
            	errorDiv.style.border = '1px solid red';
            } else{
            	errorDiv.style.display = 'none';
            	this.style.border = '1px solid #cccccc';
            }
        }; 

        function validarMail(){
        	if (this.value.indexOf("@") > -1) {
        		errorDiv.style.display = 'none';
            	this.style.border = '1px solid #cccccc';
        	}else{
        		errorDiv.style.display = 'block';
            	errorDiv.innerHTML = "Debe tener un @";
            	this.style.border = '1px solid red';
            	errorDiv.style.border = '1px solid red';
        	}
        }

        function calcularmontos(event){
        	event.preventDefault();
        	if (regalo.value === '') {
               alert("Debes elegir un regalo");
               regalo.focus();
        	}else{
        		var boletosdia = parseInt(pase_dia.value, 10)|| 0,
        		    boletos2dias = parseInt(pase_dosdias.value, 10)|| 0,
        		    boletoCompleto = parseInt(pase_completo.value, 10)|| 0,
        		    cantCamisas = parseInt(camisas.value, 10)|| 0,
        		    cantEtiquetas = parseInt(etiquetas.value, 10)|| 0;

        	    var totalPagar = (boletosdia * 300) + (boletos2dias * 450) + (boletoCompleto * 500) + ((cantCamisas * 250) * .93) + (cantEtiquetas * 200); 

        	    var listadoProductos = [];

        		if (boletosdia >= 1) {
                   listadoProductos.push(boletosdia + ' pases por dia');
        		}
        		if (boletos2dias >= 1) {
        		   listadoProductos.push(boletos2dias + ' pases por 2 dias');       		    	
        		}
        		if (boletoCompleto >= 1) {
        		   listadoProductos.push(boletoCompleto + ' pases completos');	
        		}	
        		if (cantCamisas >= 1) {
        		   listadoProductos.push(cantCamisas + ' camisas');	
        		}
        		if (cantEtiquetas >= 1) {
        		   listadoProductos.push(cantEtiquetas + ' calcomanias');	
        		}    
        		    
        		lista_productos.style.display = "block";
        		lista_productos.innerHTML = '';
        		for (var i = 0; i < listadoProductos.length; i++) {
        			lista_productos.innerHTML += listadoProductos[i] + '</br>';
        		}

        		suma.innerHTML = "$ " + totalPagar.toFixed(2); 
        	}
        }

        function mostrarDias(){
        	var boletosdia = parseInt(pase_dia.value, 10)|| 0,
        		boletos2dias = parseInt(pase_dosdias.value, 10)|| 0,
        		boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

        	var diasElegidos = [];

        	if (boletosdia > 0) {
        		diasElegidos.push('viernes');
        		console.log(diasElegidos);
        	}
        	if (boletos2dias > 0) {
        		diasElegidos.push('viernes', 'sabado');
        		console.log(diasElegidos);
        	}
        	if (boletoCompleto > 0) {
        		diasElegidos.push('viernes', 'sabado', 'domingo');
        		console.log(diasElegidos);
        	}

        	for (var i = 0; i < diasElegidos.length; i++) {
        		document.getElementById(diasElegidos[i]).style.display = 'block';
        	}
        } 
      }

	});
})();


$(function() {
    //lettering
    $('.nombre-sitio').lettering();

    //menu fijo
    var windowHeight= $(window).height();
    var barraAltura= $('.barra').innerHeight();

    $(window).scroll(function(){
       var scroll = $(window).scrollTop();
       if(scroll > windowHeight){
        $('.barra').addClass('fixed');
        $('body').css({'margin-top': barraAltura+'px'});
       }else{
        $('.barra').removeClass('fixed');
        $('body').css({'margin-top': '0px'});
       }
    });

    //menu movil
       $('.menu-movil').on('click', function(){
       $('.navegacion-principal').slideToggle();
    });

	//programa conferencias
	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass('activo');

	$('.menu-programa a').on('click', function() {
		$('.menu-programa a').removeClass('activo');
		$(this).addClass('activo');
		$('.ocultar').hide();
		var enlace = $(this).attr('href');
		$(enlace).fadeIn(1000);
		return false;
	});

   //animacion numeros

   $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
   $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
   $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
   $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);

   //cuenta regresiva
   $('.cuenta-regresiva').countdown('2020/12/14 09:00:00', function(event){
       $('#dias').html(event.strftime('%D'));
       $('#horas').html(event.strftime('%H'));
       $('#minutos').html(event.strftime('%M'));
       $('#segundos').html(event.strftime('%S'));
   });
});

