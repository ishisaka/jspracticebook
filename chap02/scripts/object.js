let book = {
    title: 'JavaScript本格入門',
    price: 2900,
    publisher: '技術評論社',
};

console.log(book.title);
console.log(book['title']);

book.author = 'Y. Yamada';
console.log(book.author);

book.title = '改定第3版 JavaScript本格入門';
console.log(book.title);
