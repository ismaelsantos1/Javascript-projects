    //Buscando e contando dados em arrays
    
    /*Baseado no array de livros por categoria abaixo, faça os seguintes desafios:
        Contar o número de categorias e o número de livros em cada categoria
        Contar número de autores
        Mostrar livros do autor Dan Brown
        Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor*/


            const booksByCategory = [
                {
                    category: "Ficção",
                    books: [
                        {
                            title: "Inferno",
                            author: "Dan Brown",
                        },
                        {
                            title: "O Homem mais Rico da Babilônia",
                            author: "George S. Clason"
                        },
                        {
                            title: "O Processo",
                            author: "Kafka"
                        }
                    ],
                },
                {
                    category: "Aventura",
                    books: [
                        {
                            title: "A Máquina do Tempo",
                            author: "H.G Wells",
                        },
                        {
                            title: "O Código da Vinci",
                            author: "Dan Brown",
                        },
                        {
                            title: "Tartarugas até lá embaixo",
                            author: "John Green",
                        },
                    ],
                },
                ];


            const totalCategories = booksByCategory.length
            for (let category of booksByCategory){
                    console.log('Total de livros da categoria: ', category)
                    console.log(category.books.length)
            }

            console.log(totalCategories)

            function countAuthors(){
                let authors = [];

                for (let category of booksByCategory) {
                    for (let books of category.books){
                        if (authors.indexOf(books.author) == -1) {
                            authors.push(books.title)
                        }
                    }
                }
                console.log('Total de autores: ', authors.length)
            }
                countAuthors();

            function booksOfDanBrown () {
                let books = [];

                for (let category of booksByCategory) {
                    for (let book of category.books){
                        if (book.author === "Dan Brown") {
                            books.push(book.title)
                        }
                    }
                }
                console.log("Os livros de Dan Brown são: ", books)
            }
            booksOfDanBrown();

            function booksOfAuthor () {
                let books = [];

                for (let category of booksByCategory) {
                    for (let book of category.books){
                        if (book.author === "Kafka") {
                            books.push(book.title)
                        }
                    }
                }
                console.log("Os livros desse autor são: ", books)
            }
            booksOfAuthor();


















































/*
    const booksByCategory = [
    {
        category: "Ficção",
        books: [
            {
                title: "Inferno",
                author: "Dan Brown",
            },
            {
                title: "O Homem mais Rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "O Processo",
                author: "Kafka"
            }
        ],
    },
    {
        category: "Aventura",
        books: [
            {
                title: "A Máquina do Tempo",
                author: "H.G Wells",
            },
            {
                title: "O Código da Vinci",
                author: "Dan Brown",
            },
            {
                title: "Tartarugas até lá embaixo",
                author: "John Green",
            },
        ],
    },
    ];

const totalCategories = booksByCategory.length
for(let category of booksByCategory){
    console.log('total de livros da categoria:', category)
    console.log(category.books.length)
    
}

console.log(totalCategories) 

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfDanBrown() {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === "Dan Brown"){
                books.push(book.title)
            }
        }
    }
    console.log("Livros do autor: ", books)
}

booksOfDanBrown();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('H.G Wells');*/