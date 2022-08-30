
const check = document.querySelector(".check");
const textarea = document.querySelector(".get-numbers textarea");
const serialNumber = document.querySelector(".serial-number");
const amoutNumber = document.querySelector(".amount-number");
const generateNumber = document.querySelector(".generate-number");
const dwnldNumber = document.querySelector(".download-txt-file");
const copyNumber = document.querySelector(".copy-numberlist");
const digit = document.querySelector(".digit");

const value1 = document.querySelector(".value-1");
const value2 = document.querySelector(".value-2");
const value3 = document.querySelector(".value-3");

function generateNumbers() {
  serialNumber.addEventListener("keyup", function () {
    let seValue = +serialNumber.value;
    let selength = serialNumber.value.length;

    value1.innerHTML = seValue;
    digit.innerHTML = selength;
  });
}



function getAmounts() {
  amoutNumber.addEventListener("keyup", function () {
    let amountValue = +amoutNumber.value;

    value2.innerHTML = amountValue;
  });
}


function generateNumberlist() {
  generateNumber.addEventListener("click", function () {
    let getNumSerial = +value1.innerHTML;
    let getNumAmount = +value2.innerHTML;
    let NumGenSerLast = getNumSerial + getNumAmount;

    let NumberArray = [];
    for (var i = getNumSerial; i <= NumGenSerLast; i++) {
      NumberArray.push(i);
    }

    textarea.innerHTML = NumberArray.join("\n");
    check.innerHTML = NumberArray.join("<br>");
    console.log(getNumSerial, getNumAmount, NumGenSerLast);
    console.log(NumberArray);
  });
}
generateNumbers();
getAmounts();
generateNumberlist();

copyNumber.addEventListener("click", function () {
  textarea.select();
  document.execCommand("Copy");
  // alert('Your Number are Successfully to Copyed Your ClipBolad!');
});

dwnldNumber.addEventListener("click", function () {
  alert('Are You Sure to Download Your (number.txt) file!');

  const blob = new Blob([textarea.value], { type: "text/plain" });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = 'number.txt';
  link.href = fileUrl;
  link.click();
  console.log(blob);
});