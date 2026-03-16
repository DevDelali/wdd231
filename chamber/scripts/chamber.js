async function getBusinessData() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data.businesses);
        displayBusiness(data.businesses);
    } catch (error) {
        console.error('Error fetching business data:', error);
    }
}

const displayBusiness = (businesses) => {
    const cards = document.querySelector("#cards");
    businesses.forEach((business) => {
        // Create elements
        let card = document.createElement('section');
        let company_name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let image = document.createElement('img');
        let members_level = document.createElement('p');

        // Set content
        company_name.textContent = business.company_name;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone: ${business.phone_number}`;
        if (business.url) {
            url.textContent = 'Visit Website';
            url.href = business.url;
            url.target = '_blank';
        } else {
            url.style.display = 'none';
        }

        // Image attributes
        image.setAttribute('src', business.img);
        image.setAttribute('alt', `Logo of ${business.company_name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '150');

        // Membership Level
        members_level.textContent = `Membership Level: ${business.members_level}`;

        // Add elements to card
        card.appendChild(company_name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(members_level);
        card.appendChild(url);

        // Add card to page
        cards.appendChild(card);
    });
    getBusinessData();