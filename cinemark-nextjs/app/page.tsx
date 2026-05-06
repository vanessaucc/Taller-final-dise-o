export default function Home() {
  const movies = [
    { id: 1, title: "Avatar 2", rating: "PG-13", genre: "Ciencia Ficción" },
    { id: 2, title: "Oppenheimer", rating: "R", genre: "Drama" },
    { id: 3, title: "Barbie", rating: "PG", genre: "Comedia" },
    { id: 4, title: "Killers of the Flower Moon", rating: "R", genre: "Drama" },
    { id: 5, title: "Dune: Part Two", rating: "PG-13", genre: "Ciencia Ficción" },
    { id: 6, title: "Elemental", rating: "G", genre: "Animación" },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navbar */}
      <nav className="bg-black border-b border-red-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-red-600">●</span>
              <span className="text-2xl font-bold text-white">CINEMARK</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-white hover:text-red-600 transition">Películas</a>
              <a href="#" className="text-white hover:text-red-600 transition">Cartelera</a>
              <a href="#" className="text-white hover:text-red-600 transition">Promociones</a>
              <a href="#" className="text-white hover:text-red-600 transition">Mi Cuenta</a>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition">
              Comprar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-900 via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-6xl font-black text-white mb-4 leading-tight">
                Vive el Cine
              </h1>
              <p className="text-2xl text-red-400 mb-2 font-bold">En su máxima expresión</p>
              <p className="text-gray-300 text-lg mb-8">
                Disfruta de las mejores películas en pantalla grande con sonido Dolby Atmos
              </p>
              <div className="flex gap-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition transform hover:scale-105">
                  Ver Cartelera
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-600 hover:text-white transition">
                  Saber Más
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-red-500 to-red-900 rounded-lg h-96 flex items-center justify-center">
                <div className="text-white text-7xl">🎬</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Películas en Cartelera */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-white mb-2">En Cartelera Ahora</h2>
          <div className="h-1 w-20 bg-red-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-900 h-64 flex items-center justify-center group-hover:from-red-600 group-hover:to-red-800 transition">
                <div className="text-6xl">🎞️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                    {movie.rating}
                  </span>
                  <span className="text-gray-400 text-sm">{movie.genre}</span>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700 transition">
                  Comprar Entradas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Promociones */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-white mb-2">Promociones Especiales</h2>
            <div className="h-1 w-20 bg-red-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-8 text-white">
              <div className="text-5xl mb-4">🎟️</div>
              <h3 className="text-2xl font-bold mb-2">2x1 en Entradas</h3>
              <p className="text-red-100 mb-4">Compra una y lleva dos los martes</p>
              <button className="bg-white text-red-600 px-6 py-2 rounded font-bold hover:bg-gray-200 transition">
                Aprovechar
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-8 text-white">
              <div className="text-5xl mb-4">🍿</div>
              <h3 className="text-2xl font-bold mb-2">Combo Especial</h3>
              <p className="text-red-100 mb-4">Entrada + Popcorn + Refresco</p>
              <button className="bg-white text-red-600 px-6 py-2 rounded font-bold hover:bg-gray-200 transition">
                Ver Precio
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-8 text-white">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-2">Tarjeta Cinemark</h3>
              <p className="text-red-100 mb-4">Gana puntos en cada compra</p>
              <button className="bg-white text-red-600 px-6 py-2 rounded font-bold hover:bg-gray-200 transition">
                Solicitar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-red-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">CINEMARK</h4>
              <p className="text-gray-400 text-sm">La experiencia de cine que esperas</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Información</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-red-600 transition">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Ubicaciones</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Cartelera</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-red-600 transition">Email</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Teléfono</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Redes Sociales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-red-600 transition">Términos</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 CINEMARK. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
