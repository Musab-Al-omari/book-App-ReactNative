import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import Details from './component/Details';
import Bottom from './component/Bottom';
import { navigate } from '../App';
import SaveDataBase from './component/SaveDataBase';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#97B3D0FF',
    flex: 1,
  },

  ImageContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  myImage: {
    borderWidth: 2,
    borderColor: '#DFDCE5FF',
    borderRadius: 20,
    width: 250,
    height: 250,
  },
  titles: {
    textAlign: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  naming: { fontWeight: 'bold', marginVertical: 5 },
  description: {
    fontSize: 15,
  },
  spacing: {
    marginVertical: 10,
  },
  bottomView: {
    backgroundColor: '#DFDCE5FF',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 15,
    width: 80,
    backgroundColor: '#F0DA9F',
  },
  textStyle: {
    textAlign: 'center',
  },
  dataContainer: {
    backgroundColor: '#ABD1C9FF',
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#DFDCE5FF',
  },
});

export default function ItemScreen({ route }) {
  if (!route.params) {
    return <Text>no data</Text>;
  }
  let item = route.params.item;

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 50 }}>
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
        <Text style={styles.titles}>{item.volumeInfo.title} </Text>
        {/* ///////////////////// */}
        <View style={styles.dataContainer}>
          <Text numberOfLines={1} style={styles.spacing}>
            <Text style={styles.naming}>BookID:</Text>
            <Text style={styles.description}>{item.id}</Text>
          </Text>

          {/* ///////////////////// */}
          {item.volumeInfo.authors ? (
            <Text numberOfLines={3} style={styles.spacing}>
              <Text style={styles.naming}>The Author:</Text>
              <Text style={styles.description}>
                {item.volumeInfo.authors.join(' && ')}
              </Text>
            </Text>
          ) : (
            <Text>
              <Text style={styles.naming} style={styles.spacing}>
                The Author:
              </Text>
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
          <Details
            dataName="ratingsCount"
            data={item.volumeInfo.ratingsCount}
          />
        </View>
      </ScrollView>
      {/* ///////////////////// */}
      <View style={styles.bottomView}>
        <Bottom text="Buy" link={item.saleInfo.buyLink} />
        <SaveDataBase text="Save" item={item} />
        <Bottom text="Preview" link={item.volumeInfo.previewLink} />
      </View>
    </View>
  );
}
