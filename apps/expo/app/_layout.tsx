import { DarkTheme, Theme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'



const JoanneTheme: Theme = {
  dark: false,
  colors: {
    primary: '#A2A3BB',
    background: '#F3CFC6',
    card: '#A2A3BB',
    text: '#4A5043',
    border: '#C9DBBA',
    notification: 'rgb(255, 59, 48)',
  },
};


export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <ThemeProvider value={JoanneTheme}>
        <Stack />
      </ThemeProvider>
    </Provider>
  )
}


