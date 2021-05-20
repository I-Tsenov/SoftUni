function volleyball(input) {
    let typeOfYear = input[0];
    let holidays = Number(input[1]);
    let tripWeekends = Number(input[2]);

    let weekendsInYear = 48;
    let weekendsInSofia = weekendsInYear - tripWeekends;
    let gamesInSofia = weekendsInSofia * 3 / 4;
    let gamesInHolidays = holidays * 2 / 3;
    let totalGames = gamesInSofia + tripWeekends + gamesInHolidays;

    if (typeOfYear === "leap") {
        totalGames = (totalGames + (totalGames * 0.15))
        console.log(Math.floor(totalGames));
        return;
    }

    console.log(Math.floor(totalGames));

}

volleyball(["leap", "5", "2"]);
volleyball(["normal", "3", "2"])


/* играе волейбол само през уикендите и в празничните дни. Влади играе в София всяка събота,
 когато не е на работа и не си пътува до родния град, както и в 2/3 от празничните дни.
 Той пътува до родния си град h пъти в годината, където играе волейбол със старите си приятели в неделя.
 Влади не е на работа 3/4 от уикендите, в които е в София.
 Отделно, през високосните години Влади играе с 15% повече волейбол от нормалното.
  Приемаме, че годината има точно 48 уикенда, подходящи за волейбол. */


/*48 уикенда в годината, разделени по следния начин:
•	46 уикенда в София  46 * 3 / 4  34.5 съботни игри в София
•	2 уикенда в родния си град  2 недели  2 игри в неделя в родния град
5 празника:
•	5 * 2/3  3.333 игри в София в празничен ден
Общо игри през уикенди и празници в София и в родния град: 34.5 + 2 + 3.333  39.833
Годината е високосна:
•	Влади играе допълнителни 15% * 39.833  5.975 игри волейбол
Общо игри през цялата година:
•	39.833 + 5.975 = 45.808 игри
•	Резултатът е 45 (закръгля се надолу)
*/