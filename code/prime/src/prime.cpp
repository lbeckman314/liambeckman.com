//------------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program outputs the first 100 primes...
//         --------- ....as well as the 10th, 100th, 1000th, 10,000th, 100,000th and 1,000,000th primes.
// AUTHOR ---------- liam beckman
// DATE ------------ 04 november 2016 friday
// SOURCES --------- http://www.cplusplus.com/forum/beginner/14666/ (time function)
// ASSIGNMENT ------ cs161 assignment 6 primes (due november 04th 2016)
// COMPILED WITH --- gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.2) in Sublime Text 3 Build 3126
//-------------------------------------------------------------------------------------------------------------


#include <iostream>     //cout
#include <cmath>        //sqrt()
#include <iomanip>      //setw()
#include <time.h>
using std::cout;
using std::endl;
using std::setw;
using std::left;


//used to output the first hundred primes
bool isPrime (int n);

//used to print the 10th, 100th,..., 100,000th and 1,000,000th primes.
bool NthPrime (int nPrime);

int main()
{
    int nthPrimeNumber=4;

    cout << "\n";

    clock_t timeBegin;
    timeBegin=clock();

    //for the prime numbers between 5 and 1,000,000
    for (int nPrime = 5; nthPrimeNumber < 1E6; nPrime+=2)
    {
        //for the test numbers between 3 and the square root of the prime number
        for (int nTest = 3; nTest <= sqrt(nPrime); nTest+=2)
        {
            //if the prime number % test number == 0, then number is not prime
            if (nPrime % nTest == 0)
                break;

            //if the difference between the square root of the number...
            if (sqrt(nPrime) - nTest < 2)
            {
                nthPrimeNumber++;
                switch(nthPrimeNumber)
                {
					//out the HEADER "n:    nth Prime:"
                    case 5: cout << left << setw(15) << "n:" << setw(10) << "nth Prime:" << endl;

					//output the 10th prime number
                    case 10: cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl;
                    break;

					//output the 100th prime number
                    case 100 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl;
                    break;

                    //output the 1,000th prime number
                    case 1000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl;
                    break;

					//output the 10,000th prime number
                    case 10000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl;
                    break;

                    //output the 100,000th prime number
                    case 100000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl;
                    break;

                    //output the 1,000,000th prime number
                    case 1000000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl;
                    break;
                }
            }
        }
    }

    clock_t timeEnd = clock();
    double timeDiff = (static_cast<double>(timeEnd) - static_cast<double>(timeBegin)) / CLOCKS_PER_SEC;
    cout << "\n";
    cout << "found in " << timeDiff  << " seconds" << endl;

    return 0;
}

//our isPrime() function for the output of the first hundred primes
bool isPrime (int n)
{

    for (int isPrimeTest = 2; isPrimeTest < n; isPrimeTest++)
    {
        if (n % isPrimeTest == 0)
            return false;
        else if (n - isPrimeTest == 1)
            return true;
    }
}


//our NthPrime(0 function for the output of the 10^x primes
bool NthPrime (int nPrime)
{
    for (int NthPrimeTest = 3; NthPrimeTest <= sqrt(nPrime); NthPrimeTest+=2)
    {
        if (nPrime % NthPrimeTest == 0)
            return false;
        if (sqrt(nPrime) - NthPrimeTest < 2)
            return true;
    }
}
