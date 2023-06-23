function dateTimeShow() {
  var datetime = new Date();

  let year = datetime.getFullYear();
  let month = datetime.getMonth() + 1;
  let day = datetime.getDate();
  let hour = datetime.getHours();
  let minute = datetime.getMinutes();
  let second = datetime.getSeconds();

  let datetimeview = year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分" + second + "秒";

  let obj = document.getElementById("datetime");
  obj.innerText = datetimeview;
}
