import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <nav className="my-5 px-20 flex flex-row justify-center items-center sticky top-0 bg-white h-20">
      <Image src="" alt="logo"></Image>
      <div className="relative w-full max-w-xs">
        <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Search className="h-4 w-4" />
        </button>
        <input
          type="text"
          placeholder="Apa yang ingin Anda pelajari?"
          className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus-visible:ring-1 focus:ring-black text-sm"
        />
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Learning Path
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Langganan
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Program
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Lainnya
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-row gap-2">
        <Button variant="secondary">Masuk</Button>
        <Button className="bg-dark-blue">Daftar</Button>
      </div>
    </nav>
  );
};

export default Navigation;
