
// GalleryItem.js


function GalleryItem({ image, title, onViewMore }) {
  return (
    <div className="relative group">
      <img src="https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200" alt={title} className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray-800 bg-opacity-75 rounded-md p-4">
          <h3 className="text-white text-lg">{title}</h3>
          <button onClick={onViewMore} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;