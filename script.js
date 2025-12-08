document.getElementById("submitBtn").addEventListener("click", submitEntry);
document.getElementById("closeBtn").addEventListener("click", closePage);

function submitEntry() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let purpose = document.getElementById("purpose").value;

    if (!name || !phone || !purpose) {
        alert("Please fill all fields.");
        return;
    }

    // Send data to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbz0euNA-BBOIBeE4MgwJaADYUKnxk8Yl9pqy60mZlyojdmoLxegpGeBPuk2hBkUcRjs/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, purpose })
    });

   
    document.getElementById("form-box").style.display = "none";
    document.getElementById("success-box").style.display = "block";
}

function closePage() {
    window.open('', '_self').close(); 

   
    alert("Submission successful. You can now close this tab.");
}
