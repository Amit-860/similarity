"use client";
import * as DropdownMenu from "@/ui/DropdownMenu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";
import Button from "./ui/Button";
import { Icons } from "@/components/Icons";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
	const { setTheme } = useTheme();
	return (
		<DropdownMenu.DropdownMenu>
			<DropdownMenu.DropdownMenuTrigger asChild>
				<Button variant='ghost' size="sm">
					<Icons.Sun className='rotate-0 scale-100 transition-all text-slate-900 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
					<Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
					<span className="sr-only">Toggle Theme</span>
				</Button>
			</DropdownMenu.DropdownMenuTrigger>
			<DropdownMenu.DropdownMenuContent align="end" forceMount>
				<DropdownMenu.DropdownMenuItem onClick={() => setTheme("light")}>
					<Icons.Sun className="mr-2 h-4 w-4" />
					<span className="sr-only">light theme</span>
					<span>Light</span>
				</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuItem onClick={() => setTheme("dark")}>
					<Icons.Moon className="mr-2 h-4 w-4" />
					<span className="sr-only">light theme</span>
					<span>Dark</span>
				</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuItem onClick={() => setTheme("system")}>
					<Icons.Laptop className="mr-2 h-4 w-4" />
					<span className="sr-only">light theme</span>
					<span>System</span>
				</DropdownMenu.DropdownMenuItem>
			</DropdownMenu.DropdownMenuContent>
		</DropdownMenu.DropdownMenu>
	);
};

export default ThemeToggle;
