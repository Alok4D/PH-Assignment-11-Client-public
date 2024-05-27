// import MoreCategories from "../Food-Extra-Pages/MoreCategories";

import MoreCategories from "../Food-Extra-Pages/MoreCategories";


// const Categories = () => {
//     return (
//         <div>
//             <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
// 	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
// 		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Meet Ours Team</h1>
// 		<p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
// 		<div className="flex flex-row flex-wrap-reverse justify-center">
// 			<div className="flex flex-col justify-center m-8 text-center">
// 				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
// 				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
// 				<p className="dark:text-gray-600">Team Manager</p>
// 			</div>
// 			<div className="flex flex-col justify-center m-8 text-center">
// 				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
// 				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
// 				<p className="dark:text-gray-600">Team Manager</p>
// 			</div>
// 			<div className="flex flex-col justify-center m-8 text-center">
// 				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
// 				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
// 				<p className="dark:text-gray-600">Team Manager</p>
// 			</div>
// 			<div className="flex flex-col justify-center m-8 text-center">
// 				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
// 				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
// 				<p className="dark:text-gray-600">Team Manager</p>
// 			</div>
// 			<div className="flex flex-col justify-center m-8 text-center">
// 				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
// 				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
// 				<p className="dark:text-gray-600">Team Manager</p>
// 			</div>
// 			<div className="flex flex-col justify-center m-8 text-center">
// 				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
// 				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
// 				<p className="dark:text-gray-600">Team Manager</p>
// 			</div>
// 		</div>
// 	</div>
//             </section>
//             <div>
//                 <MoreCategories></MoreCategories>
//             </div>
//         </div>
//     );
// };

// export default Categories;



const Categories = () => {
	return (
		<div className="pt-10 pb-10">
			<div>
			<div className="container flex flex-col items-center justify-center  mx-auto  sm:p-10">
			<h1 className="italic text-4xl text-[#d3a971] font-bold leading-none text-center sm:text-5xl">Our Guestbook</h1>
			<p className="text-[15px] leading-7 text-[#9b9b9b] text-center mt-4">Allow us to make your next special event extra special. We cater for all sized functions, ideal for your larger functions or an intimate gathering, our team can curate a menu to suit your taste. <br />
			Reservations are for lunch and dinner, check the availability of your table & book it now!</p>
			</div>		
			</div>

			<section className="dark:bg-gray-100">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
		<div className="flex text-center flex-col space-y-6 mt-5">
			<h2 className="text-[#d3a971] text-[40px]">Welcome To El Royale</h2>
			<p className="text-[37px] leading-10">Delicious Food <br />
			& Cozy Atmosphere</p>
			<p className="text-[17px] text-[#9b9b9b]">El Royale was the first restaurant to open in Egypt, the resturant was designed with the history in mind we have created a soft industrial dining room.</p>
			<div className="flex justify-center items-center">
				<img src="https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/03/sig1.png" alt="" />
			</div>
		</div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
			<div className="flex items-center justify-center">
				<img src="https://demo.cmssuperheroes.com/themeforest/wp-elroyale/wp-content/uploads/2019/02/image-post3.jpg" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
			</div>
		</div>
	</div>
</section>
			<div className="mt-10">
               <MoreCategories></MoreCategories>
             </div>
		</div>
	);
};

export default Categories;


// We’ve all been dying to know which type of magic the Gaines would bring to the café, a landmark on Waco’s bustling traffic circle that closed down in February of 2016. The Fixer Upper stars’ Magnolia brand, which includes the Magnolia Market, a premium interior paint line, a bakery, and a quarterly home magazine, has already reshaped the culture and perception of Waco, Texas.

// The Elite Café, which was originally opened in 1919, has catered to Elvis Presley when he was training at Fort Hood in the 1950s, and previously served steaks, burgers, and salads. It was a landmark for locals and passersby traveling from Austin to Dallas, most recognizable by a baby-blue ’56 Cadillac parked right out front. “I’ve always been a breakfast connoisseur. I always do a heavy, bigger breakfast, but Jo is the exact opposite. She was kind enough to come with me on this one, and we are going to do up a breakfast joint here in town.”