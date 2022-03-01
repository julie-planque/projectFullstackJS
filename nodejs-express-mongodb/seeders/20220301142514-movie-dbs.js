'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('movie-dbs', [
      {
          title:  `L'Âge de glace`,
          actor: `Simon Pegg, Aaron Harris, Justina Machado`,
          productors: `Chris Wedge`,
          description: `Environ 20.000 ans avant notre ère, un étrange animal déclenche inopinément une nouvelle glaciation. Tandis que les animaux, affolés, fuient les vents de glace, Manny, un mammouth solitaire, part à contre-sens. Il est bientôt flanqué d'un compagnon.`,
          date: `2002-07-26T01:13:57.000Z`,
          published: true,
          url: `https://www.critikat.com/wp-content/uploads/fly-images/46634/arton5806-1450x800-c.jpg`,
          createdAt: `NOW()`,
          updatedAt: `NOW()`,
     },
     {
      title: `L'Arme fatale`,
      actor: `Mel Gibson, Danny Glover`,
      productors: `Richard Donner`,
      description: `Robert Murtaugh, policier noir quinquagénaire, marié et père de famille, compte bien atteindre paisiblement la retraite. Mais voici qu'on lui confie comme coéquipier Riggs, un jeune flic suicidaire qui vient de perdre sa femme et manie son arme comme un cow-boy. L'un et l'autre, anciens du Vietnam, vont s'opposer à un gang de trafiquants de drogue dirigé par une organisation fasciste...`,
      date: `1987-08-05T01:15:57.000Z`,
      published: true,
      url: `https://www.bepolar.fr/IMG/arton8966.jpg`,
      createdAt: `NOW()`,
      updatedAt: `NOW()`,
 }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movie-dbs', null, {});
  }
};
