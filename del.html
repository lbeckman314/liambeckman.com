//----------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program alphabetically sorts a list of words!
// AUTHOR ---------- liam beckman
// DATE ------------ 11 january 2016 wednesday
// SOURCES --------- none
// ASSIGNMENT ------ cs250 lab 1
// COMPILED WITH --- gcc (Ubuntu 5.4.1-2ubuntu1~16.04) 5.4.1 20160904 in Sublime Text 3 Build 3126       
//-----------------------------------------------------------------------------------------------------------


#include <iostream> //cin, cout
#include <fstream>  //ifstream, .close()
using namespace std;

void alphabetSorter(string words[]);    //function to sort the words alphabetically
void wordOutput(string words[]);        //function to output the sorted words


//-----------------------------------------------------------------//


int main()
{
	ifstream inFile;        //variable to hold the word-list file
    string path;            //path of the word-list file
    string words[100];      //array to hold words (REPLACE ALL from 100 to how many words you have)
    int counter=0;          //counter to input word-by-word into the array
    //bool duplicate = false; //

    cout << "Hello! Please enter path to file: ";   //prompt user to enter path for word-list file
    cin >> path;

    //path = "/home/liam/Documents/pcc2017Winter/discrete/week1/input.txt"; //path on my computer

    inFile.open(path.c_str());      //open that file (c_str() = cross-platform! :) )
    while(!inFile.eof())            //while NOT at the end-of-file
    {
        inFile >> words[counter];   //input each word from inFile
        for (int i = 0; i < words[counter].length(); i++)   //PUNTUATION-REMOVER (otherwise we'd end up with "files" & "files," & "files." We just want "files")
        {
            if (ispunct(words[counter][i]))     //if the symbol at position i in the word is punctuation
                words[counter].erase(i);        //then remove that symbol
        }
        //if (words[counter] == "C")    //Uncomment these lines if you'd rather...
        //    words[counter] = "C++";   //..."C++" in the input file to output as "C"
        counter++;      //increment our counter variable to move to the next word in the word-list file
    }

    alphabetSorter(words);      //sort the words in the words array
    wordOutput(words);          //output the words in the words array

    inFile.close();     //close our word-list file

    return 0;           //return successful exit status

}


//-----------------------------------------------------------------//


void alphabetSorter(string words[])     //function to sort our word list alphabetically (via SELECTION SORTING!)
{
    int smallestIndex;                  //variable to hold the earliest word for each comparison
    string temp;                        //
    for (int index = 0; index < 100-1; index++)     //for each word in the entire list
    {
        smallestIndex = index;          //assign that word as the earliest word so far. 
        for (int location = index + 1; location < 100; location++)      //for the words in the UNSORTED section of the list
        {
            if (words[location]<words[smallestIndex])       //if the current word is earlier in the alphabet than that of the earliest word so far...
                smallestIndex = location;                   //...then the current word switches positions with that word
            temp = words[smallestIndex];                    //temp holds the old word
            words[smallestIndex] = words[index];            //the new words moves to the old word's position
            words[index] = temp;                            //and the old word moves to the new word's position
        }   
    }
}


//-----------------------------------------------------------------//


void wordOutput(string words[])     //function to output ore words
{
    for (int i = 0; i < 100; i++)   //for every word in words array
    {
        if (words[i] != words[i-1] && words[i] > " ")       //if the word is NOT a duplicate...
            cout << words[i] << endl;       //...then output the word
    }
}


//-----------------------------------------------------------------//


/*
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
~ ~ ~ ~ ~ ~ ~ ~ Poem of the Day! ~ ~ ~ ~ ~ ~ ~ ~ ~
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Today's Poem:

"Alphabet Aerobics"
Blackalicious

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

(Now it's time for our wrap up
Let's give it everything we've got
Ready? Begin)

Artificial amateurs, aren't at all amazing
Analytically, I assault, animate things
Broken barriers bounded by the bomb beat
Buildings are broken, basically I'm bombarding
Casually create catastrophes, casualties
Canceling cats got their canopies collapsing
Detonate a dime of dank daily doing dough
Demonstrations, Don Dada on the down low
Eating other editors with each and every energetic
Epileptic episode, elevated etiquette
Furious fat fabulous fantastic
Flurries of funk felt feeding the fanatics
Gift got great global goods gone glorious
Getting godly in his game with the goriest
Hit 'em high, hella height, historical
Hey holocaust hints hear 'em holler at your homeboy
Imitators idolize, I intimidate
In an instant, I'll rise in an irate state
Juiced on my jams like jheri curls jocking joints
Justly, it's just me, writing my journals
Kindly I'm kindling all kinds of ink on
Karate kick type brits in my kingdom
Let me live a long life, lyrically lessons is
Learned lame louses just lose to my livery
My mind makes marvelous moves, masses
Marvel and move, many mock what I've mastered
Niggas nap knowing I'm nice naturally
Knack, never lack, make noise nationally
Operation, opposition, off not optional
Out of sight, out of mind, wide beaming opticals
Perfected poem, powerful punch lines
Pummeling petty powder puffs in my prime
Quite quaint quotes keep quiet it's Quantum
Quarrelers ain't got a quarter of what we got uh
Really raw raps, rising up rapidly
Riding the rushing radioactivity
Super scientifical sound search sought
Silencing super fire saps that are soft
Tales ten times talented, too tough
Take that, challengers, get a tune up
Universal, unique untouched
Unadulterated, the raw uncut
Verb vice lord victorious valid
Violate vibes that are vain make em vanished
While I'm all well what a wise wordsmith just
Weaving up words, weeded up on my work shift
Xerox, my X-radiation holes extra large
X-height letters, and xylophone tones
Yellow back, yak mouth, young ones yaws
Yesterday's lawn yard sell our yawn
Zig zag zombies, zoom in to the zenith
Zero in zen thoughts, overzealous rhyme ZEALOTS!...

(Good... can you say it faster?)


-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
*/