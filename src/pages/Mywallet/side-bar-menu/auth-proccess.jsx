import { Button, Text } from "components";
import { CircularProgressbar } from "react-circular-progressbar";

function AuthProccess() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-white_A700 flex h-[269px] items-center justify-start  mt-[61px] mr-[34px] mb-[24px] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs1 w-[auto]"
      style={{
        backgroundImage: "url('images/img_authenticationalert.svg')",
      }}
    >
      <div className="flex flex-col gap-[35px] items-center justify-start w-[100%]">
        <div className="flex flex-col gap-[24px] items-center justify-start w-[auto]">
          <div className="h-[58px] relative w-[58px]">
            <CircularProgressbar
              className="h-[58px] m-[auto] overflow-visible w-[58px]"
              value={77}
              counterClockwise
              strokeWidth={7}
              styles={{
                trail: {
                  strokeWidth: 7,
                  stroke: "#ff2c6c",
                  opacity: "20%",
                },
                path: {
                  strokeLinecap: "round",
                  height: "100%",
                  transformOrigin: "center",
                  transform: "rotate(277deg)",
                  stroke: "#ff2c6c",
                },
              }}
            ></CircularProgressbar>
            <Text
              className="absolute font-semibold h-[max-content] inset-[0] justify-center m-[auto] text-pink_500 text-right w-[max-content]"
              variant="body2"
            >
              80%
            </Text>
          </div>
          <div className="flex flex-col items-end justify-start w-[100%]">
            <Text
              className="font-semibold text-gray_900 text-right w-[auto]"
              variant="body4"
            >
              احراز هویت شما کامل نشده است!
            </Text>
            <Text
              className="font-normal leading-[21.00px] mt-[3px] not-italic text-gray_700 text-right"
              variant="body4"
            >
              اطلاعات خود را به صورت کامل وارد کنید تا
              <br />
              احراز هویت شما انجام شود.
            </Text>
          </div>
        </div>
        <Button className="bg-blue_500 cursor-pointer font-semibold min-w-[187px] py-[13px] rounded-[12px] text-[14px] text-center text-white_A700 w-[auto]">
          احراز هویت
        </Button>
      </div>
    </div>
  );
}

export default AuthProccess;
