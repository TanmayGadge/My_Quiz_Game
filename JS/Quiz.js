class Quiz {
    constructor() {

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            contestant = new Contestant();
            contestantCountRef = await database.ref('contestantCount').once("value");
            if (contestantCountRef.exists()) {
                contestanCount = contestanCountRef.val();
                contestan.getCount();
            }
            question = new Question();
            question.display();
        }
        // contestan1 = createSprite(200, 500);
        // contestan1.addImage("contestan1", contestan_img);

        // contestan2 = createSprite(800, 500);
        // contestan2.addImage("contestan2", contestan_img);
        // contestans = [contestan1, contestan2];
    }
}