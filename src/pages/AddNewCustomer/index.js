import React from "react";

import { Text, Button, Img, Grid, Input } from "components";

const AddNewCustomerPage = () => {
  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] p-[105px] sm:p-[15px] md:p-[76px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[620px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[10px] p-[14px] sm:p-[7px] w-[100%]">
            <Text
              className="font-bold sm:ml-[10px] md:ml-[13px] ml-[18px] text-bluegray_900 w-[auto]"
              variant="body1"
            >
              Add New Customer
            </Text>
            <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
              <Img
                src="images/img_close.svg"
                className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                alt="close"
              />
            </Button>
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-start md:pb-[10px] pb-[14px] sm:pb-[7px] w-[100%]">
            <div className="flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
              <div className="flex flex-col justify-start sm:mx-[0] md:pr-[5px] pr-[7px] sm:pt-[3px] md:pt-[5px] pt-[7px] sm:px-[0] sm:w-[100%] w-[93%]">
                <Text
                  className="font-bold text-bluegray_900 w-[auto]"
                  variant="body2"
                >
                  Avatar
                </Text>
                <Button
                  className="cursor-pointer font-normal min-w-[14%] sm:mt-[10px] md:mt-[13px] mt-[18px] not-italic text-[16px] text-bluegray_400 text-center w-[max-content]"
                  shape="RoundedBorder8"
                  size="md"
                  variant="OutlineBluegray50_1"
                >
                  ADD
                </Button>
              </div>
              <Grid className="sm:gap-[11px] md:gap-[14px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[11px] md:mt-[14px] mt-[20px] sm:w-[100%] w-[93%]">
                <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    variant="body2"
                  >
                    First Name
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="flex h-[50px] md:mt-[13px] mt-[19px] sm:mt-[10px] w-[100%]"
                    name="FirstName"
                    placeholder=""
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
                    className="w-[100%]"
                    wrapClassName="flex h-[50px] md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                    name="LastName"
                    placeholder=""
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
                    className="w-[100%]"
                    wrapClassName="flex h-[50px] md:mt-[13px] mt-[19px] sm:mt-[10px] w-[100%]"
                    name="Email"
                    placeholder=""
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
                    className="w-[100%]"
                    wrapClassName="flex h-[50px] md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                    name="Phone"
                    placeholder=""
                  ></Input>
                </div>
              </Grid>
              <div className="flex flex-col justify-start sm:mt-[15px] md:mt-[19px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
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
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[14px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
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
            </div>
          </div>
          <div className="flex flex-col items-end justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end mb-[12px] sm:mb-[6px] md:mb-[8px] ml-[auto] md:mr-[11px] mr-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
              <div className="flex flex-col items-center sm:mx-[0] md:p-[12px] p-[17px] sm:px-[15px] sm:py-[9px] rounded-radius25 sm:w-[100%] w-[37%]">
                <Text
                  className="font-medium mb-[1px] text-bluegray_900 w-[auto]"
                  variant="body3"
                >
                  Cancel
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[58%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder25"
                size="md"
                variant="FillIndigoA400"
              >
                Save Customer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewCustomerPage;
