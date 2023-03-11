import { Img, Text } from "components";

function PieChart() {
  return (
    <div className="flex font-iransansxfanum h-[213px] justify-end relative w-[213px]">
      <div className="flex flex-col h-[46%] items-center justify-start mb-[47px] mt-[auto] mx-[auto] w-[54%]">
        <Text
          className="font-semibold text-center text-gray_400 w-[auto]"
          variant="body2"
        >
          جمع دارایی (ریال)
        </Text>
        <Text
          className="font-bold mt-[4px] text-gray_900 text-right tracking-[0.38px] w-[auto]"
          as="h4"
          variant="h4"
        >
          280,54
        </Text>
        <div className="flex flex-row items-start justify-center mt-[18px] md:w-[100%] w-[39%]">
          <Text
            className="font-semibold text-green_A700 text-left w-[auto]"
            variant="body5"
          >
            15,000
          </Text>
          <Img
            src="images/img_arrowup.svg"
            className="h-[11px] ml-[4px] mt-[4px] w-[auto]"
            alt="arrowup"
          />
        </div>
      </div>
      <div
        className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[63px] sm:px-[20px] md:px-[40px] w-[213px]"
        style={{
          backgroundImage: "url('images/img_group28.svg')",
        }}
      >
        <Text
          className="font-normal  mt-[103px] not-italic pb-[30px] text-center text-gray_700 w-[auto]"
          variant="body5"
        >
          سود-زیان
        </Text>
      </div>
    </div>
  );
}

export default PieChart;
