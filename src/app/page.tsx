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
    fileName: "Pokemon - Yellow Version - Special Pikachu Edition (USA, Europe) (CGB SGB Enhanced).gb",
    imageName: "Pokemon - Yellow Version - Special Pikachu Edition (USA, Europe) (CGB SGB Enhanced).jpg"
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
    <main className="relative min-h-screen text-gray-200 p-2 sm:p-8 font-sans selection:bg-purple-500/30 overflow-hidden">
      
      {/* 1. SFONDO IMMERSIVO (Fisso sotto la pagina) */}
      <div className="fixed inset-0 -z-20 bg-[#05050A]"></div>
      
      {/* 2. SFERE DI LUCE AL NEON (Fisse) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-700/20 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-700/20 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-fuchsia-600/10 blur-[150px] -z-10 pointer-events-none"></div>

      {/* 3. SISTEMA DI PARTICELLE NEON FLUTTUANTI (Basso -> Alto) MASSICCIO */}
      <div className="fixed inset-0 z-[0] pointer-events-none overflow-hidden">
        
        {/* --- LIVELLO 1: Particelle Grandi e Veloci (Primo Piano) --- */}
        <div className="particle w-4 h-4 bg-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.6)] left-[12%]" style={{ animationDuration: '14s', animationDelay: '0s' }}></div>
        <div className="particle w-3 h-3 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.6)] left-[28%]" style={{ animationDuration: '16s', animationDelay: '3s' }}></div>
        <div className="particle w-3 h-3 bg-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.6)] left-[45%]" style={{ animationDuration: '13s', animationDelay: '7s' }}></div>
        <div className="particle w-4 h-4 bg-fuchsia-500/40 shadow-[0_0_12px_rgba(217,70,239,0.6)] left-[65%]" style={{ animationDuration: '17s', animationDelay: '2s' }}></div>
        <div className="particle w-3 h-3 bg-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.6)] left-[82%]" style={{ animationDuration: '15s', animationDelay: '8s' }}></div>
        <div className="particle w-3 h-3 bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.6)] left-[92%]" style={{ animationDuration: '12s', animationDelay: '5s' }}></div>
        <div className="particle w-4 h-4 bg-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.6)] left-[5%]" style={{ animationDuration: '18s', animationDelay: '1s' }}></div>

        {/* --- LIVELLO 2: Particelle Medie (Velocità Media) --- */}
        <div className="particle w-2 h-2 bg-fuchsia-500/30 shadow-[0_0_8px_rgba(217,70,239,0.5)] left-[8%]" style={{ animationDuration: '22s', animationDelay: '2s' }}></div>
        <div className="particle w-2 h-2 bg-cyan-400/30 shadow-[0_0_8px_rgba(34,211,238,0.5)] left-[22%]" style={{ animationDuration: '25s', animationDelay: '6s' }}></div>
        <div className="particle w-2 h-2 bg-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.5)] left-[35%]" style={{ animationDuration: '20s', animationDelay: '0s' }}></div>
        <div className="particle w-2 h-2 bg-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.5)] left-[52%]" style={{ animationDuration: '28s', animationDelay: '10s' }}></div>
        <div className="particle w-2 h-2 bg-fuchsia-500/30 shadow-[0_0_8px_rgba(217,70,239,0.5)] left-[68%]" style={{ animationDuration: '24s', animationDelay: '4s' }}></div>
        <div className="particle w-2 h-2 bg-cyan-400/30 shadow-[0_0_8px_rgba(34,211,238,0.5)] left-[78%]" style={{ animationDuration: '21s', animationDelay: '8s' }}></div>
        <div className="particle w-2 h-2 bg-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.5)] left-[88%]" style={{ animationDuration: '26s', animationDelay: '1s' }}></div>
        <div className="particle w-2 h-2 bg-blue-500/30 shadow-[0_0_8px_rgba(59,130,246,0.5)] left-[98%]" style={{ animationDuration: '23s', animationDelay: '5s' }}></div>
        <div className="particle w-2 h-2 bg-cyan-400/30 shadow-[0_0_8px_rgba(34,211,238,0.5)] left-[15%]" style={{ animationDuration: '27s', animationDelay: '12s' }}></div>

        {/* --- LIVELLO 3: Particelle Piccole (Sfondo Lento) --- */}
        <div className="particle w-1 h-1 bg-purple-500/20 shadow-[0_0_5px_rgba(168,85,247,0.4)] left-[2%]" style={{ animationDuration: '35s', animationDelay: '0s' }}></div>
        <div className="particle w-1 h-1 bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.4)] left-[18%]" style={{ animationDuration: '40s', animationDelay: '5s' }}></div>
        <div className="particle w-1 h-1 bg-fuchsia-500/20 shadow-[0_0_5px_rgba(217,70,239,0.4)] left-[32%]" style={{ animationDuration: '32s', animationDelay: '2s' }}></div>
        <div className="particle w-1 h-1 bg-cyan-400/20 shadow-[0_0_5px_rgba(34,211,238,0.4)] left-[48%]" style={{ animationDuration: '45s', animationDelay: '10s' }}></div>
        <div className="particle w-1 h-1 bg-purple-500/20 shadow-[0_0_5px_rgba(168,85,247,0.4)] left-[58%]" style={{ animationDuration: '38s', animationDelay: '7s' }}></div>
        <div className="particle w-1 h-1 bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.4)] left-[72%]" style={{ animationDuration: '36s', animationDelay: '1s' }}></div>
        <div className="particle w-1 h-1 bg-fuchsia-500/20 shadow-[0_0_5px_rgba(217,70,239,0.4)] left-[85%]" style={{ animationDuration: '42s', animationDelay: '15s' }}></div>
        <div className="particle w-1 h-1 bg-cyan-400/20 shadow-[0_0_5px_rgba(34,211,238,0.4)] left-[95%]" style={{ animationDuration: '34s', animationDelay: '4s' }}></div>
        <div className="particle w-1 h-1 bg-purple-500/20 shadow-[0_0_5px_rgba(168,85,247,0.4)] left-[25%]" style={{ animationDuration: '39s', animationDelay: '12s' }}></div>
        <div className="particle w-1 h-1 bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.4)] left-[42%]" style={{ animationDuration: '44s', animationDelay: '8s' }}></div>
        <div className="particle w-1 h-1 bg-fuchsia-500/20 shadow-[0_0_5px_rgba(217,70,239,0.4)] left-[62%]" style={{ animationDuration: '31s', animationDelay: '3s' }}></div>
        <div className="particle w-1 h-1 bg-cyan-400/20 shadow-[0_0_5px_rgba(34,211,238,0.4)] left-[75%]" style={{ animationDuration: '41s', animationDelay: '9s' }}></div>

      </div>

      {/* Header Premium */}
      <header className="relative max-w-screen-2xl mx-auto mb-12 sm:mb-20 mt-6 sm:mt-12 text-center z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          RETRO<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">POCKET</span>
        </h1>
        <p className="text-purple-300 text-[10px] sm:text-sm md:text-base uppercase tracking-[0.6em] sm:tracking-[0.8em] font-bold mt-4 opacity-80">
          Personal ROM Vault
        </p>
      </header>

      {/* Griglia Giochi (Glassmorphism Puro) */}
      <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6 pb-20">
        {romLibrary.map((game) => (
          <div 
            key={game.id} 
            className="group relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 flex flex-col hover:-translate-y-3 hover:border-purple-400/50 hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.4)]"
          >
            {/* Immagine con gestione intelligente Mobile/Desktop */}
            <div className="relative aspect-square overflow-hidden bg-black/60">
              
              {/* GRADIENTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-white/5 z-10 opacity-0 sm:opacity-80 transition-opacity duration-500 sm:group-hover:opacity-40 pointer-events-none"></div>
              
              {/* IMMAGINE */}
              <img 
                src={`/images/${game.imageName}`} 
                alt={game.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out opacity-100 sm:opacity-80 sm:group-hover:scale-110 sm:group-hover:opacity-100"
              />
              
              <div className="absolute top-2 right-2 z-20">
                <span className="bg-black/50 backdrop-blur-md text-cyan-400 text-[8px] sm:text-[10px] font-bold px-2 py-1 rounded-md border border-cyan-500/20 uppercase tracking-widest shadow-lg">
                  GBC
                </span>
              </div>
            </div>

            {/* Dettagli & Download Glass Button */}
            <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between items-center text-center relative z-20">
              <h2 className="text-[10px] sm:text-sm font-bold text-gray-300 mb-4 group-hover:text-white transition-colors line-clamp-2 leading-snug drop-shadow-md">
                {game.title}
              </h2>
              
              <a 
                href={`/roms/${game.fileName}`} 
                download
                className="w-full block text-center bg-white/[0.05] backdrop-blur-sm border border-white/10 text-gray-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:border-transparent group-hover:text-white font-bold py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 transform active:scale-95 text-[9px] sm:text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
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