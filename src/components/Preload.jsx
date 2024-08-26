import ReactLogo from "./../assets/react.svg";

export const Preload = () => {
  return (
    <div className="bg-black h-screen w-screen flex text-white text-center items-center justify-center">
      <img
        className="preload-img"
        style={{ height: "200px", width: "100px" }}
        src={ReactLogo}
        alt="ReactLogo"
      />
    </div>
  );
};
