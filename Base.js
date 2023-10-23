

// E-waste collection centers for each city
const collectionCenters = {
    Kolkata: [
        { name: "E-Waste Bazaar", description: "9A, Marquis St, Esplanade, Park Street area, Kolkata, West Bengal 700016", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770435ebffff%3A0xced2e0335087885d!2sE-Waste%20Bazaar!5e0!3m2!1sen!2sin!4v1695390030818!5m2!1sen!2sin" },
        { name: "Hulladek Recycling", description: "5, Deshpran Sasmal Rd, above Indian Overseas Bank, Charu Market, Tollygunge, Kolkata, West Bengal 700033", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270c900654d1b%3A0x2001339ff356acc0!2sHulladek%20Recycling!5e0!3m2!1sen!2sin!4v1695383141501!5m2!1sen!2sin"  },
        { name: "JS Pigments Pvt. Ltd.", description: "P-199/B, CIT Rd, Scheme VI-M, Kadapara, Phool Bagan, Kankurgachi, Kolkata, West Bengal 700054", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02767048223ac7%3A0x8b6e61dcf4022bc8!2sJ%20S%20Pigments%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1695383348220!5m2!1sen!2sin" },
        { name: "GREEN TECH", description: "P-199/B, CIT Rd, Scheme VI-M, Kadapara, Phool Bagan, Kankurgachi, Kolkata, West Bengal 700054", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772ce738d20d%3A0xd3707c1c0967382c!2sGREEN%20TECH!5e0!3m2!1sen!2sin!4v1695390641856!5m2!1sen!2sin" },
        { name: "Hindustan Recycling Pvt. Ltd.", description: "15, A K Md Siddique Ln, Esplanade, Taltala, Kolkata, West Bengal 700016", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e6c8be1d51%3A0xf4dfecf4036fb495!2sHindusthan%20Recycling%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1695390509359!5m2!1sen!2sin" },
        { name: "Avanzoe Recycling", description: "Munshidanga, Sardarpara, Bankra Kona Expressway Near Alhoda International School, near Lake Land Country Club, Howrah, West Bengal 711403", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.616308035761!2d88.26572337443405!3d22.593449532207543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027925b1399d41%3A0x76160dd3bd992431!2sAvanzoe%20Recycling!5e0!3m2!1sen!2sin!4v1695402981176!5m2!1sen!2sin" },
        { name: "Vital Waste", description: "11, Allenby Rd, Sreepally, Bhowanipore, Kolkata, West Bengal 700020", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.830862936687!2d88.34909064364373!3d22.535989001006968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027726786f5b23%3A0xf9bcaa726f8fb901!2sVital%20Waste!5e0!3m2!1sen!2sin!4v1695403459800!5m2!1sen!2sin" },
    ],
    Bangalore: [
        { name: "Ewaste Hub", description: "No 3. 191/42, Wilson Garden 10th Cross Bus Stop, Oppo Hombegowda Ground, Wilson Garden, Bengaluru, Karnataka 560027", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248892.06003886816!2d77.41640964332618!3d12.911678256907248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d5c2a02a8b%3A0x3ee93a976e021f6d!2sEwaste%20Hub!5e0!3m2!1sen!2sin!4v1695390901186!5m2!1sen!2sin" },
        { name: "Zolopik", description: "58, 22nd Main Rd, Marenahalli, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248892.06003886816!2d77.41640964332618!3d12.911678256907248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158fffed629d%3A0x72fe588ace506eb9!2sZolopik!5e0!3m2!1sen!2sin!4v1695391095472!5m2!1sen!2sin" },
        { name: "Bangalore Ewaste Recyle center(scrap pickup)", description: "154, 4th A Cross Road, Seethappa Layout, Chamundi Nagar, Bangalore, Bengaluru, Karnataka 560032", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248892.06003886816!2d77.41640964332618!3d12.911678256907248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171ba50c7bd3%3A0x4fc20a7682a35418!2sBangalore%20Ewaste%20Recyle%20center(scrap%20pickup)!5e0!3m2!1sen!2sin!4v1695391215027!5m2!1sen!2sin" },
        { name: "E- Parisaraa Private Limited", description: "No. B, 41/1, 3rd Stage, Maruthi Nagar, Peenya, Bengaluru, Karnataka 560058", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248785.74215368315!2d77.21265988671878!3d13.018010199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1dc5555555%3A0x1af5a9077298071f!2sE-%20Parisaraa%20Private%20Limited!5e0!3m2!1sen!2sin!4v1695391437616!5m2!1sen!2sin" },
        { name: "E Hasiru E Waste Recycling Company", description: "No 168/B, 7th Main Rd, Yeshwanthpur Suburb II Stage, Yesvanpur Surburb, Peenya, Bengaluru, Karnataka 560058", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248785.74215368315!2d77.21265988671878!3d13.018010199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d033e497db7%3A0xa608bee2a1586d4f!2sE%20Hasiru%20E%20Waste%20Recycling%20Company!5e0!3m2!1sen!2sin!4v1695391593560!5m2!1sen!2sin" }
    ],
    Delhi: [
        { name: "E Waste Recycle Hub", description: "BK-1/160, 1st Floor, Poorbi Shalimar Bag, Delhi 110088", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223957.48363232403!2d76.87991798671875!3d28.709512499999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0360bbce9e4d%3A0xbca176b05f893818!2sE%20Waste%20Recycle%20Hub!5e0!3m2!1sen!2sin!4v1695391989094!5m2!1sen!2sin" },
        { name: "E-Waste Recycling in India", description: "Aneja Complex, R-24, Rita Block, Shakarpur, New Delhi, Delhi 110092", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223957.48363232403!2d76.87991798671875!3d28.709512499999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2e0a83c5f1%3A0xe259834de1b13211!2sE-Waste%20Recycling%20in%20India!5e0!3m2!1sen!2sin!4v1695392093544!5m2!1sen!2sin" },
        { name: "E-Waste Recyclers, India", description: "Nirmal Villa, No. 14, Sitapuri, Dwarka, New Delhi, Delhi 110045", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224010.3299561306!2d76.93896950039064!3d28.68481800405749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1adb23f2fa31%3A0x4eaf34f63f559a4d!2sE%20Waste%20Recyclers%2C%20India!5e0!3m2!1sen!2sin!4v1695392807606!5m2!1sen!2sin" },
        { name: "World Green E Waste Recycling Management", description: "Sector 10, C Block, Sector - 106, Noida, Uttar Pradesh 201010", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224115.93507118244!2d77.00626076015624!3d28.635411541098936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f7acf410e7%3A0x85f5a2e71b2e614!2sWorld%20Green%20E%20Waste%20Recycling%20Management!5e0!3m2!1sen!2sin!4v1695392900693!5m2!1sen!2sin" },
        { name: "Greenzon E-waste Recycler Delhi", description: "F 509 Deepali Building Nehru Place New Delhi, New Delhi, Delhi 110019", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224115.93507118244!2d77.00626076015624!3d28.635411541098936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c56f7aaaab%3A0x4c23ce74c0070265!2sGreenzon%20E-waste%20Recycler%20Delhi!5e0!3m2!1sen!2sin!4v1695392991071!5m2!1sen!2sin" }
    ],
    Chennai: [
        { name: "Electronic Waste Company ( Virogreen India Pvt Ltd )", description: "LCR Centre, No 12/ 3, Thiruvallur nagar extension, Kolathur, Tamil Nadu 600099", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310631966!2d79.87933301385189!3d13.047985944435625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264f479ff601b%3A0x388d3a02b7dd14a4!2sElectronic%20Waste%20Company%20(%20Virogreen%20India%20Pvt%20Ltd%20)!5e0!3m2!1sen!2sin!4v1695393194735!5m2!1sen!2sin" },
        { name: "Crown-Tech Ewaste Solutions", description: "326, Dewan Sahib Garden St, Pudupet, Royapettah, Chennai, Tamil Nadu 600014", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310631966!2d79.87933301385189!3d13.047985944435625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e9a8f37b2a77f39%3A0xf08a395f945cc856!2sCrown-Tech%20Ewaste%20Solutions!5e0!3m2!1sen!2sin!4v1695393298037!5m2!1sen!2sin" },
        { name: "Skv E-waste Recycling Pvt. Ltd", description: "FIRST FLOOR, TIDEL Park, No:4, D Block, F1, Land Mark (Zercorp, SH 49A, Tharamani, Tamil Nadu 600113", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310631966!2d79.87933301385189!3d13.047985944435625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d007ca29cb5%3A0x663637d229f7e757!2sSkv%20E-waste%20Recycling%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1695393713110!5m2!1sen!2sin" },
        { name: "Center X", description: "Description of Center X", embedLink: "Embed Link X" },
        { name: "Center Y", description: "Description of Center Y", embedLink: "Embed Link Y" }
    ],
    Mumbai: [
        { name: "Center M1", description: "Description of Center M1", embedLink: "Embed Link M1" },
        { name: "Center M2", description: "Description of Center M2", embedLink: "Embed Link M2" },
        { name: "Center X", description: "Description of Center X", embedLink: "Embed Link X" },
        { name: "Center Y", description: "Description of Center Y", embedLink: "Embed Link Y" },
        { name: "Center M3", description: "Description of Center M3", embedLink: "Embed Link M3" }
    ]
};

// Function to fill the second dropdown with collection centers based on the selected city by the user
function populateCentersDropdown() {
    const citySelect = document.getElementById("citySelect");
    const centerSelect = document.getElementById("centerSelect");
    const selectedCity = citySelect.value;
    const collectionCentersList = collectionCenters[selectedCity];

    // Clearing the second dropdown
    centerSelect.innerHTML = '<option value="">Select a Collection Center</option>';

    if (collectionCentersList) {
        collectionCentersList.forEach(center => {
            const option = document.createElement("option");
            option.value = center.embedLink; // Using embed link as the value
            option.textContent = center.name;
            centerSelect.appendChild(option);
        });
    }
}

// Function to display the embedded map when a collection center is selected from the dropdown
function displayEmbeddedMap() {
    const centerSelect = document.getElementById("centerSelect");
    const selectedEmbedLink = centerSelect.value;
    const collectionCenterDetails = document.getElementById("collectionCenterDetails");

    if (selectedEmbedLink) {
        // Embed the selected map using an iframe element of the HTML
        const iframe = document.createElement("iframe");
        iframe.src = selectedEmbedLink;
        iframe.width = "480"; // Adjusting the width
        iframe.height = "360"; // Adjusting the height

        // Clear the previous map and displaying the new one based on user choice
        collectionCenterDetails.innerHTML = "";
        collectionCenterDetails.appendChild(iframe);
    }
    else {
        collectionCenterDetails.textContent = "Select a collection center to view details and an embedded map.";
    }
}

// Attaching an event listener to the city dropdown to trigger filling up of collection centers dropdown
const citySelect = document.getElementById("citySelect");
citySelect.addEventListener("change", populateCentersDropdown);

// Attaching an event listener to the collection center dropdown to display the embedded map
const centerSelect = document.getElementById("centerSelect");
centerSelect.addEventListener("change", displayEmbeddedMap);

// Initial call to fill collection centers dropdown
populateCentersDropdown();

