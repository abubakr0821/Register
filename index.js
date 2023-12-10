// function fizzBuzz(i){
// for(let i = 1; i < 100; i++){
//  if(i % 3 === 0, i % 5 === 0){
//   console.log('MagicSparkle');
//  }else if(i % 3 === 0){
//   console.log('Sehrli');
//  }else if(i % 5 === 0){
//   console.log('Sparkle');
//  }else{
//   console.log(i)
//  }
//  }
// }
// fizzBuzz(i);
// function startCountdown(seconds) {
//     let timer = setInterval(function() {
//       seconds--;
//       console.log(seconds);
//       if (seconds === 0) {
//         clearInterval(timer);
//         console.log("Время вышло!");
//       }
//     }, 1000);
//   }
// let randomNumber = Math.random() * 20;
// randomNumber = Math.floor(randomNumber);
// if(randomNumber < 5){
//    alert(randomNumber + " slabo")
// }else if(randomNumber > 10){
//    alert(randomNumber + " srednichok")
// }else if(randomNumber > 15){
//    alert(randomNumber +  " normik")
// }else if(randomNumber === 20){
//     alert(randomNumber +  " normik")
// }else{
//    alert(randomNumber + " xz")
// }


// function computerChoice() {
//     const choices = ["камень", "ножницы", "бумага"];
//     const randomIndex = Math.floor(Math.random() * 3);
//     return choices[randomIndex];
//   }
  
//   function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//       return "Ничья!";
//     } else if (
//       (userChoice === "камень" && computerChoice === "ножницы") ||
//       (userChoice === "ножницы" && computerChoice === "бумага") ||
//       (userChoice === "бумага" && computerChoice === "камень")
//     ) {
//       return "Вы победили!";
//     } else {
//       return "Компьютер победил!";
//     }
//   }
  
//   function playGame() {
//     const userChoice = prompt("Выберите: камень, ножницы, или бумагу?").toLowerCase();
//     if (userChoice !== 'камень' && userChoice !== 'ножницы' && userChoice !== 'бумага') {
//       alert("Ошибка! Выберите камень, ножницы или бумагу.");
//       return;
//     }
//     const computer = computerChoice();
//     alert("Компьютер выбрал: " + computer);
//     alert(determineWinner(userChoice, computer));
//   }
  
//   playGame();

// function sumOfArrayElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
  
//   const array = [3, 7, 2, 8, 5];
//   const sum = sumOfArrayElements(array);
//   console.log("Сумма элементов массива: " + sum);
