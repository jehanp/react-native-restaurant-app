import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
    Authorization: 'Bearer l7RnhRuQ150sLZzwpfFeyzNgYPhGdh_byeIVOI8h8Ye9BrvKEnacVqEbNjsnOgSQNaH3ZOoqMWB_AdWq9QczmCCHK16aJFmMGNimondNJHbuSDkFPJcAGXGZqD3IYnYx'
   }
});