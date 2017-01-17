---
layout: my-code
---

```             
//-------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program determines your weight on other planets...in...SPAAAAACCCCEEEEE!!!
// AUTHOR ---------- liam beckman
// DATE ------------ 11 january 2017 wednesday
// SOURCES --------- http://stackoverflow.com/questions/10828937/how-to-make-cin-take-only-numbers
// ASSIGNMENT ------ cs162 lab 1 (due 13 january 2017)
// WRITTEN WITH ---- Sublime Text 3 Build 3126 and VIM - Vi IMproved 8.0
// COMPILED WITH --- gcc (Ubuntu 5.4.1-2ubuntu1~16.04) 5.4.1 20160904       
//--------------------------------------------------------------------------------------------------------


#include <iostream>
#include <cctype>
#include <string>
using namespace std;

double getUserEarthWeight();        //function to get the user's known weight on earth
int getUserPlanet();                //function to get what planet (or moon) the user wants to go to
string getPlanetName(int planet);   //function to have the final output include the planet's name
double planetWeight(double wtEarth, int planet);    //function to calculate the user's wight on the new planet


//------------------------------------------------------------//


int main()
{
    char continueProgram = 'y';                 //
    
    while (tolower(continueProgram) == 'y')     //while continueProgram is set to yes
    {
        double wtEarth = getUserEarthWeight();  //assign the user's wight on earth to our weight variable
        int planet = getUserPlanet();           //assign the user's desired planet to our planet variable
        string planetName = getPlanetName(planet);  //assign the user's desired planet's name to our planetName variable
        
        cout << "\n";
        cout << "your weight on " << planetName << " will be " << planetWeight(wtEarth, planet) << endl;    //output the user's weight on their desired planet
        cout << "\n";

        while (true)    //loop to allow the user to either repeat or exit the program
        {
            cout << "would you like to continue the program? (y/n)" << endl; 
            cin >> continueProgram;

            if (tolower(continueProgram) == 'y' || tolower(continueProgram) == 'n')             //if the user enters a valid input (y, Y, n, N)
                break;                                          //break this loop
            else
                cout << "i'm sorry, i didn't catch that." << endl;  //otherwise, repeat the prompt 
        }

        cout << "\n";
    }
    
    cout << "happy trails!" << endl;        //to you, until we meet agaaaiiiinnnnn!...

    return 0;       //return successful exit status
}


//------------------------------------------------------------//


double getUserEarthWeight()     //function to get the user's known weight on earth
{
    double userEarthWeight;     //our user's earth weight variable
    bool validInput = false;    //variable to check whether user enters valid earth weight (i.e. neither negative nor zero)

    while (validInput == false) //loop that continues until the user enters a positive number
    {
        cout << "enter your earth weight: ";
        cout << "\n";

        while (!(cin >> userEarthWeight))       //loop if the user enter's a letter and cin enters a fail state
        {   
            cin.clear();                //clear the cin buffer
            cin.ignore(1000, '\n');     //and ignore the user's bad input
            break;                      //break the loop and continue below
        }

        if (userEarthWeight > 0)        //if the user enters a positive number
            validInput = true;          //then the user has entered a valid input
        else
            cout << "please enter a positive non-zero value" << endl;   //otherwise, tell them what to enter

    }
    return userEarthWeight;     //return the user's weight here on earth
}


//------------------------------------------------------------//


int getUserPlanet()     //function to get what planet (or moon) the user wants to go to
{
    int userPlanet;     //our user's desired planet (or moon!) 
    bool validInput = false;        //again, a avriable to check wheater user eneters a valid planet ID (1, 2, 3, 4)

    while (validInput == false)     //while the user has not entered a valid planet ID
    {    
        cout << "\n";
        cout << "choose a celestial body:" << endl; //prompt the user to select a celestial body
        cout << "1 - Moon" << endl;                 //
        cout << "2 - Mercury" << endl;              //
        cout << "3 - Venus" << endl;                //
        cout << "4 - Jupiter" << endl;              //
        cout << "\n";

        while(!(cin >> userPlanet))     //if the user enters a letter and throws cin into a fail-state
        {
            cin.clear();                //clear cin's buffer
            cin.ignore(1000, '\n');     //ignore the user's bad input
            break;                      //now that cin is in a healthy state, continue below
        }

        if (userPlanet >= 1 && userPlanet <= 4)     //if the user entered a valid planet ID
            validInput = true;                      //they have enetered a valid input
        else
            cout << "please enter a value between 1 and 4" << endl; //otherwise, tell the user what to enter
    }

    return userPlanet;  //return the desired planet
}


//------------------------------------------------------------//


string getPlanetName(int planet)        //function to have the final output include the planet's name (i.e. convert planet ID to planet name)
{
    string planetName;                  //variable to hold the name of the planet
    switch(planet)                      //switch based on the user's entered planet ID
    {
        case 1:                         //Planet ID belonging to THE MOON
            planetName = "the moon";
            break;
        case 2:                         //Planet ID belonging to MERCURY
            planetName = "mercury";
            break;
        case 3:                         //Planet ID belonging to VENUS
            planetName = "venus";
            break;
        case 4:                         //Planet ID belonging to JUPITER
            planetName = "jupiter";
            break;
    }

    return planetName;  //return the planet name

}


//------------------------------------------------------------//


double planetWeight(double wtEarth, int planet)     //function to calculate the user's wight on the new planet
{
    const double gEarth = 9.81;             //earth's gravitational constant
    const double gMoon = 1.622;             //the moons's gravitational constant
    const double gMercury = 3.7;            //mercury's gravitational constant
    const double gVenus = 8.87;             //venus's gravitational constant
    const double gJupiter = 24.79;          //jupiter's gravitational constant

    double wtPlanet;                        //variable to hold the user's wight on teh given planet

    switch(planet)                          //switch based on the planet ID
    {
        case 1:                                         //Planet ID belonging to THE MOON
            wtPlanet = wtEarth * (gMoon / gEarth);      //calculate THE MOON'S gravity
            break;                                      //
        case 2:                                         //Planet ID belonging to MERCURY
            wtPlanet = wtEarth * (gMercury / gEarth);   //calculate MERCURY'S gravity
            break;                                      //
        case 3:                                         //Planet ID belonging to VENUS
            wtPlanet = wtEarth * (gVenus / gEarth);     //calculate VENUS'S gravity
            break;                                      //
        case 4:                                         //Planet ID belonging to JUPITER
            wtPlanet = wtEarth * (gJupiter / gEarth);   //calculate JUPITER'S gravity
            break;                                      //
    }

    return wtPlanet;                                    //return the weight on the given planet 
}


//------------------------------------------------------------//


/*

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
~ ~ ~ ~ ~ ~ ~ ~ Poem of the Day! ~ ~ ~ ~ ~ ~ ~ ~ ~
          D O U B L E  F E A T U R E !
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Today's Poem:

"On What Planet"
By Kenneth Rexroth

&

"Another Planet"
By Dunya Mikhail
Translated By Kareem James Abu-Zeid   

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
"On What Planet"


Uniformly over the whole countryside
The warm air flows imperceptibly seaward;
The autumn haze drifts in deep bands
Over the pale water;
White egrets stand in the blue marshes;
Tamalpais, Diablo, St. Helena
Float in the air.
Climbing on the cliffs of Hunter’s Hill
We look out over fifty miles of sinuous
Interpenetration of mountains and sea.
 
Leading up a twisted chimney,
Just as my eyes rise to the level
Of a small cave, two white owls
Fly out, silent, close to my face.
They hover, confused in the sunlight,
And disappear into the recesses of the cliff.
 
All day I have been watching a new climber,
A young girl with ash blonde hair
And gentle confident eyes.
She climbs slowly, precisely,
With unwasted grace.
 
While I am coiling the ropes,
Watching the spectacular sunset,
She turns to me and says, quietly,
“It must be very beautiful, the sunset,
On Saturn, with the rings and all the moons.”


-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
"Another Planet"


I have a special ticket
to another planet
beyond this Earth.
A comfortable world, and beautiful:
a world without much smoke,
not too hot
and not too cold.
The creatures
are gentler there,
and the governments
have no secrets.
The police are nonexistent:
there are no problems
and no fights.
And the schools
don’t exhaust their students
with too much work
for history has yet to start
and there’s no geography
and no other languages.
And even better:
the war
has left its “r” behind
and turned into love,
so the weapons sleep
beneath the dust,
and the planes pass by
without shelling the cities,
and the boats
look like smiles
on the water.
All things
are peaceful
and kind
on the other planet
beyond this Earth.
But still I hesitate
to go alone.

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
*/
```