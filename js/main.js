      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'is-animating'
      });
      wow.init();

      var rellax = new Rellax('.rellax');
      $("#mainMenuIcon").animatedModal({modalTarget:'MainMenuModal', animatedOut:'bounceOutDown'});
      $('#administracion-nomina').click(function(){$('#da-slider').slick('slickGoTo', 1);});
      $('#maquila-nomina').click(function(){$('#da-slider').slick('slickGoTo', 0);});
      $('#reclutamiento-ejecutivo').click(function(){$('#da-slider').slick('slickGoTo', 2);});
      $('#cursos-certificaciones').click(function(){$('#da-slider').slick('slickGoTo', 3);});
      $('#da-slider').slick({autoplay: true,autoplaySpeed: 3000});
      $('.menu-a').click(function(e){
        $('.close-MainMenuModal').click();
        $('#home, #slides, #texts, #concepts, #clientes, #map').css('display', 'block');
        $('#Nosotros, #MisionVision').css('display', 'none');
        $('#clientes, #map').removeClass('menuSection');
      });
      $('.menu-b').click(function(e){
        $('.close-MainMenuModal').click();
        $('#home, #slides, #texts, #concepts, #clientes, #map').css('display', 'none');
        $('#Nosotros, #MisionVision').css('display', 'block');
        $('#Nosotros').addClass('menuSection');
      });
      $('.menu-c').click(function(e){
        $('.close-MainMenuModal').click();
        $('#home, #slides, #texts, #concepts, #map, #Nosotros, #MisionVision').css('display', 'none');
        $('#clientes, #MisionVision').css('display', 'block');
        $('#clientes').addClass('menuSection');
      });
      $('.menu-d').click(function(e){
        $('.close-MainMenuModal').click();
        $('#home, #slides, #texts, #concepts, #clientes, #Nosotros, #MisionVision').css('display', 'none');
        $('#map, #MisionVision').css('display', 'block');
        $('#map').addClass('menuSection');
      });