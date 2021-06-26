import { PixelRatio, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100
  );
};

export default {
  basePadding: 20,
  baseMargin: 20,
  baseRadius: 20,
  widthPercentageToDP,
  heightPercentageToDP,
};