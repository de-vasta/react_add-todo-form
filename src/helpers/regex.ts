export const engUkrSpacesOnly = (text: string): string =>
  text.replace(/[^A-Za-zА-Яа-яіІєЄїЇґҐ\s]/g, '');
