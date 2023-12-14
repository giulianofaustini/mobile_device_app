import React from 'react';
import { View, StyleSheet, Pressable , Text} from 'react-native';
import { Formik } from 'formik';
import {FormikTextInput} from './FormikTextInput';


export const SignIn = () => {
  console.log('hi from the space');

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <View style={styles.container} >
          <FormikTextInput name="username" placeholder="Username" style={styles.input} />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.input} />
          <Pressable onPress={handleSubmit}>
            <Text style={styles.button} color='textPrimary' >Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e4e8',
        padding: 20,
        marginTop: 20,
        border: 5,
        borderRadius: 5,
    },

    input: {
        backgroundColor: 'white',
        padding: 15,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
    },

    button: {
        color: 'white',
        backgroundColor: 'blue',
        padding: 5,
        marginTop: 20,
        borderRadius: 5,
        textAlign: 'center',

    },

});


