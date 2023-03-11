import { Img, Line, Text } from "components";
import "react-circular-progressbar/dist/styles.css";
import CommonlyUsed from "./commonly-used";
import Header from "./header";
import MyAssets from "./my-assets";
import PersonalWallets from "./personal-wallet";
import Actions from "./personal-wallet/actions";
import AddNewWallet from "./personal-wallet/add-new-wallet";
import LastTransactions from "./personal-wallet/last-transactions";
import WalletNavigate from "./personal-wallet/wallet-navigate";
import SideBarMenu from "./side-bar-menu";

const MywalletPage = () => {
  return (
    //
    <>
      <div className="bg-gray_50 flex font-iransansxfanum items-center justify-start mx-[auto] sm:pl-[20px] pl-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[8px] items-center justify-between max-w-[1400px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[16px] items-center justify-start md:w-[100%] w-[75%]">
            <Header />
            <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between md:w-[100%] w-[99%]">
              <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] w-[64%]">
                <MyAssets />
                <CommonlyUsed />
              </div>
              <div className="bg-white_A700 flex items-center justify-start p-[19px] rounded-[22px] md:w-[100%] w-[35%]">
                <div className="flex flex-col items-start justify-start  md:w-[100%] w-[99%]">
                  <WalletNavigate />
                  <PersonalWallets />
                  <Text
                    className="font-semibold md:ml-[0] ml-[193px] mt-[26px] text-gray_700 text-left w-[auto]"
                    variant="body4"
                  >
                    دارایی دلاری شما
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[15px] mt-[4px] md:w-[100%] w-[89%]">
                    <Text
                      className="font-semibold text-left text-red_500 w-[auto]"
                      variant="body5"
                    >
                      10000{" "}
                    </Text>
                    <Img
                      src="images/img_offer.svg"
                      className="h-[11px] ml-[11px] mt-[4px] w-[auto]"
                      alt="offer"
                    />
                    <Text
                      className="font-semibold ml-[155px] text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      2000 دلار
                    </Text>
                    <Img
                      src="images/img_reply.svg"
                      className="h-[12px] ml-[4px] mt-[3px] w-[auto]"
                      alt="reply"
                    />
                  </div>
                  <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />

                  <Actions />
                  <AddNewWallet />
                  <LastTransactions />
                </div>
              </div>
            </div>
          </div>
          <SideBarMenu />
        </div>
      </div>
    </>
  );
};

export default MywalletPage;
