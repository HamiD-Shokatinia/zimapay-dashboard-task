import { Button, Img, Line, List, Text } from "components";

import { Link } from "react-router-dom";

function LastTransactions() {
  return (
    <>
      <div className="flex flex-row items-start justify-between mt-[43px] md:w-[100%] w-[99%]">
        <Link
          className="font-normal not-italic text-gray_700 text-left w-[auto]"
          variant="body2"
          to={"#"}
        >
          مشاهده‌ی همه
        </Link>
        <Text
          className="font-semibold text-black_900 text-left w-[auto]"
          as="h4"
          variant="h4"
        >
          تراکنش‌های اخیر
        </Text>
        <Img
          src="images/img_volume.svg"
          className="h-[24px] w-[24px]"
          alt="volume Three"
        />
      </div>
      <List
        className="flex-col gap-[14.5px] grid items-center mt-[13px] w-[99%]"
        orientation="vertical"
      >
        <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />

        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-col items-start justify-start w-[18%]">
            <div className="flex flex-row items-end justify-start md:w-[100%] w-[64%]">
              <Img
                src="images/img_reply_gray_700.svg"
                className="h-[14px] mb-[3px] mt-[6px] w-[auto]"
                alt="reply One"
              />
              <Text
                className="font-semibold ml-[4px] text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                -20
              </Text>
            </div>
            <Text
              className="font-normal not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              10/1/1401
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[32%]">
            <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
              <Text
                className="font-semibold text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                اسپاتیفای
              </Text>
              <Button className="bg-black_900 flex h-[24px] items-center justify-center p-[3px] rounded-[6px] w-[24px]">
                <Img
                  src="images/img_signal.svg"
                  className="h-[16px]"
                  alt="signal"
                />
              </Button>
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[4px] not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              شارژ اکانت
            </Text>
          </div>
        </div>
        <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-col items-start justify-start w-[18%]">
            <div className="flex flex-row items-end justify-start md:w-[100%] w-[64%]">
              <Img
                src="images/img_reply_gray_700.svg"
                className="h-[14px] mb-[3px] mt-[6px] w-[auto]"
                alt="reply Two"
              />
              <Text
                className="font-semibold ml-[4px] text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                -20
              </Text>
            </div>
            <Text
              className="font-normal not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              10/1/1401
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[31%]">
            <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
              <Text
                className="font-semibold text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                نتفلیکس
              </Text>
              <Button className="bg-gray_902 flex h-[24px] items-center justify-center p-[5px] rounded-[5px] w-[24px]">
                <Img
                  src="images/img_signal_red_501.svg"
                  className=""
                  alt="signal One"
                />
              </Button>
            </div>
            <Text
              className="font-normal not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              شارژ اکانت
            </Text>
          </div>
        </div>
        <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-col items-start justify-start w-[18%]">
            <div className="flex flex-row items-end justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[82%]">
              <Img
                src="images/img_reply_gray_700.svg"
                className="h-[14px] mb-[3px] mt-[6px] w-[auto]"
                alt="reply Three"
              />
              <Text
                className="font-semibold ml-[4px] text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                +140
              </Text>
            </div>
            <Text
              className="font-normal not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              12/1/1401
            </Text>
          </div>
          <div className="flex flex-col justify-start w-[49%]">
            <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[43%]">
              <Text
                className="font-semibold text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                واریز
              </Text>
              <div className="flex h-[24px] items-center justify-start w-[24px]">
                <div className="flex h-[24px] items-center justify-start w-[24px]">
                  <Img
                    src="images/img_arrowdown_blue_500.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown Two"
                  />
                </div>
              </div>
            </div>
            <Text
              className="font-normal mr-[30px] not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              واریز دلار به کیف پول
            </Text>
          </div>
        </div>
        <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-col items-start justify-start w-[18%]">
            <div className="flex flex-row items-end justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[82%]">
              <Img
                src="images/img_reply_gray_700.svg"
                className="h-[14px] mb-[3px] mt-[6px] w-[auto]"
                alt="reply Four"
              />
              <Text
                className="font-semibold ml-[4px] text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                +140
              </Text>
            </div>
            <Text
              className="font-normal not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              12/1/1401
            </Text>
          </div>
          <div className="flex flex-col justify-start w-[49%]">
            <div className="flex flex-row gap-[8px] items-start justify-end ml-[auto] md:w-[100%] w-[62%]">
              <Text
                className="font-semibold text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                تبدیل ارز
              </Text>
              <div className="flex items-center justify-start w-[24px]">
                <Img
                  src="images/img_eye.svg"
                  className="h-[23px] w-[24px]"
                  alt="eye One"
                />
              </div>
            </div>
            <Text
              className="font-normal mr-[30px] not-italic text-gray_400 text-left w-[auto]"
              variant="body4"
            >
              واریز دلار به کیف پول
            </Text>
          </div>
        </div>
      </List>
    </>
  );
}

export default LastTransactions;
