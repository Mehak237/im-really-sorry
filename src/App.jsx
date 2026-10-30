import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { TeddyHappy, TeddyCrying } from './components/TeddyIllustrations';
import { FloatingParticles } from './components/FloatingParticles';
import { SoundService } from './components/SoundService';

const DEEP_EMOTIONAL_PRESET = {
  recipientName: "My Special One 🌸",
  senderName: "With All My Heart 💗",
  sorryMessage: `I know I may have hurt you, and honestly, that is the last thing I ever wanted to do in my life. Seeing pain or sadness in your eyes because of something I did or said breaks my heart into a million pieces.

I cannot undo the moment that caused you hurt, no matter how desperately I wish I could turn back the clock. But please believe me when I say that you mean everything to me, and hurting you is my deepest regret. I am not making excuses, nor am I asking you to pretend everything is okay right away.

I just genuinely want you to know how deeply and sincerely sorry I am from the absolute bottom of my heart. Your feelings matter to me, your peace matters to me, and you will always be worth fighting for, apologizing for, and becoming a better person for.`,
  letters: [
    {
      id: 1,
      title: "Things I Never Said 💌",
      tag: "From the quietest corner of my heart",
      content: `There are so many quiet moments when I just look at you or think of you, and my heart fills with a kind of gratitude that words can never truly express. I don't think I tell you often enough how much light you brought into my world when everything felt ordinary and heavy.

Your laughter has this gentle way of healing the worst days. The way you care, the way you speak, the innocence in your smile, and the warmth of your presence—they became my safe space before I even realized it. 

When things go wrong between us, or when there is silence where your warmth used to be, the entire world feels cold and empty. I never want you to doubt your worth or question whether you are valued. You are rare, you are irreplaceable, and having you in my life is a blessing I never want to take for granted. I am so sorry for failing you even for a single second.`
    },
    {
      id: 2,
      title: "If I Could Go Back... ⏳",
      tag: "My raw, honest regret",
      content: `If I were given a single wish right now, I would go back to that exact moment when things went wrong. I would stop myself, take a deep breath, silence my foolish thoughts or ego, and just hold your hand and listen to you with all the care in the world.

It haunts me to know that someone as pure, soft, and gentle as you was hurt by my actions. You deserved patience, you deserved understanding, and above all, you deserved someone who protects your peace rather than disturbing it. 

I take full responsibility for my mistake. No excuses, no deflecting. Seeing you upset because of me is a pain I wouldn't wish on anyone. If I could trade places with your pain right now, I would do it without a second thought. I am truly, deeply sorry for letting you down.`
    },
    {
      id: 3,
      title: "A Promise From My Heart ❤️",
      tag: "My commitment to us",
      content: `This apology isn't just about saying sorry so that things go back to normal. It is an honest, lifelong promise to be better, to mature, and to never let carelessness harm what we share.

I promise to communicate with patience instead of reacting in haste. I promise to listen to you, not just with my ears, but with my heart—to understand your unsaid words, your fears, and your boundaries. I promise that your tears and your feelings will never be taken lightly by me.

Real love isn't about never having misunderstandings; it's about holding each other through the storms and choosing to learn, heal, and grow together. You are worth every effort, every change, and every promise I will ever make. I am here, willing to wait, willing to learn, and always loving you.`
    }
  ],
  memories: [
    {
      id: 1,
      date: "The Day We Laughed Until It Hurt",
      title: "Pure Happiness ✨",
      description: "We couldn't stop giggling over the silliest little thing. In that moment, the entire world felt so soft and beautiful.",
      imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      date: "That Quiet Cozy Evening",
      title: "Warm Coffee & Soft Talks ☕",
      description: "No rushing, no stress—just two cups, cool wind, and talking about our dreams until hours felt like minutes.",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      date: "Under The Starlight",
      title: "Holding Your Hand 🌌",
      description: "Looking at the stars and thinking how lucky I am to know someone with a heart as pure and radiant as yours.",
      imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80"
    }
  ],
  videoUrl: null,
  voiceAudioUrl: null,
  voiceNoteText: "I made this video and recording straight from my soul just so you could feel the honesty, warmth, and love in my words. Please take all the time you need, but know that I am right here waiting patiently for you.",
  finalMessage: "I don't expect everything to become perfect instantly. I just hope you can see how much I mean these words. You are important to me, and I'm truly sorry."
};

export default function App() {
  const [screen, setScreen] = useState(1);
  const [isMusicOn, setIsMusicOn] = useState(false);

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('romantic_apology_gift_v3');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return DEEP_EMOTIONAL_PRESET;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [openedLetter, setOpenedLetter] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [finalOutcome, setFinalOutcome] = useState(null);

  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noDodges, setNoDodges] = useState(0);
  const [noText, setNoText] = useState("NO 😤");

  useEffect(() => {
    localStorage.setItem('romantic_apology_gift_v3', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    try {
      const hash = window.location.hash.substring(1);
      if (hash.startsWith("apology=")) {
        const jsonStr = decodeURIComponent(atob(hash.replace("apology=", "")));
        const parsed = JSON.parse(jsonStr);
        setData(parsed);
        setPreviewMode(true);
      }
    } catch (e) {}
  }, []);

  const toggleMusic = () => {
    if (isMusicOn) {
      SoundService.stopLofiMusic();
      setIsMusicOn(false);
    } else {
      SoundService.startLofiMusic();
      setIsMusicOn(true);
    }
  };

  const triggerConfetti = () => {
    SoundService.playChime();
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFCAD4', '#F48498', '#FF4D6D', '#B5E2FA', '#DFCCF1']
    });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF4D6D', '#FDE2E4']
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF4D6D', '#B5E2FA']
      });
    }, 250);
  };

  const handleNoDodge = () => {
    SoundService.playPop();
    const next = noDodges + 1;
    setNoDodges(next);
    const phrases = [
      "Wait please! 🥺",
      "Oops, too quick! 💨",
      "Are you sure? 🥺",
      "Don't press this! 🙈",
      "My heart says YES! 💗",
      "Give me one chance? 🥺",
      "Okay okay, hear me out! 🥺"
    ];
    setNoText(phrases[next % phrases.length]);

    const maxOffset = 120;
    const x = (Math.random() - 0.5) * maxOffset * 2;
    const y = (Math.random() - 0.5) * maxOffset * 1.4;
    setNoPos({ x, y });
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (file.type.startsWith('video/')) {
      setData(prev => ({ ...prev, videoUrl: url, voiceAudioUrl: null }));
      alert("✨ Video uploaded successfully! Ready to play in Section 6.");
    } else {
      setData(prev => ({ ...prev, voiceAudioUrl: url, videoUrl: null }));
      alert("✨ Audio note uploaded successfully!");
    }
  };

  const onPhotoUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const copy = [...data.memories];
        copy[index].imageUrl = ev.target.result;
        setData({ ...data, memories: copy });
      };
      reader.readAsDataURL(file);
    }
  };

  const copyShareLink = () => {
    try {
      const str = JSON.stringify(data);
      const encoded = btoa(encodeURIComponent(str));
      const url = `${window.location.origin}${window.location.pathname}#apology=${encoded}`;
      navigator.clipboard.writeText(url);
      alert("✨ Shareable link copied to clipboard! Send this to your special someone.");
    } catch (e) {
      alert("Changes are safely saved in your browser!");
    }
  };

  const resetToEmotionalMasterpiece = () => {
    if (confirm("Reset text, apology, and all 3 letters to the deep, long emotional version?")) {
      setData(DEEP_EMOTIONAL_PRESET);
    }
  };

  const stepTitles = [
    "A Cute Surprise",
    "The Apology",
    "Can You Forgive Me?",
    "Our Memories",
    "Personal Letters",
    "Video & Voice",
    "Start Again?"
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-gradient-to-br from-[#FFE5EC] via-[#F0E6FF] to-[#E8F4F8] text-slate-800 font-sans cursor-heart">
      <FloatingParticles />

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 px-4 py-3 bg-white/75 backdrop-blur-md border-b border-pink-100 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-2xl animate-pulse">🧸</span>
          <span className="font-bold text-slate-800 tracking-tight text-sm sm:text-base">
            For {data.recipientName}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMusic}
            title={isMusicOn ? "Mute Background Music" : "Play Gentle Background Music"}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border shadow-xs ${
              isMusicOn
                ? 'bg-pink-100 text-pink-600 border-pink-300 animate-pulse'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-pink-50'
            }`}
          >
            <span>{isMusicOn ? '🎵 Playing' : '🔇 Music'}</span>
            {isMusicOn && (
              <span className="flex space-x-0.5 items-end h-3">
                <span className="w-0.5 h-3 bg-pink-500 animate-bounce"></span>
                <span className="w-0.5 h-2 bg-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-0.5 h-3.5 bg-pink-500 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </span>
            )}
          </button>

          {!previewMode && (
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-purple-700 border border-purple-200 hover:bg-purple-50 shadow-xs transition"
            >
              <span>⚙️ Customize</span>
            </button>
          )}

          {previewMode && (
            <button
              onClick={() => setPreviewMode(false)}
              className="px-2.5 py-1 text-xs bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200"
            >
              Exit Preview
            </button>
          )}
        </div>
      </header>

      {/* Stepper Progress Indicator */}
      <div className="z-30 px-4 py-2 flex justify-center">
        <div className="bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-pink-100 flex items-center space-x-1.5 sm:space-x-2.5">
          {stepTitles.map((title, i) => (
            <button
              key={i}
              onClick={() => {
                SoundService.playPop();
                setScreen(i + 1);
              }}
              title={`Step ${i + 1}: ${title}`}
              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full text-xs font-bold transition-all flex items-center justify-center ${
                screen === i + 1
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-sm scale-110'
                  : screen > i + 1
                  ? 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN SCREEN CONTENT */}
      <main className="z-10 flex-1 flex flex-col justify-center items-center px-4 py-6 max-w-2xl mx-auto w-full">

        {/* SCREEN 1: OPENING SURPRISE */}
        {screen === 1 && (
          <div className="w-full text-center space-y-6 transition-all duration-500">
            <div className="relative inline-block cursor-pointer" onClick={() => SoundService.playChime()}>
              <TeddyHappy size={200} />
              <div className="absolute -top-1 -right-2 bg-pink-100 text-pink-700 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs animate-wiggle">
                For you 💌
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
                Hey You... 🥺
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
                I made something special for you. Will you give me a minute?
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  SoundService.playChime();
                  setScreen(2);
                }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full shadow-lg glow-romantic transform transition hover:-translate-y-0.5 hover:scale-105 active:scale-95"
              >
                <span className="mr-2">Open My Little Surprise</span>
                <span className="text-xl group-hover:scale-125 transition-transform">💗</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-2 font-handwritten text-xl">
              Made with pure honesty, emotion, and love.
            </p>
          </div>
        )}

        {/* SCREEN 2: THE DEEP EMOTIONAL SORRY SCREEN */}
        {screen === 2 && (
          <div className="w-full text-center space-y-6 transition-all duration-500">
            <div className="relative inline-block">
              <TeddyCrying size={200} />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-700 uppercase tracking-wider">
                From The Absolute Bottom Of My Heart
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                I Know I Messed Up... 💔
              </h2>
            </div>

            <div className="bg-white/92 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-pink-200/90 shadow-lg max-w-xl mx-auto relative text-left space-y-4">
              <div className="washi-tape washi-tape-pink"></div>

              <div className="text-slate-700 leading-relaxed text-sm sm:text-base font-medium space-y-3 whitespace-pre-line">
                {data.sorryMessage}
              </div>

              <div className="mt-4 pt-4 border-t border-pink-100 flex justify-between items-center text-xs text-slate-500">
                <span className="font-semibold">— Sincere Apology</span>
                <span className="font-handwritten text-xl font-bold text-pink-500">{data.senderName}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  triggerConfetti();
                  setScreen(3);
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-bold rounded-full shadow-md glow-romantic transform transition active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>I'm Really Sorry... 🥺</span>
                <span>💗</span>
              </button>

              <button
                onClick={() => setScreen(3)}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-800 underline underline-offset-4"
              >
                Next Screen →
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 3: INTERACTIVE YES / NO SCREEN */}
        {screen === 3 && (
          <div className="w-full text-center space-y-6 transition-all duration-500">
            <div className="space-y-2">
              <span className="text-4xl">🥺</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                Can You Forgive Me? 🥺
              </h2>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                I know you have every right to be hurt, but I hope you can feel how much I care.
              </p>
            </div>

            <div className="relative min-h-[220px] flex flex-col items-center justify-center p-6 bg-white/75 backdrop-blur-md rounded-3xl border border-pink-100 shadow-sm max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <button
                  onClick={() => {
                    triggerConfetti();
                    setFinalOutcome('forgiven');
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-extrabold rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 text-base"
                >
                  <span>YES, I Forgive You</span>
                  <span className="text-xl">💗</span>
                </button>

                <div className="relative">
                  <button
                    onMouseEnter={handleNoDodge}
                    onClick={handleNoDodge}
                    onTouchStart={handleNoDodge}
                    style={{
                      transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                      transition: 'transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                    className="px-6 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-full shadow-sm text-sm cursor-pointer whitespace-nowrap active:scale-90"
                  >
                    {noText}
                  </button>
                </div>
              </div>

              {noDodges > 0 && (
                <p className="text-xs text-pink-500 font-medium mt-6 animate-pulse">
                  (Hehe, the "No" button gets a little shy! Tried to escape {noDodges} {noDodges === 1 ? 'time' : 'times'} 🙈)
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  SoundService.playPop();
                  setScreen(4);
                }}
                className="inline-flex items-center space-x-1 text-sm font-semibold text-pink-600 hover:text-pink-700 bg-pink-50 px-4 py-2 rounded-full border border-pink-200"
              >
                <span>Look through our little memories</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 4: OUR MEMORIES GALLERY */}
        {screen === 4 && (
          <div className="w-full space-y-6 transition-all duration-500">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                A Few Little Memories... 📸
              </h2>
              <p className="text-sm text-slate-600">
                Moments that remind me how precious you are to me.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {data.memories.map((mem, idx) => {
                const tilts = ['rotate-[-2deg]', 'rotate-[2.5deg]', 'rotate-[-1.5deg]'];
                return (
                  <div
                    key={mem.id || idx}
                    onClick={() => setLightboxImg(mem)}
                    className={`bg-white p-3.5 pb-6 rounded-lg shadow-md border border-slate-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer relative group ${tilts[idx % 3]}`}
                  >
                    <div className="washi-tape"></div>

                    <div className="w-full h-44 bg-slate-100 rounded overflow-hidden relative">
                      <img
                        src={mem.imageUrl}
                        alt={mem.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-pink-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                          🔍 View
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <div className="text-xs text-slate-400 font-semibold">{mem.date}</div>
                      <h4 className="font-handwritten text-xl font-bold text-slate-800 mt-1 leading-tight">
                            {mem.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                        {mem.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/85 backdrop-blur-md p-5 rounded-3xl border border-pink-100 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
                <span>✨</span>
                <span>Our Chapter Timeline</span>
              </h3>
              <div className="space-y-3 border-l-2 border-pink-200 ml-3 pl-4">
                {data.memories.map((mem, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-pink-400 border-2 border-white"></div>
                    <span className="text-xs font-bold text-pink-600">{mem.date}</span>
                    <p className="text-xs font-medium text-slate-700">{mem.title} — {mem.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  SoundService.playChime();
                  setScreen(5);
                }}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold rounded-full shadow-md glow-romantic hover:scale-105 transition"
              >
                Open Three Personal Letters 💌 →
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 5: THREE PERSONAL DEEP LETTERS */}
        {screen === 5 && (
          <div className="w-full space-y-6 transition-all duration-500">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                Three Letters For You 💌
              </h2>
              <p className="text-sm text-slate-600">
                Tap any envelope to open the deep, heartfelt letter inside.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {data.letters.map((letter) => (
                <div
                  key={letter.id}
                  onClick={() => {
                    SoundService.playChime();
                    setOpenedLetter(letter);
                  }}
                  className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-pink-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-xs">
                    💌
                  </div>

                  <span className="text-xs text-pink-500 font-bold uppercase tracking-wider mt-3">
                    {letter.tag}
                  </span>
                  <h3 className="font-bold text-slate-800 text-base mt-1">
                    {letter.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3">
                    "{letter.content.substring(0, 85)}..."
                  </p>

                  <span className="mt-4 inline-flex items-center text-xs font-bold text-pink-600 group-hover:underline">
                    Read Letter →
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => {
                  SoundService.playChime();
                  setScreen(6);
                }}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold rounded-full shadow-md glow-romantic hover:scale-105 transition"
              >
                Listen & Watch One Last Thing 🎥 →
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 6: VIDEO & VOICE SECTION (CLEAN VIEW - NO ADD-ON BUTTONS FOR RECIPIENT) */}
        {screen === 6 && (
          <div className="w-full text-center space-y-6 transition-all duration-500">
            <div className="space-y-1">
              <span className="text-3xl">🎥 💌</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                One Last Thing... 💭
              </h2>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                I wanted you to hear and see the sincere truth straight from my heart.
              </p>
            </div>

            <div className="bg-white/92 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-pink-200 shadow-xl max-w-lg mx-auto space-y-4">
              {data.videoUrl ? (
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden bg-black/90 border-2 border-pink-200 shadow-inner">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full max-h-[380px] rounded-xl object-contain mx-auto"
                    >
                      <source src={data.videoUrl} />
                      Your browser does not support video playback.
                    </video>
                  </div>
                  <div className="flex items-center justify-center space-x-1.5 text-xs text-pink-600 font-bold">
                    <span>✨</span>
                    <span>Made specially for you — please watch with sound</span>
                    <span>💗</span>
                  </div>
                </div>
              ) : data.voiceAudioUrl ? (
                <div className="space-y-4 py-2">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="w-14 h-14 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                      <div className="w-4 h-4 rounded-full bg-pink-400"></div>
                    </div>
                    <div className="text-2xl animate-pulse">🎵</div>
                    <div className="w-14 h-14 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center animate-spin" style={{ animationDuration: '6s' }}>
                      <div className="w-4 h-4 rounded-full bg-pink-400"></div>
                    </div>
                  </div>
                  <audio controls className="w-full">
                    <source src={data.voiceAudioUrl} />
                    Your browser does not support audio playback.
                  </audio>
                  <p className="text-xs text-pink-600 font-bold">
                    ✓ Personal voice note recorded for you 💌
                  </p>
                </div>
              ) : (
                <div className="space-y-4 py-2">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="w-14 h-14 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center animate-bounce-subtle">
                      <span className="text-2xl">🧸</span>
                    </div>
                    <div className="text-2xl animate-pulse">💗</div>
                    <div className="w-14 h-14 rounded-full bg-pink-100 border-2 border-pink-300 flex items-center justify-center animate-bounce-subtle">
                      <span className="text-2xl">💌</span>
                    </div>
                  </div>
                  <div className="p-4 bg-pink-50/90 rounded-2xl border border-pink-100 text-left space-y-2">
                    <div className="flex items-center space-x-2 text-pink-700 font-bold text-xs">
                      <span>💌</span>
                      <span>Spoken From My Heart To Yours:</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed italic whitespace-pre-line">
                      "{data.voiceNoteText}"
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  AudioService.playChime();
                  setScreen(7);
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-bold rounded-full shadow-md glow-romantic hover:scale-105 transition"
              >
                The Final Question... 🥺 →
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 7: FINAL FORGIVENESS SCREEN */}
        {screen === 7 && (
          <div className="w-full text-center space-y-6 transition-all duration-500">
            <div className="relative inline-block">
              <TeddyHappy size={210} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                So... Can We Start Again? 🥺
              </h2>
              <div className="bg-white/85 backdrop-blur-md p-5 rounded-3xl border border-pink-100 shadow-sm max-w-md mx-auto">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  "{data.finalMessage}"
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={() => {
                  triggerConfetti();
                  setFinalOutcome('forgiven');
                }}
                className="w-full sm:w-auto flex-1 px-7 py-4 bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold rounded-full shadow-lg glow-romantic transform transition hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 text-base"
              >
                <span>I Forgive You</span>
                <span className="text-xl">💗</span>
              </button>

              <button
                onClick={() => {
                  AudioService.playPop();
                  setFinalOutcome('time');
                }}
                className="w-full sm:w-auto flex-1 px-7 py-4 bg-white/90 hover:bg-white text-slate-700 font-bold rounded-full border border-slate-200 shadow-sm transition hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 text-base"
              >
                <span>I Need Some Time</span>
                <span className="text-lg">🤍</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setScreen(1)}
                className="text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                ↺ Restart Experience from Beginning
              </button>
            </div>
          </div>
        )}

      </main>

      {/* LETTER FULL READING VIEW MODAL */}
      {openedLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FFFDF7] max-w-xl w-full p-6 sm:p-8 rounded-3xl shadow-2xl border border-amber-200 relative animate-bounce-subtle text-left max-h-[90vh] overflow-y-auto">
            <div className="washi-tape"></div>

            <div className="flex justify-between items-center border-b border-amber-200/80 pb-3">
              <div>
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">{openedLetter.tag}</span>
                <h3 className="font-bold text-slate-800 text-lg sm:text-xl">{openedLetter.title}</h3>
              </div>
              <button
                onClick={() => setOpenedLetter(null)}
                className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-slate-600 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="py-6">
              <p className="font-handwritten text-2xl sm:text-3xl text-slate-800 leading-relaxed whitespace-pre-line">
                {openedLetter.content}
              </p>
            </div>

            <div className="border-t border-amber-200/80 pt-4 flex items-center justify-between">
              <span className="font-handwritten text-2xl text-pink-500">— Forever Yours, {data.senderName}</span>
              <button
                onClick={() => setOpenedLetter(null)}
                className="px-6 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full text-xs shadow-xs"
              >
                Close Letter 💌
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULL SCREEN PHOTO LIGHTBOX */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn cursor-pointer"
        >
          <div className="max-w-xl w-full bg-white p-4 rounded-2xl shadow-2xl text-center space-y-3" onClick={e => e.stopPropagation()}>
            <div className="relative max-h-[70vh] rounded-xl overflow-hidden">
              <img src={lightboxImg.imageUrl} alt={lightboxImg.title} className="w-full h-full object-contain max-h-[60vh] mx-auto rounded-lg" />
            </div>
            <div className="pt-2">
              <span className="text-xs text-slate-400 font-semibold">{lightboxImg.date}</span>
              <h4 className="text-xl font-bold font-handwritten text-slate-800">{lightboxImg.title}</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">{lightboxImg.description}</p>
            </div>
            <button
              onClick={() => setLightboxImg(null)}
              className="px-5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full"
            >
              Close Photo
            </button>
          </div>
        </div>
      )}

      {/* FINAL CELEBRATION / RESPECT DIALOG */}
      {finalOutcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 rounded-3xl shadow-2xl border border-pink-200 text-center space-y-4">
            {finalOutcome === 'forgiven' ? (
              <>
                <div className="text-5xl animate-bounce">💖 🎉 🧸</div>
                <h3 className="text-2xl font-extrabold text-slate-800">
                  YAY! Thank you for giving me a chance. ❤️
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  "I'll try to make things better every single day. Thank you for your kindness, patience, and heart. You mean the world to me. ❤️"
                </p>
                <button
                  onClick={() => {
                    setFinalOutcome(null);
                    triggerConfetti();
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-bold rounded-full shadow-md text-sm"
                >
                  Hold In My Heart Forever 💗
                </button>
              </>
            ) : (
              <>
                <div className="text-5xl">🤍 🕊️</div>
                <h3 className="text-2xl font-extrabold text-slate-800">
                  That's okay. Take all the time you need.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  "That's okay. Take all the time you need. I respect your feelings completely. 🤍"
                </p>
                <button
                  onClick={() => setFinalOutcome(null)}
                  className="px-8 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full text-sm"
                >
                  Thank You 🤍
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* CUSTOMIZATION DRAWER */}
      {isCustomizerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 overflow-y-auto space-y-6">
            
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🛠️</span>
                <h3 className="font-extrabold text-slate-800 text-lg">Personalize This Apology</h3>
              </div>
              <button
                onClick={() => setIsCustomizerOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-600"
              >
                ✕
              </button>
            </div>

            <div className="p-3 bg-pink-50 rounded-xl border border-pink-200 text-xs text-pink-800 flex items-center justify-between">
              <span>Restore deep, long emotional version:</span>
              <button
                onClick={resetToEmotionalMasterpiece}
                className="px-2.5 py-1 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600"
              >
                Load Masterpiece
              </button>
            </div>

            {/* Video / Audio Upload in Drawer */}
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-purple-900 uppercase">Attach Video or Audio</label>
                {(data.videoUrl || data.voiceAudioUrl) && (
                  <button
                    onClick={() => setData({ ...data, videoUrl: null, voiceAudioUrl: null })}
                    className="text-xs text-rose-500 hover:underline"
                  >
                    Remove Media
                  </button>
                )}
              </div>
              <p className="text-xs text-purple-700">
                Upload your personal video (.mp4, .mov) or voice recording. The recipient will only see the player, with NO upload buttons!
              </p>
              
              <input
                type="file"
                accept="video/*,audio/*"
                onChange={handleMediaUpload}
                className="w-full text-xs text-slate-600 file:mr-2 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />

              {data.videoUrl && (
                <p className="text-xs text-emerald-600 font-bold">✓ Video attached and ready to play!</p>
              )}
              {data.voiceAudioUrl && (
                <p className="text-xs text-emerald-600 font-bold">✓ Audio note attached!</p>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">Recipient's Name</label>
                <input
                  type="text"
                  value={data.recipientName}
                  onChange={(e) => setData({ ...data, recipientName: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase">Your Name (Sender)</label>
                <input
                  type="text"
                  value={data.senderName}
                  onChange={(e) => setData({ ...data, senderName: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase">Screen 2 Apology Message</label>
              <textarea
                rows={6}
                value={data.sorryMessage}
                onChange={(e) => setData({ ...data, sorryMessage: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-pink-300 outline-none"
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-700 uppercase block">Edit 3 Letters</label>
              {data.letters.map((letter, idx) => (
                <div key={letter.id} className="p-3 bg-pink-50/60 rounded-xl border border-pink-100 space-y-2">
                  <input
                    type="text"
                    value={letter.title}
                    onChange={(e) => {
                      const updated = [...data.letters];
                      updated[idx].title = e.target.value;
                      setData({ ...data, letters: updated });
                    }}
                    className="w-full px-2 py-1 font-bold text-sm bg-white border rounded"
                  />
                  <textarea
                    rows={6}
                    value={letter.content}
                    onChange={(e) => {
                      const updated = [...data.letters];
                      updated[idx].content = e.target.value;
                      setData({ ...data, letters: updated });
                    }}
                    className="w-full px-2 py-1 text-xs bg-white border rounded outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 uppercase block">Upload Personal Pictures</label>
              {data.memories.map((mem, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-2">
                    <img src={mem.imageUrl} alt="" className="w-10 h-10 object-cover rounded" />
                    <div className="flex-1">
                      <input
                        type="text"
                        value={mem.title}
                        placeholder="Memory Title"
                        onChange={(e) => {
                          const updated = [...data.memories];
                          updated[idx].title = e.target.value;
                          setData({ ...data, memories: updated });
                        }}
                        className="w-full px-2 py-1 text-xs border rounded mb-1"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => onPhotoUpload(e, idx)}
                        className="text-xs text-slate-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 uppercase">Final Apology Message</label>
              <textarea
                rows={3}
                value={data.finalMessage}
                onChange={(e) => setData({ ...data, finalMessage: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-pink-300 outline-none"
              />
            </div>

            <div className="pt-4 border-t space-y-2">
              <button
                onClick={copyShareLink}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl text-sm shadow-md hover:opacity-95"
              >
                🔗 Copy Shareable Link For Recipient
              </button>

              <button
                onClick={() => {
                  setPreviewMode(true);
                  setIsCustomizerOpen(false);
                  setScreen(1);
                }}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs"
              >
                👁️ Preview as Recipient
              </button>
            </div>

          </div>
        </div>
      )}

      <footer className="z-10 py-3 text-center text-xs text-slate-400 font-medium">
        Handcrafted with love, respect, and deep sincerity • For {data.recipientName}
      </footer>
    </div>
  );
}
