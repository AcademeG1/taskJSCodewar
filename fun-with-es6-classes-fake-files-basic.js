class File {
    constructor (fullName, contents) { // конструктор, принимает две переменные
        let arrayFullName = fullName.split('.');
        let arrayFileName = arrayFullName.filter((el,i)=> i !== arrayFullName.length-1);

        this._fullName = fullName; // присваивание полного имени в класс
        this._filename = arrayFileName.join('.'); // простое получение имени файла
        this._extension = arrayFullName[arrayFullName.length-1]; // простое получение расширения файла
        this._contents = contents;

        this._counterLine = 0; // переменная для счета информации с контенте
        this._counterLetter = 0; // переменная для счета букв в контенте
    }

    get fullName() { // получение полного имени (геттер)
        return this._fullName;
    }

    set fullName(fullName) { // отключение перезаписи полного имени (отключение сеттера)
        return;
    }

    get filename() { // получение имени файла (геттер)
        return this._filename;
    }

    set filename(filename) { // отключение перезаписи имени файла (отключение сеттера)
        return;
    }

    get extension() { // получение расширения
        return this._extension;
    }

    set extension(extension) { // отключение перезаписи расширения (отключение сеттера)
        return;
    }

    getContents() { // получение контента
        return this._contents;
    }

    write(str) { // метод записи контента
        this._contents = `${this._contents.length ? this._contents+'\n':''}${str}`; // каждый раз добавляем к строке новую, на новой строке
    }

    gets() { // функция счета строк, 
        if (this._contents.length === 0) { // проверка или строка не пустая, избежать лишние ошибки
            return ''
        }
        let result = this._contents.split('\n')[this._counterLine];
        this._counterLine++;
        return result;
    }

    getc() {
        if (this._contents.length === 0) {
            return ''
        }
        let result = this._contents[this._counterLetter];
        this._counterLetter++;
        return result;
    }
}

var example = new File("example.txt", "An example file");
// console.log(example.fullName);
// example.fullName = 'a';
// console.log(example.fullName);
// console.log(fullName)
console.log(example.filename);
console.log(example.extension);

// console.log(example.getContents());
// example.write('sdcds');
// console.log(example.getContents());
// example.write('1345tfs');
// console.log(example.getContents());
// console.log(example.filename);
// console.log(example.fullName);
// console.log(example.filename);
// example.fullName = "modified.txt";
// example.filename = "hacked";
// console.log(example.filename);
// console.log(example.extension);
// example.extension = "locky";
// console.log(example.extension);
// console.log(example.getContents);
// example.write("Hello World");
// example.write("This is an example file provided to you by the Kata author");
// example.write("This example file is used as an example test case.");
// console.log(example.getContents);
// console.log(example.gets()); //an
// console.log(example.gets());// "Hello World"
// console.log(example.gets()); // "This is an example file provided to you by the Kata author");
// console.log(example.gets()); // "This example file is used as an example test case.");
// console.log(example.gets()); // undefined
// console.log(example.gets());// undefined);
// console.log(example.gets());// undefined);

// console.log(example.getc());//, "A");
// console.log(example.getc());//, "n");
// console.log(example.getc());//, " ");
// console.log(example.getc());//, "e");
// console.log(example.getc());//, "x");
// console.log(example.getc());//, "a");
// console.log(example.getc());//, "m");
// console.log(example.getc());//, "p");
// console.log(example.getc());//, "l");
// console.log(example.getc());//, "e");

// for (let i = 0; i < 1000; i++) {
//     example.getc();
//   }

//   console.log(example.getc());//, "undef");
//   console.log(example.getc());//, "undef");
//   console.log(example.getc());//, "undef");



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