/** @type {import('tailwindcss').Config} */

const rem = num => ({ [num]: `${num / 16}rem` });

const typography = {
  fontSize: {
    ...rem(0),
    ...rem(6),
    ...rem(10),
    ...rem(11),
    ...rem(12),
    ...rem(13),
    ...rem(14),
    ...rem(15),
    ...rem(16),
    ...rem(18),
    ...rem(20),
    ...rem(24),
    ...rem(25),
    ...rem(26),
    ...rem(28),
    ...rem(30),
    ...rem(32),
    ...rem(34),
    ...rem(36),
    ...rem(38),
    ...rem(40),
    ...rem(45),
    ...rem(48),
    ...rem(50),
    ...rem(60),
    ...rem(67),
    ...rem(70),
    ...rem(76),
    ...rem(90),
    ...rem(100),
    ...rem(115),
    ...rem(120),
    ...rem(132),
    ...rem(140),
    ...rem(150),
    ...rem(180),
    ...rem(196),
    ...rem(210),
    ...rem(220),
    ...rem(270),
  },
  lineHeight: {
    1: 1,
    ...rem(11),
    ...rem(16),
    ...rem(18),
    ...rem(19),
    ...rem(20),
    ...rem(22),
    ...rem(24),
    ...rem(26),
    ...rem(28),
    ...rem(30),
    ...rem(38),
    ...rem(46),
    ...rem(48),
    ...rem(55),
    ...rem(60),
    ...rem(65),
    ...rem(70),
    ...rem(95),
    ...rem(115),
    ...rem(130),
    ...rem(132),
    ...rem(160),
    ...rem(180),
    ...rem(220),
    ...rem(235),
    ...rem(250),
    ...rem(270),
  },
};

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  theme: {
    ...typography,
    screens: {
      miniLandscape: "400px",
      phoneLandscape: "480px",
      phone: "640px",
      tablet: "769px",
      desktop: "1025px",
      laptop: "1280px",
      large: "1440px",
    },
    extend: {
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        22: "22px",
        32: "32px",
      },
      spacing: {
        px: "1px",
        0: "0",
        ...rem(1),
        ...rem(2),
        ...rem(3),
        ...rem(4),
        ...rem(5),
        ...rem(6),
        ...rem(7),
        ...rem(8),
        ...rem(9),
        ...rem(10),
        ...rem(12),
        ...rem(13),
        ...rem(14),
        ...rem(15),
        ...rem(16),
        ...rem(17),
        ...rem(18),
        ...rem(19),
        ...rem(20),
        ...rem(22),
        ...rem(23),
        ...rem(24),
        ...rem(25),
        ...rem(26),
        ...rem(28),
        ...rem(29),
        ...rem(30),
        ...rem(32),
        ...rem(33),
        ...rem(34),
        ...rem(35),
        ...rem(36),
        ...rem(37),
        ...rem(38),
        ...rem(39),
        ...rem(40),
        ...rem(42),
        ...rem(44),
        ...rem(45),
        ...rem(46),
        ...rem(48),
        ...rem(50),
        ...rem(53),
        ...rem(55),
        ...rem(56),
        ...rem(58),
        ...rem(60),
        ...rem(64),
        ...rem(65),
        ...rem(66),
        ...rem(68),
        ...rem(70),
        ...rem(72),
        ...rem(75),
        ...rem(76),
        ...rem(80),
        ...rem(82),
        ...rem(83),
        ...rem(84),
        ...rem(85),
        ...rem(86),
        ...rem(87),
        ...rem(90),
        ...rem(92),
        ...rem(95),
        ...rem(97),
        ...rem(98),
        ...rem(100),
        ...rem(102),
        ...rem(103),
        ...rem(104),
        ...rem(105),
        ...rem(107),
        ...rem(109),
        ...rem(110),
        ...rem(112),
        ...rem(113),
        ...rem(115),
        ...rem(116),
        ...rem(120),
        ...rem(124),
        ...rem(125),
        ...rem(130),
        ...rem(131),
        ...rem(132),
        ...rem(133),
        ...rem(140),
        ...rem(143),
        ...rem(145),
        ...rem(148),
        ...rem(150),
        ...rem(151),
        ...rem(154),
        ...rem(155),
        ...rem(156),
        ...rem(160),
        ...rem(165),
        ...rem(168),
        ...rem(170),
        ...rem(172),
        ...rem(175),
        ...rem(176),
        ...rem(177),
        ...rem(178),
        ...rem(180),
        ...rem(185),
        ...rem(188),
        ...rem(190),
        ...rem(192),
        ...rem(195),
        ...rem(196),
        ...rem(200),
        ...rem(205),
        ...rem(210),
        ...rem(215),
        ...rem(220),
        ...rem(222),
        ...rem(225),
        ...rem(227),
        ...rem(228),
        ...rem(263),
        ...rem(265),
        ...rem(295),
        ...rem(230),
        ...rem(240),
        ...rem(250),
        ...rem(260),
        ...rem(265),
        ...rem(268),
        ...rem(270),
        ...rem(271),
        ...rem(272),
        ...rem(273),
        ...rem(274),
        ...rem(275),
        ...rem(280),
        ...rem(284),
        ...rem(290),
        ...rem(300),
        ...rem(305),
        ...rem(312),
        ...rem(313),
        ...rem(315),
        ...rem(320),
        ...rem(330),
        ...rem(340),
        ...rem(345),
        ...rem(350),
        ...rem(360),
        ...rem(380),
        ...rem(396),
        ...rem(400),
        ...rem(407),
        ...rem(409),
        ...rem(420),
        ...rem(424),
        ...rem(425),
        ...rem(429),
        ...rem(430),
        ...rem(440),
        ...rem(444),
        ...rem(450),
        ...rem(465),
        ...rem(467),
        ...rem(470),
        ...rem(480),
        ...rem(500),
        ...rem(520),
        ...rem(530),
        ...rem(540),
        ...rem(550),
        ...rem(590),
        ...rem(593),
        ...rem(600),
        ...rem(630),
        ...rem(640),
        ...rem(645),
        ...rem(646),
        ...rem(648),
        ...rem(650),
        ...rem(656),
        ...rem(668),
        ...rem(680),
        ...rem(700),
        ...rem(710),
        ...rem(742),
        ...rem(750),
        ...rem(800),
        ...rem(820),
        ...rem(840),
        ...rem(850),
        ...rem(863),
        ...rem(864),
        ...rem(900),
        ...rem(920),
        ...rem(950),
        ...rem(970),
        ...rem(1100),
        ...rem(1720),
      },
      zIndex: {
        60: "60",
      },
      aspectRatio: {
        "5/3": "5 / 3",
      },
      minHeight: theme => ({
        0: "0px",
        ...theme("spacing"),
      }),
      minWidth: theme => ({
        0: "0px",
        ...theme("spacing"),
      }),
      maxWidth: theme => ({
        0: "0px",
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
  important: true
}

