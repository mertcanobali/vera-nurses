"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LangSwitcher from "@/components/LangSwitcher";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";

export default function Header() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-20 w-20 flex-shrink-0">
            <Image
              src="/VERANurses.png"
              alt="Vera Nurses Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#8E1B20] leading-none tracking-tight">
              VERA
              <span className="text-slate-900"> Nurses</span>
            </span>
          </div>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden xl:flex items-center gap-1">
          <Link
            href="/"
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-base font-medium text-slate-700"
            )}
          >
            {t("home")}
          </Link>

          <Link
            href="/about"
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-base font-medium text-slate-700"
            )}
          >
            {t("about")}
          </Link>

          {/* HİZMETLERİMİZ */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base font-medium text-slate-700">
                  {t("services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] grid-cols-2">
                    <ListItem
                      href="/services/nurse"
                      title={t("subMenuServices.nurse")}
                    />
                    <ListItem
                      href="/services/escort"
                      title={t("subMenuServices.escort")}
                    />
                    <ListItem
                      href="/services/elderly"
                      title={t("subMenuServices.elderly")}
                    />
                    <ListItem
                      href="/services/birth"
                      title={t("subMenuServices.birth")}
                    />
                    <ListItem
                      href="/services/physio"
                      title={t("subMenuServices.physio")}
                    />
                    <ListItem
                      href="/services/ambulance"
                      title={t("subMenuServices.ambulance")}
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* KURUMSAL (VERA EVRENİ) - DÜZELTİLDİ */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base font-medium text-slate-700">
                  {t("universe")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-2 p-4">
                    {/* Linkler güncellendi */}
                    <ListItem
                      href="/vera-universe/institutions"
                      title={t("subMenuCorporate.about")}
                    />
                    <ListItem
                      href="/vera-universe/quality"
                      title={t("subMenuCorporate.quality")}
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contact"
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-base font-medium text-slate-700"
            )}
          >
            {t("contact")}
          </Link>
        </div>

        {/* SAĞ TARAF */}
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <Button
            asChild
            className="hidden sm:flex bg-[#8E1B20] hover:bg-[#5F1115] text-white font-semibold px-6 shadow-md transition-transform hover:scale-105"
          >
            <a
              href="tel:02168887581"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" /> {t("appointment")}
            </a>
          </Button>

          {/* MOBİL MENÜ */}
          <div className="xl:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-200 text-[#8E1B20]"
                >
                  <Menu className="h-10 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[380px] overflow-y-auto p-0"
              >
                <SheetHeader className="border-b p-6 bg-slate-50/50">
                  <SheetTitle className="text-left flex items-center gap-2">
                    <div className="relative h-10 w-14">
                      <Image
                        src="/VERANurses.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xl font-bold text-[#8E1B20]">
                      Vera Nurses
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-1 px-6 py-4">
                  <MobileLink href="/" onClick={() => setIsOpen(false)}>
                    {t("home")}
                  </MobileLink>
                  <MobileLink href="/about" onClick={() => setIsOpen(false)}>
                    {t("about")}
                  </MobileLink>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-none"
                  >
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-lg font-medium py-3 hover:no-underline hover:text-[#8E1B20]">
                        {t("services")}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2 pl-4 bg-slate-50 rounded-lg py-2">
                        <MobileSubLink
                          href="/services/nurse"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuServices.nurse")}
                        </MobileSubLink>
                        <MobileSubLink
                          href="/services/escort"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuServices.escort")}
                        </MobileSubLink>
                        <MobileSubLink
                          href="/services/elderly"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuServices.elderly")}
                        </MobileSubLink>
                        <MobileSubLink
                          href="/services/birth"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuServices.birth")}
                        </MobileSubLink>
                        <MobileSubLink
                          href="/services/physio"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuServices.physio")}
                        </MobileSubLink>
                        <MobileSubLink
                          href="/services/ambulance"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuServices.ambulance")}
                        </MobileSubLink>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="corporate" className="border-none">
                      <AccordionTrigger className="text-lg font-medium py-3 hover:no-underline hover:text-[#8E1B20]">
                        {t("universe")}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2 pl-4 bg-slate-50 rounded-lg py-2">
                        {/* Linkler güncellendi */}
                        <MobileSubLink
                          href="/vera-universe/institutions"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuCorporate.about")}
                        </MobileSubLink>
                        <MobileSubLink
                          href="/vera-universe/quality"
                          onClick={() => setIsOpen(false)}
                        >
                          {t("subMenuCorporate.quality")}
                        </MobileSubLink>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <MobileLink href="/contact" onClick={() => setIsOpen(false)}>
                    {t("contact")}
                  </MobileLink>

                  <div className="pt-6 mt-4 border-t">
                    <Button className="w-full bg-[#8E1B20] hover:bg-[#5F1115] h-12 text-lg shadow-lg">
                      <Phone className="mr-2 h-5 w-5" /> {t("appointment")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href as string}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-[#8E1B20] focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 text-lg font-medium text-slate-900 border-b border-slate-50 hover:text-[#8E1B20] transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileSubLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 text-sm font-medium text-slate-600 hover:text-[#8E1B20] border-l-2 border-slate-200 pl-3 transition-colors"
    >
      {children}
    </Link>
  );
}
