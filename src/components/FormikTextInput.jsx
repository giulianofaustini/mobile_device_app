import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import {TextInput} from './TextInput';
import { TextWithThemes} from '../components/TextWithThemes'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

export const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <TextWithThemes style={styles.errorText}>{meta.error}</TextWithThemes>}
    </>
  );
};

