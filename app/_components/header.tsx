import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center ">
                <Image
                    src="/logo.png"
                    alt="FSW Barber"
                    height={22}
                    width={120}
                />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"} size="icon">
                            <MenuIcon size={16} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu></SideMenu>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;
