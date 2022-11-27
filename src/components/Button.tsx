import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import colors from '../../styles/colors';

type Props = TouchableOpacityProps & {
  title?: string;
  widthNumber?: number
  icon?: any;
  color?: string;
  size?: number;
}

export function Button({ title, widthNumber, icon, size, color }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { width: widthNumber }]}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>
        {title}<Feather name={icon} size={size} color={color} />
      </Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 30,
  }
})