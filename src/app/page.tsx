'use client';

import Link from "next/link"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function LoginForm() {
  const { theme, systemTheme } = useTheme();

  // Ensure currentTheme is defined only after the theme is available
  const currentTheme = theme === "system" ? systemTheme ?? "light" : theme ?? "light";


  console.log("the theme is ", currentTheme);
  return (

    <div className=" flex justify-center items-center bg-background w-full h-screen  ">
      <div className="absolute flex justify-center gap-2 top-0 left-0 p-5 font-bold opacity-75 "> <img src="images/mh_logo.png" className="size-6 " style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)", }} alt="Medicalhunt Logo" />  <h1> Medical Hunt </h1> </div>
      <div className="absolute top-0 right-0 p-5">
        <ModeToggle />
      </div>
      <div className="w-96 m-5" >
        <Card>
          <CardHeader>
            <div className="flex-row gap-0 pt-6 pl-6 pr-6 pb-4 ">
              <div className="size-16 border rounded-full p-3 mb-3" > <img src="images/mh_logo.png" style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)", }} alt="Medicalhunt Logo" />
              </div>


              <CardTitle className="pb-2" > Welcome to Medical Hunt {currentTheme} </CardTitle>
              <CardDescription> Continue Signin or signup </CardDescription>

            </div>
            <div className="pt-5 border-t p-5">
              {/* Fix button icon for dynamic dark / light mode  */}
              <Button className="w-full p-6 font-semibold" > <div className="size-4">  <img src={`images/google-icon-${currentTheme}.svg`} alt="google_icon_white" /> </div> Continue with Google</Button>
            </div>
          </CardHeader> </Card>
      </div>



    </div>


  )
}
