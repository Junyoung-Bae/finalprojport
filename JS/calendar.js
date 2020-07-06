var today = new Date()
var date = new Date()

function beforemonth() {
  today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())
  build()
}

function nextmonth() {
  today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
  build()
}

function build() {
  var firstDate = new Date(today.getFullYear(), today.getMonth(), 1)
  var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  var caltable = document.getElementById("calendar")
  var yearmonth = document.getElementById("yearmonth")
  yearmonth.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월"

  if (today.getMonth() + 1 == 12) {
    before.innerHTML = today.getMonth() + "월"
    next.innerHTML = "1월"
  } else if (today.getMonth() + 1 == 1) {
    before.innerHTML = "12월"
    next.innerHTML = today.getMonth() + 2 + "월"
  } else {
    before.innerHTML = today.getMonth() + "월"
    next.innerHTML = today.getMonth() + 2 + "월"
  }

  while (caltable.rows.length > 2) {
    caltable.deleteRow(caltable.rows.length - 1)
  }
  var row = null
  row = caltable.insertRow()
  var cnt = 0

  for (i = 0; i < firstDate.getDay(); i++) {
    cell = row.insertCell()
    cnt = cnt + 1
  }

  for (i = 1; i <= lastDate.getDate(); i++) {
    cell = row.insertCell()
    cell.innerHTML = i
    cnt = cnt + 1
    if (cnt % 7 == 1) {
      cell.innerHTML = "<font color=#ff0000>" + i
    }
    if (cnt % 7 == 0) {
      cell.innerHTML = "<font color=#0000ff>" + i
      row = calendar.insertRow()
    }
    if (
      today.getFullYear() == date.getFullYear() &&
      today.getMonth() == date.getMonth() &&
      i == date.getDate()
    ) {
      cell.bgColor = "#76ff7d"
    }
  }
}
