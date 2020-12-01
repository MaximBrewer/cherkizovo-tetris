
const randomInteger = () => {
  let min = 1, max = 16
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let I1 = randomInteger(), I2 = randomInteger(), I3 = randomInteger(), I4 = randomInteger()
const I = {
  blocks: [
    [
      [0, I1 + ' t l r', 0, 0],
      [0, I2 + ' l r', 0, 0],
      [0, I3 + ' l r', 0, 0],
      [0, I4 + ' b l r', 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [I4 + ' l t b', I3 + ' t b', I2 + ' t b', I1 + ' t b r'],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, I4 + ' t l r', 0],
      [0, 0, I3 + ' l r', 0],
      [0, 0, I2 + ' l r', 0],
      [0, 0, I1 + ' b l r', 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [I1 + ' l t b', I2 + ' t b', I3 + ' t b', I4 + ' t b r'],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-i'
};

let J1 = randomInteger(), J2 = randomInteger(), J3 = randomInteger(), J4 = randomInteger()
const J = {
  blocks: [
    [
      [0, J1 + ' t l r', 0, 0],
      [0, J2 + ' l r', 0, 0],
      [J3 + ' l t b', J4 + ' b r', 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [J4 + ' t l r', 0, 0, 0],
      [J3 + ' l b', J2 + ' t b', J1 + ' t b r', 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, J3 + ' t l r', J4, 0],
      [0, J2 + ' l r', 0, 0],
      [0, J1 + ' l r b', 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [J1 + ' l t', J2 + ' t b', J3 + ' t b r', 0],
      [0, 0, J4 + ' l r b', 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-j'
};

let L1 = randomInteger(), L2 = randomInteger(), L3 = randomInteger(), L4 = randomInteger()
const L = {
  blocks: [
    [
      [0, L1 + ' t l r', 0, 0],
      [0, L2 + ' l r', 0, 0],
      [0, L3 + ' t b', L4 + ' t b r', 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [L3 + ' t l', L2 + ' t b', L1 + ' t b r', 0],
      [L4 + ' l b r', 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [L4 + ' t l b', L3 + ' t r', 0, 0],
      [0, L2 + ' l r', 0, 0],
      [0, L1 + ' l b r', 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, L4 + ' t l r', 0],
      [L1 + ' t b l', L2 + ' t r', L3 + ' b r', 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-l'
};
let O1 = randomInteger(), O2 = randomInteger(), O3 = randomInteger(), O4 = randomInteger()
const O = {
  blocks: [
    [
      [O1 + ' t l', O2 + ' t r', 0, 0],
      [O4 + ' r l', O3 + ' r b', 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [O4 + ' t l', O1 + ' t r', 0, 0],
      [O3 + ' r l', O2 + ' r b', 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [O3 + ' t l', O4 + ' t r', 0, 0],
      [O2 + ' r l', O1 + ' r b', 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [O2 + ' t l', O3 + ' t r', 0, 0],
      [O1 + ' r l', O4 + ' r b', 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-o'
};

const S = {
  blocks: [
    [
      [0, 0, 0, 0],
      [0, randomInteger(), randomInteger(), 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [randomInteger(), 0, 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, randomInteger(), randomInteger(), 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), randomInteger(), 0],
      [0, 0, randomInteger(), 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-s'
};

const T = {
  blocks: [
    [
      [0, 0, 0, 0],
      [randomInteger(), randomInteger(), randomInteger(), 0],
      [0, randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, randomInteger(), 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, randomInteger(), 0, 0],
      [randomInteger(), randomInteger(), randomInteger(), 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), randomInteger(), 0],
      [0, randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-t'
};

const Z = {
  blocks: [
    [
      [0, 0, 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, 4, 5, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, randomInteger(), 0, 0],
      [4, randomInteger(), 0, 0],
      [5, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [5, 4, 0, 0],
      [0, randomInteger(), randomInteger(), 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 5, 0],
      [0, randomInteger(), 4, 0],
      [0, randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-z'
};

export default {
  I,
  J,
  L,
  O,
  S,
  T,
  Z
};
