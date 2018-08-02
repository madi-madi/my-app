//  Class book with brnch book-add-list
export class Book {
	name: string;
	url:string;
	download:number;
	hide:boolean;
	constructor(name:string,url:string,download:number){
		this.name = name;
		this.url = url;
		this.download = download;
		this.hide= true;
	}


	toggle(){
		this.hide = !this.hide;
	}
}

