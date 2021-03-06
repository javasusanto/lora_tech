import {StyleSheet, Dimensions} from 'react-native';
import {color, style} from './default';
import {moderateScale} from './UIScale';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    paddingVertical: moderateScale(15),
    height: 200,
    width: width,
    justifyContent: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: moderateScale(10),
    paddingVertical: moderateScale(15),
    backgroundColor: 'grey',
    marginVertical: moderateScale(10),
  },
  detail: {
    marginHorizontal: moderateScale(10),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  loadingRow: {
    flexDirection: 'row',
  },
  chartRow: {
    flex: 1,
    width: width,
  },
});

export default styles;
