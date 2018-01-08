
    // Box 1

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
            setTimeout(function() {
              document.getElementById("result1").innerHTML = "";
              createQuestion();
              // document.getElementById("userInput1").disabled = true;
              // document.getElementById("submitButton1").disabled = true;
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

        // Box 2

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
          setTimeout(function() {
            document.getElementById("result2").innerHTML = "";
            document.getElementById("userInput2").value = "";
            createQuestion2();
            // document.getElementById("userInput1").disabled = true;
            // document.getElementById("submitButton1").disabled = true;
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
