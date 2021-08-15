import React, { useState } from 'react';
import { Text } from 'react-native';
import SearchBar from './component/SearchBar';
// import Yelp from './api/Yelp';
import axios from 'axios';
export default function HomeScreen() {
  const [term, setTerm] = useState('');
  console.log(term);

  const onSubmit = function () {
    axios
      .get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          Authorization:
            'Bearer zf5OEAXCt7kL86NV3gnPH-BMLkvdXVitQDb08qgeYzmbQhblC9NMN9xVDsuY-rtbvGmQc-IIqtKMeMDp0EUem_8PZUOM4DnMAkPbDYajCLTBZ-gVaFy0OyKLrNRoYHYx',
        },
        params: { location: 'jordan' },
      })
      .then((data) => {
        console.log(data);
      });
    // let res = await Yelp.get('/search', {
    //   params: { location: 'jordan' },
    // });
  };
  return (
    <>
      <SearchBar
        term={term}
        onSubmit={onSubmit}
        onChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>hello </Text>
    </>
  );
}
