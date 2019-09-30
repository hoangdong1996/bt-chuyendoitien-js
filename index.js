function convert() {
    let amount = Number(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    let result = 0;
    if ( fromCurrency == "USD" && toCurrency == "VNĐ") {
        result = amount * 23000 + " VNĐ";
    }
    else
        if (fromCurrency == "VNĐ" && toCurrency == "USD") {
            result = amount/23000 + " VNĐ";
        }
        else {
            result = "Nhập lại";
        }
    console.log(result);
    document.getElementById("result").innerText = result;
}
