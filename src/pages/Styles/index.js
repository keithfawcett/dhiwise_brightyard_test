import React from "react";

import { Text, List, Img, Line, Stack } from "components";

const StylesPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-end mx-[auto] p-[120px] sm:p-[15px] md:p-[78px] w-[100%]">
        <div className="flex flex-col justify-start max-w-[1275px] ml-[auto] mr-[auto] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="font-bold text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Colors
          </Text>
          <List
            className="sm:gap-[37px] md:gap-[49px] gap-[75px] grid min-h-[auto] mt-[101px] sm:mt-[51px] md:mt-[66px] w-[100%]"
            orientation="vertical"
          >
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <div className="bg-black_900 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[26px] px-[40px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[12px] md:my-[15px] my-[24px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  BLACK
                </Text>
              </div>
              <div className="bg-bluegray_900 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[30px] px-[46px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold md:my-[11px] my-[18px] sm:my-[9px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  NAVY
                </Text>
              </div>
              <div className="bg-indigo_A400 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[32px] px-[49px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold my-[15px] sm:my-[7px] md:my-[9px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  BLUE
                </Text>
              </div>
              <div className="bg-teal_300 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[26px] px-[41px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[11px] md:my-[15px] my-[23px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  GREEN
                </Text>
              </div>
              <div className="bg-orange_300 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[20px] px-[32px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[16px] md:my-[20px] my-[32px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  YELLOW
                </Text>
              </div>
              <div className="bg-red_A100 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[33px] px-[51px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold my-[13px] sm:my-[6px] md:my-[8px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  PINK
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <div className="bg-bluegray_600 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[20px] px-[31px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[16px] md:my-[21px] my-[33px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  GREY 90
                </Text>
              </div>
              <div className="bg-bluegray_400 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[20px] px-[32px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[16px] md:my-[20px] my-[32px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  GREY 70
                </Text>
              </div>
              <div className="bg-gray_300 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[20px] px-[31px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[16px] md:my-[21px] my-[33px] text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  GREY 50
                </Text>
              </div>
              <div className="bg-bluegray_50 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[20px] px-[31px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[16px] md:my-[21px] my-[33px] text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  GREY 30
                </Text>
              </div>
              <div className="bg-gray_50 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[21px] px-[33px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[15px] md:my-[20px] my-[31px] text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  GREY 10
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-col h-[150px] sm:h-[76px] md:h-[99px] items-center sm:p-[15px] md:px-[26px] px-[41px] rounded-radius12 w-[150px] sm:w-[75px] md:w-[98px]">
                <Text
                  className="font-bold sm:my-[11px] md:my-[15px] my-[23px] text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  WHITE
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col justify-start max-w-[1276px] ml-[auto] mr-[auto] md:mt-[114px] mt-[175px] sm:mt-[88px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="font-bold text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Typography
          </Text>
          <div className="flex flex-col justify-start sm:mt-[45px] md:mt-[58px] mt-[90px] sm:mx-[0] pt-[15px] sm:pt-[7px] md:pt-[9px] sm:px-[0] sm:w-[100%] w-[51%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
              <Text className="text-bluegray_900 w-[auto]" as="h2" variant="h2">
                Inter
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[19px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <Img
                  src="images/img_link.svg"
                  className="sm:h-[13px] md:h-[16px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[24px]"
                  alt="link"
                />
                <a
                  href={"https://fonts.google.com/specimen/Inter"}
                  target="_blank"
                  className="font-normal mb-[2px] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[16px] text-bluegray_600 w-[auto]"
                  rel="noreferrer"
                >
                  fonts.google.com/specimen/Inter
                </a>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[21px] md:mt-[27px] mt-[42px] w-[100%]">
              <Text
                className="font-light mt-[2px] text-bluegray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                Light
              </Text>
              <Text
                className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                Regular
              </Text>
              <Text
                className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                Medium
              </Text>
              <Text
                className="font-semibold text-bluegray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                Semi Bold
              </Text>
              <Text
                className="font-bold mt-[1px] text-bluegray_400 w-[auto]"
                as="h5"
                variant="h5"
              >
                Bold
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end sm:mt-[45px] md:mt-[58px] mt-[90px] sm:pt-[17px] md:pt-[22px] pt-[35px] w-[100%]">
            <div className="flex flex-col justify-start w-[100%]">
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Typography
              </Text>
              <Line className="bg-gray_100 h-[1px] sm:mt-[12px] md:mt-[15px] mt-[24px] w-[100%]" />
            </div>
            <div className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[37px] w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                  <Text
                    className="font-normal mb-[1px] not-italic text-bluegray_400 w-[auto]"
                    variant="body2"
                  >
                    TYPOGRAPHY
                  </Text>
                  <Text
                    className="font-normal ml-[110px] sm:ml-[55px] md:ml-[71px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                    variant="body2"
                  >
                    FONT SIZE
                  </Text>
                  <Text
                    className="font-normal mb-[1px] ml-[137px] sm:ml-[69px] md:ml-[89px] not-italic text-bluegray_400 w-[auto]"
                    variant="body2"
                  >
                    LINE HEIGHT
                  </Text>
                  <Text
                    className="font-normal ml-[120px] sm:ml-[60px] md:ml-[78px] my-[1px] not-italic text-bluegray_400 w-[auto]"
                    variant="body2"
                  >
                    PREVIEW
                  </Text>
                </div>
                <Line className="bg-gray_100 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[35px] w-[100%]" />
              </div>
            </div>
            <List
              className="sm:gap-[26px] md:gap-[34px] gap-[53.26px] grid min-h-[auto] sm:mt-[25px] md:mt-[32px] mt-[50px] w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      H1
                    </Text>
                    <Text
                      className="font-normal md:ml-[128px] ml-[197px] sm:ml-[99px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      36px
                    </Text>
                    <Text
                      className="font-normal md:ml-[112px] ml-[172px] sm:ml-[87px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      60px
                    </Text>
                    <Text
                      className="md:ml-[112px] ml-[172px] sm:ml-[87px] text-bluegray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[34px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                    <Text
                      className="font-normal md:mt-[3px] sm:mt-[3px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      H2
                    </Text>
                    <Text
                      className="font-normal md:ml-[126px] ml-[193px] sm:ml-[97px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      28px
                    </Text>
                    <Text
                      className="font-normal md:ml-[113px] ml-[173px] sm:ml-[87px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      40px
                    </Text>
                    <Text
                      className="md:ml-[112px] ml-[172px] sm:ml-[87px] text-bluegray_600 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[43px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-normal mt-[4px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      H3
                    </Text>
                    <Text
                      className="font-normal md:mt-[3px] sm:mt-[3px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      24px
                    </Text>
                    <Text
                      className="font-normal md:mt-[3px] sm:mt-[3px] mt-[6px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      40px
                    </Text>
                    <Text
                      className="font-bold text-bluegray_600 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[22px] md:mt-[28px] mt-[44px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Text
                      className="font-normal my-[2px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      H4
                    </Text>
                    <Text
                      className="font-normal md:ml-[125px] ml-[192px] sm:ml-[97px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      20px
                    </Text>
                    <Text
                      className="font-normal md:ml-[112px] ml-[172px] sm:ml-[87px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      40px
                    </Text>
                    <Text
                      className="font-bold sm:mb-[2px] md:mb-[3px] mb-[5px] md:ml-[112px] ml-[172px] sm:ml-[87px] text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[23px] md:mt-[30px] mt-[47px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      H5
                    </Text>
                    <Text
                      className="font-normal md:ml-[126px] ml-[193px] sm:ml-[97px] mt-[3px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      18px
                    </Text>
                    <Text
                      className="font-normal md:ml-[114px] ml-[175px] sm:ml-[88px] mt-[3px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      30px
                    </Text>
                    <Text
                      className="font-bold mb-[1px] md:ml-[112px] ml-[172px] sm:ml-[87px] text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[23px] md:mt-[30px] mt-[47px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                    <Text
                      className="font-normal mt-[3px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Body
                    </Text>
                    <Text
                      className="font-normal md:ml-[111px] ml-[171px] sm:ml-[86px] my-[2px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      16px
                    </Text>
                    <Text
                      className="font-normal md:ml-[114px] ml-[175px] sm:ml-[88px] my-[2px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      27 - 30px
                    </Text>
                    <Text
                      className="font-bold ml-[128px] sm:ml-[64px] md:ml-[83px] text-bluegray_600 w-[auto]"
                      variant="body2"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[23px] md:mt-[30px] mt-[47px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                    <Text
                      className="font-normal my-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Small
                    </Text>
                    <Text
                      className="font-normal md:ml-[110px] ml-[169px] sm:ml-[85px] mt-[2px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      14px
                    </Text>
                    <Text
                      className="font-normal md:ml-[114px] ml-[175px] sm:ml-[88px] my-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      27 - 30px
                    </Text>
                    <Text
                      className="font-bold ml-[128px] sm:ml-[64px] md:ml-[83px] text-bluegray_600 w-[auto]"
                      variant="body3"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[23px] md:mt-[30px] mt-[47px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-normal my-[1px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Extra Small
                    </Text>
                    <Text
                      className="font-normal ml-[114px] sm:ml-[57px] md:ml-[74px] mt-[2px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      18px
                    </Text>
                    <Text
                      className="font-normal md:ml-[114px] ml-[175px] sm:ml-[88px] mt-[2px] not-italic text-bluegray_600 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      20px
                    </Text>
                    <Text
                      className="md:ml-[112px] ml-[172px] sm:ml-[87px] text-bluegray_600 w-[auto]"
                      variant="body4"
                    >
                      Almost before we knew it, we had left the ground.
                    </Text>
                  </div>
                  <Line className="bg-gray_100 h-[1px] sm:mt-[23px] md:mt-[30px] mt-[47px] w-[100%]" />
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col justify-start max-w-[1276px] ml-[auto] mr-[auto] md:mt-[113px] mt-[174px] sm:mt-[88px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="font-bold text-bluegray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Layout Grid
          </Text>
          <Stack className="bg-gray_50 h-[820px] sm:mt-[45px] md:mt-[58px] mt-[90px] sm:px-[15px] md:px-[16px] px-[26px] relative rounded-radius12 w-[100%]">
            <Img
              src="images/img_grid_820X1224.svg"
              className="absolute h-[820px] max-w-[100%] sm:w-[100%] w-[96%]"
              alt="Grid"
            />
            <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end left-[5%] sm:mx-[0] sm:px-[0] top-[8%] sm:w-[100%] w-[49%]">
              <Img
                src="images/img_rectangle.png"
                className="max-w-[100%] rounded-radius4 sm:w-[100%] w-[49%]"
                alt="Rectangle Ten"
              />
              <Img
                src="images/img_image1_331X300.png"
                className="max-w-[100%] md:ml-[10px] ml-[16px] sm:ml-[8px] mt-[104px] sm:mt-[52px] md:mt-[67px] rounded-radius4 sm:w-[100%] w-[49%]"
                alt="imageOne"
              />
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default StylesPage;
