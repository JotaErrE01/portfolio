// Theme configuration - easily change your portfolio's appearance here
export const themes = {
  nightSky: {
    name: 'Night Sky',
    background: 'from-slate-900 via-blue-900 to-slate-800',
    text: {
      primary: 'text-white',
      secondary: 'text-blue-100',
      accent: 'text-cyan-300'
    },
    cards: 'bg-white/10 backdrop-blur-sm border-white/20',
    buttons: {
      primary: 'bg-cyan-500 hover:bg-cyan-400 text-white',
      secondary: 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
    }
  },
  nightDarkSky: {
    name: 'Night Dark Sky',
    background: 'from-[#101E39] via-black to-[#101E39]',
    text: {
      primary: 'text-white',
      secondary: 'text-blue-100',
      accent: 'text-blue-300'
    },
    cards: 'bg-white/8 backdrop-blur-[2px] border-white/15',
    buttons: {
      primary: 'bg-blue-600 hover:bg-blue-500 text-white',
      secondary: 'bg-white/15 hover:bg-white/25 text-white border border-white/25'
    }
  },
  // You can easily add more themes here
  ocean: {
    name: 'Ocean',
    background: 'from-blue-600 via-teal-500 to-cyan-400',
    text: {
      primary: 'text-white',
      secondary: 'text-blue-50',
      accent: 'text-yellow-300'
    },
    cards: 'bg-white/15 backdrop-blur-sm border-white/25',
    buttons: {
      primary: 'bg-yellow-400 hover:bg-yellow-300 text-blue-900',
      secondary: 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
    }
  },
  sunset: {
    name: 'Sunset',
    background: 'from-orange-500 via-pink-500 to-purple-600',
    text: {
      primary: 'text-white',
      secondary: 'text-orange-100',
      accent: 'text-yellow-300'
    },
    cards: 'bg-white/10 backdrop-blur-sm border-white/20',
    buttons: {
      primary: 'bg-yellow-400 hover:bg-yellow-300 text-purple-900',
      secondary: 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
    }
  }
};

// Current active theme - change this to switch themes
export const currentTheme = themes.nightDarkSky;