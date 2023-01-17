var vehicleArr = [];
var distanceArr = [];
var timeArr = [];
var bilArr = [];
document.getElementById("tinhtien").addEventListener('click', function () {
  var distance = document.getElementById("distance").value * 1;
  var time = document.getElementById("time").value * 1;
  var vehicle = document.getElementsByClassName("vehicle");
  var vehicleUse = null
  for (var i = 0; i < vehicle.length; i++) {
    if (vehicle[i].checked) {
      vehicleUse = vehicle[i].value;
    }
    else {
      vehicleUse == null
    }
  }
  if (vehicleUse == null) {
    alert("ban chua chon phuong tien");


  }
  else if (distance == 0) {
    alert("ban chua nhap khoang cach");
  }
  else if (time == 0) {
    alert("ban chua nhap thoi gian cho");
  }
  else {

    /**
      * ham tinh tien 
      * @param {*} distance 
      * @param {*} time 
      * @returns 
      */
    function tinhTien(distance, time) {
      var bill;
      if (vehicleUse == "uberX") {
        bill = ((distance * 12000) - 4000) + (time * 2000)
      }
      else if (vehicleUse == "uberSUV") {
        bill = ((distance * 14000) - 5000) + (time * 3000)
      }
      else if (vehicleUse == "uberBlack") {
        bill = ((distance * 16000) - 6000) + (time * 4000)
      }
      return bill;
    };

    var bill = tinhTien(distance, time);
    alert("tinh tien thanh cong")
    vehicleArr.push(vehicleUse);
    distanceArr.push(distance);
    timeArr.push(time);
    bilArr.push(bill);
    console.log(vehicleArr);
    console.log(distanceArr);
    console.log(timeArr);
    console.log(bilArr);

  }
});
/**
 * In Hoa Don
 */
document.getElementById('inhoadon').addEventListener('click', function () {
  if (vehicleArr.length == 0 || distanceArr.length == 0 || timeArr.length == 0 || bilArr.length == 0) {
    alert("Ban chua tinh tien");
  }
  else {
    var contentHTML = "";
    for (var i = 0; i < vehicleArr.length; i++) {
      contentHTML += "<tr>";
      contentHTML += "<td>" + "Xe: "  + vehicleArr[i] + "</td>";
      contentHTML += "<td>" + distanceArr[i] + " Km" + "</td>";
      contentHTML += "<td>" + timeArr[i] + " Phut" + "</td>";
      contentHTML += "<td>" + bilArr[i] + " VND" + "</td>";
      contentHTML += "</tr>";

    }
    document.getElementById("txtBill").innerHTML = contentHTML;

    var totalHTML = ""; 
    var totalCost = 0;

    for (var i = 0; i < bilArr.length; i++) {
      totalCost += bilArr[i]
      totalHTML = "<td>" + "Tong tien: " + totalCost + "</td>"; 
    };
    document.getElementById("txtTotal").innerHTML = totalHTML;
  
  }



});