export const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 0,
      y: 0,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 600,
      y: 0,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1200,
      y: 300,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1200,
      y: -300,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1800,
      y: 0,
    },
    data: {}
  }
] //satisfies Node[]