 export interface Author {
    name: string;
}

 export interface Blog {
    key?:string,
    url: string;
    author: Author;
    title: string;
    content: string;
}