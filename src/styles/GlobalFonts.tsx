import {createGlobalStyle} from "styled-components";

import NotoSansKRThin from './fonts/NotoSansKR-Thin.woff'
import NotoSansKRLight from './fonts/NotoSansKR-Light.woff'
import NotoSansKRRegular from './fonts/NotoSansKR-Regular.woff'
import NotoSansKRMedium from './fonts/NotoSansKR-Medium.woff'
import NotoSansKRBold from './fonts/NotoSansKR-Bold.woff'
import NotoSansKRBlack from './fonts/NotoSansKR-Black.woff'

export const GlobalFonts = createGlobalStyle`
  
  @font-face {
    font-family: 'NotoSansCJKkr';
    src: local('NotoSansCJKkr'), local('NotoSansCJKkr'),
    url(${NotoSansKRThin}) format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansCJKkr';
    src: local('NotoSansCJKkr'), local('NotoSansCJKkr'),
    url(${NotoSansKRLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansCJKkr';
    src: local('NotoSansCJKkr'), local('NotoSansCJKkr'),
    url(${NotoSansKRRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansCJKkr';
    src: local('NotoSansCJKkr'), local('NotoSansCJKkr'),
    url(${NotoSansKRMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansCJKkr';
    src: local('NotoSansCJKkr'), local('NotoSansCJKkr'),
    url(${NotoSansKRBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansCJKkr';
    src: local('NotoSansCJKkr'), local('NotoSansCJKkr'),
    url(${NotoSansKRBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
  }
`