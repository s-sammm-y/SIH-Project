let userlocation;
const collectionCenters = {
    Kolkata: [
        { name: "E-Waste Bazaar", description: "9A, Marquis St, Esplanade, Park Street area, Kolkata, West Bengal 700016", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770435ebffff%3A0xced2e0335087885d!2sE-Waste%20Bazaar!5e0!3m2!1sen!2sin!4v1695390030818",
        lat: 22.556547160497995, long: 88.35572753721581 },
        { name: "Hulladek Recycling", description: "5, Deshpran Sasmal Rd, above Indian Overseas Bank, Charu Market, Tollygunge, Kolkata, West Bengal 700033", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270c900654d1b%3A0x2001339ff356acc0!2sHulladek%20Recycling!5e0!3m2!1sen!2sin!4v1695383141501",
        lat: 22.50747858527598, long: 88.34578645928971},
        { name: "JS Pigments Pvt. Ltd.", description: "P-199/B, CIT Rd, Scheme VI-M, Kadapara, Phool Bagan, Kankurgachi, Kolkata, West Bengal 700054", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02767048223ac7%3A0x8b6e61dcf4022bc8!2sJ%20S%20Pigments%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1695383348220",
        lat: 22.57866600974792, long: 88.3930212507073},
        { name: "GREEN TECH", description: "P-199/B, CIT Rd, Scheme VI-M, Kadapara, Phool Bagan, Kankurgachi, Kolkata, West Bengal 700054", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772ce738d20d%3A0xd3707c1c0967382c!2sGREEN%20TECH!5e0!3m2!1sen!2sin!4v1695390641856",
        lat: 22.55470524420141, long: 88.35774848139785},
        { name: "Hindustan Recycling Pvt. Ltd.", description: "15, A K Md Siddique Ln, Esplanade, Taltala, Kolkata, West Bengal 700016", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235809.74721365634!2d88.20707871403377!3d22.559373513279958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e6c8be1d51%3A0xf4dfecf4036fb495!2sHindusthan%20Recycling%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1695390509359",
        lat: 22.487940166082254, long: 88.38028316605002},
        { name: "Avanzoe Recycling", description: "Munshidanga, Sardarpara, Bankra Kona Expressway Near Alhoda International School, near Lake Land Country Club, Howrah, West Bengal 711403", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.616308035761!2d88.26572337443405!3d22.593449532207543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027925b1399d41%3A0x76160dd3bd992431!2sAvanzoe%20Recycling!5e0!3m2!1sen!2sin!4v1695402981176",
        lat: 22.5936724044769, long: 88.26827683721703},
        { name: "Vital Waste", description: "11, Allenby Rd, Sreepally, Bhowanipore, Kolkata, West Bengal 700020", embedLink: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.830862936687!2d88.34909064364373!3d22.535989001006968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027726786f5b23%3A0xf9bcaa726f8fb901!2sVital%20Waste!5e0!3m2!1sen!2sin!4v1695403459800",
        lat: 22.536371318338183, long: 88.35130709488797},
    ]
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            userlocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            updateTravelTime();
        },
        () => {
            console.error('Error getting user location.');
        }
    );
} else {
    console.error('Geolocation is not supported by this browser.');
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance.toFixed(2);
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function updateTravelTime() {
    const centersInKolkata = collectionCenters["Kolkata"];
    centersInKolkata.forEach(center => {
        const distance = calculateDistance(userlocation.lat, userlocation.lng, center.lat, center.long);
        const travelTimeText = `Approximate Distance from User's location: ${distance} km`;
        const travelTimeElement = document.getElementById(`${center.name.replace(/\s+/g, '-')}-travel-time`);
        if (travelTimeElement) {
            travelTimeElement.textContent = travelTimeText;
        }
    });
}

