"use client"
//Navbar content incase wish to make changes to this portfolio in the future
//I was undecided, so this component can be stored within its folder
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex items-center bg-purple-200 h-25 w-full sticky"><NavigationMenu>
  <NavigationMenuList className="flex justify-between m-2">
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          <li>
          <Link href="https://github.com/JDC-droid">
          Github</Link>
      </li>
      </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          <li>
          <Link href="https://github.com/JDC-droid">
          Github</Link>
      </li>
      </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu></div>
    )
}