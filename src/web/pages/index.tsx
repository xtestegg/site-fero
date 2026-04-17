import { useState } from "react";

// CDN Asset URLs
const ASSETS = {
  bag: "https://d2xsxph8kpxj0f.cloudfront.net/310519663399658034/46o8fP7mNreeakq9DApsux/crocrocrocs-bag_a6a041e6.png",
  eggGif: "https://d2xsxph8kpxj0f.cloudfront.net/310519663399658034/46o8fP7mNreeakq9DApsux/croco_egg_dark_e5e0ab05.gif",
  crocoAnim: "https://d2xsxph8kpxj0f.cloudfront.net/310519663399658034/46o8fP7mNreeakq9DApsux/croco_animation_38e4dbbf.gif",
  bgBottom: "https://d2xsxph8kpxj0f.cloudfront.net/310519663399658034/46o8fP7mNreeakq9DApsux/croco_bg_bottom_34c6a0c5.png",
  unique02: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/croco-king_7630ed59.png",
  uniqueLava: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/croco-cave_da8d0c3c.png",
  crococrocsLogo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663399658034/46o8fP7mNreeakq9DApsux/UntitledProject(13)_c0e044be.jpg",
};

// Stars background component
function Stars({ count = 60 }: { count?: number }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 1.5,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: s.size + "px",
            height: s.size + "px",
            left: s.x + "%",
            top: s.y + "%",
            animationDuration: s.duration + "s",
            animationDelay: s.delay + "s",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  if (!showContent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
        <Stars />

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Animated bag */}
          <div className="animate-bounce">
            <img src={ASSETS.bag} alt="CroCo Crocs Bag" className="w-32 h-32 md:w-48 md:h-48" />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1
              className="text-white text-6xl md:text-8xl leading-none font-black mb-4"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.1em" }}
            >
              CROCO
            </h1>
            <h1
              className="text-white text-6xl md:text-8xl leading-none font-black"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.1em" }}
            >
              CROCS
            </h1>
          </div>

          {/* Enter Button */}
          <button
            onClick={handleEnter}
            className="px-10 py-4 rounded-2xl text-2xl font-black mb-3 relative overflow-hidden bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 hover:from-lime-300 hover:via-green-300 hover:to-emerald-400 text-black transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:shadow-lime-500/50 active:scale-95"
            style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.1em" }}
          >
            ENTER
          </button>

          <p className="text-gray-400 text-sm font-semibold">🎵 with sound</p>

          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
          >
            {isPlaying ? "🔊 MUSIC ON" : "🔇 MUSIC OFF"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 px-4 overflow-hidden bg-black">
        {/* Starfield Background */}
        <Stars count={100} />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Egg and Bag */}
            <div className="flex flex-col items-center justify-center">
              {/* Egg */}
              <div className="relative w-full max-w-sm">
                <img src={ASSETS.eggGif} alt="Croco Egg Hatching" className="w-full h-auto block" />
              </div>

              {/* Teaser card */}
              <div
                className="mt-6 px-4 py-3 rounded-full text-center"
                style={{
                  background: "rgba(249,115,22,0.2)",
                  border: "1px solid rgba(249,115,22,0.5)",
                  color: "#F97316",
                  fontFamily: "'Fredoka One', cursive",
                }}
              >
                🔥 New
              </div>
            </div>

            {/* Right: Title and Info */}
            <div className="text-center lg:text-left">
              <div
                className="text-white text-6xl md:text-8xl leading-none mb-1"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                CROCO
              </div>
              <div
                className="text-white text-6xl md:text-8xl leading-none mb-6"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                CROCS
              </div>

              {/* Mint Soon Badge */}
              <div
                className="inline-block px-6 py-2 rounded-full mb-6 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 text-black font-black"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: "clamp(1.2rem, 3vw, 2rem)",
                  letterSpacing: "0.1em",
                }}
              >
                Mint Soon
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base md:text-lg font-semibold leading-relaxed mb-8">
                CrocoCrocs is a collection of 7,777 crocodiles living on the blockchain, including 18 completely unique 1/1 artworks.
                <br />
                Join the CrocoCrocs community.🐊
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="https://discord.gg/J6ZUWvARsY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-purple-500 hover:border-purple-300 hover:bg-purple-500/20 transition-all duration-300"
                  title="Join Discord"
                >
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.492c-1.53-.742-3.247-1.304-5.085-1.622a.074.074 0 0 0-.079.037c-.21.375-.444.864-.607 1.25-1.645-.246-3.273-.246-4.886 0-.163-.386-.405-.875-.618-1.25a.077.077 0 0 0-.079-.037C6.931 3.188 5.215 3.75 3.683 4.492a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057c1.760 1.289 3.467 2.08 5.148 2.597a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106c-.657-.249-1.282-.578-1.855-.943a.077.077 0 0 1-.008-.128c.125-.093.25-.19.369-.287a.074.074 0 0 1 .076-.01c3.89 1.77 8.106 1.77 11.954 0a.074.074 0 0 1 .076.01c.12.098.245.194.369.287a.077.077 0 0 1-.007.128c-.573.365-1.198.694-1.855.943a.076.076 0 0 0-.041.106c.353.699.764 1.364 1.225 1.994a.076.076 0 0 0 .084.028c1.689-.517 3.397-1.308 5.147-2.597a.077.077 0 0 0 .032-.057c.504-4.780-.838-8.94-3.549-12.636a.061.061 0 0 0-.031-.028zM8.02 15.33c-.999 0-1.822-.922-1.822-2.05 0-1.127.823-2.05 1.822-2.05.999 0 1.823.923 1.823 2.05 0 1.127-.823 2.05-1.823 2.05zm7.984 0c-.999 0-1.822-.922-1.822-2.05 0-1.127.823-2.05 1.822-2.05.999 0 1.823.923 1.823 2.05 0 1.127-.824 2.05-1.823 2.05z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/CrocoCrocsWorld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-500 hover:border-blue-300 hover:bg-blue-500/20 transition-all duration-300"
                  title="Follow on X"
                >
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.635L9.5 15.66 3.924 21.75H.645l7.73-8.835L.645 2.25h6.974l4.557 6.017L17.48 2.25h.764zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ===== NFT PREVIEW SECTION ===== */}
      <section className="relative py-20 px-4 bg-black overflow-hidden" id="preview">
        <Stars count={100} />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-white text-5xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.05em" }}
            >
              NFT PREVIEW
            </h2>
            <p className="text-gray-400">Check out some of our amazing CrocoCrocs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - 1/1 Unique */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-purple-500 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
              <img src={ASSETS.unique02} alt="1/1 Unique" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-sm font-bold text-green-400">1/1 UNIQUE</div>
              </div>
            </div>

            {/* Card 2 - Generative (Center) */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-green-400 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50 md:scale-105">
              <img src={ASSETS.crocoAnim} alt="Generative" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-sm font-bold text-green-400">GENERATIVE</div>
              </div>
            </div>

            {/* Card 3 - 1/1 Unique */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-purple-500 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
              <img src={ASSETS.uniqueLava} alt="1/1 Unique" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-sm font-bold text-green-400">1/1 UNIQUE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COLLECTION SECTION ===== */}
      <section className="py-20 px-4 bg-black overflow-hidden">
        <Stars count={100} />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-white text-5xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.05em" }}
            >
              COLLECTION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-6 border border-purple-500 hover:border-green-400 transition-all">
              <h3 className="text-xl font-bold text-green-400 mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
                🎁 Free Mint
              </h3>
              <p className="text-gray-300 text-sm">100% free mint for whitelist members. Only the network gas fee applies.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-6 border border-purple-500 hover:border-green-400 transition-all">
              <h3 className="text-xl font-bold text-green-400 mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
                📦 Fixed Supply
              </h3>
              <p className="text-gray-300 text-sm">Only 7,777 Crocos will ever exist. No more will be created.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-6 border border-purple-500 hover:border-green-400 transition-all">
              <h3 className="text-xl font-bold text-green-400 mb-3" style={{ fontFamily: "'Fredoka One', cursive" }}>
                🦎 1/1 Uniques
              </h3>
              <p className="text-gray-300 text-sm">A collection of 7,777 Crocos, including 18 completely unique 1/1 NFTs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LORE SECTION ===== */}
      <section className="py-20 px-4 bg-black overflow-hidden">
        <Stars count={100} />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-white text-5xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.05em" }}
            >
              LORE
            </h2>
            <p className="text-gray-400">The story behind the CrocoCrocs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden border-2 border-purple-500 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
              <img src={ASSETS.uniqueLava} alt="Lore" className="w-full h-96 object-cover" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-3xl font-bold text-purple-300 mb-4"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  The Awakening
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  No one knows exactly when he emerged. Some say he is a fragment of the Forgotten Swamp's own consciousness… others believe he was born as a side effect of the Black Croco's presence.
                </p>
              </div>

              <div>
                <h3
                  className="text-3xl font-bold text-green-300 mb-4"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  Your Journey
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Every CrocoCroc is a gateway to possibility. As you join our community, you become part of something
                  greater than yourself. You become a keeper of the digital heritage, a pioneer of the new age, a legend
                  in the making.
                </p>
              </div>
            </div>
          </div>

          {/* Button to view all 18 1/1 lore */}
          <div className="mt-12 text-center">
            <a
              href="/lore-gallery"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:shadow-purple-500/50 active:scale-95"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.05em" }}
            >
              ✨ EXPLORE THE 18 1/1 LEGENDS ✨
            </a>
          </div>
        </div>
      </section>

      {/* ===== AIRDROP SECTION ===== */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <Stars count={100} />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-white text-5xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.05em" }}
            >
              AIRDROP REWARDS
            </h2>
            <p className="text-gray-400 text-lg">Earn rewards by holding CroCrocs NFTs</p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_iCgeHv_image_ad0851b8.png"
              alt="CrocoCrocs Airdrop: Rewards & Uses"
              className="w-full max-w-4xl rounded-2xl border-2 border-purple-500 shadow-lg shadow-purple-500/50"
            />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative pt-8 pb-6 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${ASSETS.crococrocsLogo})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="text-center py-12">
            <p className="text-gray-400 text-sm font-semibold mb-8">
              © 2025 CroCoCrocs. All rights reserved.🐊
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Nunito', sans-serif;
        }
      `}</style>
    </div>
  );
}
