const sorting = require('../../../app');

describe('Books names test suit', () => {
  it('Books names should be sorted in ascending order', () => {
    expect(
      sorting.sortByName([
        'Гарри Поттер',
        'Властелин Колец',
        'Волшебник изумрудного города',
      ])
    ).toEqual([
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ]);
  });

  it('Should handle equal strings correctly', () => {
    expect(sorting.sortByName(['Анна', 'Анна', 'Борис'])).toEqual([
      'Анна',
      'Анна',
      'Борис',
    ]);
  });

  it('Should handle empty array correctly', () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it('Should handle array with one element correctly', () => {
    expect(sorting.sortByName(['Единственный'])).toEqual(['Единственный']);
  });

  it('Should handle already sorted array correctly', () => {
    expect(sorting.sortByName(['Азбука', 'Ведение', 'Глаголь'])).toEqual([
      'Азбука',
      'Ведение',
      'Глаголь',
    ]);
  });

  it('Should handle reverse sorted array correctly', () => {
    expect(sorting.sortByName(['Яблоко', 'Фрукт', 'Апельсин'])).toEqual([
      'Апельсин',
      'Фрукт',
      'Яблоко',
    ]);
  });

  it('Should sort case-insensitively', () => {
    expect(sorting.sortByName(['банан', 'Апельсин', 'яблоко', 'Киви'])).toEqual(
      ['Апельсин', 'банан', 'Киви', 'яблоко']
    );
  });

  it('Should handle strings with numbers', () => {
    expect(sorting.sortByName(['2 книга', '1 книга', '10 книга'])).toEqual([
      '1 книга',
      '10 книга',
      '2 книга',
    ]);
  });
});
