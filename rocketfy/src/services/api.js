export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Vivamus sollicitudin varius velit,',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 3,
          content: ' Aenean augue ligula, lacinia at odio eu',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 4,
          content: 'obortis libero eros vel nunc. Aenean augue ligula, lacinia at odio eu, rutrum ferment',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 5,
          content: 'oreet. Praesent rhoncus rhoncus mauris sit amet facil',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Donec malesuada mauris quis quam feugiat',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Donec malesuada mauris quis quam feugiatD',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Donec malesuada mauris quis quam feugiat',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Donec malesuada mauris quis',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Donec malesuada mauris quis quam feugiat',
          labels: [],
        },
        {
          id: 12,
          content: 'Donec malesuada mauris quis quam feugiat',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Quisque a orci vitae lectus iaculis consequat eget et lorem. Cras iaculis lacinia ultrices. Vestibulum egestas ligula diam, eu hendrerit tortor gravida consequat.',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}