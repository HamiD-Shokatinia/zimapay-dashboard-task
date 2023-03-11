import { Img, Line, List, Text } from "components";
import LinearChart from "./linear-chart";
import PieChart from "./pie-chart";

function MyAssets() {
  return (
    <div className="bg-white_A700 flex items-center justify-start p-[19px] rounded-[22px] w-[100%]">
      <div className="flex flex-col justify-start mb-[8px] md:w-[100%] w-[97%]">
        <div className="flex flex-row gap-[13px] items-start justify-end ml-[auto] md:w-[100%] w-[27%]">
          <Text
            className="font-semibold text-gray_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            دارایی های من
          </Text>
          <Img
            src="images/img_volume.svg"
            className="h-[24px] w-[24px]"
            alt="volume"
          />
        </div>
        <div className="flex flex-col font-iransansx items-start justify-start md:ml-[0] ml-[6px] mr-[31px] mt-[41px] md:w-[100%] w-[94%]">
          <div className="flex sm:flex-col flex-row sm:gap-[46px] items-start justify-between w-[100%]">
            <LinearChart/>
            <PieChart/>
          </div>
          <div className="flex flex-row font-iransansxfanum gap-[56px] items-center justify-start md:ml-[0] ml-[6px] mt-[39px] md:w-[100%] w-[57%]">
            <Text
              className="font-semibold text-gray_700 text-left w-[auto]"
              variant="body5"
            >
              موجودی (ریالی)
            </Text>
            <Text
              className="font-semibold text-gray_700 text-left w-[auto]"
              variant="body5"
            >
              موجودی (ارزی)
            </Text>
            <Text
              className="font-semibold text-gray_700 text-left w-[auto]"
              variant="body5"
            >
              سود/زیان
            </Text>
          </div>
          <List
            className="flex-col gap-[17px] grid items-center md:ml-[0] ml-[5px] mt-[23px] w-[97%]"
            orientation="vertical"
          >
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
              <Text
                className="font-iransansxfanum font-semibold text-black_900 text-left w-[auto]"
                variant="body2"
              >
                600,000
              </Text>
              <Text
                className="font-iransansxfanum font-semibold sm:ml-[0] ml-[83px] sm:mt-[0] mt-[2px] text-black_900 text-left w-[auto]"
                variant="body2"
              >
                280,54
              </Text>
              <Text
                className="font-iransansxfanum font-semibold mb-[2px] sm:ml-[0] ml-[79px] text-green_A700 text-left w-[auto]"
                variant="body2"
              >
                +1500
              </Text>
              <Text
                className="font-iransansx font-normal sm:ml-[0] ml-[151px] sm:mt-[0] mt-[2px] text-gray_900 text-right w-[auto]"
                variant="body2"
              >
                دلار
              </Text>
              <div
                className="bg-cover bg-no-repeat font-segoeui md:h-[13px] h-[22px] sm:ml-[0] ml-[16px] p-[3px] relative sm:w-[100%] w-[7%]"
                style={{
                  backgroundImage: "url('images/img_group6903.svg')",
                }}
              >
                <div className="h-[13px] w-[63%]">
                  <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                      <div className="bg-white_A701 flex h-[5px] items-center justify-start rounded-[2px] w-[5px]">
                        <Img
                          src="images/img_vector.svg"
                          className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                          alt="Vector"
                        />
                      </div>
                      <Text
                        className="text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        0800 2292 3836 3404
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-teal_200 flex h-[5px] items-center justify-start left-[9%] rounded-[2px] top-[0] w-[5px]">
                    <Img
                      src="images/img_vector_indigo_600.svg"
                      className="h-[5px] w-[4px]"
                      alt="Vector One"
                    />
                  </div>
                </div>
                <div className="absolute bg-yellow_A700 flex h-[5px] items-center justify-start left-[23%] rounded-[2px] top-[14%] w-[5px]">
                  <Img
                    src="images/img_vector_indigo_600.svg"
                    className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                    alt="Vector Two"
                  />
                </div>
              </div>
            </div>
            <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
              <Text
                className="font-iransansxfanum font-semibold text-black_900 text-left w-[auto]"
                variant="body2"
              >
                400
              </Text>
              <Text
                className="font-iransansxfanum font-semibold sm:ml-[0] ml-[109px] sm:mt-[0] mt-[2px] text-black_900 text-left w-[auto]"
                variant="body2"
              >
                280,54
              </Text>
              <Text
                className="font-iransansxfanum font-semibold mb-[2px] sm:ml-[0] ml-[79px] text-left text-red_500 w-[auto]"
                variant="body2"
              >
                -1000
              </Text>
              <Text
                className="font-iransansx font-normal sm:ml-[0] ml-[154px] sm:mt-[0] mt-[5px] text-gray_900 text-right w-[auto]"
                variant="body2"
              >
                یورو
              </Text>
              <div
                className="bg-cover bg-no-repeat font-segoeui md:h-[13px] h-[22px] sm:ml-[0] ml-[16px] p-[3px] relative sm:w-[100%] w-[7%]"
                style={{
                  backgroundImage:
                    "url('images/img_group6903_deep_purple_100.svg')",
                }}
              >
                <div className="h-[13px] w-[63%]">
                  <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                      <div className="bg-white_A701 flex h-[5px] items-center justify-start rounded-[2px] w-[5px]">
                        <Img
                          src="images/img_vector.svg"
                          className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                          alt="Vector One"
                        />
                      </div>
                      <Text
                        className="text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        0800 2292 3836 3404
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-teal_200 flex h-[5px] items-center justify-start left-[9%] rounded-[2px] top-[0] w-[5px]">
                    <Img
                      src="images/img_vector_indigo_600.svg"
                      className="h-[5px] w-[4px]"
                      alt="Vector One One"
                    />
                  </div>
                </div>
                <div className="absolute bg-yellow_A700 flex h-[5px] items-center justify-start left-[23%] rounded-[2px] top-[14%] w-[5px]">
                  <Img
                    src="images/img_vector_indigo_600.svg"
                    className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                    alt="Vector Two One"
                  />
                </div>
              </div>
            </div>
            <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
              <Text
                className="font-iransansxfanum font-semibold text-black_900 text-left w-[auto]"
                variant="body2"
              >
                8000
              </Text>
              <Text
                className="font-iransansxfanum font-semibold sm:ml-[0] ml-[102px] sm:mt-[0] mt-[2px] text-black_900 text-left w-[auto]"
                variant="body2"
              >
                280,54
              </Text>
              <Text
                className="font-iransansxfanum font-semibold mb-[2px] sm:ml-[0] ml-[79px] text-left text-red_500 w-[auto]"
                variant="body2"
              >
                -1000
              </Text>
              <Text
                className="font-iransansx font-normal sm:ml-[0] ml-[163px] sm:mt-[0] mt-[2px] text-gray_900 text-right w-[auto]"
                variant="body2"
              >
                لیر
              </Text>
              <div
                className="bg-cover bg-no-repeat font-segoeui md:h-[13px] h-[22px] sm:ml-[0] ml-[16px] p-[3px] relative sm:w-[100%] w-[7%]"
                style={{
                  backgroundImage: "url('images/img_group6903_teal_a400.svg')",
                }}
              >
                <div className="h-[13px] w-[63%]">
                  <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                      <div className="bg-white_A701 flex h-[5px] items-center justify-start rounded-[2px] w-[5px]">
                        <Img
                          src="images/img_vector.svg"
                          className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                          alt="Vector Two"
                        />
                      </div>
                      <Text
                        className="text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        0800 2292 3836 3404
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-teal_200 flex h-[5px] items-center justify-start left-[9%] rounded-[2px] top-[0] w-[5px]">
                    <Img
                      src="images/img_vector_indigo_600.svg"
                      className="h-[5px] w-[4px]"
                      alt="Vector One Two"
                    />
                  </div>
                </div>
                <div className="absolute bg-yellow_A700 flex h-[5px] items-center justify-start left-[23%] rounded-[2px] top-[14%] w-[5px]">
                  <Img
                    src="images/img_vector_indigo_600.svg"
                    className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                    alt="Vector Two Two"
                  />
                </div>
              </div>
            </div>
          </List>
        </div>
        <Line className="bg-gray_200 h-[1px] mr-[37px] mt-[18px] rotate-[-180deg] w-[94%]" />
        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[12px] mt-[15px] md:w-[100%] w-[91%]">
          <Text
            className="font-iransansxfanum font-semibold sm:mt-[0] mt-[3px] text-black_900 text-left w-[auto]"
            variant="body2"
          >
            8000
          </Text>
          <Text
            className="font-iransansxfanum font-semibold sm:ml-[0] ml-[101px] text-black_900 text-left w-[auto]"
            variant="body2"
          >
            280,54
          </Text>
          <Text
            className="font-iransansxfanum font-semibold mb-[3px] sm:ml-[0] ml-[79px] text-green_A700 text-left w-[auto]"
            variant="body2"
          >
            +1500
          </Text>
          <Text
            className="font-iransansx font-normal sm:ml-[0] ml-[146px] sm:mt-[0] mt-[5px] text-gray_900 text-right w-[auto]"
            variant="body2"
          >
            پوند
          </Text>
          <div
            className="bg-cover bg-no-repeat font-segoeui sm:h-[13px] md:h-[15px] h-[22px] sm:ml-[0] ml-[16px] sm:mt-[0] mt-[2px] p-[3px] relative sm:w-[100%] w-[7%]"
            style={{
              backgroundImage: "url('images/img_group6903_pink_300.svg')",
            }}
          >
            <div className="h-[13px] w-[63%]">
              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                  <div className="bg-white_A701 flex h-[5px] items-center justify-start rounded-[2px] w-[5px]">
                    <Img
                      src="images/img_vector.svg"
                      className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                      alt="Vector Three"
                    />
                  </div>
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    0800 2292 3836 3404
                  </Text>
                </div>
              </div>
              <div className="absolute bg-teal_200 flex h-[5px] items-center justify-start left-[9%] rounded-[2px] top-[0] w-[5px]">
                <Img
                  src="images/img_vector_indigo_600.svg"
                  className="h-[5px] w-[4px]"
                  alt="Vector Four"
                />
              </div>
            </div>
            <div className="absolute bg-yellow_A700 flex h-[5px] items-center justify-start left-[23%] rounded-[2px] top-[14%] w-[5px]">
              <Img
                src="images/img_vector_indigo_600.svg"
                className="h-[5px] rounded-tl-[2px] rounded-tr-[2px] w-[5px]"
                alt="Vector Five"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAssets;
