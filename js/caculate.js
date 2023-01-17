var vehicleValue;
var distanceValue = 0;
var timeValue = 0;
var bilValue = 0;
var firstKm = 0;
var firstPrice = 0;
var timePrice = 0;
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
      var firstKm = 0;
      var firstPrice = 0;
      var timePrice = 0;
      var bill;
      if (vehicleUse == "uberX") {
        bill = ((distance * 12000) - 4000) + (time * 2000);
        firstKm = 8000;
        firstPrice = 12000;
        timePrice = 2000;
      }
      else if (vehicleUse == "uberSUV") {
        bill = ((distance * 14000) - 5000) + (time * 3000);
        firstKm = 9000;
        firstPrice = 14000;
        timePrice = 3000;

      }
      else if (vehicleUse == "uberBlack") {
        bill = ((distance * 16000) - 6000) + (time * 4000);
        firstKm = 10000;
        firstPrice = 16000;
        timePrice = 4000;
      }
      return { bill, firstKm, firstPrice, timePrice };
    };



    var bill = tinhTien(distance,time)
    bilValue = bill.bill;
    firstKm = bill.firstKm;
    firstPrice = bill.firstPrice;
    timePrice = bill.timePrice;
    vehicleValue = vehicleUse;
    distanceValue = distance;
    timeValue = time
    document.getElementById("divThanhTien").style = "display:block";
    document.getElementById("xuatTien").innerHTML = bilValue;
  }
});
/**
 * In Hoa Don
 */
document.getElementById('inhoadon').addEventListener('click', function () {
  if (bilValue == 0) {
    alert("Ban chua tinh tien");
  }
  else {
    var contentHTML = "";
    contentHTML =
      `
    <tr>
      <td>${vehicleValue}</td>
      <td> 1 km </td>
      <td>${firstKm}</td>
      <td>${firstKm}</td>
    </tr>
    <tr>
      <td>${vehicleValue}</td>
      <td>${distanceValue-1}</td>
      <td>${firstPrice}</td>
      <td>${firstPrice * (distanceValue-1)}</td>
    </tr>
    <tr>
      <td> Thời gian chờ </td>
      <td>${timeValue}</td>
      <td>${timePrice}</td>
      <td>${timePrice * timeValue}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td  colspan="3" class"text-right">${bilValue}</td>
    </tr>
    `
    document.getElementById("txtBill").innerHTML = contentHTML;



  }



});