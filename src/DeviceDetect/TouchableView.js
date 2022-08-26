import {isMobile, isTablet} from 'react-device-detect';

/**
 * TouchableView
 * @return {TouchableView}
 */
function TouchableView({children}) {
  return (isMobile || isTablet) ? children : null;
}

export default TouchableView;
