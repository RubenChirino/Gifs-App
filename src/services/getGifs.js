const apiKey = 'OT19QDnxgNFiSXZOawHinHtw0PH0uFh2';

export default function getGifs( {keyword = 'dogs'} = {}){

    const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const result = data.map(array => {

          const { id, title } = array;

          const { url } = array.images.fixed_height_downsampled;

          return {id, title, url};
        })
      return result
    })
}