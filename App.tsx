/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
/*import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
*/

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fruit = () => {
    console.warn('Function called');
  };

  const users = [
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 1,
      name: 'apple',
    },
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{marginBottom: 100}}>
        <Text style={{fontSize: 25}}>Map Function</Text>

        <ScrollView>
          {users.map(item => (
            <Text style={styles.text}>{item.name}</Text>
          ))}
          <Text style={{fontSize: 30}}>Hello World</Text>
          <Text style={{fontSize: 25}}>Hello World</Text>
          <Text style={{fontSize: 20}}>Hello World</Text>
          <Button title="Press me" color={'blue'} onPress={fruit}></Button>

          <Text style={{fontSize: 25}}>FlatList</Text>
          <FlatList
            data={users}
            renderItem={({item}) => (
              <Text style={styles.text}>{item.name}</Text>
            )}
          />
          <Text style={{fontSize: 25}}>Grid</Text>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            {users.map(item => (
              <Text style={styles.grid}>{item.name}</Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  grid: {
    fontSize: 15,
    color: '#fff',
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    fontSize: 15,
    color: '#fff',
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
