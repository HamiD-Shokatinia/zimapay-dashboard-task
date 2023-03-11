import { Img, Line, Text } from "components";

function LinearChart() {
  return (
    <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[54%]">
      <div className="flex flex-row items-start justify-evenly w-[100%]">
        <Text
          className="font-normal leading-[39.00px] mb-[11px] not-italic text-bluegray_400 text-left"
          variant="body5"
        >
          30
          <br />
          20
          <br />
          15
          <br />0
        </Text>
        <div className="flex flex-col font-iransansx justify-start mt-[15px] w-[95%]">
          <div className="flex items-center justify-start md:ml-[0] ml-[17px] md:w-[100%] w-[94%]">
            <div className="h-[157px] relative w-[100%]">
              <div className="absolute h-[157px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="h-[157px] m-[auto] w-[100%]">
                  <div className="absolute bg-gradient  h-[157px] inset-[0] justify-center m-[auto] w-[14%]"></div>
                  <div className="absolute bottom-[18%] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                    <Line
                      style={{
                        border: "0.5px dashed #D4D8E2",
                      }}
                      className=" h-[0px] mt-[41px] w-[100%]"
                    />
                    <Line
                      style={{
                        border: "0.5px dashed #D4D8E2",
                      }}
                      className=" h-[0px] mt-[41px] w-[100%]"
                    />
                    <Line
                      style={{
                        border: "0.5px dashed #D4D8E2",
                      }}
                      className=" h-[0px] mt-[41px] w-[100%]"
                    />
                  </div>
                </div>
                <Line
                  style={{ border: "0.5px dashed #D4D8E2" }}
                  className="absolute  h-[0px] mx-[auto] top-[1%] w-[100%]"
                />
                <div
                  className="absolute bg-cover bg-no-repeat font-iransansx flex h-[65px] inset-x-[0] items-center justify-center mx-[auto] p-[16px] top-[20%] w-[99%]"
                  style={{
                    backgroundImage: "url('images/img_group29.png')",
                  }}
                >
                  <div
                    className="bg-cover bg-no-repeat  flex h-[20px] items-center justify-center mt-[3px] p-[10px] md:w-[100%] w-[53px]"
                    style={{
                      backgroundImage: "url('images/img_group30.svg')",
                    }}
                  >
                    <Text
                      className="text-center font-normal text-gray_901 w-[auto]"
                      variant="body5"
                    >
                      -$9,100
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_google.svg"
                className="common-pointer absolute bottom-[37%] h-[16px] inset-x-[0] mx-[auto] w-[auto]"
                alt="google"
              />
              <Img
                src="images/img_vector1341.svg"
                className="absolute h-[66px] inset-x-[0] mx-[auto] top-[24%] w-[auto]"
                alt="Vector1341"
              />
            </div>
          </div>
          <div className="flex flex-row font-hkgrotesk items-center justify-between md:w-[100%] w-[92%]">
            <Text
              className="font-normal not-italic text-bluegray_400 text-left tracking-[0.01px] w-[auto]"
              variant="body5"
            >
              1396
            </Text>
            <Text
              className="font-normal ml-[18px] not-italic text-bluegray_400 text-left tracking-[0.01px] w-[auto]"
              variant="body5"
            >
              1397
            </Text>
            <Text
              className="font-normal ml-[18px] not-italic text-bluegray_400 text-left tracking-[0.01px] w-[auto]"
              variant="body5"
            >
              1398
            </Text>
            <Text
              className="font-normal ml-[19px] not-italic text-blue_500 text-center tracking-[0.01px] w-[auto]"
              variant="body5"
            >
              1399
            </Text>
            <Text
              className="font-normal ml-[18px] not-italic text-bluegray_400 text-left tracking-[0.01px] w-[auto]"
              variant="body5"
            >
              1400
            </Text>
            <Text
              className="font-normal ml-[18px] not-italic text-bluegray_400 text-left tracking-[0.01px] w-[auto]"
              variant="body5"
            >
              1401
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinearChart;
