import { Link, useParams } from "react-router-dom";
import { photos } from "../data/photos";

const Person = () => {
  const { id } = useParams();

  const person = photos.find((p) => String(p.id) === String(id));

  // Map certain grid ids to alternative images in `individuel` (shuffled mapping).
  // You asked "pas dans l'ordre" — we map each grid id to a different individuel image.
  const individuelMap = {
    '1': '1',
    '2': '11',
    '3': '1',
    '4': '2',
    '5': '3',
    '6': '4',
    '7': '5',
    '8': '6',
    '9': '7',
    '10': '9',
    '11': '10',
  };

  let displaySrc = person?.src;
  const altId = individuelMap[String(id)];
  if (altId) {
    displaySrc = new URL(`../assets/photos/individuel/${altId}.jpg`, import.meta.url).href;
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
  };

  const altMeta = altId ? individuelMeta[altId] : null;
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
              <img src={displaySrc} alt={displayName} className="max-h-full w-full object-contain p-4" />
            </div>
          </div>

          {/* Right: Details */}
                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-lg shadow p-6 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{displayName}</h1>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Message</h2>
                    <div className="mt-3 p-5 rounded-lg bg-gray-50 border border-gray-100 text-gray-800 leading-relaxed">
                      {displayMessage ? (
                        <p className="whitespace-pre-line text-base">{displayMessage}</p>
                      ) : (
                        <p className="text-gray-500">Aucun message disponible.</p>
                      )}
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
