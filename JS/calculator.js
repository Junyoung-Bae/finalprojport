function add(char) {
  var display = document.getElementById("display")
  display.value = display.value + char
}

function calculate() {
  var display = document.getElementById("display")
  var result = eval(display.value)
  document.getElementById("result").value = result
  document.getElementById("history7").value = history6.value
  document.getElementById("history6").value = history5.value
  document.getElementById("history5").value = history4.value
  document.getElementById("history4").value = history3.value
  document.getElementById("history3").value = history2.value
  document.getElementById("history2").value = history1.value
  document.getElementById("history1").value = display.value + "=" + result
}

function reset() {
  document.getElementById("display").value = ""
  document.getElementById("result").value = ""
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1)
}
