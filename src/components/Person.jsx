import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { photos } from "../data/photos";

const Person = () => {
  const { id } = useParams();

  const person = photos.find((p) => String(p.id) === String(id));

  // Map certain grid ids to alternative images in `individuel` (shuffled mapping).
  // You asked "pas dans l'ordre" — we map each grid id to a different individuel image.
  const individuelMap = {
    '1': '1',
    // id 2 should map to both 11 and 9 — store as an array and pick one when rendering
    '2': ['11', '9'],
    '3': '1',
    '4': '2',
    '5': '3',
    '6': '4',
  '7': ['5', '12'],
    '8': '6',
    '9': '7',
    '10': '8',
    '11': '10',
  };

  // Resolve mapping: allow single id or array of ids. If array, show all images.
  let altIds = individuelMap[String(id)];
  if (!altIds) altIds = null;
  if (altIds && !Array.isArray(altIds)) {
    altIds = [String(altIds)];
  }

  // Build display URLs: either the person's src or the individuel images
  let displaySrcs = [];
  if (altIds && altIds.length > 0) {
    displaySrcs = altIds.map((a) => new URL(`../assets/photos/individuel/${a}.jpg`, import.meta.url).href);
  } else if (person?.src) {
    displaySrcs = [person.src];
  }
  // Optional metadata for individuel images (override name/message when an individuel image is shown)
  const individuelMeta = {
    '1': {
      name: 'NOUROU Malick Cherubin',
      message: `« Bienvenue dans le monde merveilleux de la philosophie, cher filleul ! Que tes réflexions soient profondes, tes questionnements stimulants et tes découvertes intellectuelles nombreuses. Je suis ravi de partager ce chemin épistémique avec toi ! »`,
    },
    '2': {
      name: 'Sr MALI Marie Christine',
      message: `« Espérance »`,
    },

    '3': {
      name: 'NGOUAMBE CHRIST MARIE URIELLE',
      message: `« Réfléchis bien, persévère et réussis toujours »`,
    },

    '4': {
      name: 'NDUWIMANA Céline ',
      message: `« Ooooh, quelle  joie »`,
    },

     '5': {
      name: 'KAPKO Dossou Jean-Eudes ',
      message: `« Le chemin de la connaissance est exigeant, mais chaque effort nourrit ton esprit et ton âme. Garde la passion d’apprendre et le courage de questionner. »`,
    },

    '6': {
      name: 'BILONG Justin ',
      message: `« Notre intellect a pour but de rechercher la vérité »`,
    },

    '7': {
      name: 'BALMA Etienne ',
      message: `« Bienvenue à l’UCAC ! Je vous encourage à persévérer, à vous épanouir dans vos études et à faire preuve de curiosité intellectuelle. Ensemble, nous allons explorer les idées qui nous animent. »`,
    },
    '8': {
      name: 'BIDOUA Brigitte Dorcas',
      message: `« Accueillir la curiosité, cultiver la rigueur et partager la bienveillance : voilà ce que je souhaite pour chacun·e d'entre vous. Que votre parcours à l'UCAC soit riche en découvertes et en rencontres. »`,
    },

    '9': {
      name: 'ZAZA Paul ',
      message: `« Penser, c’est déjà agir. Que ta pensée soit libre, critique et porteuse de lumière. Je te souhaite un parcours d’études riche en découvertes et en émerveillement intellectuel. »`,
    },

    '10': {
      name: 'OLLOY Yann Bernard ',
      message: `«  Bienvenue dans cette belle aventure philosophique ! Puisses-tu toujours chercher avec rigueur. Courage et persévérance ! »`,
    },

    '11': {
      name: 'MIAKOUKANA Elohim ',
      message: `« Bienvenue à l'UCAC, bienvenue en faculté de philosophie, bienvenue dans ce Voyage épistémique. Merci pour la confiance, pour ta volonté et pour ton implication dans ce Voyage épistémique. Bon vent et bon courage. »`,
    },
    '12': {
      name: 'RAOUL Olivier',
      message: `« Toujours questionner, toujours apprendre. Mon souhait est que vous trouviez dans l'étude de la philosophie les outils pour penser librement et agir avec responsabilité. »`,
    },
  };

  // When multiple individuel images exist, allow selecting which one to show details for
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Determine the currently selected individuel id (if any)
  const selectedAltId = altIds && altIds.length > 0 ? String(altIds[Math.min(selectedIdx, altIds.length - 1)]) : null;
  const altMeta = selectedAltId ? individuelMeta[selectedAltId] : null;
  const displayName = altMeta?.name ?? person?.name;
  const displayMessage = altMeta?.message ?? person?.message;

  

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
          <h2 className="text-2xl font-semibold">Personne non trouvée</h2>
          <p className="mt-2 text-gray-500">L'identifiant {id} n'existe pas.</p>
          <Link
            to="/"
            aria-label="Retour à la galerie"
            className="inline-flex items-center gap-2 mt-4 px-3 py-2 rounded-md bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="text-sm font-medium">Retour à la galerie</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-start justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <div className="max-w-5xl mx-auto p-4">
        <Link
          to="/"
          aria-label="Retour à la galerie"
          className="inline-flex items-center gap-2 mb-4 px-3 py-2 rounded-md bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="text-sm font-medium">Retour à la galerie</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: Image */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="w-full h-96 md:h-[32rem] bg-gray-100 flex items-center justify-center">
                {displaySrcs.length === 1 ? (
                  <img src={displaySrcs[0]} alt={displayName} className="max-h-full w-full object-contain p-4" />
                ) : (
                  <div className="w-full p-4 flex flex-col items-center">
                    {/* Large selected image */}
                    <div className="w-full flex items-center justify-center bg-white rounded-lg p-4 shadow-sm mb-4">
                      <img
                        src={displaySrcs[Math.min(selectedIdx, displaySrcs.length - 1)]}
                        alt={`Sélection ${Math.min(selectedIdx, displaySrcs.length - 1) + 1}`}
                        className="w-full max-h-72 md:max-h-[28rem] object-contain rounded"
                      />
                    </div>

                    {/* Thumbnails row */}
                    <div className="w-full flex gap-3 items-center justify-center flex-wrap">
                      {displaySrcs.map((srcUrl, idx) => {
                        const isSelected = idx === selectedIdx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedIdx(idx)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedIdx(idx); }}
                            className={`inline-flex items-center justify-center rounded overflow-hidden bg-white ${isSelected ? 'ring-2 ring-indigo-300 scale-105' : 'border border-gray-100'} focus:outline-none`}
                            aria-pressed={isSelected}
                            aria-label={`Afficher l'image ${idx + 1}`}
                          >
                            <img src={srcUrl} alt={`Vignette ${idx + 1}`} className="w-20 h-20 object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
          </div>

          {/* Right: Details */}
                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg shadow p-6 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      {/* Show the currently selected person's name (or the person name if single) */}
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{displayName}</h1>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Message</h2>
                    <div className="mt-3">
                      {/* Show only the message for the selected image (or the person's message) */}
                      <div className="mt-3 p-5 rounded-lg bg-white border border-gray-200 shadow-sm text-gray-800 leading-relaxed">
                        <h3 className="text-lg font-semibold text-gray-800">{displayName}</h3>
                        <div className="mt-2 text-sm whitespace-pre-line">{displayMessage ?? 'Aucun message disponible.'}</div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
