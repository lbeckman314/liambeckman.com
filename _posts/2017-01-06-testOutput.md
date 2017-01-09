---
layout: my-default
title: program
---

```cpp
//------------------------------------------------------------------------------------------------------------
// PURPOSE --------- This program decrypts a text file  based on the Caesar cipher.
// AUTHOR ---------- liam beckman
// DATE ------------ 18 november 2016 friday
// SOURCES --------- http://stackoverflow.com/questions/6171946/shifting-a-string-of-characters
// ASSIGNMENT ------ cs161 lab 8 assignment 8 encryption (due 18 november 2016 friday)
// COMPILED WITH --- gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.2) in Sublime Text 3 Build 3126
//-------------------------------------------------------------------------------------------------------------

#include <iostream>     //cin .clear() .seekg() .get()
#include <fstream>      //ifstream .close() .eof()
using namespace std;


int arrayFiller(ifstream& textFile, string filePath);   //fills up array with letter counts
char commonLetterFinder(int letters[]);                 //finds most common letter in array
void stringOutput(ifstream& textFile);                  //shifts letter in first two functions to output correct test

char ch;                                    //our letters for both the encrypted text and decrypted text
int encryptedAlphabet[26];                  //array to hold the letters of the encrypted text
int maxFreqChar = encryptedAlphabet[0];     //the most frequent character in the encrypted text (assumed to be 'e')
char mostCommonChar = 'e' - 'a';            //we assume that the most common character is 'e'
int shift;                                  //the cipher shift we want to crack!
int lastLetterPos;                          //position of the letter that will cycle to the beginning of the alphabet


//-----------------------------------------------------------------------------------//


int main()
{

    ifstream encryptedFile;                         //the encrypted text and the file path
    string encryptedFilePath = "/home/liam/Documents/pcc2017Fall/compSci1/week8/encrypted.txt";
    
    encryptedFile.open(encryptedFilePath.c_str());  //open encrypted text

    arrayFiller(encryptedFile, encryptedFilePath);  //call arrayFiller function with the encrypted text and file path
    commonLetterFinder(encryptedAlphabet);          //call the commonLetterFinder function with the encrypted text
    
    encryptedFile.clear();                          //clear the stream and...
    encryptedFile.seekg(0);                         //...rewind to the beginning of the stream so stringOutput can output the letters

    stringOutput(encryptedFile);                    //call the stringOutput function with the encrypted text
      
    encryptedFile.close();                          //close the encrypted text

    return 0;                                       //return successful exit status
}


//-----------------------------------------------------------------------------------//   



    //fills up array with letter counts
int arrayFiller(ifstream& textFile, string filePath)
{
    while(!textFile.eof())      //while NOT at the end of the file
    {
        ch = textFile.get();    //assign ch the value of letters in the encrypted text
        ch = tolower(ch);       //use tolower(ch) to lowercase the letters

        if (isalpha(ch))        //if ch is a letter
            encryptedAlphabet[ch - 'a']++;  //add 1 to the encryptedArray at position ch - 'a' ('a' = 97 in ascii)
    }
}


//-----------------------------------------------------------------------------------//


    //finds most common letter in array
char commonLetterFinder(int letters[])
{
    for (int freq = 0; freq < 26; freq++)           //for all the letters in the alphabet...
    {
        if (letters[maxFreqChar] < letters[freq])   //...if a letter has a lower frequency than the next letter... 
            maxFreqChar = freq;                     //...the next letter becomes the highest frequency letter
    }

    shift = maxFreqChar - mostCommonChar;           //cipher shift is equal to the highest frequency letter minus the most common letter
    lastLetterPos = 26 - shift;                     //last letter position is equal to the number of letters in the alphabet minus the shift
}

//-----------------------------------------------------------------------------------//
    

    //shifts letter in first two functions to output correct test
void stringOutput(ifstream& textFile)
{
    while(!textFile.eof())      //while NOT at the end of the file
    {      
        ch = textFile.get();    //assign ch the value of letters in the encrypted text
        
        if (islower(ch))        //if the letter is lower case...
            ch = (ch - 'a' + lastLetterPos) %26 + 'a';  //...ch = (convert letter to 0-26 range and shift it to the deciphered position) if letters are 26 or above, move them to the beginning of the alphabet, and finally convert letter back to ascii range
        
        else if (isupper(ch))   //else if the letter is upper-case...
            ch = (ch - 'A' + lastLetterPos) %26 + 'A';  //...same as above, except for upper-case letters
        
        cout << ch;             //and finally output the letter (e.g. the decrypted text!)
    }
    
cout << "\n\n";
cout << "------------------------------------------" << endl;
cout << "// The shift of this cipher is: " << shift << endl;            //outputs the cipher shift
cout << "// based on the most common character: " << static_cast<char>(mostCommonChar + 'a') << endl;  //outputs the most common letter
//cout << "$ the last letter position is: " << lastLetterPos << endl;   //uncomment to output the last letter position  
cout << "------------------------------------------" << endl;
    //cin.get();                //optional pause

}


//-----------------------------------------------------------------------------------//


/*

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
~ ~ ~ ~ ~ ~ ~ ~ Poetry of the Day! ~ ~ ~ ~ ~ ~ ~ ~
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Today's Poem:
The Tragedy of Julius Caesar by W. Shakespeare
Act III, Scene I, Lines 1263 - 1287

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    Cassius. I could be well moved, if I were as you:
    If I could pray to move, prayers would move me:
    But I am constant as the northern star, 1265
    Of whose true-fix'd and resting quality
    There is no fellow in the firmament.
    The skies are painted with unnumber'd sparks,
    They are all fire and every one doth shine,
    But there's but one in all doth hold his place: 1270
    So in the world; 'tis furnish'd well with men,
    And men are flesh and blood, and apprehensive;
    Yet in the number I do know but one
    That unassailable holds on his rank,
    Unshaked of motion: and that I am he, 1275
    Let me a little show it, even in this;
    That I was constant Cimber should be banish'd,
    And constant do remain to keep him so. 

    Cinna. O Caesar,— 

    Caesar. Hence! wilt thou lift up Olympus? 1280

    Decius Brutus. Great Caesar,— 

    Caesar. Doth not Brutus bootless kneel? 

    Casca. Speak, hands for me!
    [CASCA first, then the other Conspirators and
    BRUTUS stab CAESAR] 1285

    Caesar. Et tu, Brute! Then fall, Caesar. 

Dies 

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
*/
```

```
ftqpqoxmdmfuazaruzpqbqzpqzoqarftqftudfqqzoaxazuqeuzoazsdqeevgxkftqgzmzuyagepqoxmdmfuazarftqftudfqqzgzufqpefmfqearmyqduomitqzuzftqoagdeqartgymzqhqzfeufnqoayqezqoqeemdkradazqbqabxqfapueeaxhqftqbaxufuomxnmzpeituottmhqoazzqofqpftqyiuftmzaftqdmzpfameegyqmyazsftqbaiqdearftqqmdftftqeqbmdmfqmzpqcgmxefmfuazfaituotftqxmiearzmfgdqmzparzmfgdqesapqzfufxqftqympqoqzfdqebqoffaftqabuzuazearymzwuzpdqcgudqeftmfftqketagxppqoxmdqftqomgeqeituotuybqxftqyfaftqeqbmdmfuaziqtaxpftqeqfdgftefanqeqxrqhupqzfftmfmxxyqzmdqodqmfqpqcgmxftmfftqkmdqqzpaiqpnkftqudodqmfadiuftoqdfmuzgzmxuqzmnxqdustfeftmfmyazsftqeqmdqxurqxunqdfkmzpftqbgdegufartmbbuzqeeftmffaeqogdqftqeqdustfesahqdzyqzfemdquzefufgfqpmyazsyqzpqduhuzsftqudvgefbaiqderdayftqoazeqzfarftqsahqdzqpftmfitqzqhqdmzkradyarsahqdzyqzfnqoayqepqefdgofuhqarftqeqqzpeufueftqdustfarftqbqabxqfamxfqdadfamnaxuetufmzpfauzefufgfqzqisahqdzyqzfxmkuzsuferagzpmfuazazegotbduzoubxqemzpadsmzuluzsufebaiqdeuzegotradymefaftqyetmxxeqqyyaefxuwqxkfaqrrqofftqudemrqfkmzptmbbuzqeebdgpqzoquzpqqpiuxxpuofmfqftmfsahqdzyqzfexazsqefmnxuetqpetagxpzafnqotmzsqpradxustfmzpfdmzeuqzfomgeqemzpmooadpuzsxkmxxqjbqduqzoqtmftetqizftmfymzwuzpmdqyadqpuebaeqpfaegrrqdituxqqhuxemdqegrrqdmnxqftmzfadustfftqyeqxhqenkmnaxuetuzsftqradyefaituotftqkmdqmoogefayqpngfitqzmxazsfdmuzarmngeqemzpgegdbmfuazebgdeguzsuzhmdumnxkftqemyqanvqofqhuzoqempqeuszfadqpgoqftqygzpqdmneaxgfqpqebafueyufueftquddustfufueftqudpgfkfaftdaiarregotsahqdzyqzfmzpfabdahupqzqisgmdperadftqudrgfgdqeqogdufkegottmenqqzftqbmfuqzfegrrqdmzoqarftqeqoaxazuqemzpegotuezaiftqzqoqeeufkituotoazefdmuzeftqyfamxfqdftqudradyqdekefqyearsahqdzyqzfftqtuefadkarftqbdqeqzfwuzsarsdqmfndufmuzsqadsquuuuemtuefadkardqbqmfqpuzvgduqemzpgegdbmfuazemxxtmhuzsuzpudqofanvqofftqqefmnxuetyqzfarmzmneaxgfqfkdmzzkahqdftqeqefmfqefabdahqftuexqfrmofenqegnyuffqpfamomzpupiadxptqtmedqrgeqptuemeeqzffaxmieftqyaefitaxqeayqmzpzqoqeemdkradftqbgnxuosaaptqtmeradnuppqztuesahqdzadefabmeexmiearuyyqpumfqmzpbdqeeuzsuybadfmzoqgzxqeeegebqzpqpuzftqudabqdmfuazfuxxtuemeeqzfetagxpnqanfmuzqpmzpitqzeaegebqzpqptqtmegffqdxkzqsxqofqpfamffqzpfaftqytqtmedqrgeqpfabmeeaftqdxmieradftqmooayyapmfuazarxmdsqpuefduofearbqabxqgzxqeeftaeqbqabxqiagxpdqxuzcguetftqdustfardqbdqeqzfmfuazuzftqxqsuexmfgdqmdustfuzqefuymnxqfaftqymzpradyupmnxqfafkdmzfeazxktqtmeomxxqpfasqftqdxqsuexmfuhqnapuqemfbxmoqegzgegmxgzoayradfmnxqmzppuefmzfrdayftqpqbaeufadkarftqudbgnxuodqoadperadftqeaxqbgdbaeqarrmfusguzsftqyuzfaoaybxumzoqiufttueyqmegdqetqtmepueeaxhqpdqbdqeqzfmfuhqtageqedqbqmfqpxkradabbaeuzsiuftymzxkrudyzqeetueuzhmeuazeazftqdustfearftqbqabxqtqtmedqrgeqpradmxazsfuyqmrfqdegotpueeaxgfuazefaomgeqaftqdefanqqxqofqpitqdqnkftqxqsuexmfuhqbaiqdeuzombmnxqarmzzutuxmfuaztmhqdqfgdzqpfaftqbqabxqmfxmdsqradftqudqjqdoueqftqefmfqdqymuzuzsuzftqyqmzfuyqqjbaeqpfamxxftqpmzsqdearuzhmeuazrdayiuftagfmzpoazhgxeuazeiuftuztqtmeqzpqmhagdqpfabdqhqzfftqbabgxmfuazarftqeqefmfqeradftmfbgdbaeqanefdgofuzsftqxmieradzmfgdmxulmfuazarradquszqdedqrgeuzsfabmeeaftqdefaqzoagdmsqftqudyusdmfuazetuftqdmzpdmueuzsftqoazpufuazearzqimbbdabdumfuazearxmzpetqtmeanefdgofqpftqmpyuzuefdmfuazarvgefuoqnkdqrgeuzstuemeeqzffaxmieradqefmnxuetuzsvgpuoumdkbaiqdetqtmeympqvgpsqepqbqzpqzfaztueiuxxmxazqradftqfqzgdqarftqudarruoqemzpftqmyagzfmzpbmkyqzfarftqudemxmduqetqtmeqdqofqpmygxfufgpqarzqiarruoqemzpeqzftuftqdeimdyeararruoqdefatmdmeeagdbqabxqmzpqmfagfftqudegnefmzoqtqtmewqbfmyazsgeuzfuyqearbqmoqefmzpuzsmdyuqeiuftagfftqoazeqzfaragdxqsuexmfgdqetqtmemrrqofqpfadqzpqdftqyuxufmdkuzpqbqzpqzfarmzpegbqduadfaftqouhuxbaiqdtqtmeoaynuzqpiuftaftqdefaegnvqofgefamvgduepuofuazradquszfaagdoazefufgfuazmzpgzmowzaixqpsqpnkagdxmiesuhuzstuemeeqzffaftqudmofearbdqfqzpqpxqsuexmfuazradcgmdfqduzsxmdsqnapuqearmdyqpfdaabemyazsgeradbdafqofuzsftqynkmyaowfdumxrdaybgzuetyqzfradmzkygdpqdeituotftqketagxpoayyufazftquztmnufmzfearftqeqefmfqeradogffuzsarragdfdmpqiuftmxxbmdfearftqiadxpraduybaeuzsfmjqeazgeiuftagfagdoazeqzfradpqbduhuzsgeuzymzkomeqearftqnqzqrufearfdumxnkvgdkradfdmzebadfuzsgenqkazpeqmefanqfduqpradbdqfqzpqparrqzoqeradmnaxuetuzsftqrdqqekefqyarqzsxuetxmieuzmzqustnagduzsbdahuzoqqefmnxuetuzsftqdquzmzmdnufdmdksahqdzyqzfmzpqzxmdsuzsufenagzpmduqeeamefadqzpqdufmfazoqmzqjmybxqmzprufuzefdgyqzfraduzfdapgouzsftqemyqmneaxgfqdgxquzfaftqeqoaxazuqeradfmwuzsmimkagdotmdfqdemnaxuetuzsagdyaefhmxgmnxqxmiemzpmxfqduzsrgzpmyqzfmxxkftqradyearagdsahqdzyqzferadegebqzpuzsagdaizxqsuexmfgdqemzppqoxmduzsftqyeqxhqeuzhqefqpiuftbaiqdfaxqsuexmfqradgeuzmxxomeqeitmfeaqhqdtqtmemnpuomfqpsahqdzyqzftqdqnkpqoxmduzsgeagfartuebdafqofuazmzpimsuzsimdmsmuzefgetqtmebxgzpqdqpagdeqmedmhmsqpagdoamefengdzfagdfaizemzppqefdakqpftqxuhqearagdbqabxqtquemfftuefuyqfdmzebadfuzsxmdsqmdyuqearradquszyqdoqzmduqefaoaybxqmfftqiadwearpqmftpqeaxmfuazmzpfkdmzzkmxdqmpknqsgziuftoudogyefmzoqearodgqxfkmzpbqdrupkeomdoqxkbmdmxxqxqpuzftqyaefnmdnmdagemsqemzpfafmxxkgziadftkftqtqmparmouhuxulqpzmfuaztqtmeoazefdmuzqpagdrqxxaioufulqzefmwqzombfuhqazftqtusteqmefanqmdmdyemsmuzefftqudoagzfdkfanqoayqftqqjqogfuazqdearftqudrduqzpemzpndqftdqzadfarmxxftqyeqxhqenkftqudtmzpetqtmeqjoufqppayqefuouzegddqofuazemyazsefgemzptmeqzpqmhagdqpfanduzsazftquztmnufmzfearagdrdazfuqdeftqyqdouxqeeuzpumzemhmsqeitaeqwzaizdgxqarimdrmdquemzgzpuefuzsguetqppqefdgofuazarmxxmsqeeqjqemzpoazpufuazeuzqhqdkefmsqarftqeqabbdqeeuazeiqtmhqbqfufuazqpraddqpdqeeuzftqyaeftgynxqfqdyeagddqbqmfqpbqfufuazetmhqnqqzmzeiqdqpazxknkdqbqmfqpuzvgdkmbduzoqitaeqotmdmofqdueftgeymdwqpnkqhqdkmofituotymkpqruzqmfkdmzfuegzruffanqftqdgxqdarmrdqqbqabxqzadtmhqiqnqqzimzfuzsuzmffqzfuazefaagdndufuetndqftdqziqtmhqimdzqpftqyrdayfuyqfafuyqarmffqybfenkftqudxqsuexmfgdqfaqjfqzpmzgzimddmzfmnxqvgduepuofuazahqdgeiqtmhqdqyuzpqpftqyarftqoudogyefmzoqearagdqyusdmfuazmzpeqffxqyqzftqdqiqtmhqmbbqmxqpfaftqudzmfuhqvgefuoqmzpymszmzuyufkmzpiqtmhqoazvgdqpftqynkftqfuqearagdoayyazwuzpdqpfapuemhaiftqeqgegdbmfuazeituotiagxpuzqhufmnxkuzfqddgbfagdoazzqofuazemzpoaddqebazpqzoqftqkfaatmhqnqqzpqmrfaftqhauoqarvgefuoqmzparoazemzsguzufkiqygefftqdqradqmocguqeoquzftqzqoqeeufkituotpqzagzoqeagdeqbmdmfuazmzptaxpftqymeiqtaxpftqdqefarymzwuzpqzqyuqeuzimduzbqmoqrduqzpeiqftqdqradqftqdqbdqeqzfmfuhqearftqgzufqpefmfqearmyqduomuzsqzqdmxoazsdqeemeeqynxqpmbbqmxuzsfaftqegbdqyqvgpsqarftqiadxpradftqdqofufgpqaragduzfqzfuazepauzftqzmyqmzpnkftqmgftadufkarftqsaapbqabxqarftqeqoaxazuqeeaxqyzxkbgnxuetmzppqoxmdqftmfftqeqgzufqpoaxazuqemdqmzpardustfagstffanqrdqqmzpuzpqbqzpqzfefmfqeftmfftqkmdqmneaxhqprdaymxxmxxqsumzoqfaftqndufuetodaizmzpftmfmxxbaxufuomxoazzqofuaznqfiqqzftqymzpftqefmfqarsdqmfndufmuzuemzpagstffanqfafmxxkpueeaxhqpmzpftmfmerdqqmzpuzpqbqzpqzfefmfqeftqktmhqrgxxbaiqdfaxqhkimdoazoxgpqbqmoqoazfdmofmxxumzoqeqefmnxuetoayyqdoqmzpfapamxxaftqdmofemzpftuzseituotuzpqbqzpqzfefmfqeymkardustfpamzpradftqegbbadfarftuepqoxmdmfuaziuftmrudydqxumzoqazftqbdafqofuazarpuhuzqbdahupqzoqiqygfgmxxkbxqpsqfaqmotaftqdagdxuhqeagdradfgzqemzpagdemodqptazadftqeuszqdearftqpqoxmdmfuazdqbdqeqzfqpftqzqiefmfqemeraxxaiezqitmybetudqvaeumtnmdfxqffiuxxumyitubbxqymfftqiftadzfazymeemotgeqffevatztmzoaowemygmxmpmyevatzmpmyedanqdffdqmfbmuzqqxndupsqsqddkdtapquexmzpefqbtqztabwuzeiuxxumyqxxqdkoazzqofuogfdasqdetqdymzemygqxtgzfuzsfaziuxxumyiuxxumyeaxuhqdiaxoaffzqikadwiuxxumyrxakpbtuxubxuhuzsefazrdmzouexqiuexqiueyadduezqivqdeqkduotmdpefaowfazvatziuftqdebaazrdmzouetabwuzeazvatztmdfmndmtmyoxmdwbqzzekxhmzumdanqdfyadduenqzvmyuzdgetnqzvmyuzrdmzwxuzvatzyadfazsqadsqoxkyqdvmyqeeyuftsqadsqfmkxadvmyqeiuxeazsqadsqdaeepqxmimdqomqemddapzqksqadsqdqmpftaymeyowqmzymdkxmzpemygqxotmeqiuxxumybmomftaymeefazqotmdxqeomddaxxaromddaxxfazhudsuzumsqadsqikftqduotmdptqzdkxqqftaymevqrrqdeaznqzvmyuztmddueazftaymezqxeazvdrdmzouexustfraafxqqomdfqdndmjfazzadftomdaxuzmiuxxumytaabqdvaeqbttqiqevatzbqzzeagftomdaxuzmqpimdpdgfxqpsqftaymetqkimdpvdftaymexkzotvdmdftgdyuppxqfazsqadsumngffazsiuzzqffxkymztmxxsqadsqimxfaz
alphabet[0], [a]: 599
maxFreqChar: 0, a
alphabet[1], [b]: 155
maxFreqChar: 0, a
alphabet[2], [c]: 6
maxFreqChar: 0, a
alphabet[3], [d]: 512
maxFreqChar: 0, a
alphabet[4], [e]: 543
maxFreqChar: 0, a
alphabet[5], [f]: 711
maxFreqChar: 5, f
alphabet[6], [g]: 224
maxFreqChar: 5, f
alphabet[7], [h]: 78
maxFreqChar: 5, f
alphabet[8], [i]: 123
maxFreqChar: 5, f
alphabet[9], [j]: 10
maxFreqChar: 5, f
alphabet[10], [k]: 97
maxFreqChar: 5, f
alphabet[11], [l]: 4
maxFreqChar: 5, f
alphabet[12], [m]: 570
maxFreqChar: 5, f
alphabet[13], [n]: 105
maxFreqChar: 5, f
alphabet[14], [o]: 217
maxFreqChar: 5, f
alphabet[15], [p]: 278
maxFreqChar: 5, f
alphabet[16], [q]: 973
maxFreqChar: 16, q
alphabet[17], [r]: 195
maxFreqChar: 16, q
alphabet[18], [s]: 157
maxFreqChar: 16, q
alphabet[19], [t]: 408
maxFreqChar: 16, q
alphabet[20], [u]: 520
maxFreqChar: 16, q
alphabet[21], [v]: 35
maxFreqChar: 16, q
alphabet[22], [w]: 22
maxFreqChar: 16, q
alphabet[23], [x]: 291
maxFreqChar: 16, q
alphabet[24], [y]: 183
maxFreqChar: 16, q
alphabet[25], [z]: 569
maxFreqChar: 16, q
a: 217
b: 278
c: 973
d: 195
e: 157
f: 408
g: 520
h: 35
i: 22
j: 291
k: 183
l: 569
m: 217
n: 278
o: 973
p: 195
q: 157
r: 408
s: 520
t: 35
u: 22
v: 291
w: 183
x: 569
y: 217
z: 278


Press ENTER to continue
```