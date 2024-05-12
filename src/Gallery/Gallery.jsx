import GalleryItem from "../GalleryTest/GalleryTest";




const Gallery = () => {
    return (
        <div className="mt-10 mb-10">
			<GalleryItem></GalleryItem>
			<div>
			<div className=" w-full h-[200px] rounded-xl bg-[url('https://png.pngtree.com/background/20210711/original/pngtree-bread-minimalist-literary-white-food-poster-background-picture-image_1121500.jpg')]">
				<h2 className="text-center text-4xl font-bold text-red-600 pt-20">Home ! Foods Gallery</h2>
			</div>
			</div>
            <section className="py-6 dark:bg-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square border-2 rounded-xl p-3" src="https://img.freepik.com/free-photo/photo-delicious-hamburger-isolated-white-background_125540-3378.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715385600&semt=ais_user" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square  rounded-xl" src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square  rounded-xl" src="https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl" src="https://static.vecteezy.com/system/resources/thumbnails/037/201/195/small_2x/ai-generated-generative-ai-chef-is-cooking-with-steaming-hot-pan-busy-restaurant-kitchen-photo.jpg" />
			
			<img className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl" src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square  rounded-xl" src="https://static.vecteezy.com/system/resources/previews/029/545/018/non_2x/fast-food-restaurant-menu-burgers-french-fries-coleslaw-chicken-nuggets-and-salads-on-wooden-table-ai-generated-pro-photo.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square  rounded-xl" src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/01/foods_digest_GettyImages1790743174_Header-1024x575.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl" src="https://www.kikkoman.com/en/culture/foodforum/the-japanese-table/img/cmn_im07.png" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Gallery;