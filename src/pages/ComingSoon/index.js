import React from "react";

import { Button, Img, Text } from "components";

const ComingSoonPage = () => {
  return (
    <>
      <div className="bg-black_900_7f flex flex-col font-inter items-center justify-start mx-[auto] md:p-[137px] sm:p-[15px] p-[190px] w-[100%]">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[540px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[29px] p-[40px] sm:pl-[15px] sm:pr-[15px] rounded-radius12 w-[100%]">
          <Button
            className="flex sm:h-[45px] md:h-[59px] h-[80px] items-center justify-center rounded-radius50 sm:w-[44px] md:w-[58px] w-[80px]"
            size="3xlIcn"
            variant="icbGradientOrange3003fOrange30000"
          >
            <Img
              src="images/img_thumbsup.svg"
              className="flex items-center justify-center"
              alt="thumbsup"
            />
          </Button>
          <Text
            className="font-normal sm:mt-[26px] md:mt-[34px] mt-[47px] not-italic text-bluegray_600 w-[auto]"
            variant="body2"
          >
            DEMO VERSION ONLY
          </Text>
          <Text
            className="sm:mt-[37px] md:mt-[47px] mt-[66px] text-bluegray_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            Sorry.
          </Text>
          <div className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[29px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
            <Text
              className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_600 text-center w-[100%]"
              variant="body2"
            >
              This is an example demo only - not all screens or features are
              implemented.{" "}
            </Text>
            <Button
              className="cursor-pointer font-medium sm:mt-[22px] md:mt-[29px] mt-[40px] text-[14px] text-center text-white_A700 w-[100%]"
              shape="CircleBorder25"
              size="md"
              variant="FillIndigoA400"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage;
