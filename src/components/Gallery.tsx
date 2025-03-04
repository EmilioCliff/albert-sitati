import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const images = [
	{ href: '/albert.jpeg', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
	{ href: '/7.jpg', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-3' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
	{ href: '/7.jpg', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
	{ href: '/albert.jpeg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
	{ href: '/huawei_juma.png', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
	{ href: '/albert.jpeg', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

const Gallery = () => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const navigateImage = (direction: 'next' | 'prev') => {
		if (selectedIndex === null) return;
		setSelectedIndex((prev) =>
			direction === 'next'
				? (prev! + 1) % images.length
				: (prev! - 1 + images.length) % images.length,
		);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => navigateImage('next'),
		onSwipedRight: () => navigateImage('prev'),
		preventScrollOnSwipe: true,
		trackMouse: true,
	});

	return (
		<div className="gap-2 px-2 md:px-25">
			<div className="gallery-column grid gap-4">
				{images.map((img, index) => (
					<img
						key={index}
						src={img.href}
						alt=""
						className={`cursor-pointer rounded-lg transition-transform hover:scale-105 ${img.colSpan} ${img.rowSpan}`}
						onClick={() => setSelectedIndex(index)}
					/>
				))}
			</div>

			{selectedIndex !== null && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
					onClick={() => setSelectedIndex(null)}
					{...handlers}
				>
					<button
						className="hidden md:block absolute left-4 text-white text-3xl font-bold p-3 bg-black/50 rounded-full"
						onClick={(e) => {
							e.stopPropagation();
							navigateImage('prev');
						}}
					>
						◀
					</button>

					<motion.img
						src={images[selectedIndex].href}
						alt="Selected"
						className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
					/>

					<button
						className="hidden md:block absolute right-4 text-white text-3xl font-bold p-3 bg-black/50 rounded-full"
						onClick={(e) => {
							e.stopPropagation();
							navigateImage('next');
						}}
					>
						▶
					</button>
				</div>
			)}
		</div>
	);
};

export default Gallery;
