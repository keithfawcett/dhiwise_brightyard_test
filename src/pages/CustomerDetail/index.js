import React from "react";

import { Stack, Line, Button, Img, Grid, Text, Input, List } from "components";
import { useNavigate } from "react-router-dom";

const CustomerDetailPage = () => {
  const navigate = useNavigate();

  function handleNavigate65() {
    navigate("/tasks");
  }
  function handleNavigate66() {
    navigate("/comingsoon");
  }
  function handleNavigate67() {
    navigate("/comingsoon");
  }
  function handleNavigate68() {
    navigate("/comingsoon");
  }
  function handleNavigate69() {
    navigate("/comingsoon");
  }
  function handleNavigate70() {
    navigate("/");
  }
  function handleNavigate71() {
    navigate("/addnewdeal");
  }
  function handleNavigate72() {
    navigate("/dealdetail");
  }
  function handleNavigate73() {
    navigate("/");
  }
  function handleNavigate74() {
    navigate("/deals");
  }
  function handleNavigate75() {
    navigate("/customers");
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
          <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] right-[0] top-[10%] sm:w-[100%] w-[94%]">
            <div className="flex flex-col items-center justify-start sm:mx-[0] md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] sm:w-[100%] w-[68%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[15px] md:p-[17px] p-[24px] rounded-radius12 w-[100%]"
                style={{ backgroundImage: "url('images/img_cover.png')" }}
              >
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[29px] md:mt-[37px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <div className="bg-white_A700 flex flex-col h-[100px] sm:h-[57px] md:h-[73px] items-end justify-end sm:pl-[15px] md:pl-[49px] pl-[68px] sm:pt-[15px] rounded-radius50 w-[100px] sm:w-[56px] md:w-[72px]">
                    <Button
                      className="flex sm:h-[18px] md:h-[24px] h-[32px] items-center justify-center rounded-radius50 sm:w-[17px] md:w-[23px] w-[32px]"
                      size="mdIcn"
                      variant="icbFillIndigoA400"
                    >
                      <Img
                        src="images/img_edit.svg"
                        className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <Button
                    className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center mb-[2px] sm:mt-[26px] md:mt-[34px] mt-[48px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_trash_50X50.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="trash"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[24px] sm:px-[0] w-[100%]">
                <Grid className="sm:gap-[11px] md:gap-[14px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      First Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="md:mt-[13px] mt-[19px] sm:mt-[10px] w-[100%]"
                      name="FirstName"
                      placeholder="Barbara"
                      size="sm"
                      variant="OutlineBluegray50_2"
                    ></Input>
                  </div>
                  <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Last Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                      name="LastName"
                      placeholder="Anderson"
                      size="sm"
                      variant="OutlineBluegray50_2"
                    ></Input>
                  </div>
                  <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Email
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="md:mt-[13px] mt-[19px] sm:mt-[10px] w-[100%]"
                      name="email"
                      placeholder="banderson@gmail.com"
                      size="sm"
                      variant="OutlineBluegray50_2"
                    ></Input>
                  </div>
                  <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Phone
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                      name="Phone"
                      placeholder="310-685-3335"
                      size="sm"
                      variant="OutlineBluegray50_2"
                    ></Input>
                  </div>
                </Grid>
                <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[31px] w-[100%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    variant="body2"
                  >
                    Address
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                    name="Street"
                    placeholder="Street Address"
                    size="sm"
                    variant="OutlineBluegray50_2"
                  ></Input>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[24px] w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[45%]"
                    name="City"
                    placeholder="City"
                    size="sm"
                    variant="OutlineBluegray50_2"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[37%]"
                    name="State"
                    placeholder="State / Province"
                    size="sm"
                    variant="OutlineBluegray50_2"
                  ></Input>
                  <Button
                    className="cursor-pointer font-normal min-w-[14%] not-italic text-[16px] text-bluegray_400 text-center w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineBluegray50_2"
                  >
                    Zip Code
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-col items-center justify-start sm:mb-[175px] md:mb-[226px] mb-[312px] sm:mx-[0] sm:w-[100%] w-[33%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[13px] p-[19px] sm:px-[15px] sm:py-[10px] w-[100%]">
                  <Text
                    className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    Recent Deals
                  </Text>
                  <Button
                    className="common-pointer flex sm:h-[23px] md:h-[30px] h-[40px] items-center justify-center sm:mr-[2px] md:mr-[3px] mr-[5px] rounded-radius50 sm:w-[22px] md:w-[29px] w-[40px]"
                    onClick={handleNavigate71}
                    size="lgIcn"
                    variant="icbFillIndigoA400"
                  >
                    <Img
                      src="images/img_plus.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="plus"
                    />
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                  <List
                    className="md:gap-[2px] sm:gap-[2px] gap-[4px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div
                      className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]"
                      onClick={handleNavigate72}
                    >
                      <div className="bg-gray_300 sm:h-[25px] md:h-[32px] h-[44px] md:ml-[10px] ml-[15px] sm:ml-[8px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
                      <div className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] py-[4px] w-[100%]">
                          <Text
                            className="font-bold mt-[2px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            319 Haul Road,
                          </Text>
                          <Text
                            className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            Saint Paul,
                          </Text>
                          <Text
                            className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] my-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            MN
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] py-[4px] sm:w-[100%] w-[57%]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            Nov 14, 09:00
                          </Text>
                          <Text
                            className="font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] my-[2px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            •
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[12px] md:ml-[8px] sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[29%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              $
                            </Text>
                            <Text
                              className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              6000
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                      <Img
                        src="images/img_image_3.png"
                        className="sm:h-[25px] md:h-[32px] h-[44px] md:ml-[10px] ml-[15px] sm:ml-[8px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                        alt="Image One"
                      />
                      <div className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[78%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <Text
                            className="font-bold mt-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            3290 Levy Court,
                          </Text>
                          <Text
                            className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            Lawrence,
                          </Text>
                          <Text
                            className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            MA
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            Nov 14, 09:00
                          </Text>
                          <Text
                            className="font-normal sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            •
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              $
                            </Text>
                            <Text
                              className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] mr-[116px] sm:mr-[65px] md:mr-[84px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              6000
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                      <Img
                        src="images/img_image_4.png"
                        className="sm:h-[25px] md:h-[32px] h-[44px] md:ml-[10px] ml-[15px] sm:ml-[8px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                        alt="Image Two"
                      />
                      <div className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[78%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mr-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                          <Text
                            className="font-bold my-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            416 Woodland Terra,
                          </Text>
                          <Text
                            className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            New York,
                          </Text>
                          <Text
                            className="font-bold mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            NY
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            Nov 14, 09:00
                          </Text>
                          <Text
                            className="font-normal sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                            variant="body3"
                          >
                            •
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[59%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              $
                            </Text>
                            <Text
                              className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] mr-[116px] sm:mr-[65px] md:mr-[84px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              variant="body3"
                            >
                              6000
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start mt-[4px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                    <Text
                      className="font-medium mb-[1px] text-indigo_A400 w-[auto]"
                      variant="body3"
                    >
                      Load More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="absolute md:hidden sm:hidden w-[7%]">
            <div className="">
              <div className="bg-gray_50_e5 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:pl-[14px] sm:pl-[15px] pl-[20px] w-[100%]">
                <div className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 w-[100%]"
                    onClick={handleNavigate73}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="videocamera"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate74}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_trash.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="trash One"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate75}
                    variant="icbFillIndigoA400"
                  >
                    <Img
                      src="images/img_user_1.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="user"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate65}
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
                    onClick={handleNavigate66}
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
                    onClick={handleNavigate67}
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
                    onClick={handleNavigate68}
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
          <Stack className="absolute h-[90px] w-[100%]">
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
                    <Stack
                      className="common-pointer absolute h-[90px] sm:w-[50px] md:w-[65px] w-[90px]"
                      onClick={handleNavigate70}
                    >
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
                      Customer Details
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_100_e6 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[20px] sm:w-[100%] w-[31%]">
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center sm:ml-[142px] md:ml-[183px] ml-[253px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    onClick={handleNavigate69}
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
                    alt="Avatar"
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

export default CustomerDetailPage;
