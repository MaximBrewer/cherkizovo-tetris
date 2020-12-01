
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
      [0, J1 + ' b', 0, 0],
      [0, J2 + ' b t', 0, 0],
      [J3, J4 + ' t l', 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [J4 + ' b', 0, 0, 0],
      [J3 + ' t r', J2 + ' r l', J1 + ' l', 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, J3 + ' b', J4, 0],
      [0, J2 + ' b', 0, 0],
      [0, J1 + ' b', 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [J1 + ' l', J2 + ' r l', J3 + ' b r', 0],
      [0, 0, J4 + ' t', 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-j'
};

const L = {
  blocks: [
    [
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), randomInteger(), 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [randomInteger(), randomInteger(), randomInteger(), 0],
      [randomInteger(), 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [randomInteger(), randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, randomInteger(), 0],
      [randomInteger(), randomInteger(), randomInteger(), 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-l'
};

const O = {
  blocks: [
    [
      [randomInteger(), randomInteger(), 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [randomInteger(), randomInteger(), 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [randomInteger(), randomInteger(), 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [randomInteger(), randomInteger(), 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
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
