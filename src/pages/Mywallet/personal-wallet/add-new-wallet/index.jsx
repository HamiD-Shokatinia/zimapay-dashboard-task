import { Img, Text } from "components";


function AddNewWallet() {
  return (
    <div className="bg-blue_51 cursor-pointer flex flex-row gap-[8px] h-[40px] md:h-[auto] items-center justify-center mt-[14px] sm:px-[20px] md:px-[40px] px-[60px] py-[9px] rounded-[12px] w-[303px]">
      <Text
        className="font-semibold text-gray_900 text-right w-[auto]"
        variant="body4"
      >
        اضافه کردن کیف پول جدید
      </Text>
      <div className="flex h-[20px] items-center justify-start w-[20px]">
        <div
          className="bg-cover bg-no-repeat h-[20px] md:h-[6px] p-[6px] relative w-[20px]"
          style={{
            backgroundImage: "url('images/img_plus.svg')",
          }}
        >
          <Img
            src="images/img_line185.svg"
            className="absolute h-[auto] inset-[0] justify-center m-[auto] w-[auto]"
            alt="Line185"
          />
          <Img
            src="images/img_line186.svg"
            className="absolute h-[auto] inset-[0] justify-center m-[auto] w-[auto]"
            alt="Line186"
          />
        </div>
      </div>
    </div>
  );
}

export default AddNewWallet;
