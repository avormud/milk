function check() {
  var checkBox = document.getElementById("checbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}
// Запускаем один раз при загрузке, чтобы выставить начальные цены
check();