---
layout: posts
title:  "AAAAAA!"
date:   2012-09-12 18:09:39 -0800
categories: jekyll update
---

```cpp
#include <iostream>
using namespace std;
int main()
{
    return 0;
}
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

```python
def myFunction():
    print("this will be my function")
```

```python
def betteFunction:
    x = 4
    y = 5
    print(x + y)
```

```cpp
#include <iostream>
#include <cctype>
#include <fstream>
using namespace std;

//e is most common letter in file

int alphabet[26];// = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v}
char ch;
int maxFreqChar;

int main()
{
    ifstream textFile;
    string path = "/home/liam/Documents/compSci1/compSci1/week8/encrypted.txt";

    //prompt for and get the file path
    //cout << "enter path of file" << endl;
    //cin >> path;

    textFile.open(path.c_str());

    while(!textFile.eof())
    {
        ch = textFile.get();
        ch = tolower(ch);   //use tolower(ch) to lowercase the letters
        if (isalpha(ch))
            cout << ch;
        //cout << (char)textFile.get();
    
        if (isalpha(ch))
            alphabet[ch - 'a']++;  //math inside [] to switch form ascii to letters // 'a' = 97 in ascii
        //isalpha(ch) checks if letter (TRUE if 'a','b','c', FALSE if '1', '-','.')


        //read the file
        //cin    >> someVar;    ANALOGY
        //input = diskFile.get();

        //output the things we read
    }
        maxFreqChar = alphabet[0];
        cout << "\n";
        for (int freq = 0; freq < 26; freq++)
        {
            cout << "alphabet[" << freq << "], [" << static_cast<char>(freq+97)<< "]: " << alphabet[freq] << endl;

            if (alphabet[maxFreqChar] < alphabet[freq])
                maxFreqChar = freq;
            cout << "maxFreqChar: " << maxFreqChar << ", " << static_cast<char>(maxFreqChar+97) << endl;
        }

        for (int setOne = 0; setOne < 12; setOne++)
        {
            alphabet[setOne] = alphabet[setOne + 14];
            cout << static_cast<char>(setOne+97) << ": " << alphabet[setOne] << endl;
        }
        for (int setTwo = 12; setTwo < 26; setTwo++)
        {
            alphabet[setTwo] = alphabet[(setTwo + 14) % 26];
            cout << static_cast<char>(setTwo+97) << ": " << alphabet[setTwo] << endl;
        }


    textFile.close();

    return 0;
}

//fills up array with letter counts
//find most common letter in array
//shifts letter in first two functions to output correct test
```

---

This is my c++ program!

It is a good `porgram`!

```cpp
//----------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program determines whther a string of parentheses is balanced (i.e. ((()))  )
// AUTHOR ---------- liam beckman
// DATE ------------ 10 november 2016 thursday
// SOURCES --------- none
// ASSIGNMENT ------ cs161 lab 7 functions (due november 10th 2016)
// COMPILED WITH --- gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.2) in Sublime Text 3 Build 3126
//-----------------------------------------------------------------------------------------------------------

#include <iostream>                 //cout, cin
#include <string>                   //find(), empty(), erase()

using namespace std;

bool isBalanced(string paren);      //our isBalanced function prototype


//--------------------------------------------------------------------------------//


string paren;                       //declare string variable to hold the user's parentheses

int main()
{
    cout << "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n" << endl;
    
    string name = "liam is a cool guy";
    bool found;
    found is set to false;
    cout << "name.find('s') " << name.find('s') << endl;

    cout << "please enter your string of parentheses." << endl; //prompt user for their parentheses
    cout << "user input:   ";       
    cin >> paren;                   
    cout << boolalpha << isBalanced(paren) << endl;             //call and output isBalanced function

    cout << "\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-" << endl;

    return 0;                       //return successful exit status
}


//--------------------------------------------------------------------------------//


bool isBalanced(string paren)               //our function that will check whether the paren string is balanced or not
{
    while (paren.find("()") < string::npos) //while the substring "()" is still found in the paren string...
    {
        paren.erase(paren.find("()"), 2);   //...erase "()"...
        cout << paren << endl;              //...and output the new paren string
    }


    if (paren.empty()==0)   //if, after all "()" erasures, paren is NOT empty...
    {   
        cout << "Your string is not balanced. Balance = ";
        return false;       //...return false (the string is NOT balanced)
    }
    else                    //else, if after all "()" erasures, paren IS empty...
    {       
        cout << "Your string is balanced! Balance = ";
        return true;        //...return true (the string IS balanced)
    }
}


/*

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  ~ ~ ~ ~ ~ ~ ~ Poetry of the Day! ~ ~ ~ ~ ~ ~ ~ 
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

Today's Poem:
Clair de Lune by Paul Verlaine, written in 1869
Both the English and French versions!

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
    
Your soul is like a landscape fantasy,
Where masks and Bergamasks, in charming wise,
Strum lutes and dance, just a bit sad to be
Hidden beneath their fanciful disguise.

Singing in minor mode of life's largesse
And all-victorious love, they yet seem quite
Reluctant to believe their happiness,
And their song mingles with the pale moonlight,

The still moonlight, sad and beautiful,
Sets the birds softly dreaming in the trees,
And makes the marbled fountains, gushing, streaming--
Slender jet-fountains—sob their ecstasies.

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

Votre âme est un paysage choisi
Que vont charmant masques et bergamasques
Jouant du luth et dansant et quasi
Tristes sous leurs déguisements fantasques.

Tout en chantant sur le mode mineur
L'amour vainqueur et la vie opportune
Ils n'ont pas l'air de croire à leur bonheur
Et leur chanson se mêle au clair de lune,

Au calme clair de lune triste et beau,
Qui fait rêver les oiseaux dans les arbres
Et sangloter d'extase les jets d'eau,
Les grands jets d'eau sveltes parmi les marbres.
    
*/

```


```cpp
//----------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program determines whether a user-inputted string is a palindorme or not
// AUTHOR ---------- liam beckman
// DATE ------------ 11 November 2016 friday
// SOURCES --------- none
// ASSIGNMENT ------ cs161 assignment 7 palindromes (due November 11th 2016)
// COMPILED WITH --- gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.2) in Sublime Text 3 Build 3126
//-----------------------------------------------------------------------------------------------------------


#include <iostream>                     //cout, cin, getline()
#include <string>                       //at(), length(), erase()

using namespace std;                    //liam is a cool guy! yug looc a si mail?

string sentenceBuilder(string input);   //function removes puntuation and spaces from input string
bool isPalindrome(string sentence);     //function chcks whether string is a palindrome

char input[100000];                     //user input with letters, punctuation, and spaces included 
string sentence;                        //sentence after all punctuation and spaces are removed


//--------------------------------------------------------------------------------//


int main()
{
    cout << "please enter your sentence" << endl;           //prompt user to enter their input
    cout << "user input: ";                                 //
    cin.getline(input,100000);                              //cin the line (as long as it is under 100,000 characters)
    sentenceBuilder(input);                                 //call our sentenceBuilder function
    cout << boolalpha << isPalindrome(sentence) << endl;    //call and output our isPalindorme function

    return 0;                                               //return sucessful exit status
}


//--------------------------------------------------------------------------------//


string sentenceBuilder(string input)                //function removes puntuation and spaces from input string
{
    for (int i = 0; i < input.length(); i++)
    {
        if (input.at(i)>='a' && input.at(i)<='z'||input.at(i)>='A' && input.at(i)<='Z') //if the inputted character is a letter...
            sentence += tolower(input.at(i));       //...append a lowercase version of the letter to the sentence string
    }

    return sentence;                                //return the sentence to main()
}


//--------------------------------------------------------------------------------//


bool isPalindrome(string sentence)                          //function chcks whether string is a palindrome
{
    for (int i = 0; i < sentence.length(); i++)
    {
        while(sentence.length() > 1)                        //while there is at least 2 letters left in the string...
        {
            if (sentence.at(0) == sentence.at(sentence.length()-1))     //...and if the first letter equals the last letter
            {
                cout << sentence << endl;                   //output the sentence
                sentence.erase(0,1);                        //erase the first letter
                sentence.erase(sentence.length()-1,1);      //erase the last letter

            }
            else    //otherwise...
            {
                cout << sentence << endl;                   //output the sentence
                cout << "Your string is not a palindrome. Palindrome = ";
                return false;                               //and return false
            }

        }
        cout << "Your string is a palindrome! Palindrome = ";
        return true;        //if there are no letters left, return true
    }

}


/*

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
~ ~ ~ ~ ~ ~ ~ ~ Poem of the Day! ~ ~ ~ ~ ~ ~ ~ ~ ~
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Today's Poem:
Swan and Shadow, by John Hollander, written in 1966

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*



                            Dusk
                         Above the
                    water hang the
                              loud
                             flies
                             Here
                            O so
                           gray
                          then
                         What             A pale signal will appear
                        When         Soon before its shadow fades
                       Where       Here in this pool of opened eye
                       In us     No Upon us As at the very edges
                        of where we take shape in the dark air
                         this object bares its image awakening
                           ripples of recognition that will
                              brush darkness up into light
even after this bird this hour both drift by atop the perfect sad instant now
                              already passing out of sight
                           toward yet-untroubled reflection
                         this image bears its object darkening
                        into memorial shades Scattered bits of
                       light     No of water Or something across
                       water       Breaking up No Being regathered
                        soon         Yet by then a swan will have
                         gone             Yes out of mind into what
                          vast
                           pale
                            hush
                             of a
                             place
                              past
                    sudden dark as
                         if a swan
                            sang


*/
```

<!--<script src="https://gist.github.com/lbeckman314/a089c10d7e4b1d9499439e377e4167f9.js"></script>-->

[view raw code](https://raw.githubusercontent.com/lbeckman314/cs161/master/week7/cs161_assignment7_palindrome.cpp)


11:06 american airlines
11:15 cell phone area
pick up on upper deck end american airline
503 305 1727
from charlotte north caroline
flith nr 1787