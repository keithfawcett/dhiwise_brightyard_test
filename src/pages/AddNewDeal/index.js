import React from "react";

import { Text, Button, Img, Input, Datepicker, SelectBox } from "components";
import { useNavigate } from "react-router-dom";

const AddNewDealPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/selectcustomer");
  }

  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] p-[112px] sm:p-[15px] md:p-[81px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[620px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[10px] p-[14px] sm:p-[7px] w-[100%]">
            <Text
              className="font-bold sm:ml-[10px] md:ml-[13px] ml-[18px] text-bluegray_900 w-[auto]"
              variant="body1"
            >
              Add New Deal
            </Text>
            <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
              <Img
                src="images/img_close.svg"
                className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                alt="close"
              />
            </Button>
          </div>
          <div className="bg-gray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center outline outline-[1px] outline-bluegray_50 md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[61%]">
              <div className="bg-gray_300 sm:h-[25px] md:h-[32px] h-[44px] sm:mb-[2px] md:mb-[3px] mb-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
              <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                <Text
                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                  variant="body3"
                >
                  Customer
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[3px] md:mt-[4px] mt-[6px] pr-[4px] py-[4px] w-[100%]">
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
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium min-w-[31%] sm:ml-[11px] md:ml-[14px] ml-[20px] my-[2px] text-[14px] text-bluegray_900 text-center w-[max-content]"
              onClick={handleNavigate6}
              shape="CircleBorder25"
              size="md"
              variant="OutlineBluegray50"
            >
              Change Customer
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col items-center justify-end md:p-[17px] p-[24px] sm:px-[15px] sm:py-[13px] w-[100%]">
                <div className="flex flex-col justify-start mt-[4px] sm:mx-[0] md:pr-[5px] pr-[8px] sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    variant="body2"
                  >
                    Room Images
                  </Text>
                  <Button
                    className="cursor-pointer font-normal min-w-[14%] md:mt-[12px] mt-[17px] sm:mt-[9px] not-italic text-[16px] text-bluegray_400 text-center w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineBluegray50_1"
                  >
                    ADD
                  </Button>
                </div>
                <div className="flex flex-col justify-start sm:mt-[15px] md:mt-[19px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
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
                  ></Input>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="sm:mx-[0] sm:w-[100%] w-[45%]"
                    name="City"
                    placeholder="City"
                    size="sm"
                  ></Input>
                  <Button
                    className="cursor-pointer font-normal min-w-[29%] sm:ml-[11px] md:ml-[14px] ml-[20px] not-italic text-[16px] text-bluegray_400 text-center w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineBluegray50_1"
                  >
                    State / Province
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[20%] sm:ml-[11px] md:ml-[14px] ml-[20px] not-italic text-[16px] text-bluegray_400 text-center w-[max-content]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineBluegray50_1"
                  >
                    Zip Code
                  </Button>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:pt-[4px] md:pt-[5px] pt-[8px] sm:px-[0] sm:w-[100%] w-[98%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Room Area (m2)
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[50px] md:mt-[12px] mt-[17px] sm:mt-[9px] w-[100%]"
                      name="RoomArea"
                      placeholder=""
                    ></Input>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[14px] ml-[20px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      # of People
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[50px] md:mt-[12px] mt-[17px] sm:mt-[9px] w-[100%]"
                      name="ofPeople"
                      placeholder=""
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    variant="body2"
                  >
                    Appointment Date
                  </Text>
                  <Datepicker
                    className="placeholder:bg-transparent bg-transparent font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    name="AppointmentDat"
                    placeholder="Nov 14, 2021"
                  ></Datepicker>
                </div>
                <div className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    variant="body2"
                  >
                    Special Instructions
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="flex h-[50px] md:mt-[12px] mt-[17px] sm:mt-[9px] w-[100%]"
                    name="SpecialInstruc"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[11px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:pt-[3px] md:pt-[5px] pt-[7px] sm:px-[0] sm:w-[100%] w-[98%]">
                  <div className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Room Access
                    </Text>
                    <SelectBox
                      className="font-normal sm:mt-[10px] md:mt-[13px] mt-[18px] not-italic text-[16px] text-bluegray_400 w-[100%]"
                      placeholderClassName="text-bluegray_400"
                      name="RoomAccess"
                      placeholder="Keys with doorman"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[20px] h-[20px] mr-[20px] sm:mr-[11px] sm:h-[12px] sm:w-[11px] md:mr-[14px] md:h-[15px] md:w-[14px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[14px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      variant="body2"
                    >
                      Price ($)
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[50px] md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                      name="Price"
                      placeholder=""
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                <Text
                  className="font-bold text-bluegray_900 w-[auto]"
                  variant="body2"
                >
                  Progress
                </Text>
                <SelectBox
                  className="font-normal ml-[12px] md:ml-[8px] sm:mx-[0] not-italic text-[16px] text-bluegray_400 sm:w-[100%] w-[68%]"
                  placeholderClassName="text-bluegray_400"
                  name="Progress One"
                  placeholder="In Progress"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="w-[20px] h-[20px] mr-[20px] sm:mr-[11px] sm:h-[12px] sm:w-[11px] md:mr-[14px] md:h-[15px] md:w-[14px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mb-[12px] sm:mb-[6px] md:mb-[8px] md:mr-[11px] mr-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                <div className="flex flex-col items-center sm:mx-[0] md:p-[12px] p-[17px] sm:px-[15px] sm:py-[9px] rounded-radius25 sm:w-[100%] w-[42%]">
                  <Text
                    className="font-medium mb-[1px] text-bluegray_900 w-[auto]"
                    variant="body3"
                  >
                    Cancel
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[52%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-white_A700 w-[max-content]"
                  shape="CircleBorder25"
                  size="md"
                  variant="FillIndigoA400"
                >
                  Save Deal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewDealPage;
