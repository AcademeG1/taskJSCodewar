class File {
    #temp;
    #tempc;
    #count = 0;
    #countc = 0;
    // fullName
    // fileName
    // extension
    constructor(fullName, contents) {
        this._fullName = fullName;
        this._fileName = this._fullName.split('.')[0];
        this._extension = this._fullName.split('.')[1];
        this.contents = contents;
    }


    set fullName(fullName) {
        return undefined;
    }

    set filename(filename) {
        return undefined;
    }

    set extension(extension) {
        return undefined;
    }


    get fullName() {
        return this._fullName;
    }

    get filename() {
        return this._fileName;
    }

    get extension() {
        return this._extension;
    }

    getContents() {
        return this.contents;
    }

    write(str) {
        let a = this.contents.split();
        a.push(str);
        this.contents = a.join(`\n`);
    }

    gets() {
        this.#temp = this.contents;
        this.#temp = this.#temp.split(`\n`);
        this.#tempc = this.#temp.join('');
        let a = this.#temp[this.#count];
        this.#count++;
        return a
    }

    getc() {
        // console.log(this.#tempc);
        // this.#tempc = this.#tempc.join('');
        let b = this.#tempc[this.#countc];
        this.#countc++;
        return b;
    }
}

// const file = new File("example.txt", "An example file");
var example = new File("example.txt", "An example file");
console.log(example.filename);
// console.log(example);
// // console.log(file.fullName);
// // file.fullName = 10;
// // console.log(file.fullName);
console.log(example.fullName);
console.log(example.filename);
example.fullName = "modified.txt";
example.filename = "hacked";
console.log(example.filename);
console.log(example.extension);
example.extension = "locky";
console.log(example.extension);
console.log(example.getContents);
example.write("Hello World");
example.write("This is an example file provided to you by the Kata author");
example.write("This example file is used as an example test case.");
console.log(example.getContents);
console.log(example.gets()); //an
console.log(example.gets());// "Hello World"
console.log(example.gets()); // "This is an example file provided to you by the Kata author");
console.log(example.gets()); // "This example file is used as an example test case.");
console.log(example.gets()); // undefined
console.log(example.gets());// undefined);
console.log(example.gets());// undefined);

console.log(example.getc());//, "A");
console.log(example.getc());//, "n");
console.log(example.getc());//, " ");
console.log(example.getc());//, "e");
console.log(example.getc());//, "x");
console.log(example.getc());//, "a");
console.log(example.getc());//, "m");
console.log(example.getc());//, "p");
console.log(example.getc());//, "l");
console.log(example.getc());//, "e");

for (let i = 0; i < 1000; i++) {
    example.getc();
  }

  console.log(example.getc());//, "undef");
  console.log(example.getc());//, "undef");
  console.log(example.getc());//, "undef");



//   class File {
//     constructor(fullName, contents){
//         const fullNameArray = fullName.split('.');
//         const fileNameArray = fullNameArray.filter((el,i)=> i !== fullNameArray.length-1);
          
//         this._fullName = fullName;
//         this._filename = fileNameArray.join('.');
//         this._contents = contents;
//         this._extension = fullNameArray[fullNameArray.length-1];
        
//         this._currentLineToRead = 0;
//         this._currentCharToRead = 0;
//     }
//     get fullName(){
//         return this._fullName;
//     }
//     set fullName(fullName){
//         return;
//     }
      
//     get filename(){
//         return this._filename;
//     }
//     set filename(filename){
//         return;
//     }
      
//     get extension(){
//         return this._extension;
//     }
//     set extension(extension){
//         return;
//     }
      
//     getContents(){
//         return this._contents;
//     }
//     write(str){
//         this._contents = `${this._contents.length ? this._contents+'\n':''}${str}`;
//     }
//     gets(){
//         if(this._contents.length === 0){
//             return '';
//         }
//         const res = this._contents.split('\n')[this._currentLineToRead];
//         this._currentLineToRead++;
//         return res;
//     }
//     getc(){
//         if(this._contents.length === 0){
//             return '';
//         }
//         const res = this._contents[this._currentCharToRead];
//         this._currentCharToRead++;
//         return res;
//     }
// }