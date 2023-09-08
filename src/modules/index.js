"use client";

import Image from "next/image";
import styles from "../app/page.module.css";

import { Box, Grid, useMediaQuery } from "@mui/material";
import ColumnHeader from "../components/ColumnHeader";
import HeaderWithIcon from "../components/HeaderWithIcon";
import { Text } from "../components/Style";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

const athlets = {
  connection:
    "Connect with coaches directly, you can ping coaches to view profile.",
  collaboration:
    "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
  growth:
    "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
};

const players = {
  connection:
    "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
  collaboration:
    "Work with recruiter to increase your chances of finding talented athlete.",
  growth: "Save your time, recruit proper athlets for your team.",
};

export default function Index() {
  const isTablet = useMediaQuery("(max-width:768px)");
  const isMobile = useMediaQuery("(max-width:320px)");

  const textFontSize = isMobile ? "15px" : isTablet ? "18px" : "20px";
  const headerLineHeight = "33px"; // mobile
  const textLineHeight = "18px"; // mobile

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: styles.button__bar,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    },
  };

  return (
    <main className={styles.main}>
      <Box sx={{ maxWidth: { xs: "320px", sm: "768px", xl: "100%" } }}>
        {/* ATHLETS */}
        <Grid container direction={isMobile ? "column" : "row"}>
          <Grid item xs={12} sm={4.5} xl={6}>
            <Box sx={{ height: { xs: "296px" } }}>
              {isMobile && (
                <ColumnHeader
                  header="ATHLETS"
                  fontSize="50px"
                  ml="18px"
                  mb="11px"
                />
              )}

              <Image
                src={
                  isMobile
                    ? "/images/footballer-mobile.svg"
                    : isTablet
                    ? "/images/footballer-tablet.svg"
                    : "/images/footballer.svg"
                }
                alt="Footballer"
                width={isMobile ? 218 : isTablet ? 498 : 678}
                height={isMobile ? 281 : isTablet ? 718 : 950}
                priority
                style={
                  isMobile
                    ? {
                        position: "absolute",
                        marginLeft: "52px",
                        marginRight: "50px",
                      }
                    : isTablet
                    ? {
                        position: "absolute",
                        marginTop: "30px",
                        left: "-80px",
                      }
                    : {
                        position: "absolute",
                        marginTop: "11px",
                        marginLeft: "175px",
                      }
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={7.5} xl={6}>
            <Box
              sx={{
                background: { xs: "#F5F4F9", sm: "#FFF" },
                maxWidth: { xs: "320px", sm: "95%", xl: "100%" },
                height: { xs: "296px", sm: "296px", xl: "321px" },
                marginLeft: { xs: "0px", sm: "0px", xl: "48px" },
                display: { xs: "block" },
                padding: { xs: "72px 18px 30px", sm: "0px" },
              }}
            >
              {isMobile ? (
                <Slider {...settings}>
                  <div>
                    <HeaderWithIcon
                      number="01"
                      numberMB="2px"
                      src="/icon/purple-rectangle-01.svg"
                      svgML="1px"
                      svgWidth="17px"
                      svgHeight="4px"
                      header="CONNECTION"
                      headerMB="20px"
                      headerFontSize="28px"
                      headerLineHeight={headerLineHeight}
                    />
                    <Text fontSize={textFontSize} lineHeight={textLineHeight}>
                      {athlets.connection}
                    </Text>
                  </div>

                  <div>
                    <HeaderWithIcon
                      number="02"
                      numberMB="2px"
                      src="/icon/purple-rectangle-02.svg"
                      svgML="1px"
                      svgWidth="17px"
                      svgHeight="4px"
                      header="COLLABORATION"
                      headerMB="20px"
                      headerFontSize="28px"
                      headerLineHeight={headerLineHeight}
                    />
                    <Text fontSize={textFontSize} lineHeight={textLineHeight}>
                      {athlets.collaboration}
                    </Text>
                  </div>

                  <div>
                    <HeaderWithIcon
                      number="03"
                      numberMB="2px"
                      src="/icon/purple-rectangle-02.svg"
                      svgML="1px"
                      svgWidth="17px"
                      svgHeight="4px"
                      header="GROWTH"
                      headerMB="20px"
                      headerFontSize="28px"
                      headerLineHeight={headerLineHeight}
                    />
                    <Text fontSize={textFontSize} lineHeight={textLineHeight}>
                      {athlets.growth}
                    </Text>
                  </div>
                </Slider>
              ) : (
                <>
                  <ColumnHeader
                    header="ATHLETS"
                    mb={isTablet ? "42px" : "59px"}
                  />

                  {/* <Box
                    sx={{
                      maxWidth: { sm: "95%", xl: "100%" },
                    }}
                  > */}
                  <HeaderWithIcon
                    number="01"
                    numberMB="4px"
                    src="/icon/purple-rectangle-01.svg"
                    svgML="1px"
                    header="CONNECTION"
                    headerMB={isTablet ? "21px" : "31px"}
                  />
                  <Text fontSize={textFontSize}>{athlets.connection}</Text>
                  {/* </Box> */}
                </>
              )}
            </Box>
          </Grid>

          <Box
            sx={{
              background: "#F5F4F9",
              width: "100%",
              maxHeight: { xl: "256px" },
              display: { xs: "block", sm: "flex" },
            }}
          >
            <Grid item xs={12} sm={4.5} xl={6}></Grid>
            {!isMobile && (
              <Grid item xs={12} sm={7.5} xl={6}>
                <Box
                  sx={{
                    maxWidth: { sm: "93%", xl: "75%" },
                    height: { sm: "235px" },
                    marginTop: { sm: "30px", xl: "53px" },
                    marginLeft: { sm: "0px", xl: "48px" },
                  }}
                >
                  <>
                    <HeaderWithIcon
                      number="02"
                      numberMB="4px"
                      src="/icon/purple-rectangle-02.svg"
                      svgML="1px"
                      header="COLLABORATION"
                    />
                    <Text fontSize={textFontSize}>{athlets.collaboration}</Text>
                  </>
                </Box>
              </Grid>
            )}
          </Box>

          {!isMobile && (
            <Box
              sx={{
                background: "#5E3DB3",
                width: "100%",
                height: { sm: "207px", xl: "297px" },
                display: "flex",
              }}
            >
              <Grid item xs={12} sm={4.5} xl={6}></Grid>
              <Grid item xs={12} sm={7.5} xl={6}>
                <Box
                  sx={{
                    maxWidth: { sm: "93%", xl: "75%" },
                    height: "207px",
                    marginTop: { sm: "30px", xl: "80px" },
                    marginLeft: { sm: "0px", xl: "48px" },
                  }}
                >
                  <HeaderWithIcon
                    number="03"
                    numberMB="4px"
                    src="/icon/white-rectangle.svg"
                    svgML={isTablet ? "1px" : null}
                    mr={isTablet ? "10px" : "9px"}
                    header="GROWTH"
                  />
                  <Text color="#FFFFFF" fontSize={textFontSize}>
                    {athlets.growth}
                  </Text>
                </Box>
              </Grid>
            </Box>
          )}
        </Grid>

        {/* PLAYERS */}
        <Grid container direction={isMobile ? "column" : "row"}>
          {!isMobile && (
            <Grid item xs={12} sm={7.5} xl={6}>
              <Box
                sx={{
                  height: { sm: "296px", xl: "361px" },
                  marginLeft: { sm: "31px", xl: "321px" },
                }}
              >
                <>
                  <ColumnHeader
                    header="PLAYERS"
                    mt={isTablet ? "52px" : "124px"}
                    mb={isTablet ? "34px" : "68px"}
                  />
                  <Box
                    sx={{
                      maxWidth: { sm: "95%", xl: "90%" },
                      marginLeft: { sm: "2px" },
                    }}
                  >
                    <HeaderWithIcon
                      number="01"
                      numberMB="4px"
                      src="/icon/purple-rectangle-01.svg"
                      svgML="1px"
                      header="CONNECTION"
                      headerMB={isTablet ? "21px" : "21px"}
                    />
                    <Text fontSize={textFontSize}>{players.connection}</Text>
                  </Box>
                </>
              </Box>
            </Grid>
          )}

          <Box sx={{ height: { xs: "315px", sm: "348px", xl: "485px" } }}>
            <Grid item xs={12} sm={4.5} xl={6}>
              {isMobile && (
                <ColumnHeader
                  header="PLAYERS"
                  fontSize={"50px"}
                  mt={"19px"}
                  ml={"18px"}
                  mb={"22px"}
                />
              )}
              <div style={{ position: isTablet && "relative" }}>
                <Image
                  src={
                    isMobile
                      ? "/images/basketball-mobile.svg"
                      : isTablet
                      ? "/images/basketball-tablet.svg"
                      : "/images/basketball.svg"
                  }
                  alt="Basketball"
                  width={isMobile ? 302 : isTablet ? 691 : 991}
                  height={isMobile ? 250 : isTablet ? 568 : 815}
                  priority
                  style={
                    isMobile
                      ? {
                          position: "absolute",
                          marginLeft: "3px",
                          marginRight: "15px",
                        }
                      : isTablet
                      ? {
                          position: "absolute",
                          marginTop: "33px",
                          left: "-275px",
                        }
                      : {
                          position: "absolute",
                          marginRight: "125px",
                          left: "804px",
                        }
                  }
                />
              </div>
            </Grid>
          </Box>

          <Box
            sx={{
              background: "#F5F4F9",
              width: "100%",
              height: { xs: "238px", sm: "235px", xl: "245px" },
              display: { xs: "block", sm: "flex" },
              padding: { xs: "72px 18px 30px", sm: "0px" },
            }}
          >
            <Grid item xs={12} sm={7.5} xl={6}>
              {isMobile ? (
                <Slider {...settings}>
                  <div>
                    <HeaderWithIcon
                      number="01"
                      numberMB="2px"
                      src="/icon/purple-rectangle-01.svg"
                      svgML="1px"
                      svgWidth="17px"
                      svgHeight="4px"
                      header="CONNECTION"
                      headerMB="20px"
                      headerFontSize="28px"
                      headerLineHeight={headerLineHeight}
                    />
                    <Text fontSize={textFontSize} lineHeight={textLineHeight}>
                      {players.connection}
                    </Text>
                  </div>

                  <div>
                    <HeaderWithIcon
                      number="02"
                      numberMB="2px"
                      src="/icon/purple-rectangle-02.svg"
                      svgML="1px"
                      svgWidth="17px"
                      svgHeight="4px"
                      header="COLLABORATION"
                      headerMB="20px"
                      headerFontSize="28px"
                      headerLineHeight={headerLineHeight}
                    />
                    <Text fontSize={textFontSize} lineHeight={textLineHeight}>
                      {players.collaboration}
                    </Text>
                  </div>

                  <div>
                    <HeaderWithIcon
                      number="03"
                      numberMB="2px"
                      src="/icon/purple-rectangle-02.svg"
                      svgML="1px"
                      svgWidth="17px"
                      svgHeight="4px"
                      header="GROWTH"
                      headerMB="20px"
                      headerFontSize="28px"
                      headerLineHeight={headerLineHeight}
                    />
                    <Text fontSize={textFontSize} lineHeight={textLineHeight}>
                      {players.growth}
                    </Text>
                  </div>
                </Slider>
              ) : (
                <Box
                  sx={{
                    maxWidth: { sm: "90%", xl: "75%" },
                    height: "235px",
                    marginTop: { sm: "51px", xl: "52px" },
                    marginLeft: { sm: "33px", xl: "321px" },
                  }}
                >
                  <HeaderWithIcon
                    number="02"
                    numberMB="4px"
                    src="/icon/purple-rectangle-02.svg"
                    svgML="1px"
                    header="COLLABORATION"
                  />
                  <Text fontSize={textFontSize}>{players.collaboration}</Text>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} sm={4.5} xl={6}></Grid>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                background: "#090C35",
                width: "100%",
                maxHeight: { sm: "207px", xl: "239px" },
                display: "flex",
              }}
            >
              <Grid item xs={12} sm={7.5} xl={6}>
                <Box
                  sx={{
                    maxWidth: { sm: "93%", xl: "75%" },
                    height: "207px",
                    marginTop: { sm: "44px", xl: "87px" },
                    marginLeft: { sm: "33px", xl: "321px" },
                  }}
                >
                  <HeaderWithIcon
                    number="03"
                    numberMB="4px"
                    numberColor="#8F6BE8"
                    src="/icon/white-rectangle.svg"
                    svgML={"1px"}
                    mr={"10px"}
                    header="GROWTH"
                  />
                  <Text color="#FFFFFF" fontSize={textFontSize}>
                    {players.growth}
                  </Text>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4.5} xl={6}></Grid>
            </Box>
          )}
        </Grid>
      </Box>
    </main>
  );
}
