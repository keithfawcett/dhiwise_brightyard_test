import React from "react";

import { Stack, Line, Text, Img, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate14() {
    navigate("/comingsoon");
  }
  function handleNavigate15() {
    navigate("/comingsoon");
  }
  function handleNavigate16() {
    navigate("/comingsoon");
  }
  function handleNavigate17() {
    navigate("/comingsoon");
  }
  function handleNavigate18() {
    navigate("/addnew");
  }
  function handleNavigate20() {
    navigate("/edittask");
  }
  function handleNavigate21() {
    navigate("/addnewtask");
  }
  function handleNavigate22() {
    navigate("/deals");
  }
  function handleNavigate23() {
    navigate("/customers");
  }
  function handleNavigate24() {
    navigate("/tasks");
  }
  function handleNavigate25() {
    navigate("/customers");
  }
  function handleNavigate26() {
    navigate("/deals");
  }
  function handleNavigate27() {
    navigate("/dealdetail");
  }
  function handleNavigate28() {
    navigate("/customers");
  }
  function handleNavigate29() {
    navigate("/customerdetail");
  }
  function handleNavigate30() {
    navigate("/tasks");
  }
  function handleNavigate33() {
    navigate("/dealdetail");
  }
  function handleNavigate34() {
    navigate("/deals");
  }
  function handleNavigate35() {
    navigate("/dealdetail");
  }

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Stack className="bg-gray_50 h-[910px] relative w-[100%]">
          <div className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[94%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Line className="bg-bluegray_50 sm:h-[511px] md:h-[661px] h-[910px] w-[1px]" />
              <div className="bg-gray_100 sm:h-[511px] md:h-[661px] h-[910px] w-[33%]"></div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[94%]">
            <div className="flex flex-col items-center sm:mx-[0] md:p-[14px] p-[20px] sm:px-[15px] sm:py-[11px] sm:w-[100%] w-[68%]">
              <Stack className="h-[392px] relative w-[100%]">
                <Stack className="absolute bg-indigo_A400 border border-bluegray_50 border-solid h-[392px] left-[0] rounded-radius12 sm:w-[100%] w-[46%]">
                  <Stack className="absolute h-[392px] w-[100%]">
                    <div className="absolute bg-indigo_A400 border border-bluegray_50 border-solid flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:pb-[15px] md:pb-[227px] pb-[314px] rounded-radius12 sm:w-[100%] w-[73%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                        <Text
                          className="font-bold sm:mt-[3px] md:mt-[5px] mt-[7px] text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Next Appointment
                        </Text>
                        <div className="bg-white_A700 h-[10px] sm:h-[6px] md:h-[8px] mr-[4px] my-[10px] sm:my-[5px] md:my-[7px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[7px]"></div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient3  bottom-[0] sm:h-[103px] md:h-[133px] h-[182px] right-[0] rounded-radius150 sm:w-[100%] w-[82%]"></div>
                  </Stack>
                  <div
                    className="common-pointer absolute bottom-[0] flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:pb-[13px] md:pb-[17px] pb-[24px] sm:px-[15px] md:px-[17px] px-[24px] sm:w-[100%] w-[73%]"
                    onClick={handleNavigate33}
                  >
                    <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <div className="bg-deep_purple_50 sm:h-[25px] md:h-[32px] h-[44px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
                        <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <div className="flex flex-col justify-end sm:pr-[3px] md:pr-[4px] pr-[6px] sm:py-[3px] md:py-[4px] py-[6px] w-[100%]">
                            <Text
                              className="font-bold mt-[1px] text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              319 Haul Road
                            </Text>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[4px] py-[4px] w-[100%]">
                            <Text
                              className="font-normal mt-[3px] not-italic text-gray_300 w-[auto]"
                              variant="body3"
                            >
                              Glenrock,
                            </Text>
                            <Text
                              className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] not-italic text-gray_300 w-[auto]"
                              variant="body3"
                            >
                              WY
                            </Text>
                            <Text
                              className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] not-italic text-gray_300 w-[auto]"
                              variant="body3"
                            >
                              12345
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end sm:mt-[13px] md:mt-[17px] mt-[24px] pr-[4px] py-[4px] w-[100%]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_300 w-[auto]"
                          variant="body3"
                        >
                          Appointment Date
                        </Text>
                        <Text
                          className="font-bold mt-[12px] sm:mt-[6px] md:mt-[8px] text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Nov 18 2021, 17:00
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[13px] md:mt-[17px] mt-[24px] w-[100%]">
                        <div className="flex flex-col justify-start sm:mt-[3px] md:mt-[5px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                          <Text
                            className="font-normal not-italic text-gray_300 w-[auto]"
                            variant="body3"
                          >
                            Room Area
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[3px] md:mt-[4px] mt-[6px] sm:pr-[3px] md:pr-[4px] pr-[6px] sm:py-[3px] md:py-[4px] py-[6px] w-[100%]">
                            <Text
                              className="flex-grow font-bold mt-[1px] text-white_A700"
                              variant="body3"
                            >
                              100
                            </Text>
                            <Img
                              src="images/img_roomarea.svg"
                              className="flex-shrink-0 max-w-[100%] sm:ml-[3px] md:ml-[5px] ml-[7px] w-[16%]"
                              alt="RoomArea One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-end sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[46%]">
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_300 w-[auto]"
                            variant="body3"
                          >
                            People
                          </Text>
                          <Text
                            className="font-bold mt-[11px] sm:mt-[6px] md:mt-[7px] text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            10
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[15px] md:mt-[20px] mt-[28px] w-[100%]">
                        <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                          <Text
                            className="font-normal not-italic text-gray_300 w-[auto]"
                            variant="body3"
                          >
                            Price
                          </Text>
                          <div className="flex flex-col justify-end sm:mt-[3px] md:mt-[4px] mt-[6px] sm:pr-[3px] md:pr-[4px] pr-[6px] sm:py-[3px] md:py-[4px] py-[6px] w-[100%]">
                            <Text
                              className="font-bold sm:mr-[31px] md:mr-[40px] mr-[56px] mt-[1px] text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              $
                            </Text>
                            <Text
                              className="font-bold ml-[10px] sm:ml-[5px] md:ml-[7px] sm:mr-[11px] md:mr-[14px] mr-[20px] text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              5750
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium mb-[2px] min-w-[60%] text-[14px] text-bluegray_900 text-center w-[max-content]"
                          shape="CircleBorder25"
                          size="md"
                          variant="OutlineBluegray50"
                        >
                          See Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </Stack>
                <div className="absolute bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center justify-start sm:mx-[0] md:pb-[10px] pb-[14px] sm:pb-[7px] right-[0] rounded-radius12 sm:w-[100%] w-[64%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                    <Text
                      className="font-bold sm:my-[2px] md:my-[3px] my-[5px] text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Recent Deals
                    </Text>
                    <Text
                      className="common-pointer font-medium text-indigo_A400 w-[auto]"
                      variant="body3"
                      onClick={handleNavigate34}
                    >
                      View All
                    </Text>
                  </div>
                  <List
                    className="md:gap-[2px] sm:gap-[2px] gap-[4px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div
                      className="common-pointer flex flex-col items-center justify-start my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]"
                      onClick={handleNavigate35}
                    >
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                        <div className="bg-bluegray_50 sm:h-[25px] md:h-[32px] h-[44px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
                        <div className="flex flex-col items-center md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:py-[2px] md:py-[3px] py-[5px] w-[100%]">
                            <Text
                              className="font-bold mb-[1px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              319 Haul Road
                            </Text>
                            <div className="flex flex-col sm:mx-[0] pb-[1px] sm:px-[0] sm:w-[100%] w-[12%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                $
                              </Text>
                              <Text
                                className="font-bold ml-[10px] sm:ml-[5px] md:ml-[7px] text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                5750
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[69%]">
                              <Text
                                className="font-normal sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                Glenrock,
                              </Text>
                              <Text
                                className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                ,{" "}
                              </Text>
                              <Text
                                className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                WY
                              </Text>
                            </div>
                            <Text
                              className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              Nov 14, 07:00 AM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                        <Img
                          src="images/img_image.png"
                          className="sm:h-[25px] md:h-[32px] h-[44px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                          alt="Image Two"
                        />
                        <div className="flex flex-col items-center md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:pt-[3px] md:pt-[4px] pt-[6px] w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              47 Spruce Drive
                            </Text>
                            <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                $
                              </Text>
                              <Text
                                className="font-bold ml-[10px] sm:ml-[5px] md:ml-[7px] text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                5750
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[69%]">
                              <Text
                                className="font-normal sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                Quantico,
                              </Text>
                              <Text
                                className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                ,{" "}
                              </Text>
                              <Text
                                className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                VA
                              </Text>
                            </div>
                            <Text
                              className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              Nov 15, 08:00 AM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                        <Img
                          src="images/img_image_44X44.png"
                          className="sm:h-[25px] md:h-[32px] h-[44px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                          alt="Image Three"
                        />
                        <div className="flex flex-col items-center md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between py-[4px] w-[100%]">
                            <Text
                              className="font-bold mb-[1px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              165 Belmont Drive
                            </Text>
                            <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                $
                              </Text>
                              <Text
                                className="font-bold ml-[10px] sm:ml-[5px] md:ml-[7px] text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                5750
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[69%]">
                              <Text
                                className="font-normal mb-[4px] sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                Parowan,
                              </Text>
                              <Text
                                className="font-normal ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                ,{" "}
                              </Text>
                              <Text
                                className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                UT
                              </Text>
                            </div>
                            <Text
                              className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              Nov 16, 09:00 AM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                        <Img
                          src="images/img_image_1.png"
                          className="sm:h-[25px] md:h-[32px] h-[44px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                          alt="Image Four"
                        />
                        <div className="flex flex-col items-center md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:py-[2px] md:py-[3px] py-[5px] w-[100%]">
                            <Text
                              className="font-bold mb-[1px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              1538 Hammer Road
                            </Text>
                            <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                $
                              </Text>
                              <Text
                                className="font-bold ml-[10px] sm:ml-[5px] md:ml-[7px] text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                5750
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[70%]">
                              <Text
                                className="font-normal mb-[4px] sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                Cleveland,
                              </Text>
                              <Text
                                className="font-normal ml-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                ,{" "}
                              </Text>
                              <Text
                                className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                OH
                              </Text>
                            </div>
                            <Text
                              className="font-normal mb-[4px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              Nov 17, 10:00 AM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </Stack>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mb-[4px] sm:mt-[13px] md:mt-[17px] mt-[24px] sm:px-[0] w-[100%]">
                <List
                  className="sm:gap-[13px] md:gap-[17px] gap-[24px] grid min-h-[auto] w-[34%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center justify-start my-[0] rounded-radius12 w-[100%]">
                    <div
                      className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] rounded-radius12 w-[100%]"
                      onClick={handleNavigate25}
                    >
                      <div className="flex flex-col md:mb-[10px] mb-[15px] sm:mb-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                        <Text
                          className="font-inter font-medium text-bluegray_400 w-[auto]"
                          variant="body1"
                        >
                          Customers
                        </Text>
                        <Text
                          className="font-manrope font-semibold sm:mt-[17px] md:mt-[23px] mt-[32px] text-bluegray_900 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          78
                        </Text>
                      </div>
                      <Button
                        className="flex sm:h-[45px] md:h-[59px] h-[80px] items-center justify-center rounded-radius50 sm:w-[44px] md:w-[58px] w-[80px]"
                        size="3xlIcn"
                        variant="icbGradientTeal3007fWhiteA70000"
                      >
                        <Img
                          src="images/img_user.svg"
                          className="h-[32px] sm:h-[18px] md:h-[24px] flex items-center justify-center"
                          alt="user"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center justify-start my-[0] rounded-radius12 w-[100%]">
                    <div
                      className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] rounded-radius12 w-[100%]"
                      onClick={handleNavigate26}
                    >
                      <div className="flex flex-col md:mb-[10px] mb-[15px] sm:mb-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                        <Text
                          className="font-inter font-medium text-bluegray_400 w-[auto]"
                          variant="body1"
                        >
                          Deals
                        </Text>
                        <Text
                          className="font-manrope font-semibold sm:mt-[17px] md:mt-[23px] mt-[32px] text-bluegray_900 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          136
                        </Text>
                      </div>
                      <Button
                        className="flex sm:h-[45px] md:h-[59px] h-[80px] items-center justify-center rounded-radius50 sm:w-[44px] md:w-[58px] w-[80px]"
                        size="3xlIcn"
                        variant="icbGradientRedA1007fWhiteA70000"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[32px] sm:h-[18px] md:h-[24px] flex items-center justify-center"
                          alt="bag"
                        />
                      </Button>
                    </div>
                  </div>
                </List>
                <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center sm:mx-[0] rounded-radius12 sm:w-[100%] w-[64%]">
                  <div
                    className="common-pointer flex flex-col items-center justify-start rounded-radius12 w-[100%]"
                    onClick={handleNavigate27}
                  >
                    <div className="bg-white_A700 flex flex-col items-center justify-start md:pt-[11px] sm:pt-[15px] pt-[16px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[50%]">
                            <Img
                              src="images/img_image_2.png"
                              className="sm:h-[25px] md:h-[32px] h-[44px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                              alt="Image Five"
                            />
                            <div className="flex flex-col justify-start mt-[1px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[75%]">
                              <Text
                                className="font-bold text-bluegray_900 w-[auto]"
                                variant="body2"
                              >
                                1824 Turkey Pen Road
                              </Text>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                                <Text
                                  className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  Cleveland,
                                </Text>
                                <Text
                                  className="font-normal mb-[1px] sm:ml-[3px] md:ml-[4px] ml-[6px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  OH
                                </Text>
                                <Text
                                  className="font-normal mb-[1px] sm:ml-[3px] md:ml-[4px] ml-[6px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  12345
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-medium min-w-[26%] sm:ml-[37px] md:ml-[48px] ml-[67px] sm:my-[3px] md:my-[5px] my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                            shape="CircleBorder20"
                            size="sm"
                            variant="FillDeeppurple50"
                          >
                            IN PROGRESS
                          </Button>
                          <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                              alt="arrowright"
                            />
                          </Button>
                        </div>
                        <Line className="bg-bluegray_50 h-[1px] md:mt-[10px] mt-[15px] sm:mt-[8px] w-[100%]" />
                      </div>
                    </div>
                    <Stack className="h-[274px] relative w-[100%]">
                      <Line className="absolute bg-bluegray_50 sm:h-[117px] md:h-[151px] h-[207px] inset-y-[0] left-[9%] my-[auto] w-[1px]" />
                      <div className="absolute flex flex-col items-center justify-end p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                        <div className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:pt-[3px] md:pt-[4px] pt-[6px] w-[100%]">
                            <div className="bg-white_A700 border-bw11 border-indigo_A400 border-solid sm:h-[18px] md:h-[24px] h-[32px] sm:mb-[21px] md:mb-[27px] mb-[38px] mt-[4px] rounded-radius50 sm:w-[17px] md:w-[23px] w-[32px]"></div>
                            <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                17 Nov 2021
                              </Text>
                              <Text
                                className="font-medium md:mt-[10px] mt-[14px] sm:mt-[7px] text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                Installation of the new air conditioning system
                              </Text>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  2
                                </Text>
                                <Text
                                  className="font-normal ml-[4px] mt-[3px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  image
                                </Text>
                                <Text
                                  className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  s
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[18px] w-[100%]">
                            <div className="bg-white_A700 border-bw11 border-indigo_A400 border-solid sm:h-[18px] md:h-[24px] h-[32px] sm:mb-[21px] md:mb-[27px] mb-[38px] mt-[11px] sm:mt-[6px] md:mt-[7px] rounded-radius50 sm:w-[17px] md:w-[23px] w-[32px]"></div>
                            <div className="flex flex-col justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[91%]">
                              <Text
                                className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                variant="body3"
                              >
                                17 Nov 2021
                              </Text>
                              <Text
                                className="font-medium md:mt-[10px] mt-[14px] sm:mt-[7px] text-bluegray_900 w-[auto]"
                                variant="body3"
                              >
                                Installation of the new air conditioning system
                              </Text>
                              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mr-[auto] mt-[11px] sm:mt-[6px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                                <Text
                                  className="font-normal mb-[1px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  1
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body3"
                                >
                                  image
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-bold min-w-[98%] sm:mt-[10px] md:mt-[13px] mt-[18px] text-[16px] text-center text-indigo_A400 w-[max-content]"
                          size="sm"
                          variant="FillWhiteA700"
                        >
                          Load More
                        </Button>
                      </div>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-col items-center sm:mx-[0] sm:w-[100%] w-[33%]">
              <div className="flex flex-col items-center justify-start md:pb-[11px] pb-[16px] sm:pb-[8px] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                  <Text
                    className="font-bold sm:my-[2px] md:my-[3px] my-[5px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    Customers
                  </Text>
                  <Text
                    className="common-pointer font-medium text-indigo_A400 w-[auto]"
                    variant="body3"
                    onClick={handleNavigate28}
                  >
                    View All
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <List
                    className="sm:gap-[1px] md:gap-[2px] gap-[3px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div
                      className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]"
                      onClick={handleNavigate29}
                    >
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[83%]">
                        <div className="bg-gray_300 sm:h-[25px] md:h-[32px] h-[44px] mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
                        <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[4px] py-[4px] w-[100%]">
                            <Text
                              className="font-bold my-[1px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              Deanna
                            </Text>
                            <Text
                              className="font-bold mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              Annis
                            </Text>
                          </div>
                          <Text
                            className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            deannannis@gmail.com
                          </Text>
                        </div>
                      </div>
                      <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                          alt="location"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Img
                          src="images/img_avatar.png"
                          className="sm:h-[25px] md:h-[32px] h-[44px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                          alt="Avatar One"
                        />
                        <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[4px] py-[4px] w-[100%]">
                            <Text
                              className="font-bold my-[1px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              Andrea
                            </Text>
                            <Text
                              className="font-bold mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              Willis
                            </Text>
                          </div>
                          <Text
                            className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            andreawillis@gmail.com
                          </Text>
                        </div>
                      </div>
                      <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                          alt="location One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Img
                          src="images/img_avatar_44X44.png"
                          className="sm:h-[25px] md:h-[32px] h-[44px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                          alt="Avatar Two"
                        />
                        <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pr-[2px] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              Brent
                            </Text>
                            <Text
                              className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-bluegray_900 w-[auto]"
                              variant="body2"
                            >
                              Rodrigues
                            </Text>
                          </div>
                          <Text
                            className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            brodrigues@gmail.com
                          </Text>
                        </div>
                      </div>
                      <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                          alt="location Two"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                <div className="bg-gray_50 border border-bluegray_50 border-solid flex flex-col items-center justify-start rounded-radius12 w-[100%]">
                  <div className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[17px] p-[24px] w-[100%]">
                    <Text
                      className="font-bold sm:my-[2px] md:my-[3px] my-[5px] text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Tasks To Do
                    </Text>
                    <Text
                      className="common-pointer font-medium text-indigo_A400 w-[auto]"
                      variant="body3"
                      onClick={handleNavigate30}
                    >
                      View All
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start pb-[10px] sm:pb-[5px] md:pb-[7px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div
                        className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] w-[100%]"
                        onClick={handleNavigate20}
                      >
                        <Stack className="h-[27px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:py-[2px] md:py-[3px] py-[5px] relative w-[32%]">
                          <Text
                            className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            30 Nov 2021
                          </Text>
                          <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between top-[4%] w-[100%]">
                            <Text
                              className="flex-grow font-normal not-italic text-red_A100"
                              variant="body3"
                            >
                              30 Nov 2021
                            </Text>
                            <Img
                              src="images/img_lock.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="lock"
                            />
                          </div>
                        </Stack>
                        <div className="flex flex-col ml-[10px] md:ml-[7px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[59%]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Meeting with partners
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                          <Text
                            className="flex-grow font-normal not-italic text-red_A100"
                            variant="body3"
                          >
                            24 Dec 2021
                          </Text>
                          <Img
                            src="images/img_lock.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] ml-[11px] sm:ml-[6px] md:ml-[7px] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="lock One"
                          />
                        </div>
                        <div className="flex flex-col ml-[10px] md:ml-[7px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[59%]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Web conference agenda
                          </Text>
                        </div>
                      </div>
                      <List
                        className="gap-[0] grid min-h-[auto] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                          <div className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              24 Oct 2022
                            </Text>
                          </div>
                          <div className="flex flex-col ml-[10px] md:ml-[7px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Lunch with Steve
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                          <div className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              24 Nov 2022
                            </Text>
                          </div>
                          <div className="flex flex-col ml-[10px] md:ml-[7px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Meeting with partners
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                          <div className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              24 Nov 2022
                            </Text>
                          </div>
                          <div className="flex flex-col ml-[10px] md:ml-[7px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Weekly meeting
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                          <div className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              24 Nov 2022
                            </Text>
                          </div>
                          <div className="flex flex-col ml-[10px] md:ml-[7px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Add new services
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-white_A700 flex flex-col items-center justify-start sm:pb-[3px] md:pb-[4px] pb-[6px] w-[100%]"
                    onClick={handleNavigate21}
                  >
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 w-[auto]"
                          variant="body2"
                        >
                          Add new task
                        </Text>
                        <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                          <Img
                            src="images/img_arrowright.svg"
                            className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                            alt="arrowright One"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="absolute bottom-[0] md:hidden sm:hidden left-[0] w-[7%]">
            <div className="">
              <div className="bg-gray_50_e5 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:pl-[14px] sm:pl-[15px] pl-[20px] w-[100%]">
                <div className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                  <Button
                    className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 w-[100%]"
                    variant="icbFillIndigoA400"
                  >
                    <Img
                      src="images/img_grid.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="grid"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate22}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="trash"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate23}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_user_50X50.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="user One"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate24}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_menu.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="menu"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate14}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_calendar.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="calendar"
                    />
                  </Button>
                  <Stack
                    className="common-pointer bg-white_A700 border border-bluegray_50 border-solid h-[50px] md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[10px] p-[15px] sm:p-[8px] relative rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    onClick={handleNavigate15}
                  >
                    <Img
                      src="images/img_contrast.svg"
                      className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[11px] md:w-[14px] w-[20px]"
                      alt="contrast"
                    />
                    <div className="absolute bg-indigo_A400 border-2 border-solid border-white_A700 h-[10px] sm:h-[6px] md:h-[8px] right-[30%] rounded-radius50 top-[30%] w-[10px] sm:w-[5px] md:w-[7px]"></div>
                  </Stack>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate16}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_settings.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="settings"
                    />
                  </Button>
                </div>
                <Line className="bg-bluegray_50 sm:h-[461px] md:h-[595px] h-[820px] sm:ml-[10px] md:ml-[13px] ml-[19px] w-[1px]" />
              </div>
            </div>
          </aside>
          <Stack className="absolute h-[90px] top-[0] w-[100%]">
            <div className="absolute flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                  <Stack className="bg-gray_50 h-[90px] relative sm:w-[50px] md:w-[65px] w-[90px]">
                    <Button
                      className="absolute flex sm:h-[26px] md:h-[34px] h-[46px] inset-[0] items-center justify-center m-[auto] sm:w-[25px] md:w-[33px] w-[46px]"
                      shape="icbRoundedBorder4"
                      size="lgIcn"
                      variant="icbFillBluegray900"
                    >
                      <Img
                        src="images/img_vuesaxboldblu.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="vuesaxboldblu"
                      />
                    </Button>
                    <Stack className="absolute h-[90px] sm:w-[50px] md:w-[65px] w-[90px]">
                      <Line className="absolute bg-bluegray_50 sm:h-[51px] md:h-[66px] h-[90px] right-[0] w-[1px]" />
                      <Line className="absolute bg-bluegray_50 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </Stack>
                  <div className="bg-gray_50_e5 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[17px] p-[24px] sm:w-[100%] w-[91%]">
                    <Text
                      className="font-bold sm:my-[4px] md:my-[5px] my-[8px] text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_100_e5 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[20px] sm:w-[100%] w-[31%]">
                  <Button
                    className="flex items-center justify-center md:ml-[74px] min-w-[35%] ml-[103px] sm:ml-[57px] text-center w-[max-content]"
                    onClick={handleNavigate18}
                    rightIcon={
                      <Img
                        src="images/img_plus.svg"
                        className="ml-[12px] sm:ml-[6px] md:ml-[8px] text-center"
                        alt="plus"
                      />
                    }
                    shape="CircleBorder25"
                    size="md"
                    variant="FillIndigoA400"
                  >
                    <div className="common-pointer bg-transparent cursor-pointer font-medium text-[14px] text-white_A700">
                      Add New
                    </div>
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[20px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    onClick={handleNavigate17}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_refresh.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="refresh"
                    />
                  </Button>
                  <Img
                    src="images/img_avatar_50X50.png"
                    className="sm:h-[29px] md:h-[37px] h-[50px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[20px] mr-[4px] sm:w-[28px] md:w-[36px] w-[50px]"
                    alt="Avatar Three"
                  />
                </div>
              </div>
            </div>
            <Line className="absolute bg-bluegray_50 bottom-[0] h-[1px] w-[100%]" />
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default DashboardPage;
