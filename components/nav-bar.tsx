import { links } from "@/content/data";
import Link from "next/link";
import Drawer from "./drawer";
import { Desktop, LearnDropDown } from "./learn-dropdown";

export default function NavBar() {
  return (
    <nav className="justify-center border-b-2 border-b-orange flex w-full m-auto">
      <div className="w-full flex flex-col max-w-7xl">
        <div className="flex items-center justify-between p-6">
          <Link href="/">
            <h1 className="text-2xl md:text-xl font-bold">
              The&nbsp;<span className="text-orange">Bitcoin</span>&nbsp;Dev
              Project
            </h1>
          </Link>
          <Drawer />
          <div className="sm:hidden flex items-center gap-x-[24px] text-base">
            <LearnDropDown />
            {links.map((link) => (
              <Link key={link.text} href={link.linkTo}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
