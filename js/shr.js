$(function(){


  var imageBackground = ["images/background/0.jpeg","images/background/1.jpeg","images/background/2.jpeg"];

  var count = 0;

  setInterval(function(){

      if (count == imageBackground.length) {
        count = 0;
      }

      $('.aboutMe').css({
        "background":"linear-gradient(rgba(128,124,116,0.45),rgb(0,0,0)),url("+imageBackground[count++]+")no-repeat center center fixed",
        "background-size":"cover"
      });




  },6000);




      console.log("work pretty");

      $('.buttonDiv').click(function(){

        $('.default').hide();

        var f = $(this).attr('id');

        if (f === 'personalInfo') {

            if ($('.personalInfo').is(':hidden')) {
                $('.personalInfo').show("slow");
                  $('.workEx').hide();
                    $('.coverLetterDiv').hide("slow");
            }
            else {
              $('.personalInfo').hide("slow");
              $('.default').show("slow");
            }
        }
        // NOTE: ENd the if one staetment buttonDiv

        else if (f === 'work') {


            if ($('.workEx').is(':hidden')) {
                $('.workEx').show("slow");
                $('.personalInfo').hide("slow");
                  $('.coverLetterDiv').hide("slow");
            }
            else {
              $('.workEx').hide("slow");
              $('.default').show("slow");
            }
        }

        else if (f === 'programing') {


            if ($('.workEx').is(':hidden')) {
                $('.workEx').show("slow");
                  $('.coverLetterDiv').hide("slow");
            }
            else {
              $('.workEx').hide("slow");
              $('.default').show("slow");
            }
        }



        else if (f === 'coverLetter') {


          if ($('.coverLetterDiv').is(':hidden')) {
              $('.coverLetterDiv').show("slow");
              $('.personalInfo').hide("slow");
                $('.workEx').hide();
              console.log("pre");
          }
          else {
            $('.coverLetterDiv').hide("slow");
            $('.default').show("slow");
          }
        }


        else if (f === 'reference') {


            if ($('.coverLetterDiv').is(':hidden')) {
                $('.coverLetterDiv').show("slow");
                $('.personalInfo').hide("slow");
                  $('.workEx').hide();
                console.log("pre");
            }
            else {
              $('.coverLetterDiv').hide("slow");
              $('.default').show("slow");
            }
        }



      });


});
