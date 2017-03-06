#include <iostream>     //cout, cin
#include <cstring>      //cpystr()
#include "taskList.h"    //Student class definition
using namespace std;

int readInFile(taskStruct Task[])
{
    ifstream inFile;
    char path[100] = "./Groceries.txt";
    inFile.open(path);


    int numberOfTasks=0;
    while (!inFile.eof())
    {
        if (!inFile)
            break;

        inFile.get(Task[numberOfTasks].name, '\n');
        inFile.get(Task[numberOfTasks].description, '\n');
        inFile >> Task[numberOfTasks].dueDateMonth;
        inFile >> Task[numberOfTasks].dueDateDay;
        inFile >> Task[numberOfTasks].dueDateYear;
        numberOfTasks++;
    }

    inFile.close();

    return numberOfTasks;
}


void addTask(taskStruct Task[], int &numberOfTasks)
{
    cin.ignore(100, '\n');
    cout << "enter name: ";
    cin.get(Task[numberOfTasks].name, 100, '\n');
    cin.ignore(100, '\n');

    cout << "enter short description: ";
    cin.get(Task[numberOfTasks].description, 100, '\n');
    cin.ignore(100, '\n');

    cout << "enter a day: ";
    cin >> Task[numberOfTasks].dueDateDay;
    cout << "enter a month: ";
    cin >> Task[numberOfTasks].dueDateMonth;
    cout << "enter a year: ";
    cin >> Task[numberOfTasks].dueDateYear;
    
    numberOfTasks++;

    return;
}


void findTask(taskStruct Task[], char search[])
{
	cout << "findTask()" << endl;

    for (int i = 0; i < 200; i++)
        if (Task[i].name != search)
        {
            cout << "name found" << endl;
            cout << Task[i].name;
        }
        else if (Task[i].description != search)
        {
            cout << "description found" << endl;
            cout << Task[i].description << endl;
        }

    return;
}


void printAllTasks(taskStruct Task[], int numberOfTasks)
{
    cout << "\n----------TASKS-----------" << endl;
    for (int i=0; i < numberOfTasks; i++)
    {
        cout << "Name: " << Task[i].name << endl;
        cout << "Description: " << Task[i].description << endl;
        cout << "Due Date (d/m/y): " << Task[i].dueDateDay << "/" << Task[i].dueDateMonth << "/" << Task[i].dueDateYear << endl;
        cout << "--------------------------" << endl;
    }

    return;
}


void printSchedule(taskStruct Task[], int numberOfTasks)
{
    int currentMonth = 0;	
    int currentDay = 0;   
    int currentYear = 0;

    cout << "enter the current day (1 to 31): ";
    cin >> currentDay;
    cout << "enter the current month (1 to 12): ";
    cin >> currentMonth;
    cout << "enter the current year (must be larger than or equal to 2017): ";
    cin >> currentYear;

    double currentNumberOfDays = (365.2422 * currentYear) + (30.445 * currentMonth) + (currentDay);

    for (int i = 0; i < numberOfTasks; i++)
    {
        double dueDateNumberOfDays = (365.2422 * Task[i].dueDateYear) + (30.445 * Task[i].dueDateMonth) + (Task[i].dueDateDay);
        
        if (dueDateNumberOfDays < currentNumberOfDays)
            cout << "\n!!!! PAST DUE !!!!" << endl;
        else if (dueDateNumberOfDays == currentNumberOfDays)
            cout << "\n--Today's Tasks­­--" << endl;
        else if (dueDateNumberOfDays > currentNumberOfDays)
            cout << "\n--Coming up soon!­­--" << endl;

            //cout << "dueDateNumberOfDays: " << dueDateNumberOfDays << endl;
            //cout << "currentNumberOfDays: " << currentNumberOfDays << endl;
            cout << "Name: " << Task[i].name << endl;
            cout << "Description: " << Task[i].description << endl;
            cout << "Due Date: " << Task[i].dueDateDay << "/" << Task[i].dueDateMonth << "/" << Task[i].dueDateYear << endl;
            cout << "--------------------------\n" << endl;
    }

    return;
}


void modifyTask(taskStruct Task[], int numberOfTasks)
{
    int modifyChoice = 0;

    cin.ignore(100, '\n');
    char search[100];
    cout << "enter task to modify: ";
    cin.get(search, 100, '\n');
    cin.ignore(100, '\n');

    for (int i = 0; i < numberOfTasks; i++)
    {
        if (strcmp(Task[i].name, search) == 0 || strcmp(Task[i].description, search) == 0)
        {
            cout << "MODIFY-----------" << endl;
            cout << "1 - name" << endl;
            cout << "2 - description" << endl;
            cout << "3 - due date" << endl;
            cout << "4 - quit" << endl;
            cout << "Enter choice:" << endl;
            cin >> modifyChoice;
            cin.ignore(100, '\n');
            
            switch(modifyChoice)
            {
                case 1:
                    cout << "enter new name: ";
                    cin.get(Task[i].name, 100, '\n');
                    cin.ignore(100, '\n');
                    break;
                case 2:
                    cout << "enter new description: ";
                    cin.get(Task[i].description, 100, '\n');
                    cin.ignore(100, '\n');
                    break;
                case 3:
                    cout << "enter new due date: ";
                    cout << "enter a day: ";
                    cin >> Task[i].dueDateDay;
                    cout << "enter a month: ";
                    cin >> Task[i].dueDateMonth;
                    cout << "enter a year: ";
                    cin >> Task[i].dueDateYear;
                    break;
                case 4:
                    break;
            }
        }
    }

    return;
}