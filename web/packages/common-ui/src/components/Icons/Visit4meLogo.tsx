import React from 'react';

import { colors } from '../../styles/colors';

interface PropsType {
  color?: string;
}

export function Visit4meLogo({ color = colors.primary }: PropsType) {
  return (
    <svg width="202px" height="50px" viewBox="0 0 202 50" version="1.1">
      <g fill="none" stroke="none" stroke-width="1" fill-rule="evenodd">
        <path
          fill={color}
          fill-rule="nonzero"
          d="M40.656,24.672 C41.4840041,24.672 42.0869981,24.8519982 42.465,25.212 C42.8430019,25.5720018 43.032,26.0399971 43.032,26.616 C43.032,27.5520047 42.7530028,28.3799964 42.195,29.1 C41.6369972,29.8200036 40.7640059,30.1979998 39.576,30.234 C36.6959856,30.3060004 34.1400112,30.0900025 31.908,29.586 C29.3519872,34.9500268 26.2650181,39.4049823 22.647,42.951 C19.0289819,46.4970177 15.4020182,48.27 11.766,48.27 C8.02198128,48.27 5.23200918,46.0920218 3.396,41.736 C1.55999082,37.3799782 0.642,31.4940371 0.642,24.078 C0.642,17.7419683 1.0919955,12.0540252 1.992,7.014 C2.31600162,5.14199064 2.77499703,3.87300333 3.369,3.207 C3.96300297,2.54099667 4.9799928,2.208 6.42,2.208 C8.79601188,2.208 9.984,3.23398974 9.984,5.286 C9.984,5.50200108 9.94800036,5.89799712 9.876,6.474 C8.7959946,12.9540324 8.256,18.8219737 8.256,24.078 C8.256,29.5860275 8.71499541,33.7709857 9.633,36.633 C10.5510046,39.4950143 11.9279908,40.926 13.764,40.926 C15.6360094,40.926 17.669989,39.630013 19.866,37.038 C22.062011,34.445987 24.0779908,31.1880196 25.914,27.264 C23.717989,25.8959932 22.0620056,24.1230109 20.946,21.945 C19.8299944,19.7669891 19.272,17.2560142 19.272,14.412 C19.272,11.5679858 19.7129956,9.16500981 20.595,7.203 C21.4770044,5.24099019 22.6829923,3.77400486 24.213,2.802 C25.7430076,1.82999514 27.4439906,1.344 29.316,1.344 C31.6200115,1.344 33.4469933,2.17199172 34.797,3.828 C36.1470067,5.48400828 36.822,7.7519856 36.822,10.632 C36.822,14.7720207 35.922009,19.2899755 34.122,24.186 C36.0300095,24.5100016 38.2079878,24.672 40.656,24.672 Z M24.726,14.034 C24.726,17.5620176 25.8599887,20.1719915 28.128,21.864 C29.532007,17.8319798 30.234,14.5020131 30.234,11.874 C30.234,10.3619924 30.036002,9.25500351 29.64,8.553 C29.243998,7.85099649 28.7040034,7.5 28.02,7.5 C27.0479951,7.5 26.2560031,8.06699433 25.644,9.201 C25.0319969,10.3350057 24.726,11.9459896 24.726,14.034 Z M44.868,19.272 C43.3559924,19.272 42.2220038,18.9210035 41.466,18.219 C40.7099962,17.5169965 40.332,16.5360063 40.332,15.276 C40.332,14.0159937 40.826995,12.9630042 41.817,12.117 C42.807005,11.2709958 44.0399926,10.848 45.516,10.848 C46.8480067,10.848 47.9279959,11.1719968 48.756,11.82 C49.5840041,12.4680032 49.998,13.3859941 49.998,14.574 C49.998,16.0140072 49.5300047,17.1569958 48.594,18.003 C47.6579953,18.8490042 46.4160077,19.272 44.868,19.272 Z M44.436,48.27 C42.0959883,48.27 40.3950053,47.4420083 39.333,45.786 C38.2709947,44.1299917 37.74,41.9340137 37.74,39.198 C37.74,37.5779919 37.9469979,35.4990127 38.361,32.961 C38.7750021,30.4229873 39.3059968,28.056011 39.954,25.86 C40.2780016,24.7079942 40.7099973,23.9160022 41.25,23.484 C41.7900027,23.0519978 42.6539941,22.836 43.842,22.836 C45.6780092,22.836 46.596,23.4479939 46.596,24.672 C46.596,25.5720045 46.2540034,27.6599836 45.57,30.936 C44.7059957,34.8960198 44.274,37.577993 44.274,38.982 C44.274,40.0620054 44.4179986,40.8899971 44.706,41.466 C44.9940014,42.0420029 45.4799966,42.33 46.164,42.33 C46.8120032,42.33 47.6219951,41.8800045 48.594,40.98 C49.5660049,40.0799955 50.8619919,38.6580097 52.482,36.714 C52.9140022,36.2099975 53.3999973,35.958 53.94,35.958 C54.4080023,35.958 54.7769986,36.1739978 55.047,36.606 C55.3170013,37.0380022 55.452,37.6319962 55.452,38.388 C55.452,39.8280072 55.1100034,40.943996 54.426,41.736 C50.8619822,46.0920218 47.5320155,48.27 44.436,48.27 Z M61.122,49.458 C59.2499906,49.458 57.8190049,49.0260043 56.829,48.162 C55.838995,47.2979957 55.344,46.3260054 55.344,45.246 C55.344,44.3099953 55.6859966,43.5000034 56.37,42.816 C57.0540034,42.1319966 58.0619933,41.79 59.394,41.79 C59.8620023,41.79 60.4109969,41.8349996 61.041,41.925 C61.6710032,42.0150005 62.1479984,42.0779998 62.472,42.114 C62.4359998,41.1779953 62.2290019,40.2960041 61.851,39.468 C61.4729981,38.6399959 60.9960029,37.8390039 60.42,37.065 C59.8439971,36.2909961 59.3040025,35.6160029 58.8,35.04 C57.6839944,37.1640106 56.5770055,38.927993 55.479,40.332 C54.3809945,41.736007 53.1840065,43.0679937 51.888,44.328 C51.2399968,44.9760032 50.5560036,45.3 49.836,45.3 C49.2599971,45.3 48.7920018,45.0930021 48.432,44.679 C48.0719982,44.2649979 47.892,43.7520031 47.892,43.14 C47.892,42.4199964 48.1439975,41.7540031 48.648,41.142 L49.35,40.278 C51.3300099,37.8299878 52.823995,35.8140079 53.832,34.23 C54.4440031,33.1859948 55.1639959,31.7910087 55.992,30.045 C56.8200041,28.2989913 57.629996,26.4900094 58.422,24.618 C59.1060034,23.0339921 60.5279892,22.242 62.688,22.242 C63.696005,22.242 64.397998,22.3319991 64.794,22.512 C65.190002,22.6920009 65.388,22.979998 65.388,23.376 C65.388,23.5920011 65.3160007,23.9339977 65.172,24.402 C65.0279993,24.8700023 64.8300013,25.3379977 64.578,25.806 C63.9299968,27.1020065 63.606,28.1999955 63.606,29.1 C63.606,29.6400027 63.7949981,30.2339968 64.173,30.882 C64.5510019,31.5300032 65.135996,32.3399951 65.928,33.312 C67.0800058,34.8240076 67.952997,36.1109947 68.547,37.173 C69.141003,38.2350053 69.438,39.3959937 69.438,40.656 C69.438,41.0160018 69.4020004,41.5199968 69.33,42.168 C71.0940088,41.4839966 73.1639881,39.6660148 75.54,36.714 C75.9720022,36.2099975 76.4579973,35.958 76.998,35.958 C77.4660023,35.958 77.8349986,36.1739978 78.105,36.606 C78.3750013,37.0380022 78.51,37.6319962 78.51,38.388 C78.51,39.7560068 78.1680034,40.8719957 77.484,41.736 C75.683991,43.9680112 73.9650082,45.488996 72.327,46.299 C70.6889918,47.1090041 68.6640121,47.5499996 66.252,47.622 C64.8119928,48.8460061 63.1020099,49.458 61.122,49.458 Z M81.21,19.272 C79.6979924,19.272 78.5640038,18.9210035 77.808,18.219 C77.0519962,17.5169965 76.674,16.5360063 76.674,15.276 C76.674,14.0159937 77.168995,12.9630042 78.159,12.117 C79.1490049,11.2709958 80.3819926,10.848 81.858,10.848 C83.1900067,10.848 84.2699959,11.1719968 85.098,11.82 C85.9260041,12.4680032 86.34,13.3859941 86.34,14.574 C86.34,16.0140072 85.8720047,17.1569958 84.936,18.003 C83.9999953,18.8490042 82.7580077,19.272 81.21,19.272 Z M80.778,48.27 C78.4379883,48.27 76.7370053,47.4420083 75.675,45.786 C74.6129947,44.1299917 74.082,41.9340137 74.082,39.198 C74.082,37.5779919 74.2889979,35.4990127 74.703,32.961 C75.1170021,30.4229873 75.6479968,28.056011 76.296,25.86 C76.6200016,24.7079942 77.0519973,23.9160022 77.592,23.484 C78.1320027,23.0519978 78.9959941,22.836 80.184,22.836 C82.0200092,22.836 82.938,23.4479939 82.938,24.672 C82.938,25.5720045 82.5960034,27.6599836 81.912,30.936 C81.0479957,34.8960198 80.616,37.577993 80.616,38.982 C80.616,40.0620054 80.7599986,40.8899971 81.048,41.466 C81.3360014,42.0420029 81.8219966,42.33 82.506,42.33 C83.1540032,42.33 83.9639951,41.8800045 84.936,40.98 C85.9080049,40.0799955 87.2039919,38.6580097 88.824,36.714 C89.2560022,36.2099975 89.7419973,35.958 90.282,35.958 C90.7500023,35.958 91.1189986,36.1739978 91.389,36.606 C91.6590013,37.0380022 91.794,37.6319962 91.794,38.388 C91.794,39.8280072 91.4520034,40.943996 90.768,41.736 C87.2039822,46.0920218 83.8740155,48.27 80.778,48.27 Z M96.33,27.966 C96.2579996,29.766009 96.222,31.169995 96.222,32.178 C96.222,34.770013 96.3569987,36.7949927 96.627,38.253 C96.8970014,39.7110073 97.3469968,40.7549968 97.977,41.385 C98.6070031,42.0150031 99.4799944,42.33 100.596,42.33 C101.172003,42.33 101.855996,42.1500018 102.648,41.79 C103.440004,41.4299982 104.159997,40.9620029 104.808,40.386 C105.204002,40.0259982 105.599998,39.846 105.996,39.846 C106.428002,39.846 106.778999,40.0889976 107.049,40.575 C107.319001,41.0610024 107.454,41.6459966 107.454,42.33 C107.454,43.0140034 107.319001,43.6799968 107.049,44.328 C106.778999,44.9760032 106.374003,45.5159978 105.834,45.948 C103.961991,47.4960077 101.838012,48.27 99.462,48.27 C96.0419829,48.27 93.5400079,46.8390143 91.956,43.977 C90.3719921,41.1149857 89.58,37.380023 89.58,32.772 C89.58,31.1879921 89.6339995,29.5860081 89.742,27.966 L87.636,27.966 C86.5559946,27.966 85.8270019,27.768002 85.449,27.372 C85.0709981,26.975998 84.882,26.3460043 84.882,25.482 C84.882,23.4659899 85.6919919,22.458 87.312,22.458 L90.39,22.458 C91.0020031,18.4979802 91.9379937,14.8800164 93.198,11.604 C94.4580063,8.32798362 95.9789911,5.71800972 97.761,3.774 C99.5430089,1.82999028 101.45999,0.858 103.512,0.858 C105.024008,0.858 106.211996,1.52399334 107.076,2.856 C107.940004,4.18800666 108.372,5.86198992 108.372,7.878 C108.372,13.4580279 106.032023,18.3179793 101.352,22.458 L107.4,22.458 C107.976003,22.458 108.389999,22.5839987 108.642,22.836 C108.894001,23.0880013 109.02,23.5559966 109.02,24.24 C109.02,26.7240124 106.98602,27.966 102.918,27.966 L96.33,27.966 Z M102.054,6.042 C101.513997,6.042 100.911003,6.71699325 100.245,8.067 C99.5789967,9.41700675 98.949003,11.288988 98.355,13.683 C97.760997,16.077012 97.266002,18.7319854 96.87,21.648 C98.9940106,19.8119908 100.586995,17.7510114 101.649,15.465 C102.711005,13.1789886 103.242,11.1000094 103.242,9.228 C103.242,7.10398938 102.846004,6.042 102.054,6.042 Z M134.076,35.85 C135.98401,35.85 136.938,36.6599919 136.938,38.28 C136.938,39.5760065 136.578004,40.4759975 135.858,40.98 C135.137996,41.4840025 134.004008,41.736 132.456,41.736 L131.322,41.736 L131.106,44.598 C130.997999,46.2540083 130.647003,47.3699971 130.053,47.946 C129.458997,48.5220029 128.496007,48.81 127.164,48.81 C125.25599,48.81 124.302,47.6400117 124.302,45.3 C124.302,44.903998 124.32,44.5980011 124.356,44.382 L124.626,41.736 C119.405974,41.736 115.446013,41.7180002 112.746,41.682 C111.953996,41.682 111.252003,41.3220036 110.64,40.602 C110.027997,39.8819964 109.722,38.9460058 109.722,37.794 C109.722,37.1099966 109.847999,36.3900038 110.1,35.634 C111.684008,31.025977 114.059984,25.7880293 117.228,19.92 C117.912003,18.6599937 118.604996,17.7690026 119.307,17.247 C120.009004,16.7249974 121.097993,16.464 122.574,16.464 C123.366004,16.464 123.968998,16.6439982 124.383,17.004 C124.797002,17.3640018 125.004,17.8319971 125.004,18.408 C125.004,19.0200031 124.824002,19.6319969 124.464,20.244 C120.935982,26.6880322 118.452007,31.8899802 117.012,35.85 L125.328,35.85 C125.760002,32.5019833 126.353996,29.3160151 127.11,26.292 C127.398001,25.1759944 127.865997,24.321003 128.514,23.727 C129.162003,23.132997 130.061994,22.836 131.214,22.836 C133.050009,22.836 133.968,23.6279921 133.968,25.212 C133.968,25.6800023 133.932,26.0399987 133.86,26.292 C133.211997,29.3520153 132.636003,32.5379834 132.132,35.85 L134.076,35.85 Z M144.714,48.27 C143.345993,48.27 142.383003,47.5500072 141.825,46.11 C141.266997,44.6699928 140.988,42.3660158 140.988,39.198 C140.988,34.5179766 141.653993,30.0720211 142.986,25.86 C143.310002,24.8159948 143.840996,24.0510024 144.579,23.565 C145.317004,23.0789976 146.351993,22.836 147.684,22.836 C148.404004,22.836 148.907999,22.9259991 149.196,23.106 C149.484001,23.2860009 149.628,23.6279975 149.628,24.132 C149.628,24.7080029 149.358003,26.0039899 148.818,28.02 C148.457998,29.4600072 148.170001,30.7109947 147.954,31.773 C147.737999,32.8350053 147.558001,34.1579921 147.414,35.742 C148.386005,32.933986 149.546993,30.5580097 150.897,28.614 C152.247007,26.6699903 153.632993,25.2210048 155.055,24.267 C156.477007,23.3129952 157.817994,22.836 159.078,22.836 C160.338006,22.836 161.228997,23.1239971 161.751,23.7 C162.273003,24.2760029 162.534,25.1579941 162.534,26.346 C162.534,27.4980058 162.192003,29.5859849 161.508,32.61 C161.219999,33.9060065 161.022001,34.8779968 160.914,35.526 C162.714009,31.0979779 164.711989,27.8760101 166.908,25.86 C169.104011,23.8439899 171.15599,22.836 173.064,22.836 C175.404012,22.836 176.574,24.0059883 176.574,26.346 C176.574,27.750007 176.178004,30.2879816 175.386,33.96 C174.701997,37.0920157 174.36,39.161995 174.36,40.17 C174.36,41.6100072 174.881995,42.33 175.926,42.33 C176.646004,42.33 177.500995,41.8890044 178.491,41.007 C179.481005,40.1249956 180.803992,38.6940099 182.46,36.714 C182.892002,36.2099975 183.377997,35.958 183.918,35.958 C184.386002,35.958 184.754999,36.1739978 185.025,36.606 C185.295001,37.0380022 185.43,37.6319962 185.43,38.388 C185.43,39.8280072 185.088003,40.943996 184.404,41.736 C182.855992,43.6440095 181.191009,45.2099939 179.409,46.434 C177.626991,47.6580061 175.602011,48.27 173.334,48.27 C171.497991,48.27 170.112005,47.7390053 169.176,46.677 C168.239995,45.6149947 167.772,44.0760101 167.772,42.06 C167.772,41.051995 168.023997,39.252013 168.528,36.66 C168.996002,34.3919887 169.23,32.8260043 169.23,31.962 C169.23,31.3859971 169.032002,31.098 168.636,31.098 C168.167998,31.098 167.502004,31.700994 166.638,32.907 C165.773996,34.113006 164.910004,35.7059901 164.046,37.686 C163.181996,39.6660099 162.480003,41.753989 161.94,43.95 C161.543998,45.6780086 161.085003,46.8299971 160.563,47.406 C160.040997,47.9820029 159.204006,48.27 158.052,48.27 C156.863994,48.27 155.973003,47.7030057 155.379,46.569 C154.784997,45.4349943 154.488,44.0580081 154.488,42.438 C154.488,41.0699932 154.667998,39.090013 155.028,36.498 C155.316001,34.1939885 155.46,32.6820036 155.46,31.962 C155.46,31.3859971 155.262002,31.098 154.866,31.098 C154.325997,31.098 153.642004,31.7459935 152.814,33.042 C151.985996,34.3380065 151.185004,35.9939899 150.411,38.01 C149.636996,40.0260101 149.016002,42.0059903 148.548,43.95 C148.151998,45.6420085 147.693003,46.784997 147.171,47.379 C146.648997,47.973003 145.830006,48.27 144.714,48.27 Z M200.388,37.578 C200.856002,37.578 201.224999,37.7939978 201.495,38.226 C201.765001,38.6580022 201.9,39.2519962 201.9,40.008 C201.9,41.3040065 201.594003,42.4199953 200.982,43.356 C199.973995,44.9040077 198.651008,46.1099957 197.013,46.974 C195.374992,47.8380043 193.422011,48.27 191.154,48.27 C187.697983,48.27 185.01601,47.2350104 183.108,45.165 C181.19999,43.0949897 180.246,40.2960176 180.246,36.768 C180.246,34.2839876 180.767995,31.9710107 181.812,29.829 C182.856005,27.6869893 184.304991,25.9860063 186.159,24.726 C188.013009,23.4659937 190.109988,22.836 192.45,22.836 C194.53801,22.836 196.211994,23.4569938 197.472,24.699 C198.732006,25.9410062 199.362,27.6239894 199.362,29.748 C199.362,32.2320124 198.471009,34.3649911 196.689,36.147 C194.906991,37.9290089 191.874021,39.3419948 187.59,40.386 C188.454004,42.0420083 189.91199,42.87 191.964,42.87 C193.440007,42.87 194.654995,42.5280034 195.609,41.844 C196.563005,41.1599966 197.669994,40.0080081 198.93,38.388 C199.362002,37.8479973 199.847997,37.578 200.388,37.578 Z M191.532,28.128 C190.199993,28.128 189.075005,28.9019923 188.157,30.45 C187.238995,31.9980077 186.78,33.869989 186.78,36.066 L186.78,36.174 C188.904011,35.6699975 190.577994,34.914005 191.802,33.906 C193.026006,32.897995 193.638,31.7280067 193.638,30.396 C193.638,29.7119966 193.449002,29.1630021 193.071,28.749 C192.692998,28.3349979 192.180003,28.128 191.532,28.128 Z"
        ></path>
      </g>
    </svg>
  );
}
export default Visit4meLogo;