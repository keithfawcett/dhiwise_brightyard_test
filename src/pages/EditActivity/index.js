import React from "react";

import { Text, Button, Img, Input } from "components";

const EditActivityPage = () => {
  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] md:p-[134px] sm:p-[15px] p-[185px] w-[100%]">
        <div className="bg-gray_50 flex flex-col items-center justify-start max-w-[400px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[10px] p-[14px] sm:p-[7px] w-[100%]">
            <Text
              className="font-bold sm:ml-[10px] md:ml-[13px] ml-[18px] text-bluegray_900 w-[auto]"
              variant="body1"
            >
              Edit Activity
            </Text>
            <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
              <Img
                src="images/img_close.svg"
                className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                alt="close"
              />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-start pb-[12px] sm:pb-[6px] md:pb-[8px] px-[12px] sm:px-[6px] md:px-[8px] w-[100%]">
              <Button
                className="cursor-pointer font-normal min-w-[94%] not-italic text-[16px] text-bluegray_400 text-center w-[max-content]"
                shape="RoundedBorder8"
                size="md"
                variant="OutlineBluegray50"
              >
                Evaluation and removal of the old system
              </Button>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex md:mt-[14px] mt-[20px] sm:mt-[11px] sm:mx-[0] sm:w-[100%] w-[94%]"
                name="time"
                placeholder="9:13 am 30 Nov 2021"
                suffix={
                  <Img
                    src="images/img_calendar.svg"
                    className="ml-[35px] mr-[4px] sm:ml-[19px] md:ml-[25px] my-[auto]"
                    alt="calendar"
                  />
                }
                size="sm"
                variant="OutlineBluegray50_1"
              ></Input>
              <div className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
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
                  variant="OutlineBluegray50"
                >
                  ADD
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[128px] sm:mt-[71px] md:mt-[92px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
              <div className="flex flex-col items-center sm:mx-[0] md:p-[12px] p-[17px] sm:px-[15px] sm:py-[9px] rounded-radius25 sm:w-[100%] w-[48%]">
                <Text
                  className="font-medium mb-[1px] text-red_A100 w-[auto]"
                  variant="body3"
                >
                  Delete
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[48%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder25"
                size="md"
                variant="FillIndigoA400"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditActivityPage;
