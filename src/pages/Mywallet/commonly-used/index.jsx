import { Img, List, Text } from "components";

function CommonlyUsed() {
  return (
    <div className="bg-white_A700 flex items-center justify-start p-[19px] rounded-[24px] w-[100%]">
      <div className="flex flex-col gap-[34px] justify-start mb-[44px] md:w-[100%] w-[96%]">
        <div className="flex flex-row gap-[13px] items-start justify-end ml-[auto] md:w-[100%] w-[20%]">
          <Text
            className="font-semibold text-gray_900 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            پرکاربردها
          </Text>
          <Img
            src="images/img_volume.svg"
            className="h-[24px] w-[24px]"
            alt="volume One"
          />
        </div>
        <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start mr-[32px] md:w-[100%] w-[95%]">
          <List
            className="sm:flex-col flex-row gap-[24px] text-center grid grid-cols-2 sm:w-[100%] w-[66%]"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat cursor-pointer flex h-[115px] items-center justify-center sm:ml-[0] p-[27px] sm:px-[20px] w-[100%]"
              style={{
                backgroundImage: "url('images/img_group7021.svg')",
              }}
            >
              <Text
                className="font-semibold mt-[35px] text-center text-white_A700 w-[auto]"
                variant="body2"
              >
                شارژ پی پال
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat cursor-pointer flex h-[115px] items-center justify-center sm:ml-[0] p-[27px] sm:px-[20px] w-[100%]"
              style={{
                backgroundImage: "url('images/img_group7023.svg')",
              }}
            >
              <Text
                className="font-semibold mt-[36px] text-center text-white_A700 w-[auto]"
                variant="body2"
              >
                نقد کردن
              </Text>
            </div>
          </List>
          <div className="flex items-center cursor-pointer justify-start sm:w-[100%] w-[31%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-teal_A400 h-[115px] md:h-[82px] relative rounded-[21px] w-[100%]">
                <div
                  className="absolute bg-cover bg-no-repeat flex h-[82px] items-start justify-start p-[20px] right-[0] top-[0] w-[71%]"
                  style={{
                    backgroundImage: "url('images/img_group27.svg')",
                  }}
                >
                  <div className="flex h-[28px] items-center justify-start mb-[9px] mt-[3px] w-[28px]">
                    <div className="flex h-[28px] items-center justify-start w-[28px]">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[28px] w-[28px]"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[24%] font-semibold inset-x-[0] mx-[auto] text-center text-white_A700 w-[max-content]"
                  variant="body2"
                >
                  واریز به کیف پول
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonlyUsed;
