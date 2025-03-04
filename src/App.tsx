import Button from './components/button';
import {
	Play,
	MessageSquare,
	Github,
	Linkedin,
	Settings,
	Flame,
	Construction,
	GlobeLock,
	Check,
	createLucideIcon,
	Database,
	ShieldCheck,
} from 'lucide-react';
import Slider from './components/slider';
import { ReactTyped } from 'react-typed';
import Header from './components/Header';
import Gallery from './components/Gallery';

const XIcon = createLucideIcon('X', [
	[
		'path',
		{
			d: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
		},
	],
]);

function App() {
	return (
		<div className="main-container">
			{/* Navigation  */}
			<Header />

			{/* Landing Page  */}
			<section className="section w-[100%] flex flex-col lg:flex-row justify-center gap-10 lg:gap-60 items-center min-h-[70vh]">
				<div className="grid gap-2">
					<h1 className="text-5xl mt-10 md:text-7xl">I'm Albert</h1>
					<div className="w-[350px]">
						<ReactTyped
							strings={[
								'Cloud Solutions Architect',
								'Technical Azure Consultant ',
								'Co-Founder Resource Cloud Academy',
							]}
							className="text-2xl text-secondary font-mono block min-h-16"
							typeSpeed={70}
							backSpeed={50}
							loop
						/>
					</div>
					<div className="flex gap-3">
						<Button
							size="medium"
							className="flex text-sm gap-3 items-center"
						>
							Lets Talk <MessageSquare size={20} />
						</Button>
						<Button
							size="medium"
							variant="secondary"
							className="flex text-sm gap-3 items-center"
						>
							Achievements <ShieldCheck size={20} />
						</Button>
					</div>
					<div className="mt-10">
						<p className="mb-8">Let's Work Together</p>
						<div className="border border-dashed rounded-lg relative w-[70%] h-[3rem]">
							<div className="bg-white shadow-small drop-shadow-2xl min-h-[3rem] absolute bottom-4 left-6 rounded-lg w-[100%]">
								<div className="p-2 font-semibold text-sm">
									<p>My Approach</p>
									<div className="flex mt-1">
										<span>75%</span>
										<div className="relative ml-2 w-[25%] rounded-full bg-gray-300  before:absolute before:top-0 before:left-0 before:w-[75%] before:rounded-full before:h-full before:bg-primary before:content-['']"></div>
									</div>
								</div>
								<div className="absolute right-2 -top-5">
									<div className="bg-primary shadow-lg rounded-xl mx-auto w-fit p-2">
										<Play fill="white" stroke="none" />
									</div>
									<p className="text-sm mt-1 font-semibold">
										In Progress
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative">
					<svg
						className="home__blob"
						viewBox="0 2 550 591"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask id="maskBlob" mask-type="alpha">
							<path
								d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
							/>
						</mask>
						<g mask="url(#maskBlob)">
							<path
								d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
							/>

							<rect
								x="37"
								width="476"
								height="630"
								fill="url(#pattern0)"
							/>
						</g>

						<path
							d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
							// stroke="#4e56d1"
							stroke="rgba(78, 107, 209, .5)"
							// strokeOpacity={'50%'}
							// stroke-width="30"
							fill="none"
						/>

						<rect
							x="37"
							width="476"
							height="300"
							fill="url(#pattern1)"
						/>

						<defs>
							<pattern
								id="pattern0"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									href="#imageBlob"
									transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
								/>
							</pattern>

							<pattern
								id="pattern1"
								patternContentUnits="objectBoundingBox"
								width="1"
								height="1"
							>
								<use
									href="#imageBlob"
									transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
								/>
							</pattern>

							<image
								className="home__img"
								id="imageBlob"
								href="/albert-removebg-preview.png"
							/>
						</defs>
					</svg>
					<div className="absolute hidden md:flex items-center rounded-lg bg-white shadow-small drop-shadow-2xl px-3 md:px-6 py-1 font-semibold gap-4 -right-16 md:-right-25 bottom-25">
						<div className="border-2 border-secondary p-1 rounded-full">
							<Flame
								size={15}
								className="fill-secondary stroke-none"
							/>
						</div>
						<p className="text-sm">
							Microsoft Azure <br /> Certified
						</p>
					</div>
					<div className="absolute hidden md:block rounded-lg bg-white shadow-small drop-shadow-2xl px-2 md:px-4 py-1 md:py-2 gap-4 bottom-0 md:bottom-3 -left-20 md:-left-50">
						<div className="flex gap-4 font-semibold items-center">
							<div className="p-1 bg-primary/30 rounded-sm">
								<Settings
									size={30}
									className="stroke-primary"
								/>
							</div>
							<p className="text-sm">
								Azure Network <br /> Engineer
							</p>
						</div>
						<p className="text-xs my-2">
							I am proficient in a variaty of tools and
							technologies
						</p>
					</div>
					<div className="hidden md:flex flex-col gap-3 absolute -right-30 -bottom-15">
						<a href="#" className="flex items-center ">
							<Github
								size={33}
								fill="white"
								className="bg-primary p-1 rounded-full smooth-transition hover:bg-secondary"
								stroke=""
							/>
						</a>
						<a href="#" className="flex items-center">
							<Linkedin
								size={33}
								className="bg-primary p-1 rounded-full smooth-transition hover:bg-secondary"
								fill="white"
								stroke=""
							/>
						</a>
						<a href="#" className="flex items-center">
							<XIcon
								className="bg-primary p-1 rounded-full smooth-transition hover:bg-secondary"
								size={33}
								fill="white"
								stroke="none"
							/>
						</a>
					</div>
				</div>
			</section>
			<div className="flex justify-center md:hidden gap-10">
				<a href="#" className="flex items-center ">
					<Github
						size={40}
						fill="white"
						className="bg-primary p-1 rounded-full smooth-transition hover:bg-secondary"
						stroke=""
					/>
				</a>
				<a href="#" className="flex items-center">
					<Linkedin
						size={40}
						className="bg-primary p-1 rounded-full smooth-transition hover:bg-secondary"
						fill="white"
						stroke=""
					/>
				</a>
				<a href="#" className="flex items-center">
					<XIcon
						className="bg-primary p-1 rounded-full smooth-transition hover:bg-secondary"
						size={40}
						fill="white"
						stroke="none"
					/>
				</a>
			</div>
			<div className="mt-20 w-[60%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_.5fr_.7fr] gap-4 justify-center text-white">
				<div className="rounded-lg flex gap-4 bg-primary/70 p-4">
					<Construction size={40} className="my-auto" />
					<div>
						<p className="font-semibold">
							Web design and development
						</p>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Consectetur, optio. Nobis
						</p>
					</div>
				</div>
				<div className="rounded-lg p-4 bg-secondary">
					<GlobeLock size={40} className="mx-auto mb-4" />
					<p className="font-semibold text-center ">
						Cloud Architect
					</p>
				</div>
				<div className="rounded-lg p-4 bg-purple-950/70">
					<p className="font-semibold">Creativity And Quanlity</p>
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</div>

			{/* About Me  */}
			<section className="section grid grid-cols-1 md:grid-cols-[.7fr_1fr] gap-6">
				<div className="">
					<img
						src="/albert.jpeg"
						className="w-[100%] h-[100%] object-cover object-center"
						alt=""
					/>
				</div>
				<div className="my-auto">
					<h1 className="text-3xl text-secondary font-mono">
						Who am I?
					</h1>
					<h2 className="text-4xl md:text-5xl font-semibold mb-6">
						Discover the work that Drives My{' '}
						<span className="text-secondary">Passion</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Officia velit, aperiam explicabo{' '}
						<span className="text-secondary font-semibold">
							explicabo
						</span>{' '}
						dolorum distinctio quo repellat sint harum soluta nulla!
						Consectetur atque distinctio voluptatum, facere error
						dicta temporibus molestiae veritatis.{' '}
						<span className="text-secondary font-semibold">
							Lorem
						</span>{' '}
						ipsum dolor sit amet consectetur adipisicing elit.
						Officia velit, aperiam explicabo dolorum distinctio quo
						repellat sint harum soluta nulla! Consectetur atque{' '}
						<span className="text-secondary font-semibold">
							distinctio
						</span>{' '}
						voluptatum, facere error dicta temporibus molestiae
						veritatis.
					</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam{' '}
						<span className="text-secondary font-semibold">
							enim
						</span>{' '}
						impedit nulla rerum alias exercitationem iusto optio.
						Eius nihil quia laudantium quasi quae! At non numquam
						eveniet nisi officia modi.0
					</p>
				</div>
			</section>

			{/* Work Experience  */}
			<section className="section">
				<h2 className="text-lg md:text-2xl text-secondary font-mono text-center">
					Companies I've worked with
				</h2>
				<h1 className="text-3xl md:text-6xl text-center mb-8">
					Work Experience
				</h1>
				<div className="grid grid-cols-1 md:px-14 md:grid-cols-2 gap-6">
					<div className="border-2 rounded-lg border-gray-500 hover:border-secondary p-6 relative bg-primary/20">
						<p className="hidden md:block text-xs md:text-md absolute top-6 md:top-5 font-bold right-6 bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Dec 2024 - Current
						</p>
						<div>
							<h1 className="text-lg font-mono font-bold text-primary">
								Job Title
							</h1>
							<h2 className="text-2xl mb-4 font-semibold">
								Company
							</h2>
						</div>
						<h3 className="underline">Achievements</h3>
						<ul>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
						</ul>
						<p className="text-xs w-fit md:hidden md:text-md font-bold bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Dec 2024 - Current
						</p>
					</div>
					<div className="border-2 rounded-2xl border-gray-500 hover:border-secondary p-6 relative bg-primary/20">
						<p className="hidden md:block text-xs md:text-md absolute top-6 md:top-5 font-bold right-6 bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Jan 2024 - Dec 2024
						</p>
						<div>
							<h1 className="text-lg font-mono font-bold text-primary">
								Solution Architect
							</h1>
							<h2 className="text-2xl mb-4 font-semibold">
								Rainforest Alliance
							</h2>
						</div>
						<h3 className="underline">Achievements</h3>
						<ul>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
						</ul>
						<p className="text-xs w-fit md:hidden md:text-md font-bold bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Dec 2024 - Current
						</p>
					</div>
					<div className="border-2 rounded-2xl border-gray-500 hover:border-secondary p-6 relative bg-primary/20">
						<p className="hidden md:block text-xs md:text-md absolute top-6 md:top-5 font-bold right-6 bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Jan 2024 - Dec 2024
						</p>
						<div>
							<h1 className="text-lg font-mono font-bold text-primary">
								Solution Architect
							</h1>
							<h2 className="text-2xl mb-4 font-semibold">
								Rainforest Alliance
							</h2>
						</div>
						<h3 className="underline">Achievements</h3>
						<ul>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
						</ul>
						<p className="text-xs w-fit md:hidden md:text-md font-bold bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Dec 2024 - Current
						</p>
					</div>
					<div className="border-2 rounded-2xl border-gray-500 hover:border-secondary p-6 relative bg-primary/20">
						<p className="hidden md:block text-xs md:text-md absolute top-6 md:top-5 font-bold right-6 bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Jan 2024 - Dec 2024
						</p>
						<div>
							<h1 className="text-lg font-mono font-bold text-primary">
								Solution Architect
							</h1>
							<h2 className="text-2xl mb-4 font-semibold">
								Rainforest Alliance
							</h2>
						</div>
						<h3 className="underline">Achievements</h3>
						<ul>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
							<li className="flex gap-4 mb-2">
								<Check size={30} className="stroke-secondary" />
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. At minus beatae necessitatibus
								praesentium esse
							</li>
						</ul>
						<p className="text-xs w-fit md:hidden md:text-md font-bold bg-secondary/80 px-2 py-1 rounded-3xl text-white">
							Dec 2024 - Current
						</p>
					</div>
				</div>
			</section>

			{/* Skills  */}
			<section className="section">
				<h2 className="text-lg md:text-2xl text-secondary font-mono text-center">
					See What I Can Do
				</h2>
				<h1 className="text-3xl md:text-6xl text-center mb-8">
					Skillset
				</h1>
				<div className="grid grid-cols-1 md:px-14 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-10">
					<div className="flex md:hidden flex-col text-center h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database
							size={50}
							className="mx-auto stroke-secondary"
						/>
						<h2 className="font-bold text-lg">Cloud Architect</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita laborum veniam voluptas nesciunt
							architecto, odio iusto officiis facilis suscipit
							quibusdam alias illo possimus deserunt corrupti
							voluptatum fugit quis repellendus aperiam?
						</p>
					</div>
					<div className="hidden md:flex h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database className="my-auto w-[50%] h-[100%] stroke-secondary" />
						<div>
							<h2 className="font-bold text-lg">
								Cloud Architect
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita laborum veniam
								voluptas nesciunt architecto, odio iusto
								officiis facilis suscipit quibusdam alias illo
								possimus deserunt corrupti voluptatum fugit quis
								repellendus aperiam?
							</p>
						</div>
					</div>
					<div className="flex md:hidden flex-col text-center h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database
							size={50}
							className="mx-auto stroke-secondary"
						/>
						<h2 className="font-bold text-lg">Cloud Architect</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita laborum veniam voluptas nesciunt
							architecto, odio iusto officiis facilis suscipit
							quibusdam alias illo possimus deserunt corrupti
							voluptatum fugit quis repellendus aperiam?
						</p>
					</div>
					<div className="hidden md:flex h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database className="my-auto w-[50%] h-[100%] stroke-secondary" />
						<div>
							<h2 className="font-bold text-lg">
								Cloud Architect
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita laborum veniam
								voluptas nesciunt architecto, odio iusto
								officiis facilis suscipit quibusdam alias illo
								possimus deserunt corrupti voluptatum fugit quis
								repellendus aperiam?
							</p>
						</div>
					</div>
					<div className="flex md:hidden flex-col text-center h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database
							size={50}
							className="mx-auto stroke-secondary"
						/>
						<h2 className="font-bold text-lg">Cloud Architect</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita laborum veniam voluptas nesciunt
							architecto, odio iusto officiis facilis suscipit
							quibusdam alias illo possimus deserunt corrupti
							voluptatum fugit quis repellendus aperiam?
						</p>
					</div>
					<div className="hidden md:flex h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database className="my-auto w-[50%] h-[100%] stroke-secondary" />
						<div>
							<h2 className="font-bold text-lg">
								Cloud Architect
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita laborum veniam
								voluptas nesciunt architecto, odio iusto
								officiis facilis suscipit quibusdam alias illo
								possimus deserunt corrupti voluptatum fugit quis
								repellendus aperiam?
							</p>
						</div>
					</div>
					<div className="flex md:hidden flex-col text-center h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database
							size={50}
							className="mx-auto stroke-secondary"
						/>
						<h2 className="font-bold text-lg">Cloud Architect</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita laborum veniam voluptas nesciunt
							architecto, odio iusto officiis facilis suscipit
							quibusdam alias illo possimus deserunt corrupti
							voluptatum fugit quis repellendus aperiam?
						</p>
					</div>
					<div className="hidden md:flex h-fit p-4 smooth-transition hover:-translate-2 hover:shadow-large hover:drop-shadow-xl drop-shadow-lg bg-white rounded-4xl gap-4">
						<Database className="my-auto w-[50%] h-[100%] stroke-secondary" />
						<div>
							<h2 className="font-bold text-lg">
								Cloud Architect
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita laborum veniam
								voluptas nesciunt architecto, odio iusto
								officiis facilis suscipit quibusdam alias illo
								possimus deserunt corrupti voluptatum fugit quis
								repellendus aperiam?
							</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4 items-center justify-items-center mt-10">
					<div className="grid">
						<img
							className="w-[60px]"
							src="/Huawei_Standard_logo.svg.png"
							alt=""
						/>
					</div>
					<div className="grid">
						<img
							className="w-[60px]"
							src="/Microsoft_Azure.svg.png"
							alt=""
						/>
					</div>
					<div className="grid self-center">
						<img
							className="w-[60px]"
							src="/Amazon_Web_Services_Logo.svg.png"
							alt=""
						/>
					</div>
					<p className="font-semibold mt-2">Huawei</p>
					<p className="font-semibold mt-2">Azure</p>
					<p className="font-semibold mt-2">AWS</p>
				</div>
			</section>

			{/* Achievements  */}
			<section className="section">
				<h2 className="text-lg md:text-2xl text-secondary font-mono text-center">
					What I have achieved oveer the years
				</h2>
				<h1 className="text-3xl md:text-6xl text-center mb-8">
					Achievements
				</h1>
				<div className="md:px-14">
					<div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
						<img
							className="rounded-md w-[100%] h-[100%] object-cover object-center"
							src="/huawei_juma.png"
							alt=""
						/>
						<div className="my-auto md:py-8">
							<h3 className="font-bold mb-2 text-lg text-secondary">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</h3>
							<p className="text-ta">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque. Lorem ipsum, dolor sit amet
								consectetur adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque.
							</p>
							<Button className="mt-6">Read More</Button>
						</div>
					</div>
					<div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
						<img
							className="rounded-md md:order-2 w-[100%] h-[100%] object-cover object-center"
							src="/huawei_juma.png"
							alt=""
						/>
						<div className="my-auto md:py-8">
							<h3 className="font-bold mb-2 text-lg text-secondary">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque. Lorem ipsum, dolor sit amet
								consectetur adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque.
							</p>
							<Button className="mt-6">Read More</Button>
						</div>
					</div>
					<div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10 md:">
						<iframe
							allow="fullscreen;"
							className="w-[100%] h-[100%]"
							src="https://www.youtube.com/embed/QOXup8chEoY"
						></iframe>
						<div className="my-auto md:py-8">
							<h3 className="font-bold mb-2 text-lg text-secondary">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque. Lorem ipsum, dolor sit amet
								consectetur adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque.
							</p>
							<Button className="mt-6">Read More</Button>
						</div>
					</div>
					<div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
						<img
							className="rounded-md md:order-2 w-[100%] h-[100%] object-cover object-center"
							src="/huawei_juma.png"
							alt=""
						/>
						<div className="my-auto md:py-8">
							<h3 className="font-bold mb-2 text-lg text-secondary">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque. Lorem ipsum, dolor sit amet
								consectetur adipisicing elit.{' '}
								<span className="font-semibold text-secondary">
									Jume
								</span>{' '}
								Ullam quidem, deleniti non obcaecati culpa
								voluptatem tenetur quam expedita sapiente, odit
								deserunt aut fugit adipisci minus? Cum, ex.
								Molestias,{' '}
								<span className="font-semibold text-secondary">
									Molestias
								</span>{' '}
								expedita eaque.
							</p>
							<Button className="mt-6">Read More</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery  */}
			<section className="section">
				<h2 className="text-lg md:text-2xl text-secondary font-mono text-center">
					Captured Memories: Exploring Life’s Highlights
				</h2>
				<h1 className="text-3xl md:text-6xl text-center mb-8">
					Gallery
				</h1>
				<Gallery />
			</section>

			{/* Testimonials  */}
			<section className="section">
				<h2 className="text-lg md:text-2xl text-secondary font-mono text-center">
					What People Say About Me
				</h2>
				<h1 className="text-3xl md:text-6xl text-center mb-8">
					Testimonials
				</h1>
				<Slider />
			</section>

			{/* Contact Me  */}
			<section className="section">
				<h2 className="text-lg md:text-2xl text-secondary font-mono text-center">
					Have a project in mind?
				</h2>
				<h1 className="text-3xl md:text-6xl text-center mb-8">
					Contact Details
				</h1>
				<div className="grid grid-cols-1 shadow-small md:grid-cols-2 rounded-2xl bg-white">
					<div className="grid gap-4 p-4">
						<p className="text-primary font-bold text-2xl ">
							Let's Get In Touch
						</p>
						<img src="/contact__img.jpg" alt="" />
						<p className="text-sm text-primary">
							Connect with me:{' '}
						</p>
						<div className="flex gap-3">
							<a href="#" className="flex items-center ">
								<Github
									size={33}
									fill="white"
									className="bg-primary p-1 rounded-md smooth-transition hover:bg-secondary"
									stroke=""
								/>
							</a>
							<a href="#" className="flex items-center">
								<Linkedin
									size={33}
									className="bg-primary p-1 rounded-md smooth-transition hover:bg-secondary"
									fill="white"
									stroke=""
								/>
							</a>
							<a href="#" className="flex items-center">
								<XIcon
									className="bg-primary p-1 rounded-md smooth-transition hover:bg-secondary"
									size={33}
									fill="white"
									stroke="none"
								/>
							</a>
						</div>
					</div>
					<div className="bg-primary rounded-br-2xl rounded-bl-2xl md:rounded-bl-none md:rounded-tr-2xl p-4 text-white">
						<h1 className="text-2xl font-bold">Connect</h1>
						<form className="flex flex-col gap-y-6">
							<div className="grid mt-10">
								<label className="font-semibold" htmlFor="">
									Name
								</label>
								<input
									className="border w-[100%] p-2 placeholder:text-gray-200 outline-none focus:ring-2 focus:border-primary rounded-md transition-all duration-200"
									type="text"
									placeholder="John Doe"
								/>
							</div>
							<div className="grid">
								<label className="font-semibold" htmlFor="">
									Email
								</label>
								<input
									className="border w-[100%] p-2 placeholder:text-gray-200 outline-none focus:ring-2 focus:border-primary rounded-md transition-all duration-200"
									type="text"
									placeholder="john@example.com"
								/>
							</div>
							<div className="grid">
								<label className="font-semibold" htmlFor="">
									Message
								</label>
								<textarea
									className="border h-[150px] p-2 placeholder:text-gray-200 outline-none focus:ring-2 focus:border-primary rounded-md transition-all duration-200"
									name=""
									placeholder="Hello, im reaching out for a..."
									id=""
								></textarea>
							</div>
							<Button className="font-bold cursor-pointer bg-white text-primary">
								Submit
							</Button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer  */}
			<section
				className="bg-black md:px-[5rem]
lg:px-[5rem] text-white px-[1.5rem] py-[1.5rem] flex justify-center border-t"
			>
				<p className="opacity-80">
					&#169; 2025{' '}
					<span className="text-primary font-bold">Albert</span>{' '}
					<span className="text-secondary font-bold">Sitati.</span>{' '}
					All rights reserved.
				</p>
				{/* <Github className="opacity-50 hover:opacity-100" /> */}
			</section>
		</div>
	);
}

export default App;
