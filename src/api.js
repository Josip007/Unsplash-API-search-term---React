import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID sqKSkhEozXHv6gtALzfE14Gad3GDyv0UUFyADNM8GN8',
        },
        params: {
            query: term,
        }
    });
    
    return response.data.results;
};

export default searchImages;