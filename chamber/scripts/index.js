const url = "data/members.json";

const cards = document.querySelector("#cards");


async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);

    // randomly choose 3 businesses to display on the home page
    const shuffled = data.businesses
        .slice()
        .sort(() => Math.random() - 0.5);

    const randomThree = shuffled.slice(0, 3);
    displayBusinesses(randomThree);
}

getBusinessData();

const displayBusinesses = (businesses) => {
    businesses.forEach((business) => {
        // Create elements
        let card = document.createElement('section');
        let companyName = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let membershipLevel = document.createElement('p');
        let portrait = document.createElement('img');
        let websiteLink = document.createElement('a');

        // Company name
        companyName.textContent = business.company_name;

        // Additional information
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone: ${business.phone_number}`;
        membershipLevel.textContent = `Membership Level: ${business.members_level}`;

        // Image attributes
        portrait.setAttribute('src', business.img);
        portrait.setAttribute('alt', `Logo of ${business.company_name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '150');

        // Website link
        websiteLink.textContent = `Url: ${business.url}`;

        // Add elements to card
        card.appendChild(companyName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membershipLevel);
        card.appendChild(websiteLink);

        // Add card to page
        cards.appendChild(card);
    });
};
