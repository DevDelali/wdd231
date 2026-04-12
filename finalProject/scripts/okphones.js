import { phones } from "../data/phones.mjs";

const phonesContainer = document.getElementById("phones");
const phoneList = phones?.[0]?.phones ?? [];

if (phonesContainer) {
    phoneList.forEach((phone) => {
        const phoneCard = document.createElement("div");
        phoneCard.className = "phone-card";
        phoneCard.innerHTML = `
            <img src="${phone.image}" alt="${phone.name}" loading="lazy">
            <h2>${phone.name}</h2>
            <p>RAM: ${phone.ram}</p>
            <p>Storage: ${phone.rom}</p>
            <p>Price: $${phone.price}</p>
            <button>Add to Cart</button>
        `;
        phonesContainer.appendChild(phoneCard);
    });
}