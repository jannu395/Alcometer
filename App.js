import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState('0');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('m');
  const [promilles, setPromilles] = useState(0);


  function calculate() {
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let result;

    grams = grams - weight / 10 * time

    if (gender === 'm') {
      result = grams / (weight * 0.7)
    } else {
      result = grams / (weight * 0.6)
    }

    if (result < 0) {
      result = 0;
    }
    setPromilles(result);

  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput placeholder="Enter weight in kilograms" keyboardType="decimal-pad" value={weight} onChangeText={text => setWeight(text)}></TextInput>
      </View>

      <Text style={styles.dropdowntext}>Bottles</Text>
        <DropDownPicker items={[
          { label: '1 bottle', value: 1 },
          { label: '2 bottles', value: 2 },
          { label: '3 bottles', value: 3 },
          { label: '4 bottles', value: 4 },
          { label: '5 bottles', value: 5 },
        ]}
          containerStyle={{ height: 40 }}
          defaultValue={bottles}
          labelStyle={{ color: '#000' }}
          onChangeItem={item => setBottles(item.value)}
          >
        </DropDownPicker>

      <Text style={styles.dropdowntext}>Time</Text>
        <DropDownPicker style={styles.dropdown} items={[
          { label: '1 hours', value: 1 },
          { label: '2 hours', value: 2 },
          { label: '3 hours', value: 3 },
          { label: '4 hours', value: 4 },
          { label: '5 hours', value: 5 },
        ]}
          containerStyle={{ height: 40 }}
          defaultValue={time}
          labelStyle={{ color: '#000' }}
          onChangeItem={item => setTime(item.value)}
          >

        </DropDownPicker>

      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          radio_props={[
            { label: 'Male', value: 'm' },
            { label: 'Female', value: 'f'}
          ]}
          onPress={(value) => { setGender(value) }}
        >
        </RadioForm>
      </View>

      <View style={styles.field}>
        <Text>Promilles</Text>
        <Text>{promilles.toFixed(2)}</Text>
      </View>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 10,
  },
  field: {
    marginTop: 10,
  },
  dropdowntext: {
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 10,
    marginRight: 10,
  }

});