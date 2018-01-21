
//Program 3:

//If you buy a 40GB hard drive, then chances are that the actual storage on the hard drive is not 40GB. This is due to the fact that, typically, a manufacturer uses 1000 bytes as the value of 1KB, 1000Kb as the value of 1MB, and 1000MB as the value of 1GB. Therefore, a 40GB hard drive contains 40,000,000,000 bytes. However, in computer memory, as given in Table 1-1 (Chapter 1), 1KB is equal to 1024 bytes, and so on. So the actual storage on a 40GB hard drive is approximately 37.25GB! Write a program that prompts the user to enter the size of the hard drive specified by the manufacturer, on the hard drive box, and outputs the actual storage capacity of the hard drive.



//This programs converts decimal byte capacity to binary byte capacity.

/*
*NAME: liam beckman
*ASSIGNMENT: 2 magic square
*DATE: mon 26 september 2016
*SOURCES: http://www.tweakandtrick.com/2013/07/lost-storage-space.html http://radtke.eu/xiv-storage-blog/howto/56-binary-and-decimal-capacity-conversion
*/

#include <iostream>

using namespace std;
int main()
{
	double byteHD;
	double byteReal;
	cout << "enter your hardware big stuff!" << endl;
	cin >> byteHD;
	if (byteHD < 1000000)   //1_000_000 kilobyte
	{
		 byteReal = byteHD * 1000/1024;
	}
	else if (byteHD < 1000000000)   //1_000_000_000 megabyte
	{
		 byteReal = byteHD * 1000*1000/(1024*1024);
	}
	else if (byteHD < 1000000000000)    //1_000_000_000_000 gigbyte
	{
		 byteReal = byteHD * 1000*1000*1000/(1024*1024*1024);
	}
	else if (byteHD < 1000000000000000)    //1_000_000_000_000_000 terabyte
	{
		 byteReal = byteHD - byteHD * 1000*1000*1000*1000/(1024*1024*1024*1024);
	}



	cout << byteReal;

	return 0;
}


