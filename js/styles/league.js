import {StyleSheet} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    // padding: moderateScale(10),
    
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    padding: moderateScale(10),
  },
});

export default styles;
