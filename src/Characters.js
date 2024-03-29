const characters = [
  {
    id: 1,
    name: "Mario",
    alt: "Mario",
    imageUrl: "https://ssb.wiki.gallery/images/6/60/Mario_SSBM.jpg",
    speed: 1.76,
    weight: 98,
    jump_height: 36.33,
    grab_range: 12.0,
    cuteness: 7,
    trollability: 1,
    background:
      "Mario made his debut in the arcade game Donkey Kong. He wore a blue shirt and red overalls--the opposite of his current outfit.",
  },
  {
    id: 2,
    name: "Luigi",
    alt: "Luigi",
    imageUrl: "https://ssb.wiki.gallery/images/6/65/Luigi_SSBM.jpg",
    speed: 1.65,
    weight: 97,
    jump_height: 44,
    grab_range: 29.8, 
    cuteness: 10,
    trollability: 6,
    background:
      "Luigi made his debut in the 1983 arcade classic Mario Bros. At the time, he wore a white shirt and cap with green overalls.",
  },
  {
    id: 3,
    name: "Yoshi",
    alt: "Yoshi",
    imageUrl: "https://ssb.wiki.gallery/images/0/0a/Yoshi_SSBM.jpg",
    speed: 2.046,
    weight: 104,
    jump_height: 36.09,
    grab_range: 26.0,
    cuteness: 10,
    trollability: 2,
    background: "Yoshi has kept busy appearing in many titles since debuting in Super Mario World. Yoshi can flutter jump and has a long tongue that can gobble up apples and enemies. Yoshis can be a variety of colors.",
  },
  {
    id: 4,
    name: "DonkeyKong",
    alt: "DonkeyKong",
    imageUrl: "https://ssb.wiki.gallery/images/4/4e/Donkey_Kong_SSBM.jpg",
    speed: 1.873,
    weight: 127,
    jump_height: 34,
    grab_range: 19.5,
    cuteness: 7,
    trollability: 3,
    background:
      "Donkey Kong first wore his signature red necktie with the initials DK in Donkey Kong Country. In that game, he sets off on an adventure to recover his banana hoard that was stolen by King K. Rool.",
  },
  {
    id: 5,
    name: "Link",
    alt: "Link",
    imageUrl: "https://ssb.wiki.gallery/images/1/1f/Link_SSBM.jpg",
    speed: 1.534,
    weight: 104,
    jump_height: 27.8,
    grab_range: 19.5,
    cuteness: 6,
    trollability: 2,
    background: "Link first appeared in The Legend of Zelda on the NES. Even back then, he had a wide inventory of items, including the Bow, Boomerang, and Bombs."
  },
  {
    id: 6,
    name: "Samus",
    alt: "Samus",
    imageUrl: "https://ssb.wiki.gallery/images/f/fb/Samus_SSBM.jpg",
    speed: 1.654,
    weight: 108,
    jump_height: 37,
    grab_range: 42.2,
    cuteness: 5,
    trollability: 7,
    background: "Samus Aran made her debut in the NES title Metroid, released in North America in 1987. It is a science-fiction action-adventure game with a focus on exploration."
  },
  {
    id: 7,
    name: "Kirby",
    alt: "Kirby",
    imageUrl: "https://ssb.wiki.gallery/images/e/e6/Kirby_SSBM.jpg",
    speed: 1.727,
    weight: 79,
    jump_height: 25.37,
    grab_range: 12.5,
    cuteness: 10,
    trollability: 8,
    background: "Kirby made his debut in 1992 in Kirby's Dream Land for the Game Boy. The goal of his journey was to recover stolen food from King Dedede."
  },
  {
    id: 8,
    name: "Fox",
    alt: "Fox",
    imageUrl: "https://ssb.wiki.gallery/images/b/bf/Fox_SSBM.jpg",
    speed: 2.402,
    weight: 77,
    jump_height: 35,
    grab_range: 11.0,
    cuteness: 5,
    trollability: 8,
    background: "Fox made his debut in 1993, in the SNES game Star Fox. In his fighter craft, the Arwing, he fought to take down the evil scientist Andross."
  },
  {
    id: 9,
    name: "Pikachu",
    alt: "Pikachu",
    imageUrl: "https://ssb.wiki.gallery/images/b/bf/Pikachu_SSBM.jpg",
    speed: 2.039,
    weight: 79,
    jump_height: 35.5,
    grab_range: 11.9,
    cuteness: 9,
    trollability: 10,
    background: "Pikachu debuted in Pokemon Red and Pokemon Blue for Game Boy. Consider yourself a very lucky Trainer if you catch one in Viridian Forest."
  },
  {
    id: 10,
    name: "Jigglypuff",
    alt: "Jigglypuff",
    imageUrl: "https://ssb.wiki.gallery/images/e/eb/Jigglypuff_SSBM.jpg",
    speed: 1.271,
    weight: 68,
    jump_height: 19.79,
    grab_range: 12.0,
    cuteness: 10,
    trollability: 8,
    background:
      "Jigglypuff has been singing its opponents to sleep in North America since its debut in the 1998 Game Boy games Pokemon Red and Pokemon Blue.",
  },
  {
    id: 11,
    name: "CaptainFalcon",
    alt: "CaptainFalcon",
    imageUrl: "https://ssb.wiki.gallery/images/7/77/Captain_Falcon_SSBM.jpg",
    speed: 2.552,
    weight: 104,
    jump_height: 37.31,
    grab_range: 13.0,
    cuteness: 4,
    trollability: 5,
    background:
      "Captain Falcon's first appearance was in the SNES launch title F-Zero, released in North America in 1991. You couldn't see him in the game itself, but he was in the manual.",
  },
  {
    id: 12,
    name: "Ness",
    alt: "Ness",
    imageUrl: "https://ssb.wiki.gallery/images/6/64/Ness_SSBM.jpg",
    speed: 1.609,
    weight: 94,
    jump_height: 34.48,
    grab_range: 12.0,
    cuteness: 8,
    trollability: 9,
    background:
      "Ness first appeared in the SNES title EarthBound, released in North America in 1995. He might look like your average kid, but he can use a variety of PSI powers. He's also got a younger sister.",
  },
  {
    id: 13,
    name: "Peach",
    alt: "Peach",
    imageUrl: "https://ssb.wiki.gallery/images/d/db/Peach_SSBM.jpg",
    speed: 1.595,
    weight: 89,
    jump_height: 30.03,
    grab_range: 12.0,
    cuteness: 9.3,
    trollability: 4,
    background: "Peach first appeared in Super Mario Bros., where she was known as Princess Toadstool. This was also the first of her many run-ins with Bowser..."
  },
  {
    id: 14,
    name: "Bowser",
    alt: "Bowser",
    imageUrl: "https://ssb.wiki.gallery/images/0/03/Bowser_SSBM.jpg",
    speed: 1.971,
    weight: 135,
    jump_height: 33,
    grab_range: 20.0,
    cuteness: 1,
    trollability: 5,
    background: "Mario's eternal rival, Bowser, debuted in Super Mario Bros. He appeared as the boss of every world, but they were all fake except for in World 8."
  },
  {
    id: 15,
    name: "DrMario",
    alt: "DrMario",
    imageUrl: "https://ssb.wiki.gallery/images/7/71/Dr._Mario_SSBM.jpg",
    speed: 1.398,
    weight: 98,
    jump_height: 30.881,
    grab_range: 12.0,
    cuteness: 6,
    trollability: 8,
    background: "Dr. Mario made his debut in 1990 in the puzzle game of the same name. He was developing vitamins to combat some nasty viruses."
  },
  {
    id: 16,
    name: "Zelda/Sheik",
    alt: "Zelda/Sheik",
    imageUrl: "https://ssb.wiki.gallery/images/4/4e/Zelda_SSBM.jpg",
    speed: 1.43,
    weight: 85,
    jump_height: 31.55,
    grab_range: 15.3,
    cuteness: 8,
    trollability: 7,
    background: "Zelda first appeared in the NES title The Legend of Zelda, released in North America in 1987. In that title, the evil Ganon kidnaps Zelda and steals the Triforce of Power."
  },
  {
    id: 17,
    name: "Ganondorf",
    alt: "Ganondorf",
    imageUrl: "https://ssb.wiki.gallery/images/2/27/Ganondorf_SSBM.jpg",
    speed: 1.34,
    weight: 118,
    jump_height: 25.49,
    grab_range: 14.0,
    cuteness: 10,
    trollability: 3,
    background: "He appears in The Legend of Zelda: Ocarina of Time as the king of the Gerudo. He pretends to pledge his loyalty to the King of Hyrule while plotting to make the kingdom his own."
  },
  {
    id: 18,
    name: "Young Link",
    alt: "Young Link",
    imageUrl: "https://ssb.wiki.gallery/images/6/67/Young_Link_SSBM.jpg",
    speed: 1.749,
    weight: 88,
    jump_height: 33.66,
    grab_range: 29.5,
    cuteness: 9,
    trollability: 8.5,
    background: "Young Link debuted in The Legend of Zelda: Ocarina of Time released in 1998. He lived in the Kokiri Forest, until the Great Deku Tree, guardian of the forest, informs him of danger approaching Hyrule."
  },
  {
    id: 19,
    name: "Falco",
    alt: "Falco",
    imageUrl: "https://ssb.wiki.gallery/images/1/17/Falco_SSBM.jpg",
    speed: 1.619,
    weight: 82,
    jump_height: 50.51,
    grab_range: 12,
    cuteness: 5,
    trollability: 7,
    background: "Falco debuted alongside Fox in the 1993 SNES title Star Fox. He may be hotheaded and a little cocky, but his skills are the real deal."
  },
  {
    id: 20,
    name: "Mewtwo",
    alt: "Mewtwo",
    imageUrl: "https://ssb.wiki.gallery/images/2/27/Mewtwo_SSBM.jpg",
    speed: 2.255,
    weight: 79,
    jump_height: 31.11,
    grab_range: 14.3,
    cuteness: 3,
    trollability: 5,
    background: "Mewtwo first appears in Pokemon Red and Blue. After the trainer comes out victorious in the Pokemon league, Mewtwo can be found in a cave on the outskirts of Cerulean City."
  },
  {
    name: "Pichu",
    alt: "Pichu",
    imageUrl: "https://ssb.wiki.gallery/images/2/2c/Pichu_SSBM.jpg",
    speed: 1.892,
    weight: 62,
    jump_height: 36.75,
    grab_range: 12,
    cuteness: 10,
    trollability: 8.5,
    background: "Pichu debuted in the Pokemon Gold and Silver, released in North America in 2000. If you leave two Pikachu or two Raichu of the opposite sex at the Daycare, Pichu can hatch from the Egg that is found."
  },
  {
    id: 22,
    name: "Marth",
    alt: "Marth",
    imageUrl: "https://ssb.wiki.gallery/images/d/dd/Marth_SSBM.jpg",
    speed: 1.964,
    weight: 90,
    jump_height: 33.66,
    grab_range: 14.5,
    cuteness: 5,
    trollability: 4,
    background: "Marth debuted in the first Fire Emblem game in 1990, but that game wasn't released in North America until the Nintendo DS remake in 2009."
  },
  {
    id: 23,
    name: "Roy",
    alt: "Roy",
    imageUrl: "https://ssb.wiki.gallery/images/f/fc/Roy_SSBM.jpg",
    speed: 2.145,
    weight: 95,
    jump_height: 30.97,
    grab_range: 14.2,
    cuteness: 6,
    trollability: 4,
    background: "Roy, known as the Young Lion, is the main protagonist of Fire Emblem: The Binding Blade. His father, Eliwood, was the main protagonist of the 2003 Game Boy Advance game, Fire Emblem."
  },
  {
    id: 24,
    name: "MrGameAndWatch",
    alt: "MrGameAndWatch",
    imageUrl:
      "https://ssb.wiki.gallery/images/d/d3/Mr._Game_%26_Watch_SSBM.jpg",
    speed: 1.679,
    weight: 75,
    jump_height: 27.51,
    grab_range: 12.5,
    cuteness: 2,
    trollability: 9,
    background: "Mr. Game & Watch first appeared in the early '80s in the Game & Watch handheld game series--predating even the NES and Game Boy!"
  },
];

export default characters;
