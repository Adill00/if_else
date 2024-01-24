// Part 1

const books = [ {name: 'Les Miserables' , author: 'Viktor Hugo' , language: 'French' , pages: 785}, 
               {name: 'Tom Sawyer' , author: 'Mark Twain' , language: 'English' , pages: 215},
               {name: 'Kimyager' , author: 'Orhan Pamuk' , language: 'Turkish' , pages: 328},
                {name: 'Voyna i Mir' , author: 'Lev Tolstoy' , language: 'Russian' , pages: 1004},
                {name: 'Ikigai' , author: 'Hashimoto Honda' , language: 'Japanese' , pages: 210}, 
]


//Part 2

let authorType = typeof books[0]['author'];
console.log('the type of author of this book is ' , authorType);


//Part 3

//with arithmetic operations
let totalPages = books[0]['pages'] + books[1].pages + books[2]['pages'] + books[3].pages + books[4]['pages'];
//with . we don't need '' , but with [] we need ''

console.log('the total number of pages is:' , totalPages);


//or with loop
let pagesTotal=0;

for (let i=0 ; i< books.length ; i++ ){
    pagesTotal += books[i].pages;
}   

console.log('the total number of pages is:' , pagesTotal)

//Part 4

let message;
 
message = pagesTotal >= 1500 ? '1 hefteye oxuyub qurtararam' : '3-4 gun lazimdir'; 
console.log(message);