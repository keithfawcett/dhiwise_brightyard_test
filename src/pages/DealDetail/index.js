import React from "react";

import { Stack, Line, Text, List, Button, Img, Input } from "components";
import { useNavigate } from "react-router-dom";

const DealDetailPage = () => {
  const navigate = useNavigate();

  function handleNavigate40() {
    navigate("/comingsoon");
  }
  function handleNavigate41() {
    navigate("/");
  }
  function handleNavigate46() {
    navigate("/deals");
  }
  function handleNavigate47() {
    navigate("/customers");
  }
  function handleNavigate48() {
    navigate("/tasks");
  }
  function handleNavigate49() {
    navigate("/comingsoon");
  }
  function handleNavigate50() {
    navigate("/comingsoon");
  }
  function handleNavigate51() {
    navigate("/comingsoon");
  }
  function handleNavigate55() {
    navigate("/editdeal");
  }
  function handleNavigate56() {
    navigate("/editactivity");
  }
  function handleNavigate57() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Stack className="bg-gray_50 h-[1116px] relative w-[100%]">
          <div className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[94%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Line className="bg-bluegray_50 h-[1116px] sm:h-[627px] md:h-[810px] w-[1px]" />
              <div className="bg-gray_100 h-[1116px] sm:h-[627px] md:h-[810px] w-[33%]"></div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[94%]">
            <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[32%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <div className="bg-bluegray_50 sm:h-[25px] md:h-[32px] h-[44px] my-[1px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
                    <div className="flex flex-col md:ml-[14px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 w-[auto]"
                        variant="body3"
                      >
                        Customer
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[10px] mt-[15px] sm:mt-[8px] w-[100%]">
                        <Text
                          className="font-bold mt-[1px] text-bluegray_600 w-[auto]"
                          variant="body2"
                        >
                          Deanna
                        </Text>
                        <Text
                          className="font-bold text-bluegray_600 w-[auto]"
                          variant="body2"
                        >
                          Annis
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:gap-[13px] md:gap-[17px] gap-[24.01px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[66%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col justify-end md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] w-[100%]">
                    <Text
                      className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                      variant="body3"
                    >
                      Email
                    </Text>
                    <Text
                      className="font-bold md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_600 w-[auto]"
                      variant="body2"
                    >
                      brodrigues@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-col justify-end md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] w-[100%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                      variant="body3"
                    >
                      Phone
                    </Text>
                    <Text
                      className="font-bold md:mt-[10px] mt-[15px] sm:mt-[8px] text-bluegray_600 w-[auto]"
                      variant="body2"
                    >
                      617-952-4069
                    </Text>
                  </div>
                </List>
              </div>
              <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[17px] p-[24px] w-[100%]">
                <div className="flex flex-col sm:mx-[0] md:pr-[5px] pr-[7px] sm:pt-[3px] md:pt-[5px] pt-[7px] sm:px-[0] sm:w-[100%] w-[83%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    2893 Austin Secret Lane,
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[15px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                    <Text
                      className="mt-[2px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Parowan,
                    </Text>
                    <Text
                      className="sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[1px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      UT
                    </Text>
                    <Text
                      className="sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      12413
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Button
                    className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_trash_50X50.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="trash"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[20px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    onClick={handleNavigate55}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_location.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="location"
                    />
                  </Button>
                </div>
              </div>
              <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                  <List
                    className="sm:gap-[22px] md:gap-[29px] gap-[40px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                      <div className="flex flex-col sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          Progress
                        </Text>
                        <Text
                          className="font-bold md:mt-[10px] mt-[15px] sm:mt-[8px] text-bluegray_600 w-[auto]"
                          variant="body2"
                        >
                          In Progress
                        </Text>
                      </div>
                      <div className="flex flex-col sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          Appointment Date
                        </Text>
                        <Text
                          className="font-bold md:mt-[10px] mt-[15px] sm:mt-[8px] text-bluegray_600 w-[auto]"
                          variant="body2"
                        >
                          Nov 17, 2021 08:00
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                      <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          Room Area
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] md:mt-[10px] mt-[15px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                          <Text
                            className="flex-grow font-bold text-bluegray_600"
                            variant="body2"
                          >
                            25
                          </Text>
                          <Img
                            src="images/img_minimize_12X19.svg"
                            className="flex-shrink-0 max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:w-[100%] w-[43%]"
                            alt="minimize"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          Number of people
                        </Text>
                        <Text
                          className="font-bold md:mt-[10px] mt-[14px] sm:mt-[7px] text-bluegray_600 w-[auto]"
                          variant="body2"
                        >
                          10
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                      <div className="flex flex-col sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          Price
                        </Text>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mr-[auto] md:mt-[10px] mt-[15px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                          <Text
                            className="font-bold mb-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            $
                          </Text>
                          <Text
                            className="font-bold ml-[2px] mt-[1px] text-bluegray_600 w-[auto]"
                            variant="body2"
                          >
                            6000
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          Room Access
                        </Text>
                        <Text
                          className="font-bold md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_600 w-[auto]"
                          variant="body2"
                        >
                          Keys with doorman
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col justify-start sm:mt-[27px] md:mt-[35px] mt-[49px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 w-[auto]"
                      variant="body3"
                    >
                      Special Instructions
                    </Text>
                    <Text
                      className="font-medium leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[14px] sm:mt-[7px] text-bluegray_600 w-[100%]"
                      variant="body2"
                    >
                      At risus viverra adipiscing at in tellus. Blandit massa
                      enim nec dui nunc mattis. Lacus vel facilisis volutpat est
                      velit.
                    </Text>
                  </div>
                </div>
                <div className="bg-bluegray_50 sm:h-[180px] md:h-[233px] h-[320px] sm:mb-[43px] md:mb-[56px] mb-[78px] rounded-radius12 sm:w-[179px] md:w-[232px] w-[320px]"></div>
              </div>
            </div>
            <div className="bg-gray_100 flex flex-col items-center justify-start sm:mx-[0] sm:w-[100%] w-[33%]">
              <div className="flex flex-col items-center justify-start md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start outline outline-[1px] outline-bluegray_50 rounded-radius12 w-[100%]">
                  <div className="flex flex-col justify-end md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                    <Text
                      className="font-bold sm:mt-[3px] md:mt-[5px] mt-[7px] text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Record Activity
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
                    <div className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Description
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                        wrapClassName="md:mt-[12px] mt-[17px] sm:mt-[9px] w-[100%]"
                        name="Input"
                        placeholder="Write your notes"
                        size="sm"
                      ></Input>
                    </div>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="flex md:mt-[17px] mt-[24px] sm:mt-[13px] sm:mx-[0] sm:w-[100%] w-[94%]"
                      name="DateTime"
                      placeholder="Nov 14 2021, 10:00"
                      suffix={
                        <Img
                          src="images/img_calendar.svg"
                          className="ml-[35px] mr-[4px] sm:ml-[19px] md:ml-[25px] my-[auto]"
                          alt="calendar"
                        />
                      }
                      size="sm"
                    ></Input>
                    <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[23px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Images
                      </Text>
                      <Button
                        className="cursor-pointer font-normal md:mt-[12px] mt-[17px] sm:mt-[9px] not-italic text-[16px] text-bluegray_400 text-center w-[100%]"
                        shape="RoundedBorder8"
                        size="sm"
                        variant="OutlineBluegray50_1"
                      >
                        ADD
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <Button
                      className="cursor-pointer font-medium mb-[12px] sm:mb-[6px] md:mb-[8px] min-w-[29%] md:mr-[11px] mr-[16px] sm:mr-[8px] text-[14px] text-center text-white_A700 w-[max-content]"
                      shape="CircleBorder25"
                      size="md"
                      variant="FillIndigoA400"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:pb-[13px] md:pb-[17px] pb-[24px] w-[100%]">
                <div className="flex flex-col justify-end md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                  <Text
                    className="font-bold sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    Activity Log
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]"
                    onClick={handleNavigate56}
                  >
                    <div className="bg-white_A700 border-bw11 border-indigo_A400 border-solid sm:h-[18px] md:h-[24px] h-[32px] md:mb-[103px] mb-[143px] sm:mb-[80px] mt-[11px] sm:mt-[6px] md:mt-[7px] rounded-radius50 sm:w-[17px] md:w-[23px] w-[32px]"></div>
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                      <div className="flex flex-col justify-end pr-[4px] py-[4px] w-[100%]">
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
                          Installation or inspection of your thermostat
                        </Text>
                      </div>
                      <div className="bg-gray_300 h-[120px] sm:h-[68px] md:h-[88px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]"></div>
                    </div>
                  </div>
                  <List
                    className="sm:gap-[13px] md:gap-[17px] gap-[24px] grid min-h-[auto] sm:mt-[13px] md:mt-[17px] mt-[24px] sm:w-[100%] w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <div className="bg-white_A700 border-bw11 border-indigo_A400 border-solid sm:h-[18px] md:h-[24px] h-[32px] my-[11px] sm:my-[6px] md:my-[7px] rounded-radius50 sm:w-[17px] md:w-[23px] w-[32px]"></div>
                      <div className="flex flex-col sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[87%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          16 Nov 2021
                        </Text>
                        <Text
                          className="font-medium md:mt-[10px] mt-[14px] sm:mt-[7px] text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          Installation of the new air conditioning system
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <div className="bg-white_A700 border-bw11 border-indigo_A400 border-solid sm:h-[18px] md:h-[24px] h-[32px] my-[11px] sm:my-[6px] md:my-[7px] rounded-radius50 sm:w-[17px] md:w-[23px] w-[32px]"></div>
                      <div className="flex flex-col sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[87%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                          variant="body3"
                        >
                          16 Nov 2021
                        </Text>
                        <Text
                          className="font-medium md:mt-[10px] mt-[14px] sm:mt-[7px] text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          Evaluation and removal of the old system
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[24px] md:p-[12px] p-[17px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <Text
                      className="font-medium text-indigo_A400 w-[auto]"
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
                    onClick={handleNavigate57}
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
                    onClick={handleNavigate46}
                    variant="icbFillIndigoA400"
                  >
                    <Img
                      src="images/img_bag_50X50.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="bag"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate47}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_user_50X50.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="user"
                    />
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
                    onClick={handleNavigate48}
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
                    onClick={handleNavigate49}
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
                    onClick={handleNavigate50}
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
                    onClick={handleNavigate51}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_settings.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="settings"
                    />
                  </Button>
                </div>
                <Line className="bg-bluegray_50 h-[1026px] sm:h-[577px] md:h-[745px] sm:ml-[10px] md:ml-[13px] ml-[19px] w-[1px]" />
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
                      onClick={handleNavigate41}
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
                      Deal Details
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_100_e6 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[20px] sm:w-[100%] w-[31%]">
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center sm:ml-[142px] md:ml-[183px] ml-[253px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    onClick={handleNavigate40}
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
                    alt="Avatar One"
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

export default DealDetailPage;
