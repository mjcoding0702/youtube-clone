import axios from "axios";

export const fetchFromAPI = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: query,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '20',
      order: 'relevance'
    },
    headers: {
      'X-RapidAPI-Key': '7ca353ca3dmsh8f6917964701730p16d55cjsn4851586389f5',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
