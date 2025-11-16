import { createAppState } from 'state-shared';
import { createBook } from 'utils-book';
import type { Book } from 'utils-book';

export const stateListener = createAppState();

export const book: Book = createBook(stateListener);
