//------------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program outputs the first 100 primes...
//		   --------- ....as well as the 10th, 100th, 1000th, 10,000th, 100,000th and 1,000,000th primes. 
// AUTHOR ---------- liam beckman
// DATE ------------ 04 november 2016 friday
// SOURCES --------- none
// ASSIGNMENT ------ cs161 assignment 6 primes (due november 04th 2016)
// COMPILED WITH --- gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.2) in Sublime Text 3 Build 3126
//-------------------------------------------------------------------------------------------------------------


#include <iostream>		//cout	
#include <cmath>		//sqrt()
#include <iomanip>		//setw()
using namespace std;


bool isPrime (int n);			//used to output the first hundred primes
bool NthPrime (int nPrime);		//used to print the 10th, 100th,..., 100,000th and 1,000,000th primes.
//int primeArray[100000] = {3};

int main()
{



	int nthPrimeNumber=4;	//

	cout << "\n\n";			//

	for (int nPrime = 5; nthPrimeNumber < 1E6; nPrime+=2)		//for the prime numbers between 5 and 1,000,000
	{
		for (int nTest = 3; nTest <= sqrt(nPrime); nTest+=2)	//for the test numbers between 3 and the square root of the prime number
		{
			if (nPrime % nTest == 0)// && NthPrime(nPrime) == 0) 		//if the prime number % test number == 0
				break;											//the number is NOT prime
			if (sqrt(nPrime) - nTest < 2)// NthPrime(nPrime) == 1) 		//if the difference between the square root of the number...
			{															//...and the test number is less than two
				nthPrimeNumber++;								//increase the number of primes
				cout << nthPrimeNumber << "     " << nPrime << endl;
				switch(nthPrimeNumber)							//and start the switch
				{
					case 10 : cout << left << setw(15) << "n:" << setw(10) << "nth Prime:" << endl;			//out the HEADER "n:	nth Prime:" 
							  cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl; break;		//output the 10th prime number
					case 100 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl; break;		//output the 100th prime number
					case 1000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl; break;	//output the 1,000th prime number
					case 10000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl; break;	//output the 10,000th prime number
					case 100000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl; break;	//output the 100,000th prime number
					case 1000000 : cout << setw(15) << nthPrimeNumber << setw(10) << nPrime << endl; break;	//output the 1,000,000th prime number
				}
			}
		}
	}	

	return 0;	//return successful exit status
}


bool isPrime (int n)					//our isPrime() function for the output of the first hundred primes
{

	for (int isPrimeTest = 2; isPrimeTest < n; isPrimeTest++)	//
	{
		if (n % isPrimeTest == 0)		//if the number % test number is 0
			return false;				//the number is NOT prime
		else if (n - isPrimeTest == 1)	//else if the difference between the number and the test number and is 1
			return true;				//the number is prime
	}
}


bool NthPrime (int nPrime)				//our NthPrime(0 function for the output of the 10^x primes
{
	for (int NthPrimeTest = 3; NthPrimeTest <= sqrt(nPrime); NthPrimeTest+=2)		//
	{
		if (nPrime % NthPrimeTest == 0)			//if the number % test number is 0
			return false;						//the number is NOT prime
		if (sqrt(nPrime) - NthPrimeTest < 2)	//if the difference between the square root of the number and the test number is less than two
			return true;						//the number is prime
	}
}
