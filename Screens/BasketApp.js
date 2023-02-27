import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { connect } from 'react-redux';
import ButtonIcon from '../Components/ButtonIcon';
import Spacer from '../Components/Spacer';
import { addBasket } from '../redux/basketSlice';

const BasketApp = (basketList, addBasket, ...props) => {
    const [basket, setBasket]=useState('');
    
    const handleAddBasket = () => {
        console.warn('handleAddBasket: ');
        console.log({ basket });
        addBasket({ basket })
        setBasket('')
      }
    return (    <View style={styles.container}>
        <Card title="Card Title">
          <Text style={styles.paragraph}>ToDo App with React Native and Redux</Text>
        </Card>
        <Spacer />
        <Card>
          <Card.Content>
            <Title>Add ToDo Here</Title>
  
            <TextInput
              mode="outlined"
              label="سبد خرید"
              value={basket}
              onChangeText={basket => setBasket(basket)}
            />
            <Spacer />
            <Button mode="contained" onPress={handleAddBasket}>
              اضافه کردن به سبد خرید
            </Button>
          </Card.Content>
        </Card>
        <Spacer />
        <FlatList
          data={basketList}
          keyExtractor={(item) => item.rdf}
          renderItem={({ item, index }) => {
            return (
              <>
                <Card>
                  <Card.Title title={`Task#${item.rdf}`}
                    left={(props) => <Icon name="tasks" size={24} color="black" />}
                    // right={(props) => <ButtonIcon iconName="close" color="red" onPress={() => addBasket(item.rdf)} />}
                  />
                  <Card.Content>
                    <Paragraph>{item.basket}</Paragraph>
                  </Card.Content>
                </Card>
                <Spacer />
              </>
            );
          }}
        />
        <Spacer />
      </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 10,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  const mapStateToProps = (state, myOwnProps) => {
    console.log('mapStateToProps basket: ');
    console.log(state);
    console.log(state.baskets.basketList);
    return {
        basketList: state.baskets.basketList,
    }
  }
  
  const mapDispatchToProps = {
    // ... normally is an object full of action creators
    addBasket,
    //deleteTodo,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(BasketApp);
