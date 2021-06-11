const accessCode1 = "VARIABLE";
const accessCode2 = "BOOKKEEPER";
const accessCode3 = "A TOWEL";
const accessCode4 = "YOUR NAME";

function clues() {
    //write the first puzzle
    fill("white");
    textSize(15);
    text("R E V B A I L A", 100, 50);
    fill("lightblue");
    text("Hint: What get always changing, not constant?", 100, 70);

    //write the second puzzle
    fill("white");
    textSize(15);
    text("B P K E O R E O E K", 800, 160);
    fill("lightblue");
    text("Hint: What english word has three consecutive double letters?", 800, 180);

    //write the third puzzle
    fill("white");
    textSize(15);
    text("T L O E W A", 100, 310);
    fill("lightblue");
    text("Hint: What get wet while drying?", 100, 330);

    //write the fourth puzzle
    fill("white");
    textSize(15);
    text("N U E O M Y R A", 800, 440);
    fill("lightblue");
    text("Hint: What belongs to you but, everyone else uses it?", 800, 460);
}