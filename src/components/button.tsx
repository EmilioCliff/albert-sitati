import React from 'react';
import { cn } from '../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('font-semibold border rounded', {
	variants: {
		variant: {
			primary: 'bg-primary text-white',
			secondary: 'bg-secondary text-white',
		},
		size: {
			small: 'text-sm py-1 px-2',
			medium: 'text-base py-2 px-4',
		},
		transition: {
			false: null,
			true: 'transition',
		},
	},
	compoundVariants: [
		{
			variant: 'primary',
			transition: true,
			className: 'hover:bg-secondary',
		},
		{
			variant: 'secondary',
			transition: true,
			className: 'hover:bg-primary',
		},
	],
	defaultVariants: {
		variant: 'primary',
		size: 'medium',
		transition: false,
	},
});

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({
	variant,
	size,
	transition,
	className,
	...props
}) => {
	return (
		<button
			className={cn(
				buttonVariants({ variant, size, transition, className }),
			)}
			{...props}
		></button>
	);
};

export default Button;
