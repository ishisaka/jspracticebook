let book = {
    title: 'JavaScript本格入門',
    author: {
        name: 'Y. Yamada',
        address: 'Tokyo, Japan',

    },
    price: 2980,
}

console.log(book.author.name);
console.log(book['author']['name']);
