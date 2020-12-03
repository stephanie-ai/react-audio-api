const apiKey = '';

const ArtistSearchAPI = {
    
    searchYelp(artistid) {
        return fetch(`https://theaudiodb.com/api/v1/json/1/artist.php?i={artistid}`)
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                if(jsonResponse.artists) {
                    return jsonResponse.artists.map(((artist) => {
                        return {
                            name: artist.artists.strArtist,
                            // imageSrc: business.image_url,
                            // name: business.name,
                            // address: business.address,
                            // city: business.city,
                            // state: business.state,
                            // zipCode: business.zipCode,
                            // category: business.categories[0].title,
                            // rating: business.rating,
                            // reviewCount: business.reviewCount
                        }
                    }));
                }
            })
            
    }
}

export default ArtistSearchAPI;