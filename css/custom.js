var clock;

$(document).ready(function() {

    $('#start').click(function(e) {
      $('#welcome').fadeOut(duration = 1000);
      setTimeout(function() { $('#challenge').fadeIn(duration = 1000); }, 900);
      
      var count = 0;
      var hotSauces = [
        ["Round 1", "Bledi vs Genti"], 
        ["Round 2", "Erlin vs Olgert"], 
        ["Round 3", "Rovin vs Klaudio"],
        ["Round 4", "Edi vs Andrea"], 
        ["Queen Majesty Red Habanero & Black Coffee", "14,000"], 
        ["Hot Ones Fiery Chipotle", "15,600"],
        ["Dirty Dick's Hot Sauce", "21,000"], 
        ["Bravado Spice Co. Ghost Pepper & Blueberry", "28,000"], 
        ["High River Rogue", "50,000"],
        ["Torchbearer Zombie Apocalypse", "100,000"], 
        ["Da' Bomb Beyond Insanity", "119,700"], 
        ["Mad Dog 357", "357,000"],
        ["Blair's Mega Death Sauce With Liquid Rage", "550000"]
      ];
  
      $('#hotSauce').html(hotSauces[count][0]);
      $('#scovilles').html(hotSauces[count][1] + " Tirane");
  
      clock = new FlipClock($('.clock'), 180, {
        clockFace: 'MinuteCounter',
        autoStart: true,
        countdown: true,
        callbacks: {
            stop: function() {
                setTimeout(function(){
                  clock.setTime(180);
                  clock.start();
                  count += 1;
                  $('#hotSauce').html(hotSauces[count][0]);
                  $('#scovilles').html(hotSauces[count][1] + " Tirane");
                }, 1000);
            }
        }
      });     

      function runFunction() {
        if(count == hotSauces.length) { 
          $('#challenge').hide();
          $('#ending').fadeIn(duration = 1000);
        }
      }

      var t=setInterval(runFunction, 10);

    });
    
});