import { View, Text } from 'react-native'
import {default as HomeSvgComponent} from '../components/svgs/footer/home';
import {default as AchievementSvgComponent} from '../components/svgs/footer/achievement';

import {default as Feedback1SvgComponent} from '../components/svgs/feedback/1';
import {default as Feedback2SvgComponent} from '../components/svgs/feedback/2';
import "../styles.css";

const HomeScreen = () => {
  return (
    <View>
        <Text className="text-red-500">Open up App.js to start working on your app!</Text>
        <HomeSvgComponent/>
        <AchievementSvgComponent/>
        <Feedback1SvgComponent color_primary='#FFE5A5'/>
        <Feedback2SvgComponent/>
    </View>
  )
}

export default HomeScreen