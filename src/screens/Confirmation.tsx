import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";
import { Button } from "../components/Button";


export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          🥰
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button widthNumber={231} title="Confirmar" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 32
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.heading,
    paddingVertical: 20,
  },
  footer: {
    marginTop: 10
  },
});