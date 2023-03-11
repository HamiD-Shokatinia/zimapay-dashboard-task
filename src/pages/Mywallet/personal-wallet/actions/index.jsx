
import { Img, List, Text } from "components";

function Actions() {
  return (
    <>
      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[21px] mt-[18px] md:w-[100%] w-[85%]">
        <div className="bg-gray_50 flex cursor-pointer h-[32px] items-center justify-start p-[4px] rounded-[6px] w-[32px]">
          <div className="flex items-center justify-start md:w-[100%] w-[24px]">
            <Img
              src="images/img_eye.svg"
              className="h-[23px] w-[24px]"
              alt="eye"
            />
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-[44px] grid grid-cols-2 w-[42%]"
          orientation="horizontal"
        >
          <div className="bg-gray_50 flex cursor-pointer h-[32px] items-end justify-start sm:ml-[0] p-[2px] rounded-[6px] w-[100%]">
            <div className="flex h-[24px] items-center justify-start my-[2px] w-[24px]">
              <Img
                src="images/img_send.svg"
                className="h-[24px] w-[24px]"
                alt="send"
              />
            </div>
          </div>
          <div className="bg-gray_50 flex cursor-pointer h-[32px] items-center justify-start sm:ml-[0] p-[3px] rounded-[6px] w-[100%]">
            <div className="flex h-[24px] items-center justify-start mb-[2px] w-[24px]">
              <Img
                src="images/img_upload.svg"
                className="h-[24px] w-[24px]"
                alt="upload"
              />
            </div>
          </div>
        </List>
        <div className="bg-gray_50 flex h-[32px] cursor-pointer items-center justify-start p-[3px] rounded-[6px] w-[32px]">
          <div className="flex h-[24px] items-center justify-start mb-[2px] w-[24px]">
            <div className="flex h-[24px] items-center justify-start w-[24px]">
              <Img
                src="images/img_arrowdown_blue_500.svg"
                className="h-[24px] w-[24px]"
                alt="arrowdown One"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[15px] mt-[4px] md:w-[100%] w-[89%]">
        <Text
          className="font-semibold text-gray_700 text-left w-[auto]"
          variant="body5"
        >
          تبدیل ارز
        </Text>
        <Text
          className="font-semibold text-gray_700 text-left w-[auto]"
          variant="body5"
        >
          انتقال
        </Text>
        <Text
          className="font-semibold text-gray_700 text-left w-[auto]"
          variant="body5"
        >
          برداشت وجه
        </Text>
        <Text
          className="font-semibold text-gray_700 text-left w-[auto]"
          variant="body5"
        >
          واریز وجه
        </Text>
      </div>
    </>
  );
}

export default Actions;
