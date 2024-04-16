function generateGoogleMapsLink(latitude, longitude) {
    const baseUrl = "https://www.google.com/maps";
    const queryParams = new URLSearchParams({
      q: `${latitude},${longitude}`,
      z: "15" // Optional: Set the zoom level
    });
  
    return `${baseUrl}?${queryParams.toString()}`;
  }
  // Example usage:
  const latitude = 22.478848; // Example latitude
  const longitude = 88.3654656; // Example longitude
  const googleMapsLink = generateGoogleMapsLink(latitude, longitude);
  console.log(googleMapsLink);