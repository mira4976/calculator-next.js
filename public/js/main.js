let total = 0; //合計の値
let input = 0; //入力の値
let symnbol = "+"; //押された演算子
let numberIn = true //数字がディスプレイに入っているか？
let numberPush = false; //数字のボタンが押されたか？

//数字のボタンが押された時の処理
function addnumber(number) {
  if (numberIn == true) { //数字がディスプレイに入っている場合
    document.querySelector('textarea').value = ""; //ディスプレイの表示を消す
    numberIn = false; //数字はディスプレイに入っていない
  }
  document.querySelector('textarea').value += number; //ディスプレイに数字を表示させていく
  input = document.getElementById("display").value; //ディスプレイの表示から値を受けとりinputに入れる
  numberPush = true; //数字のボタンが押された
  ;
}


//演算子のボタンが押された時の処理
function addoperator(operator) {
  if (numberPush == true) {  //数字のボタンが押されている場合
    switch(symnbol){
      case '+': //+の場合
        input = parseFloat(input); //文字列を整数に変換
        total  = total + input; //計算を行う
        numberIn = true; //数字が入っている
        document.querySelector('textarea').value = Math.round(total *10)/10; //計算結果をディスプレイに表示する
        symnbol = operator; //+をsymbolに代入する
        break; //終了
      case '-':
        input = parseFloat(input);
        total = total - input;
        numberIn = true;
        document.querySelector('textarea').value = Math.round(total *10)/10;
        symnbol = operator;
        break;
      case '*':
        input = parseFloat(input);
        total = total * input;
        numberIn = true;
        document.querySelector('textarea').value = Math.round(total *10)/10;
        symnbol = operator;
        break;
      case '/':
        input = parseFloat(input);
        total = total / input;
        numberIn = true;
        document.querySelector('textarea').value = Math.round(total *10)/10;
        symnbol = operator;
        break;
      case '=':
        document.querySelector('textarea').value = Math.round(total *10)/10;
        numberIn = true;
        symnbol = "+";
    }    
  }
}

//ACボタンを押す
function allclear() {
  document.querySelector('textarea').value = 0; //ディスプレイの表示を消す
  input = 0; //現在入力している値を消す
  total = 0; //合計の値を初期化する
  numberIn = true; //数字がディスプレイに入っている
}