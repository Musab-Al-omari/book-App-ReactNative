import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Details from './component/Details';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#97B3D0FF',
    flex: 1,
    paddingTop: 20,
  },
  button: {
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#F0DA9F',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ImageContainer: {
    alignItems: 'center',
  },
  myImage: {
    borderRadius: 20,
    width: 250,
    height: 250,
  },

  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  textStyle: {
    color: '#fff',
    fontSize: 22,
  },
});

export default function ItemScreen({ route }) {
  let item = route.params.item;

  function onPress() {
    return;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.myImage}
            source={{
              uri: item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.smallThumbnail
                : 'https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-78-150x150.png',
            }}
          />
        </View>

        {/* ///////////////////// */}
        <Text>{item.volumeInfo.title} </Text>
        {/* ///////////////////// */}
        <Text numberOfLines={1} style={{ marginVertical: 5 }}>
          <Text style={styles.naming}>BookID:</Text>
          <Text style={styles.description}>{item.id}</Text>
        </Text>

        {/* ///////////////////// */}
        {item.volumeInfo.authors ? (
          <Text numberOfLines={3}>
            <Text style={styles.naming}>The Author:</Text>
            <Text style={styles.description}>
              {item.volumeInfo.authors.join(' && ')}
            </Text>
          </Text>
        ) : (
          <Text>
            <Text style={styles.naming}>The Author:</Text>
            <Text numberOfLines={3} style={styles.description}>
              unknown
            </Text>
          </Text>
        )}
        {/* ///////////////////// */}
        <Details dataName="publisher" data={item.volumeInfo.publisher} />
        <Details
          dataName="publishedDate"
          data={item.volumeInfo.publishedDate}
        />
        <Details dataName="description" data={item.volumeInfo.description} />
        <Details
          dataName="averageRating"
          data={item.volumeInfo.averageRating}
        />
        <Details dataName="ratingsCount" data={item.volumeInfo.ratingsCount} />
        <Text style={{ marginBottom: 50 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          dolorem cupiditate, asperiores veniam modi nulla expedita odio sed
          quas debitis nesciunt, minima vel, labore fugiat optio veritatis
          exercitationem? Voluptates, laudantium. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Magni quam odio reprehenderit cumque!
          Facere magnam sapiente, nam laboriosam nesciunt molestiae aliquid
          dolorum, consectetur minus aliquam ab aperiam vitae, maxime
          doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis impedit modi quia quos dignissimos mollitia autem
          architecto? Inventore, error! Sed soluta nesciunt dicta officia, ut
          ducimus. Accusamus voluptatem quo illo! mosab
        </Text>
      </ScrollView>
      {/* ///////////////////// */}

      <View style={styles.bottomView}>
        <Text style={styles.textStyle}>This is Bottom View.</Text>
      </View>

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
