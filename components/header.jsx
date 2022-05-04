import Logo from "./logo"
import MenuToggle from "./menu-toggle"
import ModeToggle from "./mode-toggle"

export default function Header() {
  return <header className="absolute z-50 w-full top-0">
    <div className="px-6 pt-4 flex justify-between items-center sm:pt-10">
      <Logo />
      <nav>
        <MenuToggle/>
        <ModeToggle/>
      </nav>
    </div>
  </header>
}