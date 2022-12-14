import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';

export function Wellcome() {
  const { navigate } = useNavigation();

  function handleStart() {
    navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>

        <Image
          source={wateringImg} style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não se esuqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button
          widthNumber={56}
          icon="chevron-right"
          color={colors.white}
          size={32}
          onPress={handleStart}
        />
      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  }
})