import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer zf5OEAXCt7kL86NV3gnPH-BMLkvdXVitQDb08qgeYzmbQhblC9NMN9xVDsuY-rtbvGmQc-IIqtKMeMDp0EUem_8PZUOM4DnMAkPbDYajCLTBZ-gVaFy0OyKLrNRoYHYx',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
