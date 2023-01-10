import React from "react";

import { Text, Button, Img, Input, TextArea } from "components";

const EditTaskPage = () => {
  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] md:p-[134px] sm:p-[15px] p-[185px] w-[100%]">
        <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center justify-start max-w-[400px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[10px] p-[14px] sm:p-[7px] w-[100%]">
            <Text
              className="font-bold sm:ml-[10px] md:ml-[13px] ml-[18px] text-bluegray_900 w-[auto]"
              variant="body1"
            >
              Edit Task
            </Text>
            <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
              <Img
                src="images/img_close.svg"
                className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                alt="close"
              />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
              <Text
                className="flex-grow font-bold text-bluegray_900"
                variant="body2"
              >
                Complete?
              </Text>
              <Img
                src="images/img_checkmark_45X30.svg"
                className="flex-shrink-0 max-w-[100%] rounded-radius6 w-[9%]"
                alt="checkmark"
              />
            </div>
            <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                variant="body2"
              >
                Due Date
              </Text>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                name="time"
                placeholder="1:26 pm 25 Nov 2021"
                size="sm"
              ></Input>
            </div>
            <div className="flex flex-col justify-start sm:mb-[20px] md:mb-[26px] mb-[37px] sm:mt-[17px] md:mt-[23px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                variant="body2"
              >
                Description
              </Text>
              <TextArea
                className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[17px] sm:mt-[9px] not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                name="Input"
                placeholder="Lorem ipsum dolor sit amet consectetur adisipisicing elit"
                size="sm"
              ></TextArea>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
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

export default EditTaskPage;
