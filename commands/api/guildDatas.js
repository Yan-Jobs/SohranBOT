module.exports = [
  {
    name: "clutch",
    description: "Ce clutch sera t-il inattendue ?"
  },
  {
    name: "play",
    description: "Joue une musique !",
    options: [
      {
        name: "musique",
        description:
          "Le titre de la musique que tu veux écouter (lien youtube).",
        type: 3,
        required: true
      }
    ]
  }
];
