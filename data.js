// ============================================
// SAMA HAIR GLOW — Catalogue produits
// Site 100% statique : les produits sont définis ici directement,
// il n'y a plus besoin d'un serveur/backend pour les servir.
// ============================================

const CATEGORIES = [
  { id: "huiles", nom: "Huiles capillaires", image: "huile.jpeg" },
  { id: "voiles", nom: "Voiles", image: "voiles.jpeg" }
];

const PRODUCTS = [
  {
    id: "hg-01",
    nom: "Huile Croissance Ricin & Coco",
    categorie: "huiles",
    prix: 3500,
    image: "huile.jpeg",
    tag: "Best-seller",
    description: "Un mélange nourrissant à base d'huile de ricin et de coco qui stimule la pousse et renforce les cheveux fragiles dès les premières utilisations."
  },
  {
    id: "hg-00",
    nom: "Huile Incroyable",
    categorie: "huiles",
    prix: 3500,
    image: "huile1.jpeg",
    description: "Formule polyvalente qui hydrate en profondeur et redonne de l'éclat aux cheveux ternes et abîmés."
  },
  {
    id: "hg-02",
    nom: "Huile Brillance Argan Pure",
    categorie: "huiles",
    prix: 3500,
    image: "huile2.jpeg",
    tag: "Best-seller",
    description: "L'huile d'argan pure qui illumine la fibre capillaire et lisse les pointes fourchues."
  },
  {
    id: "hg-03",
    nom: "Sérum Fortifiant Nigelle",
    categorie: "huiles",
    prix: 3500,
    image: "HUILLe.jpeg",
    description: "Un sérum concentré en graine de nigelle pour fortifier les racines et limiter la chute."
  },
  {
    id: "hg-04",
    nom: "A partir de 12000 ",
    categorie: "voiles",
    prix: 12000,
    image: "a.jpeg",
    description: "Notre huile signature, légère et non grasse, pour un entretien quotidien tout en douceur."
  },
  {
    id: "hg-05",
    nom: "Voile sirk",
    categorie: "voiles",
    prix: 6000,
    image: "ab.jpeg",
    tag: "Nouveau",
    description: "Voile en soie douce et légère, idéal pour protéger les cheveux la nuit ou pour un look élégant au quotidien. ."
  },
  {
    id: "hg-06",
    nom: "Huile Glow Multi-Usage Hydrate",
    categorie: "huiles",
    prix: 2500,
    image: "abc.jpeg",
    description: "Version hydratante de notre huile Glow, idéale pour les cheveux secs et déshydratés."
  },
  {
    id: "hg-07",
    nom: "Huile Anti-Casse Avocat",
    categorie: "huiles",
    prix: 2500,
    image: "abcd.jpeg",
    description: "Enrichie en avocat, cette huile limite la casse et redonne souplesse et résistance aux cheveux."
  },
  {
    id: "vl-01",
    nom: "Voile Sirk",
    categorie: "voiles",
    prix: 6000,
    image: "c.jpeg",
    tag: "Best-seller",
    description: "Voile en soie douce et légère, idéal pour protéger les cheveux la nuit ou pour un look élégant au quotidien."
  },
  {
    id: "vl-02",
    nom: "Voile Sirk",
    categorie: "voiles",
    prix: 6000,
    image: "cc.jpeg",
    description: " disponible en plusieurs coloris."
  },
  {
    id: "vl-03",
    nom: "Voile Jersey",
    categorie: "voiles",
    prix: 8000,
    image: "jersey.jpeg",
    description: "Voile en jersey extensible et confortable, parfait pour un port toute la journée."
  },
  {
    id: "vl-04",
    nom: "Voile Jersey",
    categorie: "voiles",
    prix: 8000,
    image: "jersey1.jpeg",
    description: "Voile en jersey doux au toucher, facile à nouer et à assortir."
  },
  {
    id: "vl-05",
    nom: "Voile Jersey",
    categorie: "voiles",
    prix: 8000,
    image: "jersey liquide2.jpeg",
    tag: "Nouveau",
    description: "Voile en jersey fluide, tombant parfaitement pour une allure raffinée."
  },
  {
    id: "vl-06",
    nom: "Voile Diaz",
    categorie: "voiles",
    prix: 5000,
    image: "diaz.jpeg",
    description: "Voile Diaz léger, respirant, pour un confort optimal même en journée chaude."
  },
  {
    id: "vl-07",
    nom: "Voile Diaz",
    categorie: "voiles",
    prix: 5000,
    image: "voilediaz.jpeg",
    description: "Voile Diaz disponible en plusieurs teintes, tissu doux et agréable à porter."
  },
  {
    id: "vl-08",
    nom: "Voile Modal",
    categorie: "voiles",
    prix: 6000,
    image: "modal.jpeg",
    description: "Voile en modal, matière souple et fluide qui s'adapte à toutes les tenues."
  },
  {
    id: "vl-09",
    nom: "Voile Modal",
    categorie: "voiles",
    prix: 6000,
    image: "modale.jpeg",
    description: "Voile en modal, confortable et facile d'entretien au quotidien."
  }
];
