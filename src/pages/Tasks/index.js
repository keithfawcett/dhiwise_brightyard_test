import React from "react";

import { Stack, Line, Text, Button, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const TasksPage = () => {
  const navigate = useNavigate();

  function handleNavigate31() {
    navigate("/addnewtask");
  }
  function handleNavigate32() {
    navigate("/");
  }
  function handleNavigate36() {
    navigate("/comingsoon");
  }
  function handleNavigate37() {
    navigate("/comingsoon");
  }
  function handleNavigate38() {
    navigate("/comingsoon");
  }
  function handleNavigate39() {
    navigate("/comingsoon");
  }
  function handleNavigate42() {
    navigate("/edittask");
  }
  function handleNavigate43() {
    navigate("/");
  }
  function handleNavigate44() {
    navigate("/deals");
  }
  function handleNavigate45() {
    navigate("/customers");
  }

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Stack className="bg-gray_50 h-[910px] relative w-[100%]">
          <Line className="absolute bg-bluegray_50 sm:h-[511px] md:h-[661px] h-[910px] left-[7%] w-[1px]" />
          <div className="absolute bottom-[1%] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[94%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                <Text
                  className="font-bold mt-[1px] text-bluegray_900 w-[auto]"
                  variant="body2"
                >
                  Total:
                </Text>
                <Text
                  className="font-bold mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                  variant="body2"
                >
                  23
                </Text>
                <Text
                  className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-bluegray_900 w-[auto]"
                  variant="body2"
                >
                  tasks
                </Text>
              </div>
              <Button
                className="flex items-center justify-center md:ml-[536px] min-w-[20%] ml-[739px] sm:ml-[414px] text-center w-[max-content]"
                rightIcon={
                  <Img
                    src="images/img_checkmark.svg"
                    className="ml-[13px] sm:ml-[7px] md:ml-[9px] text-center"
                    alt="checkmark"
                  />
                }
                shape="CircleBorder25"
                size="md"
                variant="OutlineBluegray50"
              >
                <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_900">
                  Sort by: Due Date
                </div>
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[10%] sm:ml-[11px] md:ml-[14px] ml-[20px] text-[14px] text-bluegray_900 text-center w-[max-content]"
                shape="CircleBorder25"
                size="md"
                variant="OutlineBluegray50"
              >
                Filter
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] rounded-radius12 sm:w-[100%] w-[97%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                  <Img
                    src="images/img_checkmark_30X30.svg"
                    className="sm:h-[17px] md:h-[22px] h-[30px] max-w-[100%] my-[2px] sm:w-[16px] md:w-[21px] w-[30px]"
                    alt="checkmark One"
                  />
                  <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] my-[2px] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[17%]">
                    <Text
                      className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Due Date
                    </Text>
                  </div>
                  <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] my-[2px] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[72%]">
                    <Text
                      className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Task
                    </Text>
                  </div>
                  <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[3%]">
                    <Text
                      className="font-medium text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Edit
                    </Text>
                  </div>
                </div>
                <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
              </div>
              <List
                className="gap-[0] grid min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <div
                  className="common-pointer flex flex-col items-center justify-start my-[0] w-[100%]"
                  onClick={handleNavigate42}
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                    <Img
                      src="images/img_warning.svg"
                      className="sm:h-[17px] md:h-[22px] h-[30px] max-w-[100%] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      alt="warning"
                    />
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] my-[12px] sm:my-[6px] md:my-[8px] sm:px-[0] sm:w-[100%] w-[8%]">
                      <Stack className="h-[30px] relative w-[100%]">
                        <Text
                          className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-bluegray_900 w-[max-content]"
                          variant="body2"
                        >
                          14 Nov 2021
                        </Text>
                        <div className="absolute flex flex-col items-center justify-start pr-[1px] py-[1px] w-[100%]">
                          <Text
                            className="font-normal sm:my-[2px] md:my-[3px] my-[5px] not-italic text-red_A100 w-[auto]"
                            variant="body2"
                          >
                            14 Nov 2021
                          </Text>
                        </div>
                      </Stack>
                    </div>
                    <Text
                      className="font-normal ml-[130px] sm:ml-[72px] md:ml-[94px] not-italic text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Description goes here
                    </Text>
                    <Button
                      className="flex sm:h-[17px] md:h-[22px] h-[30px] items-center justify-center sm:ml-[402px] md:ml-[520px] ml-[717px] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="location"
                      />
                    </Button>
                  </div>
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                    <Img
                      src="images/img_lock.svg"
                      className="sm:h-[17px] md:h-[22px] h-[30px] max-w-[100%] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      alt="lock"
                    />
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] my-[12px] sm:my-[6px] md:my-[8px] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-red_A100 w-[auto]"
                        variant="body2"
                      >
                        24 Dec 2021
                      </Text>
                    </div>
                    <Text
                      className="font-normal sm:ml-[13px] md:ml-[17px] ml-[24px] not-italic text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Web conference agenda (overdue)
                    </Text>
                    <Button
                      className="flex sm:h-[17px] md:h-[22px] h-[30px] items-center justify-center sm:ml-[349px] md:ml-[451px] ml-[623px] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="location One"
                      />
                    </Button>
                  </div>
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="sm:h-[17px] md:h-[22px] h-[30px] max-w-[100%] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      alt="checkmark Two"
                    />
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] my-[12px] sm:my-[6px] md:my-[8px] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        24 Nov 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal sm:ml-[13px] md:ml-[17px] ml-[24px] not-italic text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Meeting with partners
                    </Text>
                    <Button
                      className="flex sm:h-[17px] md:h-[22px] h-[30px] items-center justify-center sm:ml-[402px] md:ml-[519px] ml-[716px] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="location Two"
                      />
                    </Button>
                  </div>
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                    <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        24 Nov 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal sm:ml-[13px] md:ml-[17px] ml-[24px] not-italic text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Add new services
                    </Text>
                    <Button
                      className="flex sm:h-[17px] md:h-[22px] h-[30px] items-center justify-center sm:ml-[420px] md:ml-[543px] ml-[749px] sm:w-[16px] md:w-[21px] w-[30px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="location Three"
                      />
                    </Button>
                  </div>
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="sm:h-[17px] md:h-[22px] h-[30px] max-w-[100%] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      alt="checkmark Three"
                    />
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] my-[12px] sm:my-[6px] md:my-[8px] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        24 Nov 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal sm:ml-[13px] md:ml-[17px] ml-[24px] not-italic text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Upload new legals (terms & conditions)
                    </Text>
                    <Button
                      className="flex sm:h-[17px] md:h-[22px] h-[30px] items-center justify-center sm:ml-[330px] md:ml-[427px] ml-[589px] my-[12px] sm:my-[6px] md:my-[8px] sm:w-[16px] md:w-[21px] w-[30px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="location Four"
                      />
                    </Button>
                  </div>
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                    <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        24 Nov 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal sm:ml-[13px] md:ml-[17px] ml-[24px] not-italic text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Sales report due
                    </Text>
                    <Button
                      className="flex sm:h-[17px] md:h-[22px] h-[30px] items-center justify-center sm:ml-[425px] md:ml-[549px] ml-[758px] sm:w-[16px] md:w-[21px] w-[30px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="location Five"
                      />
                    </Button>
                  </div>
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                    <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        24 Nov 2022
                      </Text>
                    </div>
                    <Text
                      className="font-normal sm:ml-[13px] md:ml-[17px] ml-[24px] not-italic text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Description goes here
                    </Text>
                    <Button
                      className="flex sm:h-[17px] md:h-[22px] h-[30px] items-center justify-center sm:ml-[402px] md:ml-[520px] ml-[717px] sm:w-[16px] md:w-[21px] w-[30px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                    >
                      <Img
                        src="images/img_location.svg"
                        className="h-[24px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                        alt="location Six"
                      />
                    </Button>
                  </div>
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                </div>
              </List>
              <div className="flex flex-col items-center justify-start md:p-[18px] p-[25px] sm:px-[15px] sm:py-[14px] w-[100%]">
                <Button
                  className="cursor-pointer font-medium min-w-[12%] text-[14px] text-bluegray_900 text-center w-[max-content]"
                  shape="CircleBorder25"
                  size="md"
                  variant="OutlineBluegray50"
                >
                  Load More
                </Button>
              </div>
            </div>
          </div>
          <aside className="absolute md:hidden sm:hidden w-[7%]">
            <div className="">
              <div className="bg-gray_50_e5 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:pl-[14px] sm:pl-[15px] pl-[20px] w-[100%]">
                <div className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 w-[100%]"
                    onClick={handleNavigate43}
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
                    onClick={handleNavigate44}
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
                    onClick={handleNavigate45}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_user_50X50.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="user"
                    />
                  </Button>
                  <Button
                    className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    variant="icbFillIndigoA400"
                  >
                    <Img
                      src="images/img_sort.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="sort"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate36}
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
                    onClick={handleNavigate37}
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
                    onClick={handleNavigate38}
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
                      onClick={handleNavigate32}
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
                      Tasks
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_50_e5 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[20px] sm:w-[100%] w-[31%]">
                  <Button
                    className="flex items-center justify-center md:ml-[49px] min-w-[44%] ml-[68px] sm:ml-[38px] text-center w-[max-content]"
                    onClick={handleNavigate31}
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
                      Add New Task
                    </div>
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[20px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    onClick={handleNavigate39}
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

export default TasksPage;
