import {BASE_COLORS} from './Constants';
import {Colors} from './Models';

export const useColors = () => {
  const colors: Colors = {
    ...BASE_COLORS,
    primary: BASE_COLORS.blue,
    background: BASE_COLORS.white,
    font: BASE_COLORS.black,
    disabled: BASE_COLORS.gray,
  };

  return {colors};
};
