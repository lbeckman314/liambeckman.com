/*********************************************************************
** Author: liam beckman
** Date: 01 November 2017
** Description: recursively converts binary to decimal and/or decimal to binary.
*********************************************************************/

#include <string>
#include <cmath>
using std::string;
using std::stoi;

/*********************************************************************
** Description: takes a binary in string form and returns the decimal value as an integer.
*********************************************************************/
double binToDec(string userBin)
{
   int length = userBin.length();
   if (length == 1)
       return stoi(userBin);
   else
       return binToDec(userBin.substr(1,length)) + pow(2, length-1) * stoi(userBin.substr(0,1));
}

/*********************************************************************
** Description: takes a decimal integer and returns the binary value in string form.
*********************************************************************/
string decToBin(int userDec)
{
    string binString = "";
    int num = 0;

    if (userDec <= 0)
       return "";
    else
    {
        binString = decToBin(userDec/2) + static_cast<char>(num = userDec % 2 + '0');
        return binString;
    }
}

/*
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
Today's Poem:
    Recursion
    by Maria M. Benet

https://www.poetryfoundation.org/poetrymagazine/browse?contentId=39682
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

A tomato I overlooked on the window ledge,
remembers the hold of vine, the brace of ground,
and puts down roots inside its own flesh.

Halved under the blade of my knife,
the tomato unbinds its shoots, sends them
into an abyss of air and light—

Here at my desk I sit remembering,
putting down words far from the vine
of a native tongue, as if they could be roots,

each, like the tomato with its faith curlicues
in pale inward shoots, calling to itself,
back to the source of fruit.

~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
*/





