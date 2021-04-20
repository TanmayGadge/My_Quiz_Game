class Contestant {
    constructor() {
        this.index = null;
        this.answer = null;
        this.name = null;
    }

    getCount() {
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value", (data) => {
            contestantCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            contestantCount: count
        });
    }

    update() {
        var contestantIndex = "contestants/contestant1" + this.index;
        database.ref(contestantIndex).set({
            name: this.name,
            answer: this.answer
        });
    }

    static getcontestantInfo() {
        var contestantInfoRef = database.ref('contestants');
        // arrow function
        contestantInfoRef.on("value", (data) => {
            allcontestants = data.val();
        })
    }
}