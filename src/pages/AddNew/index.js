import React from "react";

import { Text, Button, Img, List, Line } from "components";
import { useNavigate } from "react-router-dom";

const AddNewPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/selectcustomer");
  }
  function handleNavigate8() {
    navigate("/addnewcustomer");
  }

  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] sm:p-[15px] md:p-[274px] p-[378px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[240px] mb-[1px] ml-[auto] mr-[auto] pb-[1px] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:pl-[10px] pl-[15px] sm:pl-[8px] w-[100%]">
            <Text
              className="font-medium text-bluegray_400 w-[auto]"
              variant="body3"
            >
              Add New
            </Text>
            <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
              <Img
                src="images/img_close.svg"
                className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                alt="close"
              />
            </Button>
          </div>
          <List
            className="gap-[1px] grid min-h-[auto] mt-[1px] w-[100%]"
            orientation="vertical"
          >
            <div
              className="common-pointer bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[10px] p-[15px] sm:p-[8px] w-[100%]"
              onClick={handleNavigate7}
            >
              <Img
                src="images/img_trash.svg"
                className="sm:h-[12px] md:h-[15px] h-[20px] max-w-[100%] sm:w-[11px] md:w-[14px] w-[20px]"
                alt="trash"
              />
              <Text
                className="font-medium md:ml-[10px] ml-[15px] sm:ml-[8px] text-bluegray_900 w-[auto]"
                variant="body3"
              >
                Deal
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="sm:h-[12px] md:h-[15px] h-[20px] max-w-[100%] ml-[125px] sm:ml-[70px] md:ml-[90px] sm:w-[11px] md:w-[14px] w-[20px]"
                alt="arrowright"
              />
            </div>
            <Line className="self-center w-[100%] h-[1px] bg-bluegray_50" />
            <div
              className="common-pointer bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[10px] p-[15px] sm:p-[8px] w-[100%]"
              onClick={handleNavigate8}
            >
              <Img
                src="images/img_user_50X50.svg"
                className="sm:h-[12px] md:h-[15px] h-[20px] max-w-[100%] sm:w-[11px] md:w-[14px] w-[20px]"
                alt="user"
              />
              <Text
                className="font-medium md:ml-[10px] ml-[15px] sm:ml-[8px] text-bluegray_900 w-[auto]"
                variant="body3"
              >
                Customer
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="sm:h-[12px] md:h-[15px] h-[20px] max-w-[100%] sm:ml-[49px] md:ml-[63px] ml-[88px] sm:w-[11px] md:w-[14px] w-[20px]"
                alt="arrowright One"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default AddNewPage;
