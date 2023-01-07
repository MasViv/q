function addUser() 
{
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    Window.location="game_page.html";
}

player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="answer turn - " + player2_name;

function send()
{
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log("word in lowercase=" + word);

charAt1=word.charAt(1);
console.log(charAt1); 

lenght_divide_2=Math.floor(word.lenght/2);
charAt2=word.charAt(lenght/2);
console.log(charAt2);

lenght_minus_1=word.lenght-1;
charAt3=word.charAt(lenght-1);
console.log(charAt3);

remove_charAt1=word.replace(charAt, "_");
remove_charAt2=remove_charAt1.replace(charAt2, "_");
remove_charAt3=remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word="<h4 id='word_display'>Q."+ remove_charAt3+"</h4>";
input_box="<br>Answer:<input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

function check()
{
get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowwerCase();
console.log("answer in lowwercase"+ answer);

if(answer==word)
{
if(answer_turn=="player1")
{
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
else
{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
}
if(question_turn=="player1")
{
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question_turn"+ player2;
}
else
{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question_turn"+ player1;  
}
if(answer_turn=="player1")
{
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answer_turn"+ player2;
}
else
{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer_turn"+ player1;  
}
document.getElementById("output").innerHTML=" ";
}