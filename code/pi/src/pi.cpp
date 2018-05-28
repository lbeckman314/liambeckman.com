//----------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program approximates pi to 5 (or more!) decimal points.
// AUTHOR ---------- liam beckman
// DATE ------------ 20 october 2016 thursday
// SOURCES --------- http://stackoverflow.com/questions/1727881/how-to-use-the-pi-constant-in-c#1727896
// ASSIGNMENT ------ cs161 lab 4 program 2/2
// COMPILED WITH --- gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.2) in Sublime Text 3 Build 3126
//-----------------------------------------------------------------------------------------------------------


#include <iostream>
#include <iomanip>
#include <cmath>            //abs(), pow(), log10(), M_PI
using namespace std;

int main()
{
while (true)                //beginning of optional program repeat
{
    double pi = 0;          //our pi variable!
    int    i  = 1;          //our placeholder value that will be used to help in approximating pi
    char   mode;

    cout << "Please select mode of operation: "                         << endl;    //selecting a program mode
    cout << "SIMPLE   (s) ---- I just want to print pi, nothing fancy." << endl;    //simple mode (no frills)
    cout << "ADVANCED (a) ---- I want to select how pi is calculated."  << endl;    //advanced mode (more options)
    cout << "Mode select: ";
    cin  >> mode;           //USER SELECTES THE MODE
    cout << "\n";



//-------------------------------- S I M P L E   M O D E -------------------------------------//

    if (mode == 's')
    {
        cout << "SIMPLE Mode selected" << endl << endl;
        while (i < 100)                                         //our sequence will consist of 100 iterations
            {
                pi += pow(-1, i - 1)/(2 * i - 1);               //pi = 1/1 - 1/3 + 1/5 - 1/7 + 1/9...- 1/199,999
                i++;                                            //notch up i
            }
            pi *= 4;                                            //getting the final value of our pi
            cout <<  setprecision(6);
            cout << "pi ------------ " << pi << endl;           //outputing the final value of pi
    }



//------------------------------ A D V A N C E D   M O D E -------------------------------------//

    else if (mode == 'a')
    {
        cout << "ADVANCED Mode selected" << endl << endl;
        char method;

        cout << "Please select how pi will be calculated: "                  << endl;   //selecting calculation mode
        cout << "ITERATION (i) ---- running 1/1 - 1/3 + 1/5 - 1/7 + 1/9...." << endl;   //iteration mode ( 1/1-1/3+1/5...+-1/(2n-1) )
        cout << "VARIANCE  (v) ---- within a number of decimal places to PI" << endl;   //variance mode ( abs(pi-M_PI) < )
        cout << "Method select: ";
        cin  >> method;
        cout << "\n";

        cout << fixed << showpoint;                             //formatting our cout


//--------------------------------- i t e r a t i o n -------------------------------------//

        if(method == 'i')
        {
            cout << "iteration method selected" << endl << endl;
            int iterations;
            cout << "Enter number of iterations (i.e. 10000): ";
            cin >> iterations;

            while (i < iterations)                              //our sequence will consist of i iterations
                {
                pi += pow(-1, i - 1)/(2 * i - 1);               //pi = 1/1 - 1/3 + 1/5 - 1/7 + 1/9...+-1/(2i-1)
                cout << "iteration " << i << "-------"
                     << 4 * pi << endl;
                i++;                                            //notch up i
                }

            pi *= 4;                                            //getting the final value of our pi
            cout <<  setprecision(10);
            cout  << "pi after " << iterations
                  << " iterations: " << pi << endl;             //outputing the final value of pi

        }



//---------------------------------- v a r i a n c e -------------------------------------//

        else if(method = 'v')
        {
            cout << "variance method selected" << endl << endl;
            double variance;
            cout << "Enter precision (i.e. 0.000001 or 1e-6): ";
            cin >> variance;

            cout << setprecision(-log10(variance));             //i.e. 0.000001 translates to setprecision(6)

            cout <<setw(15) << left << setfill('-') << "VARIANCE";
            cout << "PI" << endl << endl;;

            while (abs(M_PI-4*pi) > variance)                   //true while real by and calculated pi differ...
            {                                                   //      ...pi more than the specified precision
                pi += pow(-1, i - 1)/(2 * i - 1);               //pi = 1/1 - 1/3 + 1/5 - 1/7 + 1/9...+-1/(2i-1)
                cout << setw(15) << left                        //setting the format for our output
                     << setfill('-') << abs(M_PI-4*pi);                 //printing calculated pi along with...
                cout << 4 * pi << endl;                 //      ...the variance
                i++;                                            //notch up i
            }

            pi *= 4;                                            //getting the final value of our pi
            cout << "\n\n" << "pi within " << variance << ": "
                 << pi << endl;                                 //outputing the final value of pi
        }
    }



//-----------------------  R E P E A T   P R O G R A M    O R   E X I T ? ----------------------------//

char input;
cout << "\n\n";
cout << "Would you like to RERUN the program? (r)" << endl;     //user can choose to repeat the program...
cout << "Would you like to EXIT the program?  (e)" << endl;     //...or choose to exit out of the program
cout << "User input: ";
cin  >> input;          //RERUN ('r') or EXIT ('e')
cout << "\n\n";
if (input!='r')         //if user input != RERUN...
    break;              //then break loop and exit program
}
    return 0;
}
