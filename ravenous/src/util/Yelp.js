const apiKey = 'b4YxzXUS7_toPSRphA2pDY5ZCIWSrcahSbnjECxdV-IWLCdVm8j1e7G_zoHJZ3JaZczDEAJJQQ-gSxkMxYOvKd2IriAs6iS8-gUrJXaUpS_NHadYz9xKz3sK_491X3Yx'
const Yelp = {
    serchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.business) {
                return jsonResponse.business.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                });
            }
        });
        
    }
};

export default yelp; 