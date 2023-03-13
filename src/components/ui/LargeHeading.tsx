import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva(
	"text-black dark:text-white tet-center lg:text-left font-extrabold leading-tight tracking",
	{
		variants: {
			size: {
				default: "text-4xl md:text-5xl lg:6xl",
				lg: "text-5xl md:text-6xl lg:7xl",
				sm: "text-2xl md:text-3xl lg:4xl",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

interface LargeHeadingProps
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, LargeHeadingProps>(
	({ className, size, children, ...props }, ref) => {
		return (
			<h1
				ref={ref}
				{...props}
				className={cn(headingVariants({ size, className }))}
			>
				{children}
			</h1>
		);
	},
);

Paragraph.displayName = "LargeHeading";

export default Paragraph;
