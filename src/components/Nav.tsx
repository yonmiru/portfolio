import LogoButon from "./LogoButton";
import SideButton from "./SideButton'";
import NavButton from "./NavButton";

export default function Nav() {
  return (
    <div className="border-b flex flex-row items-center">
      <SideButton />
      <nav className="flex flex-1 px-3 justify-around font-light">
        <NavButton text="Home" />
        <NavButton text="Works" />
        <NavButton text="About" />
        <NavButton text="Contact" />
      </nav>
    </div>
  );
}
