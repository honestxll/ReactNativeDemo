import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 6,
    paddingTop: 6,
    flex: 1,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6,
    justifyContent: 'space-around',
  },
  itemHeader: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  itemMeta: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#b6b6b6',
    marginBottom: 6,
  },
  itemScore: {
    fontSize: 14,
  },
  itemText: {
    fontSize: 33,
    fontFamily: 'Helvetica Neue',
    padding: 30,
    fontWeight: '200',
    color: '#EB4E68',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#670b1b',
    margin: 6,
  },
  itemOne: {},
  itemTwo: {},
  itemThree: {},
  itemText: {
    fontSize: 33,
    fontFamily: 'Helvetica Neue',
    padding: 30,
    fontWeight: '200',
    color: '#EB4E68',
  },
  backgroundImage: {
    flex: 1,
  },
  description: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontWeight: '200',
    padding: 10,
    color: '#eae7ff',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
  },
  movieTitle: {
    fontSize: 33,
  },
  subContent: {
    fontSize: 16,
    paddingTop: 0,
  },
  homeScreen: {
    flex: 1,
    backgroundColor: '#eb4e69',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    fontSize: 30,
    color: '#fff',
  }
});

export { styles as default };
