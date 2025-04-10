"use client";
import React, { createContext } from 'react';
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Home, Shirt, LayoutDashboard, User } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { ModeToggle } from './ModeToggle';
import { user } from '@/dummy_data';

const SIDEBAR_LINKS = [
	{
		icon: Home,
		label: "Home",
		href: "/",
	},
	{
		icon: Shirt,
		label: "Merch",
		href: "/merch",
	},
];

const Sidebar = () => {
  const isAdmin = true;
  return (
    <div className='flex lg:w-1/5 flex-col gap-3 px-2 border -r sticky left-0 top-0 h-screen'>
      	<Link href='/update-profile' className='max-w-fit'>
				<Avatar className='mt-4 cursor-pointer'>
					<AvatarImage src={user.image || "/user-placeholder.png"} className='object-cover' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
		</Link>

      	<nav className='flex flex-col gap-3'>
			{SIDEBAR_LINKS.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'
  				>
					<link.icon className='w-6 h-6' />
					<span className='hidden lg:block'>{link.label}</span>
				</Link>
        	))}
          
        {isAdmin && (
          	<Link
          	  href={"/secret-dashboard"}
          	  className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'
          	>
          	  <LayoutDashboard className='w-6 h-6' />
          	  <span className='hidden lg:block'>Dashboard</span>
          	</Link>
        )}

        <DropdownMenu>
          	<div className='flex w-12 lg:w-full items-center gap-2 hover:bg-primary-foreground font-bold hover:text-primary px-2 py-1 rounded-full justify-center lg:justify-normal'>
				<DropdownMenuTrigger className='flex items-center gap-2'>
					<User className='w-6 h-6' />
					<span className='hidden lg:block'>Setting</span>
				</DropdownMenuTrigger>
			</div>

          	<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<Link href={"*"}>
					<DropdownMenuItem>Billing</DropdownMenuItem>
				</Link>
				<LogoutLink>
              		<DropdownMenuItem>Logout</DropdownMenuItem>
            	</LogoutLink>
				</DropdownMenuContent>
        	</DropdownMenu>

			<ModeToggle />
      	</nav>
    </div>
  )
}

export default Sidebar