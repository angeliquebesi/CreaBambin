import {isMobile, isTablet} from 'react-device-detect';

/**
 * UntouchableView
 * @return {UntouchableView}
 */
function UntouchableView({children}) {
  return (!isMobile && !isTablet) ? children : null;
}

export default UntouchableView;
