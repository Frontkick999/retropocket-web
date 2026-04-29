import React from 'react';

const romLibrary = [
  {
    id: 1,
    title: "007 - The World Is Not Enough",
    fileName: "007 - The World Is Not Enough (USA, Europe).gbc",
    imageName: "007 - The World Is Not Enough (USA, Europe).jpg"
  },
  {
    id: 2,
    title: "Battletoads",
    fileName: "Battletoads (USA, Europe).gbc",
    imageName: "Battletoads (USA, Europe).jpg"
  },
  {
    id: 3,
    title: "Double Dragon",
    fileName: "Double Dragon (USA, Europe).gbc",
    imageName: "Double Dragon (USA, Europe).jpg"
  },
  {
    id: 4,
    title: "Dragon Warrior III",
    fileName: "Dragon Warrior III (USA).gbc",
    imageName: "Dragon Warrior III (USA).jpg"
  },
  {
    id: 5,
    title: "The Legend of Zelda: Link's Awakening",
    fileName: "Legend of Zelda, The - Link's Awakening (USA, Europe) (Rev 2).gbc",
    imageName: "Legend of Zelda, The - Link's Awakening (USA, Europe) (Rev 2).jpg"
  },
  {
    id: 6,
    title: "The Legend of Zelda: Link's Awakening DX",
    fileName: "Legend of Zelda, The - Link's Awakening DX (USA, Europe) (Rev 2) (SGB Enhanced) (GB Compatible).gbc",
    imageName: "Legend of Zelda, The - Link's Awakening DX (USA, Europe) (Rev 2) (SGB Enhanced) (GB Compatible).jpg"
  },
  {
    id: 7,
    title: "The Legend of Zelda: Oracle of Ages",
    fileName: "Legend of Zelda, The - Oracle of Ages (USA, Australia).gbc",
    imageName: "Legend of Zelda, The - Oracle of Ages (USA, Australia).jpg"
  },
  {
    id: 8,
    title: "The Legend of Zelda: Oracle of Seasons",
    fileName: "Legend of Zelda, The - Oracle of Seasons (USA, Australia).gbc",
    imageName: "Legend of Zelda, The - Oracle of Seasons (USA, Australia).jpg"
  },
  {
    id: 9,
    title: "Mario Tennis",
    fileName: "Mario Tennis (USA).gbc",
    imageName: "Mario Tennis (USA).jpg"
  },
  {
    id: 10,
    title: "Pokémon Blue Version",
    fileName: "Pokemon - Blue Version (USA, Europe) (SGB Enhanced).gbc",
    imageName: "Pokemon - Blue Version (USA, Europe) (SGB Enhanced).jpg"
  },
  {
    id: 11,
    title: "Pokémon Crystal Version",
    fileName: "Pokemon - Crystal Version (USA, Europe) (Rev 1).gbc",
    imageName: "Pokemon - Crystal Version (USA, Europe) (Rev 1).jpg"
  },
  {
    id: 12,
    title: "Pokémon Gold Version",
    fileName: "Pokemon - Gold Version (USA, Europe) (SGB Enhanced) (GB Compatible).gbc",
    imageName: "Pokemon - Gold Version (USA, Europe) (SGB Enhanced) (GB Compatible).jpg"
  },
  {
    id: 13,
    title: "Pokémon Red Version",
    fileName: "Pokemon - Red Version (USA, Europe) (SGB Enhanced).gbc",
    imageName: "Pokemon - Red Version (USA, Europe) (SGB Enhanced).jpg"
  },
  {
    id: 14,
    title: "Pokémon Silver Version",
    fileName: "Pokemon - Silver Version (USA, Europe) (SGB Enhanced) (GB Compatible).gbc",
    imageName: "Pokemon - Silver Version (USA, Europe) (SGB Enhanced) (GB Compatible).jpg"
  },
  {
    id: 15,
    title: "Pokémon Yellow Version",
    fileName: "Pokemon - Yellow Version - Special Pikachu Edition (USA, Europe) (CGB+SGB Enhanced).gbc",
    imageName: "Pokemon - Yellow Version - Special Pikachu Edition (USA, Europe) (CGB+SGB Enhanced).jpg"
  },
  {
    id: 16,
    title: "Pokémon Trading Card Game",
    fileName: "Pokemon Trading Card Game (USA, Australia) (SGB Enhanced) (GB Compatible).gbc",
    imageName: "Pokemon Trading Card Game (USA, Australia) (SGB Enhanced) (GB Compatible).jpg"
  },
  {
    id: 17,
    title: "Prince of Persia",
    fileName: "Prince of Persia (USA, Europe) (En,Fr,De,Es,It) (GB Compatible).gbc",
    imageName: "Prince of Persia (USA, Europe) (En,Fr,De,Es,It) (GB Compatible).jpg"
  },
  {
    id: 18,
    title: "Super Mario Bros. Deluxe",
    fileName: "Super Mario Bros. Deluxe (Europe) (Rev 2).gbc",
    imageName: "Super Mario Bros. Deluxe (Europe) (Rev 2).jpg"
  },
  {
    id: 19,
    title: "Super Mario Land",
    fileName: "Super Mario Land (World) (Rev 1).gbc",
    imageName: "Super Mario Land (World) (Rev 1).jpg"
  },
  {
    id: 20,
    title: "Tetris",
    fileName: "Tetris (World) (Rev 1).gbc",
    imageName: "Tetris (World) (Rev 1).jpg"
  },
  {
    id: 21,
    title: "Tetris DX",
    fileName: "Tetris DX (World) (SGB Enhanced) (GB Compatible).gbc",
    imageName: "Tetris DX (World) (SGB Enhanced) (GB Compatible).jpg"
  },
  {
    id: 22,
    title: "Tomb Raider",
    fileName: "Tomb Raider (USA, Europe) (En,Fr,De,Es,It).gbc",
    imageName: "Tomb Raider (USA, Europe) (En,Fr,De,Es,It).jpg"
  },
  {
    id: 23,
    title: "Wario Land 3",
    fileName: "Wario Land 3 (World) (En,Ja).gbc",
    imageName: "Wario Land 3 (World) (En,Ja).jpg"
  }
];

export default function Home() {
  return (
    // p-2 su mobile, p-8 da schermi sm in su
    <main className="min-h-screen bg-gray-950 text-gray-200 p-2 sm:p-8 font-sans">
      
      {/* Header scalabile */}
      <header className="max-w-screen-2xl mx-auto mb-8 sm:mb-16 mt-4 sm:mt-8 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 italic tracking-tight">
          RETROPOCKET
        </h1>
        <p className="text-gray-400 text-[10px] sm:text-lg md:text-xl uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold">
          Personal ROM Vault
        </p>
      </header>

      {/* Griglia Mobile First: 3 colonne di base, poi 4, 5 e 6 sui monitor più grandi */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-6">
        {romLibrary.map((game) => (
          <div 
            key={game.id} 
            className="group bg-gray-900 border border-gray-800 rounded-lg sm:rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-500 shadow-xl flex flex-col hover:-translate-y-1"
          >
            {/* Contenitore Immagine */}
            <div className="relative aspect-square overflow-hidden bg-gray-950 border-b border-gray-800">
              <img 
                src={`/images/${game.imageName}`} 
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
                {/* Badge GBC minuscolo su mobile */}
                <span className="bg-black/80 backdrop-blur-md text-purple-400 text-[7px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded sm:rounded-md border border-purple-500/30 uppercase tracking-wider">
                  GBC
                </span>
              </div>
            </div>

            {/* Dettagli Gioco ultra-compatti su mobile */}
            <div className="p-2 sm:p-4 flex flex-col flex-grow justify-between items-center text-center">
              <h2 className="text-[9px] sm:text-sm md:text-base font-bold text-gray-100 mb-2 sm:mb-4 group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight">
                {game.title}
              </h2>
              
              <a 
                href={`/roms/${game.fileName}`} 
                download
                className="w-full block text-center bg-gray-800 text-white hover:bg-purple-600 font-bold py-1.5 sm:py-2.5 px-1 sm:px-4 rounded-md sm:rounded-xl transition-all duration-300 transform active:scale-95 text-[8px] sm:text-xs md:text-sm tracking-wide"
              >
                DOWNLOAD
              </a>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}