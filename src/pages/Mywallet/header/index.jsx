import React, { useState } from "react";
//components
import { Img, Input, Text } from "components";
//assets
import { CloseSVG } from "../../../assets/images";

function Header() {
  //hooks
  const [inputvalue, setInputvalue] = useState("");

  return (
    <header className="flex items-center justify-center w-[100%]">
      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
        <div className="flex h-[48px] cursor-pointer items-center justify-start p-[4px] w-[48px]">
          <Img
            src="images/img_ellipse1944.png"
            className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
            alt="Ellipse1944"
          />
        </div>
        <Img
          src="images/img_lock.svg"
          className="h-[24px] cursor-pointer md:ml-[0] ml-[20px] w-[24px]"
          alt="lock"
        />
        <Img
          src="images/img_question.svg"
          className="h-[24px] cursor-pointer md:ml-[0] ml-[24px] w-[24px]"
          alt="question"
        />
        <Input
          value={inputvalue}
          onChange={(e) => setInputvalue(e?.target?.value)}
          className="flex-1 font-medium gap-[8px] p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-right w-[100%]"
          wrapClassName="bg-gray_51 flex md:ml-[0] md:w-[100%] ml-[24px] px-[12px] py-[10px] rounded-[12px] sm:ml-[0] sm:w-[100%] w-[31%]"
          name="SearchBoxLarge"
          placeholder="جست و جو"
          suffix={
            inputvalue?.length > 0 ? (
              <CloseSVG
                className="cursor-pointer ml-[8px] my-[auto]"
                onClick={() => setInputvalue("")}
                color="#c2c2c2"
              />
            ) : (
              <Img
                src="images/img_search.svg"
                className="cursor-pointer ml-[8px] my-[auto]"
                alt="search"
              />
            )
          }
        ></Input>
        <Text
          className=" ml-[440px] text-gray_900 text-right  w-[auto]"
          as="h6"
          variant="h6"
        >
          <span
            dir="rtl"
            className="text-gray_900 text-[16px]  flex-row font-iransansxfanum not-italic"
          >
            {"عزیز، سلام!"}
          </span>
          <span className="text-gray_900 text-[16px] font-iransansxfanum font-semibold">
            {" مهرناز "}
          </span>
        </Text>
      </div>
    </header>
  );
}

export default Header;
