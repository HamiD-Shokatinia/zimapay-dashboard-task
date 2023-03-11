import { Img, Text } from "components";

function PersonalWallets() {
  return (
    <div className="md:h-[213px] h-[243px] mt-[33px] relative w-[99%]">
      <div className="absolute md:h-[160px] h-[180px] inset-x-[0] mx-[auto] top-[0] w-[86%]">
        <div
          className="absolute bg-cover bg-no-repeat flex h-[99px] inset-x-[0] items-center justify-start mx-[auto] p-[7px] shadow-bs top-[0] w-[84%]"
          style={{
            backgroundImage: "url('images/img_group6687.svg')",
          }}
        >
          <div className="flex flex-col items-start justify-start mb-[7px] md:w-[100%] w-[92%]">
            <div className="flex flex-row font-iransansxfanum items-end justify-between md:w-[100%] w-[99%]">
              <Img
                src="images/img_airplane.svg"
                className="h-[12px] mt-[5px] w-[auto]"
                alt="airplane"
              />
              <Text
                className="backdrop-opacity-[0.5] blur-[4.00px] font-semibold mb-[2px] text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                ریال
              </Text>
            </div>
            <Text
              className="font-inter mt-[31px] text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              EUR 5,780,13
            </Text>
            <div className="flex flex-row font-inter gap-[22px] items-start justify-between mt-[6px] w-[100%]">
              <Text
                className="not-italic text-left text-white_A700 w-[auto]"
                variant="body3"
              >
                IRR1,818,371,097
              </Text>
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                variant="body5"
              >
                ZRI 0933 578 3732
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] h-[160px] inset-x-[0] mx-[auto] w-[100%]">
          <div
            className="bg-cover bg-no-repeat flex h-[100%] items-center justify-start m-[auto] p-[16px] shadow-bs w-[100%]"
            style={{
              backgroundImage: "url('images/img_group6686.svg')",
            }}
          >
            <div className="flex flex-col items-start justify-start mb-[7px] md:w-[100%] w-[98%]">
              <div className="flex flex-row font-iransansxfanum items-start justify-between md:w-[100%] w-[97%]">
                <Img
                  src="images/img_airplane_white_a700.svg"
                  className="h-[20px] w-[20px]"
                  alt="airplane One"
                />
                <Text
                  className="font-semibold mt-[3px] text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  یورو
                </Text>
              </div>
              <Text
                className="font-inter mt-[45px] text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                EUR 5,780,13
              </Text>
              <div className="flex flex-row font-inter gap-[27px] items-start justify-between mt-[10px] w-[100%]">
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  IRR1,818,371,097
                </Text>
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body5"
                >
                  ZRI 0933 578 3732
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_300_9b h-[160px] inset-[0] justify-center m-[auto] rounded-[22px] w-[100%]"></div>
        </div>
      </div>
      <div
        className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[180px] inset-x-[0] items-center justify-start mx-[auto] p-[16px] shadow-bs w-[100%]"
        style={{
          backgroundImage: "url('images/img_dollarwallet.svg')",
        }}
      >
        <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[98%]">
          <div className="flex flex-row items-start justify-between md:w-[100%] w-[97%]">
            <Img
              src="images/img_airplane_white_a700.svg"
              className="h-[23px] w-[23px]"
              alt="airplane Two"
            />
            <Text
              className="font-semibold h-[24px] text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              دلار
            </Text>
          </div>
          <Text
            className="font-normal mt-[55px] not-italic text-left text-white_A700 w-[auto]"
            as="h4"
            variant="h4"
          >
            USD 5,780,13
          </Text>
          <div className="flex flex-row items-start justify-between mt-[4px] w-[100%]">
            <Text
              className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
              variant="body4"
            >
              IRR1 818,371,097
            </Text>
            <Img
              src="images/img_copy.svg"
              className="h-[24px] w-[24px]"
              alt="Copy"
            />
            <Text
              className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
              variant="body5"
            >
              ZRI 98423 576 3732
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalWallets;
