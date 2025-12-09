
const submitBtn = document.getElementById("submitBtn");
if (submitBtn) submitBtn.addEventListener("click", submitEntry);

const closeBtn = document.getElementById("closeBtn");
if (closeBtn) closeBtn.addEventListener("click", closePage);

const phoneInput = document.getElementById("phone");
if (phoneInput) {
	phoneInput.addEventListener("input", function (e) {
		e.target.value = e.target.value.replace(/\D/g, '');
	});
}

function submitEntry() {
	let name = document.getElementById("name").value.trim();
	
	let phone = (document.getElementById("phone").value || '').replace(/\D/g, '');
	let purpose = document.getElementById("purpose").value;

	
	if (!phone || phone.length !== 10) {
		alert("Please enter a 10-digit phone number.");
		return;
	}

	
	if (phone[0] !== '0') {
		alert("Phone number must start with 0.");
		return;
	}

	let phonePattern = /^0\d{9}$/;
	if (!name || !purpose) {
		alert("Please fill all fields.");
		return;
	}

	
	if (!phonePattern.test(phone)) {
		alert("Phone number must be exactly 10 digits and start with 0.");
		return;
	}

	const phoneForSend = "'" + phone;

	fetch("https://script.google.com/macros/s/AKfycbz0euNA-BBOIBeE4MgwJaADYUKnxk8Yl9pqy60mZlyojdmoLxegpGeBPuk2hBkUcRjs/exec", {
		method: "POST",
		mode: "no-cors",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, phone: phoneForSend, purpose })
	});

	document.getElementById("form-box").style.display = "none";
	document.getElementById("success-box").style.display = "block";
}

function closePage() {
	window.open('', '_self').close();
	alert("Submission successful. You can now close this tab.");
}
