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
