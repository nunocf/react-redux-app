export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an anction. Object with a type and a property (payload)
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
