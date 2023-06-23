import LogoButon from "./LogoButton";
import Nav from "./Nav";

export default function Frame() {
  return (
    <div className="p-5 h-screen sticky">
      <div className="flex flex-col border h-full rounded-2">
        <Nav />
        <div className="flex flex-row h-full">
          <LogoButon />
        </div>
      </div>
    </div>
  );
}
