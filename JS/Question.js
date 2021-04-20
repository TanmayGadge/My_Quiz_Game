class Question {
    constructor() {
        this.input1 = createInput('Enter your name here: ');
        this.input2 = createInput('Enter your correct option no.');
        this.title = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        this.button = createButton("Submit");
    }

    hide() {
        this.input1.hide();
        this.input2.hide();
        // this.title.hide();
    }

    display(){
        this.title.html("My Quiz game");
        this.title.position(350, 0);

        this.question.html("Questiom: What starts amd ends with the letter 'E', but has only one letter.");
        this.question.position(150, 80);
        this.option1.html("1: Everyone");
        this.option1.position(150, 100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);
        this.option3.html("3: Estimate");
        this.option3.position(150, 140);
        this.option4.html("4: Example");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(350, 230);
        this.button.position(350, 300);

        this.button.mousePressed(()=> {
            // this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}