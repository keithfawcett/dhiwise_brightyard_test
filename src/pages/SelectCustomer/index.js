import React from "react";

import { Text, Button, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const SelectCustomerPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/addnewcustomer");
  }
  function handleNavigate1() {
    navigate("/addnewdeal");
  }
  function handleNavigate2() {
    navigate("/addnewcustomer");
  }

  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] md:p-[118px] sm:p-[15px] p-[164px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[400px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:p-[10px] p-[14px] sm:p-[7px] w-[100%]">
            <Text
              className="font-bold text-bluegray_900 w-[auto]"
              variant="body1"
            >
              Select Customer
            </Text>
            <Text
              className="common-pointer font-medium sm:ml-[48px] md:ml-[63px] ml-[87px] text-indigo_A400 w-[auto]"
              variant="body3"
              onClick={handleNavigate}
            >
              Add New
            </Text>
            <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center md:ml-[10px] ml-[14px] sm:ml-[7px] rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
              <Img
                src="images/img_close.svg"
                className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                alt="close"
              />
            </Button>
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <List
                className="md:gap-[2px] sm:gap-[2px] gap-[4px] grid min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <div
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]"
                  onClick={handleNavigate1}
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[82%]">
                    <div className="bg-bluegray_50 sm:h-[25px] md:h-[32px] h-[44px] mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"></div>
                    <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[4px] py-[4px] w-[100%]">
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
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        variant="body3"
                      >
                        deannannis@gmail.com
                      </Text>
                    </div>
                  </div>
                  <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[82%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Avatar One"
                    />
                    <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[4px] py-[4px] w-[100%]">
                        <Text
                          className="font-bold my-[1px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Andrea
                        </Text>
                        <Text
                          className="font-bold mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Willis
                        </Text>
                      </div>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        variant="body3"
                      >
                        andreawillis@gmail.com
                      </Text>
                    </div>
                  </div>
                  <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="arrowright One"
                    />
                  </Button>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[82%]">
                    <Img
                      src="images/img_avatar_44X44.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Avatar Two"
                    />
                    <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pr-[2px] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Brent
                        </Text>
                        <Text
                          className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Rodrigues
                        </Text>
                      </div>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        variant="body3"
                      >
                        brodrigues@gmail.com
                      </Text>
                    </div>
                  </div>
                  <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="arrowright Two"
                    />
                  </Button>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[82%]">
                    <Img
                      src="images/img_avatar_1.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Avatar Three"
                    />
                    <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pr-[2px] md:pr-[3px] pr-[5px] sm:py-[2px] md:py-[3px] py-[5px] w-[100%]">
                        <Text
                          className="font-bold my-[1px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Andrew
                        </Text>
                        <Text
                          className="font-bold mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Sommers
                        </Text>
                      </div>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        variant="body3"
                      >
                        andrewsommers@gmail.com
                      </Text>
                    </div>
                  </div>
                  <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="arrowright Three"
                    />
                  </Button>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[82%]">
                    <Img
                      src="images/img_avatar_2.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Avatar Four"
                    />
                    <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] w-[100%]">
                        <Text
                          className="font-bold mt-[1px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Edgar
                        </Text>
                        <Text
                          className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Cavins
                        </Text>
                      </div>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        variant="body3"
                      >
                        edgarcavins@gmail.com
                      </Text>
                    </div>
                  </div>
                  <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="arrowright Four"
                    />
                  </Button>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:p-[5px] md:p-[6px] p-[9px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[10px] ml-[15px] sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[82%]">
                    <Img
                      src="images/img_avatar_3.png"
                      className="sm:h-[25px] md:h-[32px] h-[44px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[44px]"
                      alt="Avatar Five"
                    />
                    <div className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pr-[2px] md:pr-[3px] pr-[5px] sm:py-[2px] md:py-[3px] py-[5px] w-[100%]">
                        <Text
                          className="font-bold mb-[1px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Theresa
                        </Text>
                        <Text
                          className="font-bold mb-[1px] sm:ml-[2px] md:ml-[3px] ml-[5px] text-bluegray_900 w-[auto]"
                          variant="body2"
                        >
                          Wells
                        </Text>
                      </div>
                      <Text
                        className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        variant="body3"
                      >
                        theresawells@gmail.com
                      </Text>
                    </div>
                  </div>
                  <Button className="flex sm:h-[29px] md:h-[37px] h-[50px] items-center justify-center rounded-radius50 sm:w-[28px] md:w-[36px] w-[50px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                      alt="arrowright Five"
                    />
                  </Button>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start mt-[4px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                <Text
                  className="common-pointer font-medium mb-[1px] text-indigo_A400 w-[auto]"
                  variant="body3"
                  onClick={handleNavigate2}
                >
                  Load More
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCustomerPage;
