import {Book} from '../app/model/Book';

export  const mockBooks = [];
mockBooks.push(new Book('Fake book 1', ['Fake person 1'], new Date('December 17, 1995 03:24')));
mockBooks.push(new Book('Fake Book 2', ['More fake authors'], new Date('May 17, 1954 06:24')));
mockBooks.push(new Book('Fake Book 3', ['Fake Author3'], new Date('January 04, 2905 03:24')));
mockBooks.push(new Book('Fake Book 4', ['Fake Author 4'], new Date('August 01, 1990 15:24')));
mockBooks.push(new Book('Fake Book 5', ['Fake Author x', 'Fake Author y'], new Date('February 17, 2017 18:00')));
mockBooks.push(new Book('Fake Book 6', ['Fake Author AA', 'Fake Author ZZ'], new Date('March 24, 2003 12:00')));
