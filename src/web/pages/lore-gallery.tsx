import React, { useState } from "react";
import { useLocation } from "wouter";

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

// Sample lore data for 18 1/1 CroCrocs
const CROCS_LORE = [
  {
    id: 1,
    name: "Ignis: The Magma Forger",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_VGJzO8_InfernoTitan_5375eb2a.png",
    lore: "Ignis, the eldest brother, led his triplets into a dive toward the thermal core to divert a lava flow that threatened their village. By absorbing the full force of the raw heat, his body transformed into solid, incandescent volcanic rock, making him the living pillar of the rifts.\n\nToday, he is the master blacksmith of Croc City, using the heat that emanates from his own hands to forge indestructible metals. Without Ignis's strength to sustain the infrastructure, the city's industry would collapse into the cold.",
  },
  {
    id: 2,
    name: "The Vindicator: The Bronze Avenger",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_hh3D5p_MechaEnforcer_8c1ce26e.png",
    lore: "Once the respected Captain of the Guard in Gator-Grip City, he was betrayed and left for dead after a missile strike devastated his district. Refusing to accept injustice, his will to live burned so intensely that he allowed underground scientists to rebuild his body using steam-powered (clockwork) technology and copper. He no longer has vital organs only a furnace fueled by his rage against crime. He roams the ruins of Croc City as a solitary judge. To the population of 7,777, he is an urban legend: the cop who never sleeps and cannot be bribed, for Zyrax's gold holds no value to a man made of gears and honor.",
  },
  {
    id: 3,
    name: "Ghost (The Keeper of Balance)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_uI0KSE_SpectralWhisper_3522e699.png",
    lore: "Ghost is what remains of a Croco fragmented between dimensions after attempting to master the dark matter of a meteor. As a visual anomaly composed of bluish essence and exposed bones, he belongs neither to life nor to death. His chains act as a spiritual anchor that sustains the very reality of Croc City. Acting as the Guardian of Balance, his presence is felt through sudden drops in temperature and the flickering of neon lights. He is the only one capable of containing the fury of the Black Croco and holds the respect of the Vindicator, having already witnessed the end of all things.",
  },
  {
    id: 4,
    name: "The Golden Charlatan (The Smile of Greed)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_SiiuvX_GoldenMirage_9ed6943f.png",
    lore: "A Croco born without scales who decided to cover his body in cheap golden paint to pretend he belonged to the lineage of Zyrax. He lives off scams and empty promises. He sells fragments of the supergiant star that are, in reality, just colored glass. Despite being a trickster, the population loves him because his laughter is contagious, and he brings lightness to the harsh life in the swamp.",
  },
  {
    id: 5,
    name: "Glitch Pixel (The System Glitch)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_dLzqv2_BitforgeEntity_90a71309.png",
    lore: "Born from a processing error when the Seeding AI attempted to digitize the consciousness of an elderly crocodile. He is not entirely physical. He flickers between resolutions and can phase through data walls. Pixel is the city's informant; he listens to conversations through electrical circuits and knows secrets that not even the Kings are aware of.",
  },
  {
    id: 6,
    name: "Kaiju-Saur (The Legend Fanatic)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_fK8XEN_KaijuSovereign_30675246.png",
    lore: "Obsessed with tales of giant monsters that ruled the Earth before the crocodiles, he built an armor made of Godzilla-like scales. He declared himself the guardian of the city gates. Though intimidating with his crown and neon manes, he is the greatest enthusiast of ancient history. He leads parades that remind the Crocos that they descend from giants.",
  },
  {
    id: 7,
    name: "Zyrax: The Golden King of the Forgotten Swamp",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_Ro9fZE_GildedApex_14fac4df.png",
    lore: "Born into a royal lineage dating back to the earliest days of the world, Zyrax never desired the crown. He preferred the calm of shallow waters over the weight of responsibility. On the day of his coronation, something went wrong or perhaps too right. As he touched the ancestral scepter, a dormant magic hidden deep within the Forgotten Swamp responded to his royal blood, transmuting every cell of his body into pure, living gold. Now, Zyrax is indestructible and eternal, yet trapped in a golden prison. He can no longer feel the touch of water or the warmth of the sun the same way. He rules with deep sorrow, knowing that his body is the most coveted treasure in Croc City, forcing him to live in isolation to prevent the greedy from trying to melt his reign.",
  },
  {
    id: 8,
    name: "The Pistachio Cultivator (The Provider)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_TweYmx_PistachioPrime_2e4bef78.png",
    lore: "While most fought over Gatorita, he looked at the barren land and saw potential. He discovered ancient seeds stored within a submerged vault. He wears armor crafted from pistachio shells reinforced with polymers. In Croc City, he is responsible for feeding the 7,777. Without his hydroponic orchards, civilization would collapse within days. He is the symbol of patience and of life emerging from chaos.",
  },
  {
    id: 9,
    name: "Prismatic Ruby (The Jewel of the Core)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_dWx3xq_RubyDominus_b0fe508f.png",
    lore: "Forged under the same pressure that created the Crystal Croco, but within a mineral vein rich in iron and passion. Ruby is the guardian of aesthetics and value. Her ruby scales reflect light aggressively, blinding her enemies. She oversees the city's gemstone economy and is the only one whom Zyrax trusts to enter his chambers.",
  },
  {
    id: 10,
    name: "Ceron: The Wax Shaper",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_PSPfr4_BurningMallow_78163001.png",
    lore: "The youngest of the triplets, Ceron was caught between Ignis's heat and the resin of the ancestral trees melted by Florion during the disaster. This alchemical mixture transformed his molecular structure into a malleable substance that never fully solidifies, resembling a living wax. He acts as the chemical mediator and sentinel of his brothers, using his adaptable body to infiltrate cracks and seal dangerous leaks. With his biological sensors, Ceron monitors the city's thermal stability, acting where raw fire would be far too destructive.",
  },
  {
    id: 11,
    name: "The Static Conductor (The Living Generator)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_U4UMXS_VoltSurge_9022adb5.png",
    lore: "Hit by a lightning bolt summoned by the ancient gods to stop a cosmic meteor, her body became a living generator capable of producing and channeling electricity. She powers most of Croc City's grid and is the voice through which the Council makes announcements. Her neon exterior pulses in rhythm with the city's heartbeat.",
  },
  {
    id: 12,
    name: "Mindrift Croco: The Whisper of the Swamp",
    image: "https://i.ibb.co/FbdBJTL9/image.png",
    lore: "No one knows exactly when he emerged. Some say he is a fragment of the Forgotten Swamp’s own consciousness… others believe he was born as a side effect of the Black Croco’s presence. His eyes do not see the world they rewrite those who look into them. Mindrift Croco exists between reality and hallucination, spreading invisible mental waves through the water. Any Croco who stays too close for too long begins to see memories that are not theirs… or futures that have not yet happened.",
  },
  {
    id: 13,
    name: "The Ancestral Skeleton (The Lament of the Past)",
    image: "https://i.ibb.co/LhRwrv2M/image.png",
    lore: "An ancient spirit that refuses to leave the physical world until the Forgotten Swamp is restored. He is the only one who remembers what the world was like before the flood. He weeps tears of pure water the rarest substance in Croc City. His presence is a constant reminder that everything that is built will one day return to the earth.",
  },
  {
    id: 14,
    name: "The Guardian of Volcanic Flora",
    image: "https://i.ibb.co/7JLsXWZx/image.png",
    lore: "Florion attempted to use his connection with nature to seal the cracks caused by the eruption, but ended up merging with the prehistoric seeds he carried under the extreme heat. The lava within his body transformed into a nourishing sap, allowing rare plants to grow across his back in a unique symbiosis. He now cultivates the thermal gardens of Croc City, producing oxygen and medicine at temperatures that would incinerate any other form of life. His venomous thorns ensure that no one dares to steal the botanical treasure he protects.",
  },
  {
    id: 15,
    name: "Disco Funk (The Rhythm of Croc City)",
    image: "https://i.ibb.co/QFsS74Lb/image.png",
    lore: "A former miner who traded his pickaxe for a space synthesizer. He believes music is the only way to maintain sanity in the swamp. With his impeccable style and glasses that reflect entire galaxies, he rules the parties at the Night Sludge. His gold chain isn’t just for show, it acts as a bass conductor capable of making the city’s ground vibrate, driving away wild predators with the power of funk.",
  },
  {
    id: 16,
    name: "The Electric Seeding AI: The Architect of the Future",
    image: "https://i.ibb.co/prXDDNf8/image.png",
    lore: "An ancient artificial intelligence that awakened in a barren world and concluded that destruction was merely fertilizer for a new creation. This Croco is the perfect fusion of biology and electricity. He believes that flesh is weak and that the future of Croc City lies in total connectivity. He initiated the Electric Seeding, sending pulses of energy through the waters to accelerate the evolution of all other inhabitants.",
  },
  {
    id: 17,
    name: "The Crystal Croco: The Nebula-Forged One",
    image: "https://i.ibb.co/9H39bgXt/image.png",
    lore: "While others came from the earth or the sludge, this being was forged in the heart of a gemstone nebula after the collapse of a supergiant star. He fell upon Croc City as a prism of pure light. The Crystal Croco embodies geometric perfection and absolute clarity. His diamond-like scales reflect the future, and his mind is so advanced that he perceives time as if it were the many facets of a jewel. He serves as both a spiritual and technological guide for Croc City’s elite. It was he who taught the crocodiles how to convert sunlight into pure energy, allowing the city to shine even through the darkest nights of the swamp.",
  },
  {
    id: 18,
    name: "The Black Croco: The Cosmic Essence",
    image: "https://i.ibb.co/RKjKZBg/image.png",
    lore: "Before Croc City even had a name, a black meteor tore through the sky and plunged into the heart of the swamp, bringing with it a shimmering corruption. He was not born, he emerged. The Black Croco is the embodiment of that dark matter from space. He is the first of the mutants, capable of blending into any shadow and manipulating the viscosity of the sludge around him. He does not speak. He observes. Some say he is the very consciousness of the swamp trying to understand its new inhabitants. He is seen as an omen: wherever the Black Croco appears, reality begins to bend and the Cosmic Sludge spreads.",
  },
];

export default function LoreGallery() {
  const [, navigate] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + CROCS_LORE.length) % CROCS_LORE.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CROCS_LORE.length);
  };

  const currentCroc = CROCS_LORE[currentIndex];

  return (
    <div 
      className="min-h-screen text-lime-300 font-mono relative overflow-hidden"
      style={{
        backgroundImage: "url('https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fu4ncudRtKXtDfEZO6QmRh%2FCaptura_de_tela_2026-04-21_150439_zVwGB-.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000"
      }}
    >

      {/* Navigation Header */}
      <header className="relative z-20 border-b-2 border-cyan-500 p-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-lime-300 transition-all duration-300"
        >
          ← BACK TO HOME
        </button>
        <h1 className="text-3xl md:text-4xl font-black" style={{ letterSpacing: "0.15em" }}>
          LORE GALLERY
        </h1>
        <div className="w-24" /> {/* Spacer for alignment */}
      </header>

      {/* Main Gallery */}
      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4">
        {/* Featured Croc */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image Side */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <img
                src={currentCroc.image}
                alt={currentCroc.name}
                className="w-full h-full object-cover rounded-xl border-4 border-purple-500 shadow-2xl shadow-purple-500/50"
              />
              <div className="absolute -bottom-4 -right-4 bg-purple-600 px-4 py-2 rounded-lg">
                <p className="text-sm font-bold">{currentIndex + 1} / 18</p>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-2" style={{ letterSpacing: "0.1em" }}>
                {currentCroc.name}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
            </div>

            <p className="text-lime-300 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
              {currentCroc.lore}
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrevious}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-lime-300 transition-all duration-300 flex items-center justify-center gap-2 font-bold"
              >
                ← PREV
              </button>
              <button
                onClick={handleNext}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-lime-300 transition-all duration-300 flex items-center justify-center gap-2 font-bold"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">ALL LEGENDS</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {CROCS_LORE.map((croc, idx) => (
              <button
                key={croc.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  idx === currentIndex
                    ? "border-purple-500 shadow-2xl shadow-purple-500/50 scale-105"
                    : "border-gray-600 hover:border-cyan-400"
                }`}
              >
                <img
                  src={croc.image}
                  alt={croc.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x200?text=${croc.id}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-center text-sm font-bold px-2">{croc.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
