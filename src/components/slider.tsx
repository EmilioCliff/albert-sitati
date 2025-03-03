import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

interface testimony {
	name: string;
	title: string;
	img: string;
	description: string;
}

const reviews: testimony[] = [
	{
		name: 'Samson Wanjala',
		title: 'Technical Consultant @ BUI',
		img: '/albert.jpeg',
		description:
			"Albert Sitati  is a true cloud transformation expert. His ability to design complex multi-cloud architectures while maintaining robust security is exceptional. He doesn't just implement solutions; he architects entire digital ecosystems.",
	},
	{
		name: 'Samson Wanjala',
		title: 'Technical Consultant @ BUI',
		img: '/albert.jpeg',
		description:
			"Albert Sitati  is a true cloud transformation expert. His ability to design complex multi-cloud architectures while maintaining robust security is exceptional. He doesn't just implement solutions; he architects entire digital ecosystems.",
	},
	{
		name: 'Samson Wanjala',
		title: 'Technical Consultant @ BUI',
		img: '/albert.jpeg',
		description:
			"Albert Sitati  is a true cloud transformation expert. His ability to design complex multi-cloud architectures while maintaining robust security is exceptional. He doesn't just implement solutions; he architects entire digital ecosystems.",
	},
	{
		name: 'Samson Wanjala',
		title: 'Technical Consultant @ BUI',
		img: '/albert.jpeg',
		description:
			"Albert Sitati  is a true cloud transformation expert. His ability to design complex multi-cloud architectures while maintaining robust security is exceptional. He doesn't just implement solutions; he architects entire digital ecosystems.",
	},
];

function Slider() {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y, Autoplay]}
			// spaceBetween={0}
			slidesPerView={1}
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000 }}
			breakpoints={{
				992: {
					slidesPerView: reviews.length === 1 ? 1 : 2,
				},
				1200: {
					slidesPerView: reviews.length === 1 ? 1 : 3,
				},
			}}
		>
			{reviews.map((review, index) => (
				<SwiperSlide key={index}>
					<div className="p-4 border rounded-2xl bg-white shadow-small">
						<p>{review.description}</p>
						<div className="flex mt-4 gap-3">
							<img
								src={review.img}
								className="rounded-full w-[60px]"
								alt=""
							/>
							<div className="my-auto">
								<h3 className="font-semibold text-secondary">
									{review.name}
								</h3>
								<p className="text-gray-500">{review.title}</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Slider;
