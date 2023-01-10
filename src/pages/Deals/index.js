import React from "react";

import { Stack, Line, Text, Button, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const DealsPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/comingsoon");
  }
  function handleNavigate4() {
    navigate("/selectcustomer");
  }
  function handleNavigate5() {
    navigate("/");
  }
  function handleNavigate9() {
    navigate("/customers");
  }
  function handleNavigate10() {
    navigate("/tasks");
  }
  function handleNavigate11() {
    navigate("/comingsoon");
  }
  function handleNavigate12() {
    navigate("/comingsoon");
  }
  function handleNavigate13() {
    navigate("/comingsoon");
  }
  function handleNavigate19() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Stack className="bg-gray_50 h-[910px] relative w-[100%]">
          <Line className="absolute bg-bluegray_50 sm:h-[511px] md:h-[661px] h-[910px] left-[7%] w-[1px]" />
          <div className="absolute bottom-[0] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[94%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
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
                  136
                </Text>
                <Text
                  className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-bluegray_900 w-[auto]"
                  variant="body2"
                >
                  deals
                </Text>
              </div>
              <Button
                className="flex items-center justify-center md:ml-[530px] min-w-[20%] ml-[731px] sm:ml-[410px] text-center w-[max-content]"
                rightIcon={
                  <Img
                    src="images/img_checkmark.svg"
                    className="ml-[14px] sm:ml-[7px] md:ml-[10px] text-center"
                    alt="checkmark"
                  />
                }
                shape="CircleBorder25"
                size="md"
                variant="OutlineBluegray50"
              >
                <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_900">
                  Sort by: Date Created
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[3px] md:p-[5px] p-[7px] w-[100%]">
                  <Stack className="h-[44px] ml-[4px] sm:p-[5px] md:p-[6px] p-[9px] relative sm:w-[24px] md:w-[31px] w-[44px]">
                    <Img
                      src="images/img_vuesaxboldima.svg"
                      className="absolute h-[24px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[13px] md:w-[17px] w-[24px]"
                      alt="vuesaxboldima"
                    />
                  </Stack>
                  <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[34%]">
                    <Text
                      className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Name
                    </Text>
                  </div>
                  <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                    <Text
                      className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Area
                    </Text>
                  </div>
                  <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                    <Text
                      className="font-medium mt-[3px] text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Appointment Date
                    </Text>
                  </div>
                  <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] w-[10%] sm:w-[100%]">
                    <Text
                      className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Price
                    </Text>
                  </div>
                  <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] w-[10%] sm:w-[100%]">
                    <Text
                      className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
                      variant="body2"
                    >
                      Status
                    </Text>
                  </div>
                  <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] md:p-[4px] p-[6px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[5%]">
                    <Text
                      className="font-medium mt-[1px] text-bluegray_400 w-[auto]"
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
                <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                    <div className="bg-bluegray_50 sm:h-[25px] md:h-[32px] h-[44px] ml-[2px] sm:my-[4px] md:my-[5px] my-[8px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[26%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[1px] w-[100%]">
                        <Text
                          className="font-normal my-[1px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          475 Spruce Drive,
                        </Text>
                        <Text
                          className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Pittsburgh,
                        </Text>
                        <Text
                          className="font-normal mb-[1px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          PA
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          23592
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[124px] md:ml-[89px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                      <Text
                        className="flex-grow font-normal mt-[1px] not-italic text-bluegray_900"
                        variant="body2"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="flex-shrink-0 max-w-[100%] ml-[2px] sm:mr-[24px] md:mr-[31px] mr-[44px] w-[20%]"
                        alt="minimize"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Nov 14, 2021 07:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[5%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          $
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          6000
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[10%] sm:ml-[52px] md:ml-[67px] ml-[93px] my-[10px] sm:my-[5px] md:my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillDeeppurple50"
                    >
                      IN PROGRESS
                    </Button>
                    <Button
                      className="flex sm:h-[34px] md:h-[44px] h-[60px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[24px] sm:w-[33px] md:w-[43px] w-[60px]"
                      shape="icbRoundedBorder10"
                      size="2xlIcn"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] ml-[2px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Image One"
                    />
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pr-[1px] py-[1px] w-[100%]">
                        <Text
                          className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          1952 Chicago Avenue,
                        </Text>
                        <Text
                          className="font-normal mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Fresno,
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          CA
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          93711
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[119px] md:ml-[86px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                      <Text
                        className="flex-grow font-normal mt-[1px] not-italic text-bluegray_900"
                        variant="body2"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="flex-shrink-0 max-w-[100%] ml-[2px] sm:mr-[24px] md:mr-[31px] mr-[44px] w-[20%]"
                        alt="minimize One"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Nov 15, 2021 08:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[5%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          $
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          6000
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[10%] sm:ml-[52px] md:ml-[67px] ml-[93px] my-[10px] sm:my-[5px] md:my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillDeeppurple50"
                    >
                      CLOSED
                    </Button>
                    <Button
                      className="flex sm:h-[34px] md:h-[44px] h-[60px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[24px] sm:w-[33px] md:w-[43px] w-[60px]"
                      shape="icbRoundedBorder10"
                      size="2xlIcn"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                    <Img
                      src="images/img_image_4.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] ml-[2px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Image Two"
                    />
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[25%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal mt-[1px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          4409 Haul Road,
                        </Text>
                        <Text
                          className="font-normal my-[1px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Saint Paul,
                        </Text>
                        <Text
                          className="font-normal mb-[1px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          MN
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          55102
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[132px] md:ml-[95px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                      <Text
                        className="flex-grow font-normal mt-[1px] not-italic text-bluegray_900"
                        variant="body2"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="flex-shrink-0 max-w-[100%] ml-[2px] sm:mr-[24px] md:mr-[31px] mr-[44px] w-[20%]"
                        alt="minimize Two"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Nov 16, 2021 09:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[5%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          $
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          6000
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[10%] sm:ml-[52px] md:ml-[67px] ml-[93px] my-[10px] sm:my-[5px] md:my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillDeeppurple50"
                    >
                      IN PROGRESS
                    </Button>
                    <Button
                      className="flex sm:h-[34px] md:h-[44px] h-[60px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[24px] sm:w-[33px] md:w-[43px] w-[60px]"
                      shape="icbRoundedBorder10"
                      size="2xlIcn"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                    <Img
                      src="images/img_image_5.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] ml-[2px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Image Three"
                    />
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pr-[1px] py-[1px] w-[100%]">
                        <Text
                          className="font-normal sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          579 Godfrey Street,
                        </Text>
                        <Text
                          className="font-normal mb-[4px] sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Monitor,
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          OR
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          97071
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[133px] md:ml-[96px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                      <Text
                        className="flex-grow font-normal mt-[1px] not-italic text-bluegray_900"
                        variant="body2"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="flex-shrink-0 max-w-[100%] ml-[2px] sm:mr-[24px] md:mr-[31px] mr-[44px] w-[20%]"
                        alt="minimize Three"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Nov 17, 2021 10:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[5%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          $
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          6000
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[10%] sm:ml-[52px] md:ml-[67px] ml-[93px] my-[10px] sm:my-[5px] md:my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillDeeppurple50"
                    >
                      CLOSED
                    </Button>
                    <Button
                      className="flex sm:h-[34px] md:h-[44px] h-[60px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[24px] sm:w-[33px] md:w-[43px] w-[60px]"
                      shape="icbRoundedBorder10"
                      size="2xlIcn"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] ml-[2px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Image Four"
                    />
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end pr-[1px] py-[1px] w-[100%]">
                        <Text
                          className="font-normal mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          2705 Cantebury Drive,
                        </Text>
                        <Text
                          className="font-normal mb-[3px] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          New York,
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          NY
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          10011
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[71px] ml-[99px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                      <Text
                        className="flex-grow font-normal mt-[1px] not-italic text-bluegray_900"
                        variant="body2"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="flex-shrink-0 max-w-[100%] ml-[2px] sm:mr-[24px] md:mr-[31px] mr-[44px] w-[20%]"
                        alt="minimize Four"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Nov 20, 2021 07:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[5%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          $
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          6000
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[10%] sm:ml-[52px] md:ml-[67px] ml-[93px] my-[10px] sm:my-[5px] md:my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillDeeppurple50"
                    >
                      IN PROGRESS
                    </Button>
                    <Button
                      className="flex sm:h-[34px] md:h-[44px] h-[60px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[24px] sm:w-[33px] md:w-[43px] w-[60px]"
                      shape="icbRoundedBorder10"
                      size="2xlIcn"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                    <Img
                      src="images/img_image_5.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] ml-[2px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Image Five"
                    />
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pr-[1px] py-[1px] w-[100%]">
                        <Text
                          className="font-normal sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          579 Godfrey Street,
                        </Text>
                        <Text
                          className="font-normal mb-[4px] sm:mt-[3px] md:mt-[5px] mt-[7px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Monitor,
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          OR
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          97071
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[133px] md:ml-[96px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                      <Text
                        className="flex-grow font-normal mt-[1px] not-italic text-bluegray_900"
                        variant="body2"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="flex-shrink-0 max-w-[100%] ml-[2px] sm:mr-[24px] md:mr-[31px] mr-[44px] w-[20%]"
                        alt="minimize Five"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Nov 17, 2021 10:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[5%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          $
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          6000
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[10%] sm:ml-[52px] md:ml-[67px] ml-[93px] my-[10px] sm:my-[5px] md:my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillDeeppurple50"
                    >
                      CLOSED
                    </Button>
                    <Button
                      className="flex sm:h-[34px] md:h-[44px] h-[60px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[24px] sm:w-[33px] md:w-[43px] w-[60px]"
                      shape="icbRoundedBorder10"
                      size="2xlIcn"
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] ml-[2px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Image Six"
                    />
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end pr-[1px] py-[1px] w-[100%]">
                        <Text
                          className="font-normal mb-[3px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          2705 Cantebury Drive,
                        </Text>
                        <Text
                          className="font-normal mb-[3px] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          New York,
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] sm:my-[2px] md:my-[3px] my-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          NY
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          10011
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[71px] ml-[99px] sm:mx-[0] md:pr-[4px] pr-[6px] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[9%]">
                      <Text
                        className="flex-grow font-normal mt-[1px] not-italic text-bluegray_900"
                        variant="body2"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_minimize.svg"
                        className="flex-shrink-0 max-w-[100%] ml-[2px] sm:mr-[24px] md:mr-[31px] mr-[44px] w-[20%]"
                        alt="minimize Six"
                      />
                    </div>
                    <div className="flex flex-col md:ml-[17px] ml-[24px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:py-[2px] md:py-[3px] py-[5px] sm:w-[100%] w-[17%]">
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Nov 20, 2021 07:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-center md:ml-[17px] ml-[24px] sm:mx-[0] sm:px-[0] sm:py-[3px] md:py-[4px] py-[6px] sm:w-[100%] w-[5%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[1px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          $
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          6000
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[10%] sm:ml-[52px] md:ml-[67px] ml-[93px] my-[10px] sm:my-[5px] md:my-[7px] text-[12px] text-center text-indigo_A400 uppercase w-[max-content]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillDeeppurple50"
                    >
                      IN PROGRESS
                    </Button>
                    <Button
                      className="flex sm:h-[34px] md:h-[44px] h-[60px] items-center justify-center sm:ml-[13px] md:ml-[17px] ml-[24px] sm:w-[33px] md:w-[43px] w-[60px]"
                      shape="icbRoundedBorder10"
                      size="2xlIcn"
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
                    onClick={handleNavigate19}
                    variant="icbOutlineBluegray50"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="videocamera"
                    />
                  </Button>
                  <Button
                    className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[100%]"
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
                    onClick={handleNavigate9}
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
                    onClick={handleNavigate10}
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
                    onClick={handleNavigate11}
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
                    onClick={handleNavigate12}
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
                    onClick={handleNavigate13}
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
                      onClick={handleNavigate5}
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
                      Deals
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_50_e5 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] md:p-[14px] sm:p-[15px] p-[20px] sm:w-[100%] w-[31%]">
                  <Button
                    className="flex items-center justify-center md:ml-[50px] min-w-[44%] ml-[70px] sm:ml-[39px] text-center w-[max-content]"
                    onClick={handleNavigate4}
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
                      Add New Deal
                    </div>
                  </Button>
                  <Button
                    className="common-pointer flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[20px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]"
                    onClick={handleNavigate3}
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

export default DealsPage;
