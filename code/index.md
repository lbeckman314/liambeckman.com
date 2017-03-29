---
layout: my-default
titile: code
--- 

<!--<!DOCTYPE html>-->
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

#myTable a {
    color: #4183c4;
    text-decoration: none;
}
#myTable a:hover {
    text-decoration: underline;
}

* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('/assets/octicons-5.0.1/lib/svg/octoface.svg');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myTable {
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: 0.9em;
  table-layout: fixed;
  word-wrap: break-word;
  width: 100%
}

#myTable th, #myTable td {
  text-align: left;
  padding: 12px;
}

#myTable tr {
  border-bottom: 1px solid #ddd;
}

#myTable tr.header, #myTable tr:hover {
  background-color: #f1f1f1;
}

#myTable tr:nth-child(2n) {
  background-color: #f8f8f8;
}

img.center {
    display: block;
    margin: 0 auto;
}

.container{
    display: flex;
}
.fixed{
    width: 33.333%;
    /*margin-right: 1%;*/
    padding-bottom: : 10%;  
    word-wrap: break-word;
}
.flex-item {
    flex-grow: 1;
}

#featured {
  padding: 10px;
}

object {
  vertical-align: middle;
}

.border {
  margin-left: 10%;
  margin-right: 10%;
  border-bottom: 1px solid #d5d5d5;
}

</style>
</head>
<body>

<h2>Featured!</h2>

<div class="container">

<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 33.333%">
    <p style="text-align: center; padding-bottom: 10px;"><a href="https://lbeckman314.github.io/WOAH">WOAH!</a></p>
    <img class="center" src="/images/circleCabin.png" style="width: 60%; padding-bottom: 10px;">
    <p style="text-align: center; padding-bottom: 10px;">This program overthrows the world's governments and institutes a new world order!</p>
    <div class="border"></div>
    <p style="text-align: center; padding-top: 10px;"><a href="https://github.com/lbeckman314/WOAH/">github</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/lbeckman314/WOAH/tarball/master">tar.gz</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/lbeckman314/WOAH/zipball/master">zip</a></p>

  </div>

<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 33.333%; margin-left: 1%; margin-right: 1%">
    <p style="text-align: center; padding-bottom: 10px;"><a href="https://lbeckman314.github.io/WOAH">WOAH!</a></p>
    <img class="center" src="/images/circleCabin.png" style="width: 60%; padding-bottom: 10px;">
    <p style="text-align: center; padding-bottom: 10px;">This program overthrows the world's governments and institutes a new world order!</p>
    <div class="border"></div>
    <p style="text-align: center; padding-top: 10px;"><a href="https://github.com/lbeckman314/WOAH/">github</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/lbeckman314/WOAH/tarball/master">tar.gz</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/lbeckman314/WOAH/zipball/master">zip</a></p>

  </div>

  <div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 33.333%">
    <p style="text-align: center; padding-bottom: 10px;"><a href="https://lbeckman314.github.io/WOAH">WOAH!</a></p>
    <img class="center" src="/images/circleCabin.png" style="width: 60%; padding-bottom: 10px;">
    <p style="text-align: center; padding-bottom: 10px;">This program overthrows the world's governments and institutes a new world order!</p>
    <div class="border"></div>
    <p style="text-align: center; padding-top: 10px;"><a href="https://github.com/lbeckman314/WOAH/">github</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/lbeckman314/WOAH/tarball/master">tar.gz</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/lbeckman314/WOAH/zipball/master">zip</a></p>

  </div>

</div>

<br /><br /><br />

<h2>My Code!</h2>

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Type in a name or description..." title="Unlimited POWER!!!">

<table id="myTable">
  <tr class="header">
    <th onclick="sortTable(0)" style="width:20%;">Name <object type="image/png" data="/assets/both.png"></object> </th>
    <th onclick="sortTable(1)" style="width:40%;">Description <object type="image/png" data="/assets/both.png"></object> </th>
    <th onclick="sortTable(2)" style="width:20%;">Last Updated <object type="image/png" data="/assets/both.png"></object> </th>
    <th style="width:20%;">Location </th>
  </tr> 
<tr>
	<td>adSurvey<br />├──adSurvey.txt<br />└──adSurvey.cpp</td>
	<td> This program determines both the longest word and frequencies of different english words.</td>
	<td>2016-10-25</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/adSurvey.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/adSurvey.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>arraySelectionSorter.cpp</td>
	<td> This program times the sorting of a randomly populated set of arrays vis selection sorting.</td>
	<td>2016-12-08</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/arraySelectionSorter.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/arraySelectionSorter.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>bcFerryCostCalculator.cpp</td>
	<td> This program calculates the cost of a BC ferry for anyone and everyone!</td>
	<td>2016-10-21</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/bcFerryCostCalculator.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/bcFerryCostCalculator.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>BinomialToTrinomial.cpp</td>
	<td> This program takes two user-inputed binomials and returns the product in the form of a trinomial.</td>
	<td>2016-10-12</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/BinomialToTrinomial.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/BinomialToTrinomial.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>caesarEncryption.cpp</td>
	<td> This program decrypts a text filebased on the Caesar cipher.</td>
	<td>2016-11-18</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/caesarEncryption.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/caesarEncryption.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>caesarEncryptionCREATOR_TESTING.cpp</td>
	<td> This program decrypts a text filebased on the Caesar cipher.</td>
	<td>2016-11-18</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/caesarEncryptionCREATOR_TESTING.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/caesarEncryptionCREATOR_TESTING.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>classGradesCalculator.cpp</td>
	<td> This program outputs average scores and final grades for a given class grade set</td>
	<td>2016-12-01</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/classGradesCalculator.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/classGradesCalculator.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>decimalByteToBinaryByte.cpp</td>
	<td>This programs converts decimal byte capacity to binary byte capacity.</td>
	<td>2016-09-06</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/decimalByteToBinaryByte.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/decimalByteToBinaryByte.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>decimalByteToBinaryBytePlus.cpp</td>
	<td> This programs converts decimal byte capacity to binary byte capacity.</td>
	<td>2016-10-01</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/decimalByteToBinaryBytePlus.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/decimalByteToBinaryBytePlus.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>englishLanguageAnalyzer.cpp</td>
	<td> This program determines both the longest word and frequencies of different english words</td>
	<td>2016-10-27</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/englishLanguageAnalyzer.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/englishLanguageAnalyzer.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>fibonacciOutput.cpp</td>
	<td> This program attempts to summon the spirit of fibonnaci.</td>
	<td>2016-10-20</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/fibonacciOutput.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/fibonacciOutput.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>firstMillionPrimes.cpp</td>
	<td> This program outputs the first 100 primes...</td>
	<td>2016-11-04</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/firstMillionPrimes.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/firstMillionPrimes.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>itsAlive.sh</td>
	<td>  -- This program installs my favorite programs on a fresh install of ubuntu!</td>
	<td>libraryBookOutput.cpp</td>
	<td> This program allows one to search their library for a given author or title string.</td>
	<td>2016-12-01</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/libraryBookOutput.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/libraryBookOutput.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>libraryBookOutputPlus.cpp</td>
	<td> This program outputs sorted book names of a library</td>
	<td>2016-12-09</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/libraryBookOutputPlus.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/libraryBookOutputPlus.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>linearEquationSolver.cpp</td>
	<td> This program solves two linear equations of the form ax + by = c, returning values for x and y.</td>
	<td>2016-10-12</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/linearEquationSolver.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/linearEquationSolver.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>magicSquareChecker.cpp</td>
	<td>This programs determines whethere a user's 4x4 matrix is a magic square!</td>
	<td>2016-09-06</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/magicSquareChecker.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/magicSquareChecker.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>magicSquareCheckerPlus.cpp</td>
	<td>This programs determines whethere a user's 4x4 matrix is a magic square!</td>
	<td>2016-09-27</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/magicSquareCheckerPlus.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/magicSquareCheckerPlus.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>magicSquaresCheckerWithArrays.cpp</td>
	<td> This programs determines whether a user's 4x4 matrix is a magic square, arrays included!</td>
	<td>2016-11-17</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/magicSquaresCheckerWithArrays.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/magicSquaresCheckerWithArrays.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>palindromeChecker.cpp</td>
	<td> This program determines whether a user-inputted string is a palindorme or not</td>
	<td>2016-11-11</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/palindromeChecker.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/palindromeChecker.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>parenthesesBalanceChecker.cpp</td>
	<td> This program determines whther a string of parentheses is balanced i.e. </td>
	<td>2016-11-10</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/parenthesesBalanceChecker.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/parenthesesBalanceChecker.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>piCalculator.cpp</td>
	<td> This program approximates pi to 5 or more! decimal points.</td>
	<td>2016-10-20</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/piCalculator.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/piCalculator.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>secondsToHourMinSec.cpp</td>
	<td>This program converts number of seconds to digital houtput hrminsec.</td>
	<td>2016-09-06</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/secondsToHourMinSec.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/secondsToHourMinSec.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>secondsToHourMinSecPlus.cpp</td>
	<td> This program converts number of seconds to digital output hrminsec.</td>
	<td>2016-10-01</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/secondsToHourMinSecPlus.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/secondsToHourMinSecPlus.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>simpleHoroscope.cpp</td>
	<td>This programs takes user input and outputs a projected horoscope.</td>
	<td>2016-09-06</td>
	<td></td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/simpleMenuPlusPlus.bash <a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/simpleMenuPlusPlus.bash</td>
</tr>
<tr>
	<td>simpleMenuPlusPlus.bash</td>
	<td> This program provides a new and sexier! menu interface for common NIX activities</td>
	<td>2016-11-26</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/simpleMenuPlus.sh <a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/simpleMenuPlus.sh</td>
</tr>
<tr>
	<td>simpleMenuPlus.sh</td>
	<td> This program provides a menu interface for common NIX activities</td>
	<td>2016-11-30</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/simpleMenu.sh <a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/simpleMenu.sh</td>
</tr>
<tr>
	<td>simpleMenu.sh</td>
	<td> This program provides a menu interface for common NIX activities</td>
	<td>simpleStockSimulator.cpp</td>
	<td> This program simulates the buying and selling of stocks!</td>
	<td>2016-10-12</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/simpleStockSimulator.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/simpleStockSimulator.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>stringPermutation.cpp</td>
	<td>This programs outputs the permutations of three user-inputted strings.</td>
	<td>2016-09-06</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/stringPermutation.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/stringPermutation.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>stringPermutationPlus.cpp</td>
	<td> This programs outputs the permutations of three user-inputted strings.</td>
	<td>2016-10-01</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/stringPermutationPlus.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/stringPermutationPlus.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>sublimeText<br />├──</td>
	<td>tenMillonthPrime.cpp</td>
	<td> This program outputs the first 10,000,000 primes...</td>
	<td>2016-11-17</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/tenMillonthPrime.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/tenMillonthPrime.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>testAverager.cpp</td>
	<td>This programs determines the average of five user-inputed test scores.</td>
	<td>2016-09-06</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/testAverager.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/testAverager.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>testAveragerPlus.cpp</td>
	<td> This program determines the average of five user-inputed test scores.</td>
	<td>2016-10-01</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/testAveragerPlus.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/testAveragerPlus.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>tipCalculatorPlus.py</td>
	<td> This program calculates the tax, tip, and total cost of a meal!</td>
	<td>2016-10-26</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/tipCalculatorPlus.py <a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/tipCalculatorPlus.py</td>
</tr>
<tr>
	<td>trinomialRootFinder.cpp</td>
	<td> This program returns the roots of a trinomial.</td>
	<td>2016-10-12</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/trinomialRootFinder.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/trinomialRootFinder.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>vowelsAndConsonantCounter.cpp</td>
	<td> This program determines both the longest word and frequencies of different english words.</td>
	<td>2016-10-27</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/vowelsAndConsonantCounter.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/vowelsAndConsonantCounter.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
<tr>
	<td>weekdayOfFutureDate.cpp</td>
	<td> This programs transports you into the future or the past! up to 5,883,516 years</td>
	<td>2016-10-12</td>
	<td><a href="https://www.github.com/lbeckman314/codeVault/blob/master/weekdayOfFutureDate.cpp">github <img src="/assets/mark-github.png" alt="github logo"></a><a href="https://raw.githubusercontent.com/lbeckman314/codeVault/blob/master/weekdayOfFutureDate.cpp"> <br />raw code <img src="/assets/code.png" alt="code logo"></a></td>
</tr>
</table>
<script>
function myFunction() 
{
  var input, filter, table, tr, tdName, tdDesc, i, tdLastUpdated;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) 
  {
    tdName = tr[i].getElementsByTagName("td")[0];
    tdDesc = tr[i].getElementsByTagName("td")[1];
    tdLastUpdated = tr[i].getElementsByTagName("td")[2];
    if (tdDesc) 
    {
      if (tdName.innerHTML.toUpperCase().indexOf(filter) > -1 || tdDesc.innerHTML.toUpperCase().indexOf(filter) > -1 || tdLastUpdated.innerHTML.toUpperCase().indexOf(filter) > -1) 
      {
        tr[i].style.display = "";
      } 
      else 
      {
        tr[i].style.display = "none";
      }
    }       
  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  var object = document.getElementsByTagName("OBJECT")[n];
  object.setAttribute('data', '/assets/both.png') //change png to svg if you'd like


  for (var i = 2; i >= 0; i--) {
    if (i != n)
    {
      var obj = document.getElementsByTagName("OBJECT")[i];
      if (obj.data != "/assets/both.png")
      {
        /////////////////obj.data = "/assets/both.png"
        obj.setAttribute('data', '/assets/both.png');
      }
    }
  }

  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        object.setAttribute('data', '/assets/up.png') //change png to svg if you'd like
        //document.getElementsByTagName("object").setAttribute('data', '/assets/up.svg');
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        object.setAttribute('data', '/assets/down.png') //change png to svg if you'd like;
        //document.getElementsByTagName("object").setAttribute('data', '/assets/down.svg');
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
</script>

</body>
</html>
