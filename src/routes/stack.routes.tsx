import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Confirmation } from '../screens/Confirmation';
import { UserIdentification } from '../screens/UserIdentification';
import { Wellcome } from '../screens/Wellcome';

import colors from '../../styles/colors';


const stackRoutes = createNativeStackNavigator();
const appRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: colors.white },
    }}
  >
    <stackRoutes.Screen
      name='Wellcome'
      component={Wellcome}

    />
    <stackRoutes.Screen
      name='UserIdentification'
      component={UserIdentification}

    />
    <stackRoutes.Screen
      name='Confirmation'
      component={Confirmation}

    />
  </stackRoutes.Navigator>
)

export default appRoutes;