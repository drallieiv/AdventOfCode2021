import _ from "lodash";
var data = [
  174,
  180,
  179,
  186,
  184,
  176,
  177,
  190,
  173,
  174,
  176,
  175,
  172,
  175,
  174,
  175,
  176,
  179,
  206,
  207,
  206,
  205,
  208,
  209,
  215,
  221,
  228,
  227,
  214,
  215,
  216,
  218,
  244,
  246,
  242,
  249,
  250,
  253,
  259,
  256,
  261,
  256,
  252,
  254,
  256,
  261,
  274,
  270,
  300,
  301,
  308,
  310,
  308,
  305,
  306,
  300,
  292,
  290,
  296,
  295,
  298,
  301,
  303,
  304,
  305,
  302,
  301,
  282,
  280,
  281,
  279,
  302,
  285,
  278,
  288,
  302,
  306,
  308,
  314,
  319,
  324,
  320,
  324,
  326,
  296,
  297,
  309,
  316,
  315,
  327,
  328,
  341,
  339,
  338,
  329,
  330,
  328,
  330,
  328,
  327,
  336,
  332,
  330,
  331,
  336,
  338,
  342,
  358,
  360,
  369,
  371,
  378,
  380,
  385,
  382,
  381,
  383,
  417,
  421,
  422,
  424,
  425,
  426,
  454,
  455,
  457,
  467,
  499,
  507,
  513,
  507,
  513,
  512,
  509,
  500,
  501,
  508,
  507,
  509,
  512,
  529,
  530,
  529,
  530,
  529,
  518,
  526,
  523,
  518,
  521,
  484,
  479,
  478,
  489,
  476,
  477,
  478,
  495,
  476,
  474,
  481,
  485,
  499,
  511,
  512,
  516,
  508,
  497,
  500,
  502,
  493,
  492,
  475,
  473,
  474,
  468,
  469,
  471,
  473,
  476,
  504,
  499,
  470,
  472,
  473,
  466,
  467,
  474,
  481,
  483,
  481,
  464,
  469,
  486,
  487,
  481,
  484,
  488,
  489,
  486,
  484,
  485,
  490,
  492,
  499,
  539,
  575,
  576,
  578,
  585,
  602,
  608,
  611,
  612,
  610,
  600,
  606,
  610,
  606,
  617,
  626,
  636,
  639,
  640,
  639,
  609,
  610,
  615,
  614,
  612,
  616,
  620,
  621,
  622,
  625,
  621,
  608,
  604,
  621,
  619,
  621,
  623,
  627,
  612,
  613,
  614,
  613,
  585,
  587,
  591,
  599,
  598,
  597,
  598,
  596,
  594,
  611,
  604,
  603,
  609,
  612,
  637,
  638,
  644,
  643,
  641,
  642,
  641,
  642,
  631,
  618,
  619,
  611,
  615,
  614,
  613,
  614,
  608,
  609,
  620,
  606,
  607,
  625,
  631,
  630,
  640,
  641,
  642,
  655,
  658,
  666,
  669,
  670,
  671,
  672,
  673,
  674,
  670,
  688,
  684,
  687,
  678,
  681,
  687,
  694,
  695,
  692,
  691,
  687,
  671,
  676,
  684,
  682,
  690,
  698,
  694,
  695,
  683,
  682,
  691,
  688,
  678,
  676,
  675,
  684,
  689,
  690,
  667,
  673,
  680,
  679,
  681,
  692,
  694,
  685,
  692,
  705,
  700,
  699,
  702,
  698,
  703,
  730,
  731,
  746,
  745,
  741,
  709,
  710,
  712,
  717,
  715,
  714,
  705,
  711,
  713,
  712,
  727,
  724,
  723,
  719,
  711,
  707,
  709,
  740,
  742,
  745,
  756,
  759,
  758,
  764,
  760,
  761,
  787,
  788,
  789,
  765,
  766,
  768,
  770,
  767,
  768,
  789,
  778,
  783,
  787,
  793,
  788,
  828,
  827,
  819,
  807,
  806,
  820,
  825,
  807,
  821,
  820,
  834,
  836,
  846,
  847,
  844,
  848,
  844,
  857,
  855,
  857,
  858,
  863,
  858,
  859,
  866,
  865,
  860,
  861,
  872,
  868,
  863,
  866,
  868,
  864,
  865,
  866,
  867,
  880,
  902,
  901,
  903,
  902,
  908,
  895,
  912,
  932,
  939,
  936,
  938,
  939,
  942,
  945,
  949,
  950,
  951,
  935,
  917,
  907,
  906,
  915,
  916,
  917,
  916,
  915,
  916,
  919,
  925,
  931,
  935,
  934,
  944,
  945,
  950,
  972,
  973,
  967,
  959,
  961,
  931,
  930,
  931,
  927,
  961,
  988,
  977,
  986,
  992,
  994,
  993,
  980,
  979,
  980,
  982,
  986,
  987,
  962,
  974,
  987,
  991,
  992,
  1002,
  992,
  969,
  979,
  989,
  985,
  991,
  997,
  1002,
  1006,
  997,
  999,
  989,
  988,
  1007,
  1034,
  1037,
  1035,
  1036,
  1025,
  1027,
  1042,
  1059,
  1063,
  1058,
  1062,
  1086,
  1082,
  1093,
  1092,
  1101,
  1102,
  1105,
  1107,
  1117,
  1121,
  1125,
  1139,
  1162,
  1182,
  1198,
  1200,
  1218,
  1211,
  1200,
  1201,
  1202,
  1198,
  1197,
  1199,
  1188,
  1186,
  1193,
  1195,
  1197,
  1196,
  1199,
  1198,
  1201,
  1212,
  1224,
  1197,
  1198,
  1205,
  1206,
  1221,
  1227,
  1226,
  1225,
  1258,
  1287,
  1286,
  1285,
  1286,
  1287,
  1288,
  1287,
  1288,
  1290,
  1283,
  1281,
  1274,
  1273,
  1276,
  1294,
  1290,
  1292,
  1289,
  1302,
  1307,
  1313,
  1302,
  1296,
  1297,
  1300,
  1302,
  1303,
  1307,
  1310,
  1311,
  1318,
  1310,
  1316,
  1311,
  1309,
  1310,
  1313,
  1319,
  1324,
  1331,
  1341,
  1363,
  1351,
  1367,
  1380,
  1381,
  1380,
  1379,
  1383,
  1368,
  1373,
  1369,
  1368,
  1328,
  1322,
  1323,
  1322,
  1318,
  1317,
  1318,
  1338,
  1352,
  1357,
  1372,
  1376,
  1374,
  1379,
  1373,
  1375,
  1376,
  1379,
  1378,
  1379,
  1378,
  1387,
  1386,
  1387,
  1388,
  1420,
  1443,
  1449,
  1446,
  1444,
  1445,
  1422,
  1424,
  1425,
  1427,
  1458,
  1459,
  1496,
  1510,
  1508,
  1509,
  1511,
  1504,
  1495,
  1485,
  1487,
  1517,
  1526,
  1527,
  1529,
  1538,
  1530,
  1531,
  1539,
  1554,
  1558,
  1559,
  1566,
  1545,
  1549,
  1558,
  1559,
  1561,
  1554,
  1564,
  1570,
  1574,
  1573,
  1571,
  1572,
  1573,
  1568,
  1564,
  1565,
  1566,
  1567,
  1583,
  1586,
  1581,
  1597,
  1595,
  1596,
  1589,
  1575,
  1574,
  1582,
  1589,
  1586,
  1568,
  1561,
  1562,
  1561,
  1559,
  1577,
  1578,
  1574,
  1570,
  1566,
  1571,
  1575,
  1580,
  1584,
  1583,
  1593,
  1613,
  1635,
  1637,
  1638,
  1634,
  1638,
  1637,
  1646,
  1648,
  1641,
  1642,
  1644,
  1647,
  1648,
  1650,
  1651,
  1652,
  1651,
  1653,
  1659,
  1665,
  1672,
  1679,
  1683,
  1687,
  1686,
  1685,
  1708,
  1717,
  1718,
  1715,
  1720,
  1718,
  1720,
  1721,
  1741,
  1724,
  1722,
  1728,
  1739,
  1747,
  1766,
  1767,
  1755,
  1761,
  1796,
  1798,
  1792,
  1791,
  1798,
  1805,
  1803,
  1806,
  1807,
  1812,
  1815,
  1816,
  1837,
  1839,
  1838,
  1842,
  1852,
  1855,
  1843,
  1869,
  1875,
  1880,
  1886,
  1881,
  1899,
  1902,
  1905,
  1913,
  1911,
  1912,
  1915,
  1910,
  1934,
  1935,
  1942,
  1944,
  1959,
  1979,
  1951,
  1952,
  1966,
  1978,
  1994,
  1997,
  1988,
  1992,
  1993,
  1998,
  1997,
  2000,
  2001,
  2003,
  2012,
  2014,
  2005,
  2026,
  2045,
  2044,
  2045,
  2052,
  2045,
  2046,
  2048,
  2043,
  2072,
  2080,
  2078,
  2089,
  2090,
  2091,
  2095,
  2087,
  2091,
  2092,
  2112,
  2119,
  2122,
  2123,
  2124,
  2133,
  2147,
  2148,
  2146,
  2155,
  2153,
  2155,
  2152,
  2157,
  2128,
  2114,
  2115,
  2116,
  2118,
  2117,
  2121,
  2115,
  2117,
  2116,
  2120,
  2123,
  2128,
  2135,
  2132,
  2137,
  2149,
  2157,
  2152,
  2146,
  2140,
  2136,
  2143,
  2146,
  2156,
  2158,
  2153,
  2151,
  2154,
  2184,
  2188,
  2175,
  2174,
  2172,
  2158,
  2170,
  2156,
  2138,
  2136,
  2138,
  2141,
  2140,
  2121,
  2117,
  2111,
  2106,
  2110,
  2116,
  2119,
  2120,
  2124,
  2126,
  2132,
  2133,
  2134,
  2148,
  2182,
  2176,
  2177,
  2178,
  2177,
  2182,
  2175,
  2173,
  2177,
  2179,
  2188,
  2191,
  2192,
  2191,
  2192,
  2197,
  2195,
  2199,
  2190,
  2192,
  2218,
  2219,
  2222,
  2212,
  2209,
  2208,
  2213,
  2214,
  2215,
  2212,
  2217,
  2216,
  2234,
  2252,
  2253,
  2256,
  2270,
  2271,
  2293,
  2299,
  2317,
  2309,
  2313,
  2312,
  2316,
  2320,
  2352,
  2328,
  2337,
  2363,
  2369,
  2365,
  2364,
  2365,
  2364,
  2366,
  2383,
  2385,
  2383,
  2382,
  2386,
  2413,
  2415,
  2420,
  2424,
  2440,
  2441,
  2443,
  2456,
  2464,
  2469,
  2487,
  2488,
  2495,
  2498,
  2500,
  2498,
  2497,
  2499,
  2501,
  2518,
  2533,
  2532,
  2538,
  2535,
  2539,
  2525,
  2526,
  2525,
  2517,
  2515,
  2519,
  2508,
  2510,
  2500,
  2508,
  2519,
  2504,
  2513,
  2515,
  2513,
  2514,
  2520,
  2523,
  2522,
  2524,
  2522,
  2529,
  2528,
  2529,
  2516,
  2515,
  2517,
  2526,
  2528,
  2533,
  2520,
  2519,
  2521,
  2517,
  2533,
  2540,
  2543,
  2545,
  2537,
  2532,
  2533,
  2535,
  2530,
  2531,
  2545,
  2569,
  2570,
  2571,
  2546,
  2563,
  2564,
  2565,
  2567,
  2549,
  2542,
  2545,
  2554,
  2580,
  2592,
  2588,
  2593,
  2595,
  2596,
  2601,
  2600,
  2601,
  2608,
  2598,
  2592,
  2584,
  2583,
  2599,
  2600,
  2603,
  2613,
  2612,
  2613,
  2622,
  2612,
  2616,
  2610,
  2611,
  2621,
  2622,
  2625,
  2634,
  2639,
  2644,
  2632,
  2635,
  2633,
  2642,
  2627,
  2617,
  2616,
  2617,
  2621,
  2620,
  2648,
  2654,
  2630,
  2633,
  2637,
  2640,
  2634,
  2636,
  2645,
  2639,
  2658,
  2660,
  2653,
  2634,
  2636,
  2638,
  2633,
  2649,
  2650,
  2651,
  2645,
  2634,
  2635,
  2661,
  2664,
  2671,
  2670,
  2662,
  2636,
  2641,
  2647,
  2639,
  2613,
  2595,
  2610,
  2608,
  2579,
  2574,
  2573,
  2574,
  2573,
  2576,
  2578,
  2575,
  2577,
  2579,
  2578,
  2579,
  2580,
  2582,
  2580,
  2576,
  2567,
  2575,
  2576,
  2570,
  2595,
  2601,
  2602,
  2587,
  2596,
  2592,
  2594,
  2599,
  2600,
  2599,
  2602,
  2603,
  2626,
  2647,
  2655,
  2658,
  2659,
  2661,
  2663,
  2672,
  2673,
  2672,
  2678,
  2696,
  2690,
  2694,
  2696,
  2704,
  2705,
  2710,
  2709,
  2713,
  2714,
  2727,
  2728,
  2730,
  2741,
  2742,
  2743,
  2737,
  2734,
  2762,
  2763,
  2762,
  2760,
  2778,
  2780,
  2783,
  2780,
  2758,
  2759,
  2783,
  2792,
  2790,
  2792,
  2789,
  2790,
  2772,
  2757,
  2756,
  2759,
  2758,
  2764,
  2765,
  2763,
  2771,
  2772,
  2773,
  2774,
  2794,
  2798,
  2797,
  2795,
  2793,
  2794,
  2805,
  2809,
  2811,
  2813,
  2814,
  2821,
  2822,
  2841,
  2826,
  2828,
  2829,
  2846,
  2833,
  2838,
  2845,
  2851,
  2850,
  2862,
  2870,
  2849,
  2864,
  2865,
  2873,
  2878,
  2880,
  2888,
  2889,
  2913,
  2921,
  2927,
  2928,
  2916,
  2909,
  2908,
  2896,
  2897,
  2922,
  2928,
  2920,
  2924,
  2934,
  2935,
  2941,
  2944,
  2945,
  2949,
  2973,
  2968,
  2979,
  2974,
  2977,
  2988,
  2989,
  2991,
  2992,
  2996,
  3002,
  2998,
  3005,
  2987,
  2996,
  3009,
  3019,
  3020,
  3012,
  3013,
  3019,
  3024,
  3036,
  3035,
  3037,
  3040,
  3047,
  3060,
  3064,
  3056,
  3045,
  3041,
  3050,
  3057,
  3060,
  3074,
  3073,
  3075,
  3078,
  3063,
  3083,
  3103,
  3104,
  3113,
  3119,
  3118,
  3126,
  3131,
  3121,
  3122,
  3124,
  3115,
  3131,
  3120,
  3116,
  3129,
  3126,
  3140,
  3148,
  3150,
  3159,
  3161,
  3162,
  3158,
  3151,
  3161,
  3163,
  3164,
  3166,
  3180,
  3183,
  3184,
  3182,
  3188,
  3186,
  3191,
  3197,
  3200,
  3199,
  3198,
  3193,
  3181,
  3170,
  3176,
  3167,
  3168,
  3165,
  3156,
  3171,
  3175,
  3173,
  3194,
  3203,
  3232,
  3238,
  3245,
  3246,
  3245,
  3251,
  3241,
  3223,
  3229,
  3228,
  3237,
  3251,
  3258,
  3260,
  3256,
  3251,
  3240,
  3241,
  3261,
  3270,
  3282,
  3277,
  3279,
  3266,
  3267,
  3269,
  3283,
  3285,
  3287,
  3282,
  3289,
  3287,
  3309,
  3301,
  3302,
  3301,
  3303,
  3305,
  3316,
  3317,
  3315,
  3319,
  3317,
  3327,
  3326,
  3324,
  3322,
  3319,
  3318,
  3319,
  3323,
  3343,
  3337,
  3363,
  3369,
  3371,
  3369,
  3361,
  3363,
  3373,
  3374,
  3378,
  3383,
  3377,
  3376,
  3375,
  3374,
  3387,
  3390,
  3392,
  3401,
  3391,
  3395,
  3416,
  3417,
  3416,
  3422,
  3423,
  3425,
  3406,
  3410,
  3411,
  3413,
  3412,
  3418,
  3415,
  3417,
  3416,
  3413,
  3414,
  3437,
  3447,
  3448,
  3449,
  3450,
  3452,
  3454,
  3450,
  3448,
  3450,
  3455,
  3458,
  3456,
  3458,
  3460,
  3457,
  3450,
  3451,
  3452,
  3453,
  3456,
  3445,
  3446,
  3435,
  3454,
  3481,
  3496,
  3498,
  3503,
  3502,
  3503,
  3504,
  3505,
  3523,
  3512,
  3525,
  3522,
  3526,
  3561,
  3562,
  3561,
  3560,
  3568,
  3567,
  3588,
  3585,
  3580,
  3591,
  3587,
  3586,
  3583,
  3580,
  3579,
  3582,
  3563,
  3588,
  3591,
  3624,
  3628,
  3626,
  3625,
  3632,
  3648,
  3652,
  3653,
  3667,
  3656,
  3654,
  3653,
  3654,
  3653,
  3655,
  3657,
  3662,
  3664,
  3668,
  3669,
  3679,
  3672,
  3673,
  3677,
  3686,
  3685,
  3688,
  3687,
  3707,
  3713,
  3708,
  3692,
  3691,
  3699,
  3711,
  3728,
  3729,
  3737,
  3746,
  3752,
  3755,
  3757,
  3762,
  3763,
  3762,
  3760,
  3762,
  3763,
  3779,
  3800,
  3790,
  3780,
  3783,
  3799,
  3817,
  3821,
  3817,
  3816,
  3820,
  3835,
  3845,
  3860,
  3868,
  3848,
  3859,
  3851,
  3853,
  3854,
  3856,
  3858,
  3859,
  3842,
  3841,
  3843,
  3868,
  3863,
  3860,
  3861,
  3864,
  3862,
  3860,
  3862,
  3881,
  3896,
  3922,
  3915,
  3916,
  3914,
  3915,
  3918,
  3919,
  3916,
  3926,
  3927,
  3942,
  3943,
  3948,
  3946,
  3949,
  3947,
  3956,
  3952,
  3963,
  3959,
  3960,
  3974,
  3992,
  3991,
  3990,
  3988,
  4000,
  4006,
  4004,
  4010,
  4009,
  4008,
  4005,
  3992,
  3988,
  3990,
  3997,
  3995,
  3996,
  3961,
  3964,
  3954,
  3963,
  3966,
  3972,
  3973,
  3974,
  3970,
  3975,
  3974,
  3975,
  3974,
  3979,
  3980,
  3984,
  3986,
  3989,
  3990,
  3989,
  3992,
  3991,
  3994,
  3993,
  3992,
  3998,
  4003,
  4004,
  3997,
  3998,
  3995,
  3988,
  3992,
  3994,
  3995,
  3969,
  3965,
  3960,
  3957,
  3960,
  3974,
  3973,
  3974,
  3977,
  3959,
  3974,
  3965,
  3943,
  3942,
  3940,
  3941,
  3954,
  3959,
  3955,
  3952,
  3953,
  3952,
  3951,
  3958,
  3971,
  3969,
  3966,
  3967,
  3982,
  3978,
  3981,
  3985,
  3989,
  3991,
  3992,
  3990,
  3992,
  3991,
  3993,
  3995,
  4002,
  4020,
  4021,
  4023,
  4020,
  4028,
  4026,
  4029,
  4021,
  4024,
  4026,
  4027,
  4034,
  4037,
  4020,
  4007,
  4008,
  4014,
  4013,
  4033,
  4030,
  4034,
  4033,
  4056,
  4075,
  4077,
  4078,
  4077,
  4066,
  4067,
  4077,
  4045,
  4043,
  4049,
  4076,
  4088,
  4071,
  4072,
  4086,
  4092,
  4093,
  4095,
  4081,
  4084,
  4083,
  4092,
  4073,
  4075,
  4094,
  4103,
  4110,
  4120,
  4121,
  4122,
  4136,
  4139,
  4140,
  4152,
  4155,
  4159,
  4195,
  4209,
  4235,
  4231,
  4232,
  4234,
  4228,
  4223,
  4225,
  4219,
  4228,
  4225,
  4226,
  4227,
  4229,
  4213,
  4205,
  4211,
  4212,
  4195,
  4198,
  4205,
  4186,
  4170,
  4186,
  4188,
  4189,
  4161,
  4163,
  4184,
  4185,
  4214,
  4218,
  4222,
  4215,
  4210,
  4203,
  4206,
  4210,
  4211,
  4239,
  4247,
  4239,
  4241,
  4247,
  4222,
  4218,
  4223,
  4209,
  4197,
  4198,
  4200,
  4199,
  4214,
  4212,
  4218,
  4217,
  4220,
  4219,
  4225,
  4226,
  4238,
  4240,
  4256,
  4257,
  4259,
  4261,
  4265,
  4283,
  4280,
  4284,
  4281,
  4282,
  4285,
  4268,
  4266,
  4294,
  4295,
  4318,
  4322,
  4326,
  4330,
  4331,
  4328,
  4339,
  4340,
  4342,
  4350,
  4359,
  4369,
  4377,
  4388,
  4398,
  4402,
  4400,
  4407,
  4403,
  4416,
  4417,
  4411,
  4398,
  4381,
  4368,
  4396,
  4397,
  4399,
  4402,
  4408,
  4389,
  4390,
  4388,
  4401,
  4406,
  4408,
  4409,
  4411,
  4417,
  4418,
  4422,
  4434,
  4470,
  4473,
  4476,
  4481,
  4493,
  4499,
  4500,
  4499,
  4502,
  4506,
  4520,
  4522,
  4519,
  4515,
  4527,
  4530,
  4534,
  4533,
  4534,
  4540,
  4541,
  4553,
  4554,
  4553,
  4554,
  4544,
  4539,
  4540,
  4546,
  4543,
  4531,
  4542,
  4543,
  4541,
  4542,
  4539,
  4538,
  4536,
  4532,
  4523,
  4521,
  4533,
  4544,
  4545,
  4546,
  4543,
  4544,
  4548,
  4552,
  4556,
  4564,
  4565,
  4566,
  4568,
  4565,
  4567,
  4577,
  4587,
  4588,
  4591,
  4594,
  4598,
  4599,
  4601,
  4597,
  4609,
  4608,
  4579,
  4594,
  4596,
  4595,
  4594,
  4592,
  4586,
  4588,
  4586,
  4582,
  4583,
  4584,
  4596,
  4605,
  4593,
  4609,
  4616,
  4614,
  4613,
  4614,
  4616,
  4617,
  4618,
  4617,
  4618,
  4616,
  4592,
  4593,
  4592,
  4593,
  4599,
  4598,
  4597,
  4600,
  4602,
  4599,
  4600,
  4609,
  4605,
  4607,
  4609,
  4610,
  4606,
  4609,
  4608,
  4612,
  4616,
  4615,
  4616,
  4618
];

var maxValues = 3;

var stats = data.reduce(
  (e, n) => {
    var prevValues = e.prevValues;
    prevValues.push(n);
    if (prevValues.length > maxValues) {
      prevValues.shift();
    }
    e.prevValues = prevValues;
    if (prevValues.length < maxValues) {
      return e;
    }

    var newSum = _.sum(prevValues);
    e.newSum = newSum;
    if (e.prevSum && newSum > e.prevSum) {
      e.count++;
      e.bigger = true;
    } else {
      e.bigger = false;
    }
    e.newSum = newSum;
    // console.log(JSON.stringify(e));
    e.prevSum = newSum;
    return e;
  },
  { prevSum: undefined, prevValues: [], count: 0 }
);

console.log(stats.count);
