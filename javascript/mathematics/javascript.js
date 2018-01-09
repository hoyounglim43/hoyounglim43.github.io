
    // Multiplication

          var counter = 0;

          var checkAnswer = function(){
            var userInput1 = document.getElementById("userInput1").value;


            if (answer1 == Number(userInput1)) {
              document.getElementById("result1").innerHTML = "Correct!";
              document.getElementById("result1").style.color="#1cc154";
              counter += 1;
            }
            else {
              document.getElementById("result1").innerHTML = "Wrong Answer, correct answer = " + answer1;
              document.getElementById("result1").style.color="#f00039";
              counter = 0;
            }

          document.getElementById("counter1").innerHTML = counter;
          document.getElementById("userInput1").value = "";

          }

          var answer1;

          var createQuestion = function() {
            var number11 = Math.floor(Math.random() * 9 + 1);
            var number12 = Math.floor(Math.random() * 9 + 1);
            var question1 = number11 + " × " + number12 + " = ";

            document.getElementById('question1').innerHTML = question1;

            answer1 = number11 * number12;
          }

          createQuestion();

          var timeOutFunction = function() {
            document.getElementById("userInput1").disabled = true;
            document.getElementById("submitButton1").disabled = true;
            setTimeout(function() {
              document.getElementById("result1").innerHTML = "";
              createQuestion();
              document.getElementById("userInput1").disabled = false;
              document.getElementById("submitButton1").disabled = false;
              document.getElementById("userInput1").focus();
            },1500);
          }

          document.getElementById("submitButton1").addEventListener("click", function() {
            checkAnswer();
            // timeOutFunction();
            timeOutFunction();

          })

          document.getElementById("userInput1").addEventListener("keypress", function() {

            var key = event.keyCode;
            if (key == 13) {
              checkAnswer();
              timeOutFunction();
            }


          })

        // Addition

        var counter2 = 0;

        var answer2;

        var createQuestion2 = function() {
        var number21 = Math.floor(Math.random() * 100 + 1);
        var number22 = Math.floor(Math.random() * 100 + 1);
        var question2 = number21 + " + " + number22 + " = ";
        document.getElementById("question2").innerHTML = question2;

        answer2 = number21 + number22;
      }

      var checkAnswer2 = function(){
          var userInput2 = document.getElementById("userInput2").value;




          if (userInput2 == answer2) {
            document.getElementById("result2").innerHTML = "Correct!";
            document.getElementById("result2").style.color="#1cc154";
            counter2 += 1;
                    document.getElementById("counter2").innerHTML = counter2;
          }

          else {
            document.getElementById("result2").innerHTML = "Wrong Answer, correct answer = " + answer2;
            document.getElementById("result2").style.color="#f00039";
            counter2 = 0;
                    document.getElementById("counter2").innerHTML = counter2;
          }
        }


        var timeOutFunction2 = function() {
          document.getElementById("userInput2").disabled = true;
          document.getElementById("submitButton2").disabled = true;
          setTimeout(function() {
            document.getElementById("result2").innerHTML = "";
            document.getElementById("userInput2").value = "";
            createQuestion2();
            document.getElementById("userInput2").disabled = false;
            document.getElementById("submitButton2").disabled = false;
            document.getElementById("userInput2").focus();
          },1500);
        }

        document.getElementById("counter2").innerHTML = counter2;

        createQuestion2();

        document.getElementById("submitButton2").addEventListener("click", function() {
          checkAnswer2();
          timeOutFunction2();
        })

        document.getElementById("userInput2").addEventListener("keypress", function() {
          var key = event.keyCode;
          if (key == 13) {
            checkAnswer2();
            timeOutFunction2();
          }
        })


        // Subtraction

        var counter3 = 0;

        var number31;
        var number32;

        var createNumbers = function() {
        number31 = Math.floor(Math.random() * 100 + 1);
        number32 = Math.floor(Math.random() * 100 + 1);
      }

      var answer3;

      var createQuestion3 = function() {
        createNumbers();
        if (number31 > number32) {
          document.getElementById("question3").innerHTML = number31 + " - " + number32;
          answer3 = number31 - number32;

        }

        else {
          document.getElementById("question3").innerHTML = number32 + " - " + number31;
          answer3 = number32 - number31;
        }
      }

       var checkAnswer3 = function() {
         var userInput3 = document.getElementById("userInput3").value;

         if (answer3 == userInput3) {
           document.getElementById("result3").innerHTML = "Correct!";
           document.getElementById("result3").style.color="#1cc154";
           counter3 += 1;
           document.getElementById("counter3").innerHTML = counter3;
         }
         else {
           document.getElementById("result3").innerHTML = "Wrong Answer, correct Answer = " + answer3;
           document.getElementById("result3").style.color="#f00039";
           counter3 = 0;
           document.getElementById("counter3").innerHTML = counter3;
         }
       }

       var timeOutFunction3 = function() {
         document.getElementById("userInput3").disabled = true;
         document.getElementById("submitButton3").disabled = true;
         setTimeout(function() {
           document.getElementById("result3").innerHTML = "";
           document.getElementById("userInput3").value = "";
           createQuestion3();
           document.getElementById("userInput3").disabled = false;
           document.getElementById("submitButton3").disabled = false;
           document.getElementById("userInput3").focus();
         },1500);
       }


      createQuestion3()

      document.getElementById("submitButton3").addEventListener("click", function(){
        checkAnswer3();
        timeOutFunction3();
      })

      document.getElementById("userInput3").addEventListener("keypress", function(){
        var key = event.keyCode;
        if (key==13) {
          checkAnswer3();
          timeOutFunction3();
        }
      })
// Function Test
  // var function2;
  //
  // var function1 = function() {
  //   function2 = function() {
  //
  //   }
  //   function2()
  // }
  //
  // function2();
