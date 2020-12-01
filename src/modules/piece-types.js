
const randomInteger = () => {
  let min = 1, max = 16
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let I1 = randomInteger() + '', I2 = randomInteger(), I3 = randomInteger(), I4 = randomInteger()
const I = {
  blocks: [
    [
      [0, I1 + ' b', 0, 0],
      [0, I2 + ' tb', 0, 0],
      [0, I3 + ' tb', 0, 0],
      [0, I4 + ' t', 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [I4, I3, I2, I1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, I4, 0],
      [0, 0, I3, 0],
      [0, 0, I2, 0],
      [0, 0, I1, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [I1, I2, I3, I4],
      [0, 0, 0, 0]
    ]
  ],
  className: 'piece-i'
};

const J = {
  blocks: [
    [
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [randomInteger(), randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [randomInteger(), 0, 0, 0],
      [randomInteger(), randomInteger(), randomInteger(), 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, randomInteger(), randomInteger(), 0],
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [randomInteger(), randomInteger(), randomInteger(), 0],
      [0, 0, randomInteger(), 0],
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
