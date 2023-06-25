import {Dimensions} from 'react-native';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
export default function getDimension() {
  if (h < w) {
    return w;
  }
  return h;
}
