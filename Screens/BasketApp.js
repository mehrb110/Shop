import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { connect } from 'react-redux';
import ButtonIcon from '../Components/ButtonIcon';
import Spacer from '../Components/Spacer';
import { addBasketItem } from '../redux/basketSlice';
import RnIncrementDecrementBtn from 'react-native-increment-decrement-button';
import { Value } from 'react-native-reanimated';

const BasketApp = ({ basketList, addBasketItem, ...props }) => {
  const [amount, setAmount] = useState(1);
  const [basket, setBasket] = useState(1);

  const handleAddBasketItem = () => {
    console.warn('handleAddBasket: ');
    console.log({ basket });
    addBasketItem({ basket })
    setBasket('')
  }
  const increment = () => {
    console.warn('increment Amount: ');
    console.log({ amount });
    setAmount(amount + 1);
  }
  const decrement = () => {
    console.warn('decrement Amount: ');
    console.log({ amount });
    setAmount(amount - 1);
  }
  return (<View style={styles.container}>
    <Card>
      <Card.Content>
        <Title>تعداد کالا</Title>
        <RnIncrementDecrementBtn
          minVal={0}
          minreq={1}
          max={10}
          val={1}
          disableControl={false}
          disabledColor={'#eeeeee'}
          activeColor={'#509e4b'}
          handleClick={(state) => console.log(state)}
          styleBtn={{ width: 100, height: 100 }}
          styleTextInput={{ width: 100, height: 100, backgroundColor: 'green' }}
          labelStyle={{ fontSize: 25, color: 'blue' }}
        />

        <ButtonIcon iconName="minus-circle" size={45} color="red" onPress={decrement} label="کاهش تعداد کالا" />
        <ButtonIcon iconName="plus-circle" size={45} color="green" onPress={increment} label="افزایش تعداد کالا" />
        <Spacer />
        <Button mode="contained" onPress={handleAddBasketItem}>
          اضافه کردن به سبد خرید
        </Button>
      </Card.Content>
    </Card>
    <Spacer />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
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
  addBasketItem,
  //deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketApp);
