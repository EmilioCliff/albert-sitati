import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import Button from './button';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 w-full z-50 backdrop-blur-2xl shadow-lg py-4 px-6 bg-gradient-to-b from-primary/20 to-base">
			<nav className="flex justify-between items-center">
				<div>
					<span className="text-primary font-poppins text-lg font-bold">
						Albert{' '}
					</span>
					<span className="text-secondary font-poppins text-lg font-bold">
						Sitati
					</span>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex gap-6">
					{[
						'About Me',
						'Work',
						'Skills',
						'Achievements',
						'Gallery',
					].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
							className="text-sm font-semibold hover:text-secondary transition-colors"
						>
							{item}
						</a>
					))}
				</div>

				<Button
					className="hidden lg:block rounded-4xl transition-none"
					variant="secondary"
					size="small"
				>
					Contact Me
				</Button>

				{/* Mobile Menu Icon */}
				<Menu
					className="block lg:hidden cursor-pointer"
					onClick={() => setIsOpen(true)}
				/>

				{/* Mobile Navigation Menu with AnimatePresence */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 20,
							}}
							className="fixed top-0 right-0 w-full h-screen bg-primary/95 text-white flex flex-col items-center justify-center space-y-6 z-50"
						>
							<X
								className="absolute top-6 right-6 w-8 h-8 cursor-pointer"
								onClick={() => setIsOpen(false)}
							/>

							{[
								'About Me',
								'Work',
								'Skills',
								'Achievements',
								'Gallery',
							].map((item) => (
								<a
									key={item}
									href={`#${item
										.toLowerCase()
										.replace(/\s+/g, '-')}`}
									className="text-2xl font-semibold hover:text-secondary transition-colors"
									onClick={() => setIsOpen(false)}
								>
									{item}
								</a>
							))}

							<Button
								className="rounded-4xl transition-none"
								variant="secondary"
								size="medium"
								onClick={() => setIsOpen(false)}
							>
								Contact Me
							</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
};

export default Header;
