import { Img, Line, Text } from "components";
import AuthProccess from "./auth-proccess";



function SideBarMenu() {
  return (
    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[25%]">
      <div className="bg-white_A700  flex items-end justify-end pl-[16px] py-[16px] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[100%]">
        <div className="flex flex-col items-end  justify-start mt-[29px] md:w-[100%] w-[96%]">
          <Img
            src="images/img_zimalogo.svg"
            className="h-[33px] w-[auto]"
            alt="ZimaLogo"
          />
          <div className="flex flex-row gap-[32px] cursor-pointer items-start justify-end ml-[auto] mt-[56px] md:w-[100%] w-[38%]">
            <Text
              className="font-normal not-italic text-gray_700 text-right w-[auto]"
              as="h4"
              variant="h4"
            >
              داشبورد
            </Text>
            <Img
              src="images/img_volume_gray_700.svg"
              className="h-[24px] w-[24px]"
              alt="volume Four"
            />
          </div>
          <div className="flex flex-row cursor-pointer items-start justify-start mt-[32px] md:w-[100%] w-[98%]">
            <Img
              src="images/img_dropdown.svg"
              className="h-[20px] mt-[6px] w-[20px]"
              alt="DropDown"
            />
            <Text
              className="font-semibold ml-[129px] mt-[3px] text-blue_500 text-right w-[auto]"
              as="h4"
              variant="h4"
            >
              کیف پول
            </Text>
            <Img
              src="images/img_clock.svg"
              className="h-[24px] ml-[32px] mt-[3px] w-[24px]"
              alt="clock"
            />
            <Line className="bg-blue_500 h-[30px] mb-[3px] ml-[27px] w-[5px]" />
          </div>
          <div className="flex flex-col gap-[33px] items-end justify-start mt-[32px] md:w-[100%] w-[41%]">
            <div className="flex flex-row cursor-pointer gap-[32px] items-start justify-between w-[100%]">
              <Text
                className="font-normal not-italic text-gray_700 text-right w-[auto]"
                as="h4"
                variant="h4"
              >
                سفارشات
              </Text>
              <Img
                src="images/img_videocamera.svg"
                className="h-[24px] w-[24px]"
                alt="videocamera"
              />
            </div>
            <div className="flex flex-row cursor-pointer gap-[32px] items-start justify-end ml-[auto] md:w-[100%] w-[85%]">
              <Text
                className="font-normal not-italic text-gray_700 text-right w-[auto]"
                as="h4"
                variant="h4"
              >
                نرخ ارز
              </Text>
              <Img
                src="images/img_volume_gray_700_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="volume Five"
              />
            </div>
          </div>
          <div className="flex flex-col items-end justify-start mt-[33px] md:w-[100%] w-[100%]">
            <div className="flex flex-row cursor-pointer items-start justify-between w-[100%]">
              <div className="flex items-center justify-start w-[auto]">
                <div className="bg-red_100 h-[24px] px-[14px] relative rounded-[12px] w-[40px]">
                  <div className="absolute bg-red_100 bottom-[3%] h-[22px] inset-x-[0] mx-[auto] px-[14px] rounded-[11px] w-[100%]"></div>
                  <Text
                    className="absolute font-semibold h-[100%] inset-[0] justify-center m-[auto] text-center text-red_500 w-[max-content]"
                    variant="body2"
                  >
                    2
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[32px] items-start justify-end ml-[auto] md:w-[100%] w-[85%]">
                <Text
                  className="font-normal not-italic text-gray_700 text-right w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  پروفایل
                </Text>
                <Img
                  src="images/profilo.png"
                  className="h-[24px] w-[24px]"
                  alt="volume Five"
                />
              </div>
            </div>
            <div className="flex flex-row cursor-pointer gap-[32px] items-start justify-end ml-[auto] mt-[32px] md:w-[100%] w-[75%]">
              <Text
                className="font-normal not-italic text-gray_700 text-right w-[auto]"
                as="h4"
                variant="h4"
              >
                معرفی حساب بانکی
              </Text>
              <Img
                src="images/img_trash.svg"
                className="h-[24px] w-[24px]"
                alt="trash"
              />
            </div>
            <div className="flex flex-row cursor-pointer gap-[32px] items-start justify-end ml-[auto] mt-[33px] md:w-[100%] w-[36%]">
              <Text
                className="font-normal not-italic text-gray_700 text-right w-[auto]"
                as="h4"
                variant="h4"
              >
                تیکت
              </Text>
              <Img
                src="images/img_volume_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="volume Six"
              />
            </div>
            <div className="flex flex-row cursor-pointer gap-[32px] items-start justify-end ml-[auto] mt-[34px] md:w-[100%] w-[45%]">
              <Text
                className="font-normal not-italic text-gray_700 text-right w-[auto]"
                as="h4"
                variant="h4"
              >
                تنظیمات
              </Text>
              <Img
                src="images/img_settings.svg"
                className="h-[24px] w-[24px]"
                alt="settings"
              />
            </div>
            <div className="flex flex-row cursor-pointer gap-[32px] items-start justify-end ml-[auto] mt-[33px] md:w-[100%] w-[64%]">
              <Text
                className="font-normal not-italic text-gray_700 text-right w-[auto]"
                as="h4"
                variant="h4"
              >
                باشگاه مشتریان
              </Text>
              <Img
                src="images/img_trophy.svg"
                className="h-[24px] w-[24px]"
                alt="trophy"
              />
            </div>
            <AuthProccess/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
