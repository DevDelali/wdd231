const params = new URLSearchParams(window.location.search);

const fields = {
    fname: document.querySelector("#thankyou-fname"),
    lname: document.querySelector("#thankyou-lname"),
    email: document.querySelector("#thankyou-email"),
    phone: document.querySelector("#thankyou-phone"),
    business: document.querySelector("#thankyou-business"),
    timestamp: document.querySelector("#thankyou-timestamp")
};

const setFieldValue = (element, value) => {
    if (!element) {
        return;
    }

    const cleanValue = value?.trim();
    element.textContent = cleanValue ? cleanValue : "Not provided";
};

setFieldValue(fields.fname, params.get("fname"));
setFieldValue(fields.lname, params.get("lname"));
setFieldValue(fields.email, params.get("email"));
setFieldValue(fields.phone, params.get("phone"));
setFieldValue(fields.business, params.get("business") || params.get("orgtitle"));

const submittedRaw = params.get("timestamp");
if (fields.timestamp) {
    if (submittedRaw) {
        const submittedDate = new Date(submittedRaw);
        fields.timestamp.textContent = Number.isNaN(submittedDate.getTime())
            ? submittedRaw
            : submittedDate.toLocaleString();
    } else {
        fields.timestamp.textContent = "Not provided";
    }
}
