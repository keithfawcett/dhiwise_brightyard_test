import React from "react";

import { Text, Button, Img, TextArea, Input } from "components";

const AddNewTaskPage = () => {
  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] sm:p-[15px] md:p-[177px] p-[245px] w-[100%]">
        <div className="bg-white_A700 border border-bluegray_50 border-solid flex flex-col items-center justify-start max-w-[400px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[10px] p-[14px] sm:p-[7px] w-[100%]">
            <Text
              className="font-bold sm:ml-[10px] md:ml-[13px] ml-[18px] text-bluegray_900 w-[auto]"
              variant="body1"
            >
              Add New Task
            </Text>
            <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
              <Img
                src="images/img_close.svg"
                className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                alt="close"
              />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-end p-[10px] sm:p-[5px] md:p-[7px] w-[100%]">
            <TextArea
              className="font-normal mt-[2px] sm:mx-[0] not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 sm:w-[100%] w-[89%]"
              name="Task"
              placeholder="Enter task description"
            ></TextArea>
            <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                variant="body2"
              >
                Due Date
              </Text>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="md:mt-[13px] mt-[18px] sm:mt-[10px] w-[100%]"
                name="Input"
                placeholder="Due date"
                size="sm"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[12px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
              <div className="flex flex-col items-center sm:mx-[0] md:p-[12px] p-[17px] sm:px-[15px] sm:py-[9px] rounded-radius25 sm:w-[100%] w-[48%]">
                <Text
                  className="font-medium mb-[1px] text-bluegray_900 w-[auto]"
                  variant="body3"
                >
                  Cancel
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[48%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder25"
                size="md"
                variant="FillIndigoA400"
              >
                Save Task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewTaskPage;
