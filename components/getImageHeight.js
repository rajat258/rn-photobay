import getDimension from './getDimensions';

height = getDimension();

const getImageHeight = h => {
  if (typeof h === 'number') {
    if (height < 650) {
      return h;
    } else if (height < 700) {
      return h + 2;
    } else if (height < 750) {
      return h + 4;
    } else {
      return h + 6;
    }
  } else {
  }
};

export default getImageHeight;
