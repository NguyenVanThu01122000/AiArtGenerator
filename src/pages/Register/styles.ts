import { Form } from "antd";
import styled from "styled-components";

export const WrapperRegister = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  /* padding: 0px 50px; */
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 174px 187px #fff, 749px 1972px #ffffff, 1996px 1113px #fff,
      126px 42px #fff, 816px 200px #fff, 47px 1229px #fff, 750px 902px #fff,
      1884px 1799px #fff, 460px 1597px #fff, 1215px 1884px #fff,
      1986px 1726px #fff, 565px 823px #fff, 699px 1940px #fff, 32px 1091px #fff,
      1559px 572px #fff, 1232px 815px #fff, 1060px 682px #fff, 1551px 531px #fff,
      301px 976px #fff, 889px 1344px #fff, 410px 765px #fff, 1691px 231px #fff,
      552px 82px #fff, 1849px 864px #fff, 236px 1881px #fff, 767px 1613px #fff,
      1825px 1616px #fff, 440px 930px #fff, 1921px 1397px #fff, 409px 892px #fff,
      1403px 128px #fff, 1617px 1549px #fff, 271px 1332px #fff, 5px 1884px #fff,
      1371px 634px #fff, 382px 609px #fff, 1022px 1200px #fff, 601px 836px #fff,
      811px 1240px #fff, 1266px 713px #fff, 1514px 1237px #fff, 318px 751px #fff,
      662px 1315px #fff, 1592px 1170px #fff, 112px 290px #fff,
      1885px 1104px #fff, 1247px 1511px #fff, 1803px 1126px #fff,
      710px 527px #fff, 1480px 908px #fff, 1386px 74px #fff, 1414px 1279px #fff,
      289px 1430px #fff, 258px 1933px #fff, 1648px 665px #fff, 444px 201px #fff,
      1102px 1939px #fff, 619px 835px #fff, 810px 1704px #fff, 381px 1922px #fff,
      1229px 1335px #fff, 1448px 637px #fff, 680px 455px #fff, 96px 1142px #fff,
      449px 960px #fff, 274px 1974px #fff, 24px 1044px #fff, 1449px 1743px #fff,
      537px 1874px #fff, 282px 272px #fff, 1090px 1557px #fff, 1738px 680px #fff,
      1221px 731px #fff, 1620px 1212px #fff, 481px 466px #fff, 269px 611px #fff,
      939px 1392px #fff, 1275px 1667px #fff, 163px 694px #fff, 1897px 27px #fff,
      1991px 661px #fff, 988px 762px #fff, 961px 1686px #fff, 333px 1172px #fff,
      1735px 229px #fff, 1322px 331px #fff, 362px 771px #fff, 287px 36px #fff,
      1985px 1283px #fff, 1833px 162px #fff, 416px 1610px #fff, 991px 16px #fff,
      1762px 424px #fff, 1669px 36px #fff, 1500px 598px #fff, 1108px 672px #fff,
      992px 447px #fff, 879px 107px #fff, 1500px 756px #fff, 832px 1440px #fff,
      1580px 1248px #fff, 231px 660px #fff, 799px 392px #fff, 1220px 1337px #fff,
      892px 204px #fff, 574px 1343px #fff, 312px 728px #fff, 1067px 721px #fff,
      735px 1612px #fff, 20px 1114px #fff, 454px 1957px #fff, 1099px 1905px #fff,
      1442px 1051px #fff, 477px 150px #fff, 1838px 341px #fff, 587px 1068px #fff,
      743px 607px #fff, 1803px 1706px #fff, 247px 114px #fff, 1498px 1426px #fff,
      831px 1615px #fff, 158px 1183px #fff, 408px 1503px #fff, 790px 1545px #fff,
      543px 906px #fff, 793px 1384px #fff, 1030px 408px #fff, 1706px 802px #fff,
      622px 275px #fff, 277px 922px #fff, 534px 496px #fff, 533px 44px #fff,
      1662px 1877px #fff, 1055px 1401px #fff, 256px 611px #fff,
      548px 1978px #fff, 348px 48px #fff, 1809px 1016px #fff, 550px 846px #fff,
      945px 1301px #fff, 113px 1305px #fff, 907px 1660px #fff, 729px 587px #fff,
      1979px 1343px #fff, 1360px 61px #fff, 265px 1229px #fff,
      1967px 1781px #fff, 278px 1895px #fff, 1636px 701px #fff,
      1373px 1390px #fff, 1874px 391px #fff, 1326px 1972px #fff,
      1001px 1169px #fff, 1478px 193px #fff, 202px 447px #fff,
      1963px 1563px #fff, 1215px 159px #fff, 21px 669px #fff, 1518px 789px #fff,
      1866px 460px #fff, 948px 195px #fff, 244px 1484px #fff, 768px 1235px #fff,
      1846px 1180px #fff, 973px 822px #fff, 1994px 39px #fff, 1788px 1773px #fff,
      692px 599px #fff, 1751px 1868px #fff, 161px 1885px #fff,
      1776px 1781px #fff, 1801px 1320px #fff, 550px 643px #fff, 343px 613px #fff,
      1387px 498px #fff, 1738px 715px #fff, 724px 544px #fff, 1367px 1431px #fff,
      1506px 1827px #fff, 1410px 525px #fff, 793px 1053px #fff,
      1211px 259px #fff, 478px 297px #fff, 1855px 1144px #fff, 399px 132px #fff,
      1647px 459px #fff, 571px 277px #fff, 1461px 1128px #fff, 158px 1034px #fff,
      527px 701px #fff, 1122px 882px #fff, 894px 1836px #fff, 182px 29px #fff,
      617px 275px #fff, 494px 1482px #fff, 98px 1654px #fff, 884px 703px #fff,
      573px 1307px #fff, 1539px 1946px #fff, 1860px 315px #fff,
      1243px 373px #fff, 1217px 981px #fff, 679px 67px #fff, 206px 495px #fff,
      1716px 1077px #fff, 1491px 1359px #fff, 169px 493px #fff, 891px 268px #fff,
      1598px 522px #fff, 389px 1295px #fff, 1497px 1760px #fff,
      1219px 1579px #fff, 1571px 814px #fff, 1844px 262px #fff,
      1030px 1837px #fff, 1636px 862px #fff, 1655px 1850px #fff,
      33px 1232px #fff, 1176px 454px #fff, 1723px 1204px #fff, 921px 1579px #fff,
      30px 953px #fff, 1999px 941px #fff, 242px 1961px #fff, 812px 1264px #fff,
      1648px 5px #fff, 932px 630px #fff, 1904px 1113px #fff, 883px 689px #fff,
      187px 1647px #fff, 1px 1215px #fff, 503px 276px #fff, 1559px 175px #fff,
      1040px 1828px #fff, 106px 941px #fff, 1135px 633px #fff,
      1257px 1476px #fff, 149px 413px #fff, 48px 200px #fff, 1437px 81px #fff,
      544px 1202px #fff, 210px 1521px #fff, 918px 1566px #fff, 879px 1617px #fff,
      458px 368px #fff, 532px 1719px #fff, 1624px 726px #fff, 1843px 915px #fff,
      538px 1172px #fff, 830px 230px #fff, 1927px 1563px #fff, 947px 494px #fff,
      290px 1375px #fff, 1660px 85px #fff, 1022px 1155px #fff, 630px 108px #fff,
      1519px 748px #fff, 95px 837px #fff, 527px 1931px #fff, 996px 1385px #fff,
      1152px 1141px #fff, 1611px 926px #fff, 1706px 438px #fff, 627px 905px #fff,
      1684px 115px #fff, 1853px 1327px #fff, 24px 1911px #fff, 1947px 826px #fff,
      1857px 1821px #fff, 1870px 1551px #fff, 676px 945px #fff, 334px 731px #fff,
      1553px 581px #fff, 1993px 1268px #fff, 701px 247px #fff, 1689px 349px #fff,
      204px 790px #fff, 721px 1059px #fff, 944px 1243px #fff, 626px 1305px #fff,
      1500px 1908px #fff, 1803px 1210px #fff, 1073px 1431px #fff,
      971px 1772px #fff, 337px 1106px #fff, 1320px 508px #fff, 320px 458px #fff,
      503px 227px #fff, 246px 79px #fff, 1472px 2px #fff, 980px 1134px #fff,
      1540px 1958px #fff, 1336px 260px #fff, 276px 156px #fff, 778px 1412px #fff,
      318px 669px #fff, 165px 276px #fff, 1843px 243px #fff, 44px 1869px #fff,
      172px 829px #fff, 744px 909px #fff, 833px 226px #fff, 1280px 321px #fff,
      1025px 1267px #fff, 392px 1066px #fff, 1789px 593px #fff, 228px 840px #fff,
      252px 715px #fff, 309px 1621px #fff, 1329px 1664px #fff, 676px 1762px #fff,
      177px 410px #fff, 613px 825px #fff, 1806px 1661px #fff, 827px 186px #fff,
      500px 1924px #fff, 526px 443px #fff, 799px 35px #fff, 182px 1589px #fff,
      1930px 1878px #fff, 1103px 917px #fff, 1475px 337px #fff,
      1305px 1072px #fff, 1847px 1387px #fff, 1865px 149px #fff,
      210px 651px #fff, 282px 206px #fff, 152px 278px #fff, 1880px 690px #fff,
      1033px 1451px #fff, 1260px 1728px #fff, 1832px 225px #fff,
      419px 587px #fff, 322px 1482px #fff, 550px 1344px #fff, 1357px 1699px #fff,
      1125px 1108px #fff, 1605px 1315px #fff, 1280px 200px #fff,
      1143px 1022px #fff, 226px 1335px #fff, 1116px 1121px #fff,
      1255px 244px #fff, 212px 1293px #fff, 1450px 1622px #fff,
      178px 1087px #fff, 876px 1308px #fff, 458px 713px #fff, 1386px 305px #fff,
      685px 1948px #fff, 392px 294px #fff, 1265px 965px #fff, 494px 742px #fff,
      80px 562px #fff, 601px 1530px #fff, 1239px 434px #fff, 1192px 650px #fff,
      1806px 538px #fff, 1646px 577px #fff, 1328px 1562px #fff,
      1353px 1686px #fff, 612px 895px #fff, 594px 1489px #fff,
      1481px 1019px #fff, 154px 323px #fff, 1212px 820px #fff,
      1095px 1496px #fff, 1952px 1029px #fff, 1694px 376px #fff,
      493px 1742px #fff, 448px 1962px #fff, 1138px 1710px #fff,
      1885px 718px #fff, 404px 779px #fff, 394px 1065px #fff, 1767px 752px #fff,
      1835px 140px #fff, 1176px 1265px #fff, 1611px 1256px #fff,
      121px 1157px #fff, 1565px 1613px #fff, 579px 1738px #fff,
      1744px 359px #fff, 934px 1068px #fff, 1518px 302px #fff, 614px 1057px #fff,
      1346px 1591px #fff, 1256px 1982px #fff, 998px 1534px #fff,
      651px 573px #fff, 303px 1109px #fff, 1477px 1003px #fff, 598px 631px #fff,
      383px 1154px #fff, 550px 322px #fff, 202px 1437px #fff, 1024px 1667px #fff,
      1506px 1977px #fff, 465px 1302px #fff, 510px 1131px #fff,
      1356px 1328px #fff, 1312px 1262px #fff, 345px 1567px #fff,
      373px 1238px #fff, 1416px 1625px #fff, 1113px 249px #fff,
      1531px 1288px #fff, 828px 794px #fff, 256px 426px #fff, 869px 1321px #fff,
      1063px 1181px #fff, 631px 635px #fff, 139px 909px #fff, 305px 1160px #fff,
      843px 477px #fff, 1666px 277px #fff, 740px 1019px #fff, 264px 647px #fff,
      1459px 1055px #fff, 976px 919px #fff, 1728px 1147px #fff,
      1426px 1559px #fff, 444px 525px #fff, 1657px 1940px #fff,
      250px 1287px #fff, 1596px 1399px #fff, 555px 213px #fff, 1952px 647px #fff,
      1371px 1635px #fff, 803px 1622px #fff, 1460px 534px #fff,
      1813px 984px #fff, 1122px 1977px #fff, 403px 884px #fff, 1098px 896px #fff,
      1124px 1318px #fff, 372px 1710px #fff, 1308px 1233px #fff,
      1138px 1158px #fff, 416px 1174px #fff, 431px 1114px #fff,
      210px 1074px #fff, 1111px 563px #fff, 31px 1472px #fff, 1629px 1311px #fff,
      677px 1022px #fff, 232px 747px #fff, 1753px 868px #fff, 35px 1207px #fff,
      203px 1631px #fff, 1977px 468px #fff, 1261px 1036px #fff, 322px 669px #fff,
      1710px 1340px #fff, 1230px 463px #fff, 1727px 1826px #fff,
      938px 1553px #fff, 1562px 1690px #fff, 78px 424px #fff, 1927px 1980px #fff,
      1632px 1312px #fff, 1352px 1325px #fff, 66px 34px #fff, 535px 138px #fff,
      152px 1324px #fff, 1816px 580px #fff, 1180px 756px #fff,
      1701px 1902px #fff, 199px 1993px #fff, 70px 1926px #fff,
      1342px 1276px #fff, 23px 1926px #fff, 1403px 172px #fff, 88px 1368px #fff,
      1437px 1816px #fff, 530px 845px #fff, 845px 37px #fff, 871px 1642px #fff,
      1357px 286px #fff, 1690px 1192px #fff, 266px 468px #fff, 1826px 427px #fff,
      1256px 262px #fff, 1053px 99px #fff, 384px 106px #fff, 32px 50px #fff,
      1083px 14px #fff, 19px 1667px #fff, 97px 1887px #fff, 1356px 1699px #fff,
      1487px 1050px #fff, 900px 1052px #fff, 807px 1741px #fff, 517px 360px #fff,
      332px 404px #fff, 1253px 961px #fff, 43px 558px #fff, 1535px 371px #fff,
      448px 243px #fff, 1560px 925px #fff, 326px 745px #fff, 956px 1182px #fff,
      1171px 1387px #fff, 220px 1364px #fff, 162px 1747px #fff, 1116px 47px #fff,
      1507px 1228px #fff, 912px 328px #fff, 18px 345px #fff, 863px 725px #fff,
      1373px 338px #fff, 174px 76px #fff, 42px 1740px #fff, 1550px 304px #fff,
      1773px 1595px #fff, 1285px 778px #fff, 1734px 1881px #fff,
      1433px 1736px #fff, 1449px 1573px #fff, 1484px 784px #fff,
      384px 1716px #fff, 1178px 808px #fff, 474px 1387px #fff, 942px 999px #fff,
      405px 1907px #fff, 2px 1421px #fff, 70px 59px #fff, 391px 957px #fff,
      813px 1369px #fff, 453px 1648px #fff, 666px 1870px #fff, 837px 211px #fff,
      9px 699px #fff, 468px 862px #fff, 1772px 963px #fff, 1598px 663px #fff,
      220px 1204px #fff, 51px 1405px #fff, 1188px 1429px #fff, 865px 1178px #fff,
      602px 33px #fff, 440px 1498px #fff, 428px 921px #fff, 1756px 316px #fff,
      1886px 1965px #fff, 1099px 782px #fff, 1250px 140px #fff,
      542px 1471px #fff, 81px 427px #fff, 507px 1112px #fff, 1034px 1273px #fff,
      1857px 1608px #fff, 1873px 849px #fff, 1194px 880px #fff,
      1385px 1948px #fff, 1339px 571px #fff, 1318px 1213px #fff,
      1999px 1461px #fff, 446px 1347px #fff, 730px 914px #fff, 416px 670px #fff,
      665px 1298px #fff, 621px 528px #fff, 578px 1792px #fff, 1972px 1433px #fff,
      677px 1908px #fff, 806px 1953px #fff, 1203px 1592px #fff,
      1138px 1362px #fff, 1253px 153px #fff, 1512px 1326px #fff,
      1726px 1015px #fff, 685px 141px #fff, 1031px 883px #fff,
      1269px 1272px #fff, 1908px 1728px #fff, 1433px 378px #fff,
      703px 207px #fff, 350px 935px #fff, 1475px 1326px #fff, 1114px 1504px #fff,
      450px 941px #fff, 1950px 1825px #fff, 1507px 1113px #fff, 931px 296px #fff,
      271px 1172px #fff, 823px 531px #fff, 1883px 279px #fff, 80px 1834px #fff,
      242px 137px #fff, 275px 1087px #fff, 1375px 1319px #fff, 820px 1176px #fff,
      912px 26px #fff, 572px 79px #fff, 303px 655px #fff, 1849px 1435px #fff,
      702px 684px #fff, 987px 1945px #fff, 1934px 1667px #fff, 267px 1753px #fff,
      216px 606px #fff, 515px 1412px #fff, 1598px 1181px #fff, 897px 1853px #fff,
      1083px 121px #fff, 413px 642px #fff, 1819px 253px #fff, 765px 556px #fff,
      525px 645px #fff, 1748px 1135px #fff, 1580px 1977px #fff,
      1580px 223px #fff, 515px 134px #fff, 116px 240px #fff, 1629px 1470px #fff,
      1105px 1259px #fff, 786px 1334px #fff, 1908px 204px #fff,
      1519px 603px #fff, 666px 1991px #fff, 1208px 1483px #fff, 73px 529px #fff,
      1246px 1602px #fff, 1318px 118px #fff, 1360px 937px #fff,
      1631px 1032px #fff, 519px 765px #fff, 916px 431px #fff, 1931px 31px #fff,
      894px 224px #fff, 1426px 316px #fff, 1339px 1550px #fff, 76px 1274px #fff,
      638px 1452px #fff, 353px 1758px #fff, 766px 1490px #fff, 1410px 207px #fff,
      1560px 997px #fff, 451px 766px #fff, 1229px 1551px #fff, 1135px 271px #fff,
      1879px 1980px #fff, 467px 1434px #fff, 1093px 911px #fff,
      1682px 396px #fff, 824px 1910px #fff, 465px 167px #fff, 1324px 506px #fff,
      1731px 789px #fff, 1092px 172px #fff, 749px 983px #fff, 1545px 284px #fff,
      1663px 1248px #fff, 1575px 11px #fff, 1691px 481px #fff, 58px 1401px #fff,
      1677px 523px #fff, 1068px 117px #fff, 1045px 1694px #fff,
      1204px 117px #fff, 1232px 272px #fff, 599px 893px #fff, 1655px 1178px #fff,
      270px 1912px #fff, 599px 1774px #fff, 16px 999px #fff, 752px 106px #fff,
      1534px 219px #fff, 1801px 1109px #fff, 1178px 184px #fff, 67px 243px #fff,
      1641px 221px #fff, 1555px 1523px #fff, 689px 1878px #fff,
      540px 1806px #fff, 1888px 1799px #fff, 691px 772px #fff,
      1217px 1399px #fff, 936px 1856px #fff, 909px 1831px #fff,
      1067px 982px #fff, 1669px 318px #fff, 526px 655px #fff, 1415px 1580px #fff,
      370px 1959px #fff, 1736px 1655px #fff, 606px 1857px #fff,
      1313px 1005px #fff, 544px 95px #fff, 1215px 1591px #fff, 865px 269px #fff,
      630px 1265px #fff, 166px 523px #fff, 296px 69px #fff, 1291px 1400px #fff,
      515px 1464px #fff, 1430px 315px #fff, 721px 1265px #fff, 383px 796px #fff;
    animation: animStar 50s linear infinite;
  }
  #stars:after {
    content: " ";
    position: absolute;

    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 174px 187px #fff, 749px 1972px #fff, 1996px 1113px #fff,
      126px 42px #fff, 816px 200px #fff, 47px 1229px #fff, 750px 902px #fff,
      1884px 1799px #fff, 460px 1597px #fff, 1215px 1884px #fff,
      1986px 1726px #fff, 565px 823px #fff, 699px 1940px #fff, 32px 1091px #fff,
      1559px 572px #fff, 1232px 815px #fff, 1060px 682px #fff, 1551px 531px #fff,
      301px 976px #fff, 889px 1344px #fff, 410px 765px #fff, 1691px 231px #fff,
      552px 82px #fff, 1849px 864px #fff, 236px 1881px #fff, 767px 1613px #fff,
      1825px 1616px #fff, 440px 930px #fff, 1921px 1397px #fff, 409px 892px #fff,
      1403px 128px #fff, 1617px 1549px #fff, 271px 1332px #fff, 5px 1884px #fff,
      1371px 634px #fff, 382px 609px #fff, 1022px 1200px #fff, 601px 836px #fff,
      811px 1240px #fff, 1266px 713px #fff, 1514px 1237px #fff, 318px 751px #fff,
      662px 1315px #fff, 1592px 1170px #fff, 112px 290px #fff,
      1885px 1104px #fff, 1247px 1511px #fff, 1803px 1126px #fff,
      710px 527px #fff, 1480px 908px #fff, 1386px 74px #fff, 1414px 1279px #fff,
      289px 1430px #fff, 258px 1933px #fff, 1648px 665px #fff, 444px 201px #fff,
      1102px 1939px #fff, 619px 835px #fff, 810px 1704px #fff, 381px 1922px #fff,
      1229px 1335px #fff, 1448px 637px #fff, 680px 455px #fff, 96px 1142px #fff,
      449px 960px #fff, 274px 1974px #fff, 24px 1044px #fff, 1449px 1743px #fff,
      537px 1874px #fff, 282px 272px #fff, 1090px 1557px #fff, 1738px 680px #fff,
      1221px 731px #fff, 1620px 1212px #fff, 481px 466px #fff, 269px 611px #fff,
      939px 1392px #fff, 1275px 1667px #fff, 163px 694px #fff, 1897px 27px #fff,
      1991px 661px #fff, 988px 762px #fff, 961px 1686px #fff, 333px 1172px #fff,
      1735px 229px #fff, 1322px 331px #fff, 362px 771px #fff, 287px 36px #fff,
      1985px 1283px #fff, 1833px 162px #fff, 416px 1610px #fff, 991px 16px #fff,
      1762px 424px #fff, 1669px 36px #fff, 1500px 598px #fff, 1108px 672px #fff,
      992px 447px #fff, 879px 107px #fff, 1500px 756px #fff, 832px 1440px #fff,
      1580px 1248px #fff, 231px 660px #fff, 799px 392px #fff, 1220px 1337px #fff,
      892px 204px #fff, 574px 1343px #fff, 312px 728px #fff, 1067px 721px #fff,
      735px 1612px #fff, 20px 1114px #fff, 454px 1957px #fff, 1099px 1905px #fff,
      1442px 1051px #fff, 477px 150px #fff, 1838px 341px #fff, 587px 1068px #fff,
      743px 607px #fff, 1803px 1706px #fff, 247px 114px #fff, 1498px 1426px #fff,
      831px 1615px #fff, 158px 1183px #fff, 408px 1503px #fff, 790px 1545px #fff,
      543px 906px #fff, 793px 1384px #fff, 1030px 408px #fff, 1706px 802px #fff,
      622px 275px #fff, 277px 922px #fff, 534px 496px #fff, 533px 44px #fff,
      1662px 1877px #fff, 1055px 1401px #fff, 256px 611px #fff,
      548px 1978px #fff, 348px 48px #fff, 1809px 1016px #fff, 550px 846px #fff,
      945px 1301px #fff, 113px 1305px #fff, 907px 1660px #fff, 729px 587px #fff,
      1979px 1343px #fff, 1360px 61px #fff, 265px 1229px #fff,
      1967px 1781px #fff, 278px 1895px #fff, 1636px 701px #fff,
      1373px 1390px #fff, 1874px 391px #fff, 1326px 1972px #fff,
      1001px 1169px #fff, 1478px 193px #fff, 202px 447px #fff,
      1963px 1563px #fff, 1215px 159px #fff, 21px 669px #fff, 1518px 789px #fff,
      1866px 460px #fff, 948px 195px #fff, 244px 1484px #fff, 768px 1235px #fff,
      1846px 1180px #fff, 973px 822px #fff, 1994px 39px #fff, 1788px 1773px #fff,
      692px 599px #fff, 1751px 1868px #fff, 161px 1885px #fff,
      1776px 1781px #fff, 1801px 1320px #fff, 550px 643px #fff, 343px 613px #fff,
      1387px 498px #fff, 1738px 715px #fff, 724px 544px #fff, 1367px 1431px #fff,
      1506px 1827px #fff, 1410px 525px #fff, 793px 1053px #fff,
      1211px 259px #fff, 478px 297px #fff, 1855px 1144px #fff, 399px 132px #fff,
      1647px 459px #fff, 571px 277px #fff, 1461px 1128px #fff, 158px 1034px #fff,
      527px 701px #fff, 1122px 882px #fff, 894px 1836px #fff, 182px 29px #fff,
      617px 275px #fff, 494px 1482px #fff, 98px 1654px #fff, 884px 703px #fff,
      573px 1307px #fff, 1539px 1946px #fff, 1860px 315px #fff,
      1243px 373px #fff, 1217px 981px #fff, 679px 67px #fff, 206px 495px #fff,
      1716px 1077px #fff, 1491px 1359px #fff, 169px 493px #fff, 891px 268px #fff,
      1598px 522px #fff, 389px 1295px #fff, 1497px 1760px #fff,
      1219px 1579px #fff, 1571px 814px #fff, 1844px 262px #fff,
      1030px 1837px #fff, 1636px 862px #fff, 1655px 1850px #fff,
      33px 1232px #fff, 1176px 454px #fff, 1723px 1204px #fff, 921px 1579px #fff,
      30px 953px #fff, 1999px 941px #fff, 242px 1961px #fff, 812px 1264px #fff,
      1648px 5px #fff, 932px 630px #fff, 1904px 1113px #fff, 883px 689px #fff,
      187px 1647px #fff, 1px 1215px #fff, 503px 276px #fff, 1559px 175px #fff,
      1040px 1828px #fff, 106px 941px #fff, 1135px 633px #fff,
      1257px 1476px #fff, 149px 413px #fff, 48px 200px #fff, 1437px 81px #fff,
      544px 1202px #fff, 210px 1521px #fff, 918px 1566px #fff, 879px 1617px #fff,
      458px 368px #fff, 532px 1719px #fff, 1624px 726px #fff, 1843px 915px #fff,
      538px 1172px #fff, 830px 230px #fff, 1927px 1563px #fff, 947px 494px #fff,
      290px 1375px #fff, 1660px 85px #fff, 1022px 1155px #fff, 630px 108px #fff,
      1519px 748px #fff, 95px 837px #fff, 527px 1931px #fff, 996px 1385px #fff,
      1152px 1141px #fff, 1611px 926px #fff, 1706px 438px #fff, 627px 905px #fff,
      1684px 115px #fff, 1853px 1327px #fff, 24px 1911px #fff, 1947px 826px #fff,
      1857px 1821px #fff, 1870px 1551px #fff, 676px 945px #fff, 334px 731px #fff,
      1553px 581px #fff, 1993px 1268px #fff, 701px 247px #fff, 1689px 349px #fff,
      204px 790px #fff, 721px 1059px #fff, 944px 1243px #fff, 626px 1305px #fff,
      1500px 1908px #fff, 1803px 1210px #fff, 1073px 1431px #fff,
      971px 1772px #fff, 337px 1106px #fff, 1320px 508px #fff, 320px 458px #fff,
      503px 227px #fff, 246px 79px #fff, 1472px 2px #fff, 980px 1134px #fff,
      1540px 1958px #fff, 1336px 260px #fff, 276px 156px #fff, 778px 1412px #fff,
      318px 669px #fff, 165px 276px #fff, 1843px 243px #fff, 44px 1869px #fff,
      172px 829px #fff, 744px 909px #fff, 833px 226px #fff, 1280px 321px #fff,
      1025px 1267px #fff, 392px 1066px #fff, 1789px 593px #fff, 228px 840px #fff,
      252px 715px #fff, 309px 1621px #fff, 1329px 1664px #fff, 676px 1762px #fff,
      177px 410px #fff, 613px 825px #fff, 1806px 1661px #fff, 827px 186px #fff,
      500px 1924px #fff, 526px 443px #fff, 799px 35px #fff, 182px 1589px #fff,
      1930px 1878px #fff, 1103px 917px #fff, 1475px 337px #fff,
      1305px 1072px #fff, 1847px 1387px #fff, 1865px 149px #fff,
      210px 651px #fff, 282px 206px #fff, 152px 278px #fff, 1880px 690px #fff,
      1033px 1451px #fff, 1260px 1728px #fff, 1832px 225px #fff,
      419px 587px #fff, 322px 1482px #fff, 550px 1344px #fff, 1357px 1699px #fff,
      1125px 1108px #fff, 1605px 1315px #fff, 1280px 200px #fff,
      1143px 1022px #fff, 226px 1335px #fff, 1116px 1121px #fff,
      1255px 244px #fff, 212px 1293px #fff, 1450px 1622px #fff,
      178px 1087px #fff, 876px 1308px #fff, 458px 713px #fff, 1386px 305px #fff,
      685px 1948px #fff, 392px 294px #fff, 1265px 965px #fff, 494px 742px #fff,
      80px 562px #fff, 601px 1530px #fff, 1239px 434px #fff, 1192px 650px #fff,
      1806px 538px #fff, 1646px 577px #fff, 1328px 1562px #fff,
      1353px 1686px #fff, 612px 895px #fff, 594px 1489px #fff,
      1481px 1019px #fff, 154px 323px #fff, 1212px 820px #fff,
      1095px 1496px #fff, 1952px 1029px #fff, 1694px 376px #fff,
      493px 1742px #fff, 448px 1962px #fff, 1138px 1710px #fff,
      1885px 718px #fff, 404px 779px #fff, 394px 1065px #fff, 1767px 752px #fff,
      1835px 140px #fff, 1176px 1265px #fff, 1611px 1256px #fff,
      121px 1157px #fff, 1565px 1613px #fff, 579px 1738px #fff,
      1744px 359px #fff, 934px 1068px #fff, 1518px 302px #fff, 614px 1057px #fff,
      1346px 1591px #fff, 1256px 1982px #fff, 998px 1534px #fff,
      651px 573px #fff, 303px 1109px #fff, 1477px 1003px #fff, 598px 631px #fff,
      383px 1154px #fff, 550px 322px #fff, 202px 1437px #fff, 1024px 1667px #fff,
      1506px 1977px #fff, 465px 1302px #fff, 510px 1131px #fff,
      1356px 1328px #fff, 1312px 1262px #fff, 345px 1567px #fff,
      373px 1238px #fff, 1416px 1625px #fff, 1113px 249px #fff,
      1531px 1288px #fff, 828px 794px #fff, 256px 426px #fff, 869px 1321px #fff,
      1063px 1181px #fff, 631px 635px #fff, 139px 909px #fff, 305px 1160px #fff,
      843px 477px #fff, 1666px 277px #fff, 740px 1019px #fff, 264px 647px #fff,
      1459px 1055px #fff, 976px 919px #fff, 1728px 1147px #fff,
      1426px 1559px #fff, 444px 525px #fff, 1657px 1940px #fff,
      250px 1287px #fff, 1596px 1399px #fff, 555px 213px #fff, 1952px 647px #fff,
      1371px 1635px #fff, 803px 1622px #fff, 1460px 534px #fff,
      1813px 984px #fff, 1122px 1977px #fff, 403px 884px #fff, 1098px 896px #fff,
      1124px 1318px #fff, 372px 1710px #fff, 1308px 1233px #fff,
      1138px 1158px #fff, 416px 1174px #fff, 431px 1114px #fff,
      210px 1074px #fff, 1111px 563px #fff, 31px 1472px #fff, 1629px 1311px #fff,
      677px 1022px #fff, 232px 747px #fff, 1753px 868px #fff, 35px 1207px #fff,
      203px 1631px #fff, 1977px 468px #fff, 1261px 1036px #fff, 322px 669px #fff,
      1710px 1340px #fff, 1230px 463px #fff, 1727px 1826px #fff,
      938px 1553px #fff, 1562px 1690px #fff, 78px 424px #fff, 1927px 1980px #fff,
      1632px 1312px #fff, 1352px 1325px #fff, 66px 34px #fff, 535px 138px #fff,
      152px 1324px #fff, 1816px 580px #fff, 1180px 756px #fff,
      1701px 1902px #fff, 199px 1993px #fff, 70px 1926px #fff,
      1342px 1276px #fff, 23px 1926px #fff, 1403px 172px #fff, 88px 1368px #fff,
      1437px 1816px #fff, 530px 845px #fff, 845px 37px #fff, 871px 1642px #fff,
      1357px 286px #fff, 1690px 1192px #fff, 266px 468px #fff, 1826px 427px #fff,
      1256px 262px #fff, 1053px 99px #fff, 384px 106px #fff, 32px 50px #fff,
      1083px 14px #fff, 19px 1667px #fff, 97px 1887px #fff, 1356px 1699px #fff,
      1487px 1050px #fff, 900px 1052px #fff, 807px 1741px #fff, 517px 360px #fff,
      332px 404px #fff, 1253px 961px #fff, 43px 558px #fff, 1535px 371px #fff,
      448px 243px #fff, 1560px 925px #fff, 326px 745px #fff, 956px 1182px #fff,
      1171px 1387px #fff, 220px 1364px #fff, 162px 1747px #fff, 1116px 47px #fff,
      1507px 1228px #fff, 912px 328px #fff, 18px 345px #fff, 863px 725px #fff,
      1373px 338px #fff, 174px 76px #fff, 42px 1740px #fff, 1550px 304px #fff,
      1773px 1595px #fff, 1285px 778px #fff, 1734px 1881px #fff,
      1433px 1736px #fff, 1449px 1573px #fff, 1484px 784px #fff,
      384px 1716px #fff, 1178px 808px #fff, 474px 1387px #fff, 942px 999px #fff,
      405px 1907px #fff, 2px 1421px #fff, 70px 59px #fff, 391px 957px #fff,
      813px 1369px #fff, 453px 1648px #fff, 666px 1870px #fff, 837px 211px #fff,
      9px 699px #fff, 468px 862px #fff, 1772px 963px #fff, 1598px 663px #fff,
      220px 1204px #fff, 51px 1405px #fff, 1188px 1429px #fff, 865px 1178px #fff,
      602px 33px #fff, 440px 1498px #fff, 428px 921px #fff, 1756px 316px #fff,
      1886px 1965px #fff, 1099px 782px #fff, 1250px 140px #fff,
      542px 1471px #fff, 81px 427px #fff, 507px 1112px #fff, 1034px 1273px #fff,
      1857px 1608px #fff, 1873px 849px #fff, 1194px 880px #fff,
      1385px 1948px #fff, 1339px 571px #fff, 1318px 1213px #fff,
      1999px 1461px #fff, 446px 1347px #fff, 730px 914px #fff, 416px 670px #fff,
      665px 1298px #fff, 621px 528px #fff, 578px 1792px #fff, 1972px 1433px #fff,
      677px 1908px #fff, 806px 1953px #fff, 1203px 1592px #fff,
      1138px 1362px #fff, 1253px 153px #fff, 1512px 1326px #fff,
      1726px 1015px #fff, 685px 141px #fff, 1031px 883px #fff,
      1269px 1272px #fff, 1908px 1728px #fff, 1433px 378px #fff,
      703px 207px #fff, 350px 935px #fff, 1475px 1326px #fff, 1114px 1504px #fff,
      450px 941px #fff, 1950px 1825px #fff, 1507px 1113px #fff, 931px 296px #fff,
      271px 1172px #fff, 823px 531px #fff, 1883px 279px #fff, 80px 1834px #fff,
      242px 137px #fff, 275px 1087px #fff, 1375px 1319px #fff, 820px 1176px #fff,
      912px 26px #fff, 572px 79px #fff, 303px 655px #fff, 1849px 1435px #fff,
      702px 684px #fff, 987px 1945px #fff, 1934px 1667px #fff, 267px 1753px #fff,
      216px 606px #fff, 515px 1412px #fff, 1598px 1181px #fff, 897px 1853px #fff,
      1083px 121px #fff, 413px 642px #fff, 1819px 253px #fff, 765px 556px #fff,
      525px 645px #fff, 1748px 1135px #fff, 1580px 1977px #fff,
      1580px 223px #fff, 515px 134px #fff, 116px 240px #fff, 1629px 1470px #fff,
      1105px 1259px #fff, 786px 1334px #fff, 1908px 204px #fff,
      1519px 603px #fff, 666px 1991px #fff, 1208px 1483px #fff, 73px 529px #fff,
      1246px 1602px #fff, 1318px 118px #fff, 1360px 937px #fff,
      1631px 1032px #fff, 519px 765px #fff, 916px 431px #fff, 1931px 31px #fff,
      894px 224px #fff, 1426px 316px #fff, 1339px 1550px #fff, 76px 1274px #fff,
      638px 1452px #fff, 353px 1758px #fff, 766px 1490px #fff, 1410px 207px #fff,
      1560px 997px #fff, 451px 766px #fff, 1229px 1551px #fff, 1135px 271px #fff,
      1879px 1980px #fff, 467px 1434px #fff, 1093px 911px #fff,
      1682px 396px #fff, 824px 1910px #fff, 465px 167px #fff, 1324px 506px #fff,
      1731px 789px #fff, 1092px 172px #fff, 749px 983px #fff, 1545px 284px #fff,
      1663px 1248px #fff, 1575px 11px #fff, 1691px 481px #fff, 58px 1401px #fff,
      1677px 523px #fff, 1068px 117px #fff, 1045px 1694px #fff,
      1204px 117px #fff, 1232px 272px #fff, 599px 893px #fff, 1655px 1178px #fff,
      270px 1912px #fff, 599px 1774px #fff, 16px 999px #fff, 752px 106px #fff,
      1534px 219px #fff, 1801px 1109px #fff, 1178px 184px #fff, 67px 243px #fff,
      1641px 221px #fff, 1555px 1523px #fff, 689px 1878px #fff,
      540px 1806px #fff, 1888px 1799px #fff, 691px 772px #fff,
      1217px 1399px #fff, 936px 1856px #fff, 909px 1831px #fff,
      1067px 982px #fff, 1669px 318px #fff, 526px 655px #fff, 1415px 1580px #fff,
      370px 1959px #fff, 1736px 1655px #fff, 606px 1857px #fff,
      1313px 1005px #fff, 544px 95px #fff, 1215px 1591px #fff, 865px 269px #fff,
      630px 1265px #fff, 166px 523px #fff, 296px 69px #fff, 1291px 1400px #fff,
      515px 1464px #fff, 1430px 315px #fff, 721px 1265px #fff, 383px 796px #fff;
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1081px 1627px #fff, 857px 1910px #fff, 1043px 221px #fff,
      1333px 240px #fff, 1717px 545px #fff, 466px 2px #fff, 1784px 849px #fff,
      1218px 532px #fff, 336px 794px #fff, 237px 395px #fff, 1735px 228px #fff,
      435px 1332px #fff, 1892px 1688px #fff, 477px 473px #fff, 1488px 383px #fff,
      465px 709px #fff, 1112px 1445px #fff, 1307px 760px #fff, 638px 82px #fff,
      1948px 1031px #fff, 1279px 341px #fff, 774px 964px #fff,
      1487px 1354px #fff, 1238px 885px #fff, 183px 1616px #fff,
      382px 1294px #fff, 1474px 892px #fff, 1968px 1008px #fff,
      1114px 149px #fff, 1603px 1306px #fff, 920px 1897px #fff,
      1740px 1842px #fff, 409px 695px #fff, 820px 972px #fff, 1338px 793px #fff,
      80px 1354px #fff, 199px 79px #fff, 1535px 725px #fff, 1885px 334px #fff,
      1866px 584px #fff, 244px 682px #fff, 1472px 684px #fff, 282px 1196px #fff,
      710px 1500px #fff, 60px 85px #fff, 1400px 827px #fff, 218px 938px #fff,
      22px 703px #fff, 1381px 1050px #fff, 1789px 801px #fff, 1160px 1975px #fff,
      1108px 1708px #fff, 1907px 213px #fff, 1709px 1593px #fff,
      1544px 1159px #fff, 1718px 1119px #fff, 1225px 1607px #fff,
      1354px 1249px #fff, 1827px 1696px #fff, 228px 1519px #fff,
      1526px 34px #fff, 1422px 160px #fff, 276px 1226px #fff, 1286px 1330px #fff,
      1627px 558px #fff, 1047px 547px #fff, 804px 1624px #fff, 523px 1708px #fff,
      1009px 1268px #fff, 1017px 1512px #fff, 102px 245px #fff,
      1009px 1251px #fff, 352px 1288px #fff, 780px 20px #fff, 786px 445px #fff,
      1931px 461px #fff, 1559px 555px #fff, 1129px 1774px #fff,
      1316px 799px #fff, 1955px 65px #fff, 1190px 1770px #fff, 510px 46px #fff,
      1686px 769px #fff, 1289px 846px #fff, 291px 954px #fff, 1931px 1381px #fff,
      1431px 671px #fff, 440px 49px #fff, 1498px 364px #fff, 820px 1506px #fff,
      621px 826px #fff, 475px 122px #fff, 937px 818px #fff, 264px 1811px #fff,
      1302px 877px #fff, 896px 938px #fff, 1278px 1406px #fff, 413px 522px #fff,
      704px 864px #fff, 557px 1687px #fff, 888px 1120px #fff, 1006px 1992px #fff,
      1533px 1198px #fff, 1614px 1635px #fff, 1791px 927px #fff,
      1565px 1312px #fff, 1966px 669px #fff, 567px 1167px #fff,
      363px 1671px #fff, 54px 941px #fff, 1325px 1891px #fff, 449px 253px #fff,
      1819px 1259px #fff, 94px 750px #fff, 1788px 159px #fff, 47px 313px #fff,
      1621px 587px #fff, 774px 252px #fff, 864px 528px #fff, 663px 1117px #fff,
      417px 1446px #fff, 1806px 148px #fff, 843px 501px #fff, 414px 86px #fff,
      521px 324px #fff, 34px 1765px #fff, 1242px 1047px #fff, 1601px 1133px #fff,
      1680px 177px #fff, 1552px 1752px #fff, 1234px 101px #fff,
      1152px 160px #fff, 934px 828px #fff, 126px 1861px #fff, 600px 366px #fff,
      231px 783px #fff, 1081px 1977px #fff, 1129px 45px #fff, 859px 1342px #fff,
      992px 459px #fff, 254px 1773px #fff, 884px 110px #fff, 869px 278px #fff,
      723px 1090px #fff, 695px 423px #fff, 1230px 221px #fff, 248px 1954px #fff,
      395px 1069px #fff, 1522px 1055px #fff, 426px 1350px #fff,
      1353px 547px #fff, 371px 1623px #fff, 911px 309px #fff, 74px 156px #fff,
      1274px 1734px #fff, 556px 678px #fff, 1702px 347px #fff, 576px 391px #fff,
      998px 1416px #fff, 23px 603px #fff, 428px 51px #fff, 1649px 6px #fff,
      525px 751px #fff, 502px 1478px #fff, 1617px 1012px #fff, 953px 471px #fff,
      507px 683px #fff, 276px 338px #fff, 596px 1034px #fff, 1679px 1119px #fff,
      1308px 705px #fff, 1005px 1900px #fff, 1994px 601px #fff,
      1496px 448px #fff, 1686px 1897px #fff, 622px 1401px #fff,
      1447px 281px #fff, 1646px 678px #fff, 1321px 1273px #fff, 96px 386px #fff,
      844px 779px #fff, 994px 448px #fff, 1458px 764px #fff, 1859px 1339px #fff,
      115px 442px #fff, 867px 774px #fff, 94px 806px #fff, 115px 501px #fff,
      1289px 316px #fff, 1530px 1410px #fff, 1216px 1095px #fff,
      1956px 1305px #fff, 1518px 682px #fff, 696px 964px #fff,
      1050px 1521px #fff, 1256px 452px #fff, 646px 739px #fff, 833px 1531px #fff,
      193px 1376px #fff, 1205px 1436px #fff;
    animation: animStar 100s linear infinite;
  }
  #stars2:after {
    content: " ";
    position: absolute;

    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 1081px 1627px #fff, 857px 1910px #fff, 1043px 221px #fff,
      1333px 240px #fff, 1717px 545px #fff, 466px 2px #fff, 1784px 849px #fff,
      1218px 532px #fff, 336px 794px #fff, 237px 395px #fff, 1735px 228px #fff,
      435px 1332px #fff, 1892px 1688px #fff, 477px 473px #fff, 1488px 383px #fff,
      465px 709px #fff, 1112px 1445px #fff, 1307px 760px #fff, 638px 82px #fff,
      1948px 1031px #fff, 1279px 341px #fff, 774px 964px #fff,
      1487px 1354px #fff, 1238px 885px #fff, 183px 1616px #fff,
      382px 1294px #fff, 1474px 892px #fff, 1968px 1008px #fff,
      1114px 149px #fff, 1603px 1306px #fff, 920px 1897px #fff,
      1740px 1842px #fff, 409px 695px #fff, 820px 972px #fff, 1338px 793px #fff,
      80px 1354px #fff, 199px 79px #fff, 1535px 725px #fff, 1885px 334px #fff,
      1866px 584px #fff, 244px 682px #fff, 1472px 684px #fff, 282px 1196px #fff,
      710px 1500px #fff, 60px 85px #fff, 1400px 827px #fff, 218px 938px #fff,
      22px 703px #fff, 1381px 1050px #fff, 1789px 801px #fff, 1160px 1975px #fff,
      1108px 1708px #fff, 1907px 213px #fff, 1709px 1593px #fff,
      1544px 1159px #fff, 1718px 1119px #fff, 1225px 1607px #fff,
      1354px 1249px #fff, 1827px 1696px #fff, 228px 1519px #fff,
      1526px 34px #fff, 1422px 160px #fff, 276px 1226px #fff, 1286px 1330px #fff,
      1627px 558px #fff, 1047px 547px #fff, 804px 1624px #fff, 523px 1708px #fff,
      1009px 1268px #fff, 1017px 1512px #fff, 102px 245px #fff,
      1009px 1251px #fff, 352px 1288px #fff, 780px 20px #fff, 786px 445px #fff,
      1931px 461px #fff, 1559px 555px #fff, 1129px 1774px #fff,
      1316px 799px #fff, 1955px 65px #fff, 1190px 1770px #fff, 510px 46px #fff,
      1686px 769px #fff, 1289px 846px #fff, 291px 954px #fff, 1931px 1381px #fff,
      1431px 671px #fff, 440px 49px #fff, 1498px 364px #fff, 820px 1506px #fff,
      621px 826px #fff, 475px 122px #fff, 937px 818px #fff, 264px 1811px #fff,
      1302px 877px #fff, 896px 938px #fff, 1278px 1406px #fff, 413px 522px #fff,
      704px 864px #fff, 557px 1687px #fff, 888px 1120px #fff, 1006px 1992px #fff,
      1533px 1198px #fff, 1614px 1635px #fff, 1791px 927px #fff,
      1565px 1312px #fff, 1966px 669px #fff, 567px 1167px #fff,
      363px 1671px #fff, 54px 941px #fff, 1325px 1891px #fff, 449px 253px #fff,
      1819px 1259px #fff, 94px 750px #fff, 1788px 159px #fff, 47px 313px #fff,
      1621px 587px #fff, 774px 252px #fff, 864px 528px #fff, 663px 1117px #fff,
      417px 1446px #fff, 1806px 148px #fff, 843px 501px #fff, 414px 86px #fff,
      521px 324px #fff, 34px 1765px #fff, 1242px 1047px #fff, 1601px 1133px #fff,
      1680px 177px #fff, 1552px 1752px #fff, 1234px 101px #fff,
      1152px 160px #fff, 934px 828px #fff, 126px 1861px #fff, 600px 366px #fff,
      231px 783px #fff, 1081px 1977px #fff, 1129px 45px #fff, 859px 1342px #fff,
      992px 459px #fff, 254px 1773px #fff, 884px 110px #fff, 869px 278px #fff,
      723px 1090px #fff, 695px 423px #fff, 1230px 221px #fff, 248px 1954px #fff,
      395px 1069px #fff, 1522px 1055px #fff, 426px 1350px #fff,
      1353px 547px #fff, 371px 1623px #fff, 911px 309px #fff, 74px 156px #fff,
      1274px 1734px #fff, 556px 678px #fff, 1702px 347px #fff, 576px 391px #fff,
      998px 1416px #fff, 23px 603px #fff, 428px 51px #fff, 1649px 6px #fff,
      525px 751px #fff, 502px 1478px #fff, 1617px 1012px #fff, 953px 471px #fff,
      507px 683px #fff, 276px 338px #fff, 596px 1034px #fff, 1679px 1119px #fff,
      1308px 705px #fff, 1005px 1900px #fff, 1994px 601px #fff,
      1496px 448px #fff, 1686px 1897px #fff, 622px 1401px #fff,
      1447px 281px #fff, 1646px 678px #fff, 1321px 1273px #fff, 96px 386px #fff,
      844px 779px #fff, 994px 448px #fff, 1458px 764px #fff, 1859px 1339px #fff,
      115px 442px #fff, 867px 774px #fff, 94px 806px #fff, 115px 501px #fff,
      1289px 316px #fff, 1530px 1410px #fff, 1216px 1095px #fff,
      1956px 1305px #fff, 1518px 682px #fff, 696px 964px #fff,
      1050px 1521px #fff, 1256px 452px #fff, 646px 739px #fff, 833px 1531px #fff,
      193px 1376px #fff, 1205px 1436px #fff;
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 13px 849px #fff, 1785px 1211px #fff, 866px 943px #fff,
      1269px 1284px #fff, 1049px 228px #fff, 163px 1732px #fff, 658px 812px #fff,
      974px 1792px #fff, 962px 913px #fff, 1848px 170px #fff, 264px 1653px #fff,
      645px 1375px #fff, 400px 1129px #fff, 1271px 171px #fff,
      1722px 1955px #fff, 117px 1525px #fff, 1738px 1113px #fff,
      164px 501px #fff, 388px 272px #fff, 193px 263px #fff, 82px 1370px #fff,
      1637px 669px #fff, 1746px 1369px #fff, 1258px 1023px #fff,
      1697px 1163px #fff, 1829px 1430px #fff, 1431px 1055px #fff,
      1197px 682px #fff, 881px 1828px #fff, 341px 141px #fff, 1226px 1588px #fff,
      198px 1862px #fff, 746px 1976px #fff, 176px 641px #fff, 1760px 499px #fff,
      20px 1108px #fff, 232px 382px #fff, 1318px 1817px #fff, 897px 139px #fff,
      1734px 1650px #fff, 299px 641px #fff, 1991px 1032px #fff,
      1191px 454px #fff, 1980px 1537px #fff, 465px 255px #fff,
      1394px 1668px #fff, 190px 650px #fff, 1598px 1225px #fff,
      1824px 452px #fff, 1441px 770px #fff, 1986px 682px #fff, 1882px 545px #fff,
      1279px 129px #fff, 817px 558px #fff, 1171px 1930px #fff, 1865px 33px #fff,
      1096px 834px #fff, 1783px 473px #fff, 596px 1523px #fff, 1396px 137px #fff,
      1px 1962px #fff, 1732px 679px #fff, 3px 656px #fff, 597px 995px #fff,
      1313px 230px #fff, 1707px 1670px #fff, 841px 386px #fff, 255px 1430px #fff,
      1297px 182px #fff, 615px 1969px #fff, 643px 446px #fff, 908px 265px #fff,
      747px 615px #fff, 1477px 1305px #fff, 180px 843px #fff, 438px 487px #fff,
      163px 1436px #fff, 1251px 1170px #fff, 535px 924px #fff, 898px 393px #fff,
      984px 430px #fff, 1268px 419px #fff, 505px 1359px #fff, 571px 1078px #fff,
      194px 1248px #fff, 1816px 1300px #fff, 1847px 1971px #fff,
      1174px 531px #fff, 256px 618px #fff, 1065px 1149px #fff, 664px 339px #fff,
      1470px 1774px #fff, 563px 480px #fff, 723px 305px #fff, 1397px 1714px #fff,
      574px 1879px #fff, 483px 391px #fff, 1939px 1541px #fff, 597px 984px #fff,
      1093px 1694px #fff;
    animation: animStar 150s linear infinite;
  }
  #stars3:after {
    content: " ";
    position: absolute;

    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 13px 849px #fff, 1785px 1211px #fff, 866px 943px #fff,
      1269px 1284px #fff, 1049px 228px #fff, 163px 1732px #fff, 658px 812px #fff,
      974px 1792px #fff, 962px 913px #fff, 1848px 170px #fff, 264px 1653px #fff,
      645px 1375px #fff, 400px 1129px #fff, 1271px 171px #fff,
      1722px 1955px #fff, 117px 1525px #fff, 1738px 1113px #fff,
      164px 501px #fff, 388px 272px #fff, 193px 263px #fff, 82px 1370px #fff,
      1637px 669px #fff, 1746px 1369px #fff, 1258px 1023px #fff,
      1697px 1163px #fff, 1829px 1430px #fff, 1431px 1055px #fff,
      1197px 682px #fff, 881px 1828px #fff, 341px 141px #fff, 1226px 1588px #fff,
      198px 1862px #fff, 746px 1976px #fff, 176px 641px #fff, 1760px 499px #fff,
      20px 1108px #fff, 232px 382px #fff, 1318px 1817px #fff, 897px 139px #fff,
      1734px 1650px #fff, 299px 641px #fff, 1991px 1032px #fff,
      1191px 454px #fff, 1980px 1537px #fff, 465px 255px #fff,
      1394px 1668px #fff, 190px 650px #fff, 1598px 1225px #fff,
      1824px 452px #fff, 1441px 770px #fff, 1986px 682px #fff, 1882px 545px #fff,
      1279px 129px #fff, 817px 558px #fff, 1171px 1930px #fff, 1865px 33px #fff,
      1096px 834px #fff, 1783px 473px #fff, 596px 1523px #fff, 1396px 137px #fff,
      1px 1962px #fff, 1732px 679px #fff, 3px 656px #fff, 597px 995px #fff,
      1313px 230px #fff, 1707px 1670px #fff, 841px 386px #fff, 255px 1430px #fff,
      1297px 182px #fff, 615px 1969px #fff, 643px 446px #fff, 908px 265px #fff,
      747px 615px #fff, 1477px 1305px #fff, 180px 843px #fff, 438px 487px #fff,
      163px 1436px #fff, 1251px 1170px #fff, 535px 924px #fff, 898px 393px #fff,
      984px 430px #fff, 1268px 419px #fff, 505px 1359px #fff, 571px 1078px #fff,
      194px 1248px #fff, 1816px 1300px #fff, 1847px 1971px #fff,
      1174px 531px #fff, 256px 618px #fff, 1065px 1149px #fff, 664px 339px #fff,
      1470px 1774px #fff, 563px 480px #fff, 723px 305px #fff, 1397px 1714px #fff,
      574px 1879px #fff, 483px 391px #fff, 1939px 1541px #fff, 597px 984px #fff,
      1093px 1694px #fff;
  }
  @keyframes animStar {
    from {
      transform: translateY(-1000px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
`;

// css ỉtem đăng ký
export const ItemFormSignUp = styled(Form)`
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 50px 95px;
  background-image: url("https://melkior-nguyen.github.io/Portfolio/static/media/bg2.e6fe0abcb2a72bd51eee.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%); */
  animation: signUpAnimation 1s linear;
  @keyframes signUpAnimation {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
  & > div:nth-child(2) {
    font-size: 45px;
    font-weight: bold;
    color: white;
  }
  .group-img {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0px;
    & img {
      width: 11%;
      height: 11%;
      padding: 10px;
      cursor: pointer;
      border-radius: 50%;
      transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
      &:hover {
        /* box-shadow: 0 0 20px 5px violet; */
        transform: scale(1.2);
        background-color: #03e9f4;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
          0 0 600px #03e9f4;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
      }
    }
    .icon-google {
      background-color: white;
      box-shadow: 0 0 30px 5px gray;
    }
    .icon-discord {
      background-color: rgb(88, 101, 242);
      box-shadow: 0 0 20px 5px rgb(88, 101, 242);
    }
    .icon-facebook {
      background-color: rgb(24, 119, 242);
      box-shadow: 0 0 20px 5px rgb(24, 119, 242);
    }
  }
  .group-span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px 10px;
    & span {
      display: block;
    }
    & > span:first-child {
      border-bottom: 1px solid gray;
      width: 100%;
    }
    & > span:nth-child(2) {
      color: white;
    }
    & > span:last-child {
      border-bottom: 1px solid gray;
      width: 100%;
    }
  }
  .submit-register {
    width: 96%;
    margin: auto;
    margin-top: 10px;
    border-radius: 8px;
    padding: 10px 0px;
    color: white;
    background-color: blueviolet;
    font-size: 20px;
    cursor: pointer;
    letter-spacing: 3px; //xác định khoảng cách giữa các ký tự trong văn bản
    transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
    &:hover {
      transform: scale(0.9);
      color: #12141d;
      background-color: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 600px #03e9f4;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    }
  }
  .item-login {
    display: flex;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    margin: 18px;

    & > div:first-child {
      color: gray;
      font-size: 16px;
    }
    & > div:last-child {
      color: blueviolet;
      font-style: italic;
      font-size: large;
      font-weight: 600;
      letter-spacing: 4px; //xác định khoảng cách giữa các ký tự trong văn bản
    }
    .signInAnimation {
      animation: signInAnimation 1s linear;

      @keyframes signInAnimation {
        from {
          transform: rotateY(180deg);
        }
        to {
          transform: rotateY(0deg);
        }
      }
    }
  }
  & > div:last-child {
    color: gray;
  }
`;

// css Form đăng ký
export const FormSignUp = styled(Form)`
  height: 220px;
  margin-top: 20px;
  overflow-y: auto;
  padding: 10px;
  // css thanh scroll
  &::-webkit-scrollbar-thumb {
    background-color: violet; /* Màu của nút kéo */
    border-radius: 5px; /* Bo góc của nút kéo */
  }
  &::-webkit-scrollbar {
    width: 2px; /* Độ rộng của thanh cuộn */
  }
  &::-webkit-scrollbar-track {
    /* background-color: #cccccc; Màu của vùng cuộn */
  }
  // class text error ant
  .ant-form-item .ant-form-item-explain-error {
    color: #ff4d4f;
    display: flex;
    justify-content: flex-start;
    font-style: italic;
    font-size: 16px;
  }
  .custom-input-name {
    display: flex;
    gap: 16px;
    .first-name {
      width: 30%;
    }
    .last-name {
      width: 70%;
    }
  }
  // class input password (phần conten)
  .ant-input-affix-wrapper > input.ant-input {
    /* background-color: rgb(13, 18, 32); */
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);

    color: white;
    &::placeholder {
      color: gray;
      font-style: italic;
    }
  }
  // class ant icon hiện, ẩn password
  .anticon svg {
    color: gray;
    font-size: 18px;
  }
  .custom-input {
    color: white;
    height: 50px;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #12141d 100%);
    /* background-color: rgb(13, 18, 32); */
    border: none;
    &::placeholder {
      color: gray;
      font-style: italic;
    }
    &:hover {
      box-shadow: 0 0 0 1px #6366f1;
    }
  }
  .border-violet {
    box-shadow: 0 0 0 1px violet;
  }
`;
export const ItemVerifyEmail = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  & > div:first-child {
    font-size: 40px;
    font-weight: bold;
  }

  & > div:nth-child(2) {
  }
  & > div:nth-child(3) {
    span {
      cursor: pointer;
      font-weight: bold;
    }
  }
  & > div:first-child {
  }
`;
