import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <>
      <img
        className="absolute w-[14rem] bg-gradient-to-b from-black z-10"
        src={LOGO_URL}
        alt="logo"
      />
    </>
  );
};
export default Header;
