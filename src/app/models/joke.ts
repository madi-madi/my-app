// Class Joke  with  delete-joke or add new joke update
export class Joke {
	id: number;
	setup: string;
	punchline:string;
	hide:boolean;
	constructor(setup:string,punchline:string){
		this.id = Math.random()*10+1000; //rand id 
		this.setup = setup;
		this.punchline = punchline;
		this.hide= true;
	}


	toggle(){
		this.hide = !this.hide;
	}
}

