
const randomInteger = () =>  {
  let min = 1, max = 16
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const I = {
  blocks: [
    [
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0],
      [0, randomInteger(), 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [randomInteger(), randomInteger(), randomInteger(), randomInteger()],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, randomInteger(), 0],
      [0, 0, randomInteger(), 0],
      [0, 0, randomInteger(), 0],
      [0, 0, randomInteger(), 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [randomInteger(), randomInteger(), randomInteger(), randomInteger()],
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
