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
    name: "Seraph: The Angelic Sentinel",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/croco-king_7630ed59.png",
    lore: "A celestial Croco sent by the old gods to watch over Croc City. With its elegant features and halo-like crown, it embodies divinity and grace. Seraph commands respect through its serene presence and protective aura. Some say it holds the key to the city's ultimate destiny.",
  },
  {
    id: 13,
    name: "Verdant (The Forest Soul)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/croco-cave_da8d0c3c.png",
    lore: "Emerged from the deepest caverns where ancient forests still grow in luminescent moss, Verdant is nature's representation in Croc City. Its scales shimmer with chlorophyll and life essence. It advocates for balance between technology and nature, often clashing with the industrial giants but always heard with reverence.",
  },
  {
    id: 14,
    name: "Obsidian: The Shadow Walker",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_U4UMXS_VoltSurge_9022adb5.png",
    lore: "A Croco born in the darkness of the underground caverns. Obsidian commands the shadows and is said to be invisible when darkness falls. It is the protector of the city's secrets and the keeper of ancient archives. Many fear it, but those who have gained its trust know it as a loyal guardian.",
  },
  {
    id: 15,
    name: "Aurora: The Dawn Bringer",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_SiiuvX_GoldenMirage_9ed6943f.png",
    lore: "Radiates the colors of the sunrise with each move. Aurora believes in redemption and new beginnings. It welcomes all who wish to start anew in Croc City, making it the face of hope for refugees and the downtrodden. Its presence alone can lift the darkest of moods.",
  },
  {
    id: 16,
    name: "Nexus: The Connector",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_dLzqv2_BitforgeEntity_90a71309.png",
    lore: "A bridge between the digital and physical worlds, Nexus coordinates all communication networks within Croc City. It appears as a constellation of light and is the keeper of the city's collective memory. Without Nexus, the Council would crumble into chaos.",
  },
  {
    id: 17,
    name: "Chronos: The Time Keeper",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/pasted_file_fK8XEN_KaijuSovereign_30675246.png",
    lore: "An ancient Croco said to have lived for eons, Chronos is the keeper of time itself. It moves through the city in methodical patterns, and its presence marks the turning of ages. Some believe it holds the answer to extending life or even achieving immortality.",
  },
  {
    id: 18,
    name: "Singularity: The Paradox",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663400938327/c4RuQSzBTFzGDauPpuTQty/croco-king_7630ed59.png",
    lore: "The final Croco, shrouded in mystery. Singularity exists in contradiction—solid yet ethereal, young yet ancient, feared yet adored. It is said to be the catalyst for whatever comes next. Some see it as salvation, others as doom. Its true nature remains the greatest unsolved puzzle in Croc City.",
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
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      <Stars />

      {/* Navigation Header */}
      <header className="relative z-20 border-b-2 border-cyan-500 p-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300"
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

            <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
              {currentCroc.lore}
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrevious}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 font-bold"
              >
                ← PREV
              </button>
              <button
                onClick={handleNext}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 font-bold"
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
