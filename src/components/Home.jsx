import { Link } from "react-router-dom";
import { photos } from "../data/photos";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">
      {/* Navbar fixed on top (adjusted height for larger logo) */}
      <header className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto h-full flex items-center px-2 md:px-4">
          <Link to="/" className="flex items-center gap-3 -ml-20 md:-ml-24">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-sm">
              <img src={new URL('../assets/photos/grill/logo.jpg', import.meta.url).href} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm md:text-base font-semibold text-gray-800">Université Catholique d'Afrique Centrale</div>
            </div>
          </Link>
        </div>

        {/* Faculté block: positioned at the extreme right of the header, not circular, same visual size as left logo */}
        <div className="absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
          <div className="text-sm md:text-base font-medium text-gray-700">Faculté De Philosophie</div>
          <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden shadow-sm">
            <img src={new URL('../assets/photos/grill/faculte.png', import.meta.url).href} alt="Logo Faculté" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Header */}
      <div className="relative h-64 md:h-[48vh] lg:h-[40vh] w-full">
        {/* Use background image to control positioning and avoid awkward cropping */}
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${new URL('../assets/photos/grill/university.jpg', import.meta.url).href})` }}
          role="img"
          aria-label="Université"
        />
        {/* subtle overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <h1 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
        
        </h1>
      </div>

      {/* Galerie */}
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">A la découverte de vos mentors.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              to={`/person/${photo.id}`}
              className="group focus:outline-none"
              aria-label={`Voir le détail de ${photo.name}`}
            >
              <figure className="overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={photo.gridSrc}
                    alt={photo.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105 group-focus:scale-105"
                  />

                  {/* Hover / focus overlay (also appears for keyboard users) */}
                  <div className="absolute inset-0 pointer-events-none flex items-end p-3">
                    <div className="w-full rounded-b-xl bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-250 p-3">
                      <p className="text-white font-semibold text-sm md:text-base truncate">{photo.name}</p>
                      {photo.message ? (
                        <p className="text-xs text-white/90 mt-1 line-clamp-2">{photo.message}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <figcaption className="p-3 text-center">
                  <p className="text-sm font-medium text-gray-800 truncate">{photo.name}</p>
                  {photo.message ? (
                    <p className="text-xs text-gray-500 mt-1">{photo.message}</p>
                  ) : null}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
