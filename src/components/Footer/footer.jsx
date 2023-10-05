import React from "react";
import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const footer = () => {
  return (
    <>
      <footer className="bg-gray-100_01 flex items-center justify-center md:px-5 w-full">
        <div className="h-[400px] md:h-[990px] relative w-full">
          <Img
            className="h-[400px] m-auto object-cover w-full"
            src="images/img_footerbg.png"
            alt="footerbg"
          />
          <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[69%]">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[26%] md:w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-[36%] sm:w-full"
                  src="images/img_processed61652.png"
                  alt="processed61652_One"
                />
                <Text
                  className="mt-[15px] text-blue_gray-500 text-sm"
                  size="txtOpenSansRomanRegular14Bluegray500"
                >
                  <>
                    Nemo enim ipsam voluptatem quia voluptas sit <br />
                    aspernatur a odit aut fugit sed consequuntur <br />
                    magni dolores eos qui ratione.
                  </>
                </Text>
                <Text
                  className="mt-[19px] text-blue_gray-900_01 text-lg"
                  size="txtOpenSansRomanSemiBold18"
                >
                  Follow Us
                </Text>
                <Input
                  name="icons"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="flex mt-2.5 w-[51%]"
                  prefix={
                    <Img
                      className="h-5 mr-[35px] my-auto"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  }
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_skypebusiness.svg"
                      alt="skype-business"
                    />
                  }
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[136px] md:mt-0 mt-1 w-[9%] md:w-full">
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-900_01 text-xl"
                    >
                      <Text size="txtOpenSansRomanSemiBold20Bluegray90001">
                        About Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row items-center justify-evenly mt-[18px]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_panright.svg"
                          alt="panright"
                        />
                        <Text
                          className="text-[15px] text-indigo-900"
                          size="txtOpenSansRomanRegular15Indigo900"
                        >
                          How It Work
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[9px] text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Customers
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-2.5 text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Our Story
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[7px] text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Career
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[9px] text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Contact Us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-2.5 text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        FAQs
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[172px] md:mt-0 mt-[7px] w-[17%] md:w-full">
                <Text
                  className="text-blue_gray-900_01 text-xl"
                  size="txtOpenSansRomanSemiBold20Bluegray90001"
                >
                  Support & Summary
                </Text>
                <ul className="flex flex-col gap-[9px] items-start justify-start md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Question
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Helping Center
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Privacy & Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Buy or Rent
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Properties
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[15px] text-blue_gray-500"
                    >
                      <Text size="txtOpenSansRomanRegular15Bluegray500">
                        Blogs
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[84px] md:mt-0 mt-1 w-[17%] md:w-full">
                <a href="javascript:" className="text-blue_gray-900_01 text-xl">
                  <Text size="txtOpenSansRomanSemiBold20Bluegray90001">
                    Contact Us
                  </Text>
                </a>
                <div className="flex flex-col items-center justify-start mt-[22px] w-[89%] md:w-full">
                  <div className="flex flex-row gap-[13px] items-start justify-between w-full">
                    <Button
                      className="flex h-9 items-center justify-center my-[3px] rounded-[50%] w-9"
                      shape="circle"
                      color="indigo_900_1e"
                      size="sm"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_emailoutline.svg"
                        alt="emailoutline"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-blue_gray-900_01"
                        size="txtOpenSansRomanRegular16Bluegray90001"
                      >
                        E-mail
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm"
                        size="txtOpenSansRomanRegular14Bluegray500"
                      >
                        propads@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[13px] w-[85%] md:w-full">
                  <div className="flex flex-row gap-[13px] items-start justify-between w-full">
                    <Button
                      className="flex h-9 items-center justify-center mb-1 rounded-[50%] w-9"
                      shape="circle"
                      color="indigo_900_1e"
                      size="sm"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_phonedial.svg"
                        alt="phonedial"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-blue_gray-900_01"
                        size="txtOpenSansRomanRegular16Bluegray90001"
                      >
                        Contact
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-sm"
                        size="txtOpenSansRomanRegular14Bluegray500"
                      >
                        (+91) 123 456 7890
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[13px] items-start justify-between mt-3.5 w-full">
                  <Button
                    className="flex h-9 items-center justify-center mb-5 rounded-[50%] w-9"
                    shape="circle"
                    color="indigo_900_1e"
                    size="sm"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_mapmarkerradiusoutline.svg"
                      alt="mapmarkerradius"
                    />
                  </Button>
                  <div className="h-[57px] relative w-[77%]">
                    <Text
                      className="mb-[-0.01px] text-base text-blue_gray-900_01 z-[1]"
                      size="txtOpenSansRomanRegular16Bluegray90001"
                    >
                      Location
                    </Text>
                    <Text
                      className="leading-[18.00px] mt-auto mx-auto text-blue_gray-500 text-sm"
                      size="txtOpenSansRomanRegular14Bluegray500"
                    >
                      <>
                        3012 Pine Garden Lane
                        <br />
                        Gachibowli, Hydrabad
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-100 h-px mt-10 w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[21px] w-full">
              <div className="flex sm:flex-1 flex-row gap-2 items-start justify-between w-[23%] sm:w-full">
                <Text
                  className="text-blue_gray-500 text-sm"
                  size="txtOpenSansRomanSemiBold14Bluegray500"
                >
                  Copyright © 2022 PROPADS. Crafted with
                </Text>
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_heart_red_400.svg"
                  alt="heart"
                />
              </div>
              <Text
                className="text-blue_gray-500 text-right text-sm"
                size="txtOpenSansRomanRegular14Bluegray500"
              >
                Term Condition & Policy
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
