import { Img, List, Text } from "components";


function WalletNavigate() {
  return (
    <div className="flex flex-row items-start justify-start  md:w-[100%] w-[99%]">
      <List
        className="sm:flex-col flex-row gap-[11px] grid grid-cols-2 mt-[4px] w-[15%]"
        orientation="horizontal"
      >
        <div className="bg-gray_50 flex cursor-pointer h-[16px] items-center justify-start p-[5px] rounded-[50%] w-[100%]">
          <Img
            src="images/img_stroke3.svg"
            className="h-[6px] w-[auto]"
            alt="StrokeThree"
          />
        </div>
        <div className="bg-gray_50 flex cursor-pointer h-[16px] items-center justify-start p-[5px] rounded-[50%] w-[100%]">
          <Img
            src="images/img_stroke5.svg"
            className="h-[6px] w-[auto]"
            alt="StrokeFive"
          />
        </div>
      </List>
      <Text
        className="font-semibold ml-[87px] text-gray_900 text-left w-[auto]"
        as="h4"
        variant="h4"
      >
        کیف پول‌های من
      </Text>
      <Img
        src="images/img_volume.svg"
        className="h-[24px] ml-[13px] w-[24px]"
        alt="volume Two"
      />
    </div>
  );
}

export default WalletNavigate;
