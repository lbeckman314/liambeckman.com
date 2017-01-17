---
layout: my-default
---

```
Theorem 2.1.1 Logical Equivalences
Given any statement variables p, 1, and 3, a tautology t and a contradiction c, the following equivalences hold.

1.  Commutative laws:        p ∧ q ≡ q ∧ r                       p ∨ q ≡ q ∨ p
2.  Associative laws:        (p ∧ q) ∧ r ≡ p ∧ (q ∧ r)           (p ∨ q) ∨ r ≡ p ∨ (q ∨ r)
3.  Distributive laws:       p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)     p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)
4.  Identity laws:           p ∧ t ≡ p                           p ∨ r ≡ p
5.  Negation laws:           p ∨ ~p ≡ t                          p ∧ ~p ≡ c
6.  Double negative law:     ~(~p) ≡ p
7.  Idempotent laws:         p ∧ p ≡ p
8.  Universal bound laws:    p ∨ t ≡ t
9.  De Morgan's laws:        ~(p ∧ q) ≡ ~p ∨ ~q                  ~(p ∨ q)≡ ~p ∧ ~q
10. Absorption laws:         p ∨ (p ∧ q) ≡ p                     p ∧ (p∨q) ≡ p
11. Negations of t and c:    ~t ≡ c                              ~c≡t
```



```
1. 2.1) 50-54. 
Verify the logical equivalences. Supply a reason for each step. 
A number of logical equivalences are summarized in Theorem 2.1.1 for future reference.


a)

(p ∧ q) ∨ p ≡ p ∧ (q ∧ p)   by commutative laws
            ≡ p             by absorption laws


b)

p ∧ (~q ∨ p) ≡ (p ∧ ~q) ∨ (p ∧ p)   by associative laws
             ≡ (p ∧ ~q) ∨ p         by idempotent laws
             ≡ p ∨ (p ∧ ~q)         by commutative laws          
             ≡ p


c)

 ~(p ∨ ~q) ∨ (~p∧~q) ≡ (~p ∨ ~~q) ∨ (~p ∧ ~q)   by de morgan's laws
                     ≡ (~p ∨ q) ∨ (~p ∧ ~q)     by double negative laws
                     ≡ ~p ∨ ~p ∧ ~q ∨ q         by associative laws                  
                     ≡ p ∧ ~q ∨ q               by idempotent laws
                     ≡ p ∧ t                    by negation laws
                     ≡ p


d)

~((~p ∧ q) ∨ (~p ∧ ~q)) ∨ (p∧q) ≡ (~(~p ∧ q) ∨ ~(~p ∧ ~q)) ∨ (p ∧ q)    by de morgan's laws
                                ≡ (~~p ∧ ~q) ∨ (~~p ∧ ~~q) ∨ (p ∧ q)    by de morgan's laws
                                ≡ (p ∧ ~q) ∨ (p ∧ q) ∨ (p ∧ q)          by double negative laws
                                ≡ (p ∧ ~q) ∨ (p ∧ q)                    by idempotent laws
                                ≡                                       by  laws
                                ≡ p

e)

(p ∧ (~(~p ∨ q))) ∨ (p ∧ q) ≡ (p ∧ (~~p ∨ ~q)) ∨ (p ∧ q)    by de morgan's laws
                            ≡ (p ∧ (p ∨ q)) ∨ (p ∧ q)       by double negative laws
                            ≡ p ∨ (p ∧ q)                   by absorption laws
                            ≡ p                             by absorption laws

```
2.2 29, 31. If statement forms P and Q are logically equivalent, then P ⇐⇒ Q is a tautology. Conversely, if P ⇐⇒ Q is a tautology, then P and Q are logically equivalent. Use ⇐⇒ to convert each of the logical equivalences in 29-31 to a tautology. Then use a truth table to verify each tautology.


29)

p ⇒ (q ∨ r) ≡ (p ∧ q) ⇒ r
p ⇒ (q ∨ r) ⇔ (p ∧ q) ⇒ r

| p | q | r | (q∨r) | p⇒(q∨r) | (p∧q) | (p∧q)⇒r |
|:-:|:-:|:-:|:-----:|:-------:|:-----:|:-------:|
| T | T | T |   T   |    T    |   T   |    T    |
| T | T | F |   T   |    T    |   T   |    F    |
| T | F | T |   T   |    T    |   F   |    F    |
| T | F | F |   F   |    F    |   F   |    T    |
| F | T | T |   T   |    F    |   F   |    F    |
| F | T | F |   T   |    F    |   F   |    T    |
| F | F | T |   T   |    F    |   F   |    F    |
| F | F | F |   F   |    T    |   F   |    T    |



31)

p ⇒ (q ⇒ r) ≡ (p ∧ q) ⇒ r
p ⇒ (q ⇒ r) ⇔ (p ∧ q) ⇒ r

| p | q | r | (q⇒r) | p⇒(q⇒r) | (p∧q) | (p∧q)⇒r |
|:-:|:-:|:-:|:-----:|:-------:|:-----:|:-------:|
| T | T | T |   T   |    T    |   T   |    T    |
| T | T | F |   T   |    T    |   T   |    F    |
| T | F | T |   T   |    T    |   F   |    F    |
| T | F | F |   F   |    F    |   F   |    T    |
| F | T | T |   T   |    F    |   F   |    F    |
| F | T | F |   T   |    F    |   F   |    T    |
| F | F | T |   T   |    F    |   F   |    F    |
| F | F | F |   F   |    T    |   F   |    T    |



2.2 48, 49. In 48 and 49, (a) use the logical equivalencies p =⇒ q ≡¬p∨q and p ⇐⇒ q ≡ (¬p∨q)∧(¬q ∨p) to rewrite the given statement forms without using the symbols =⇒ or ⇐⇒ , and (b) use the logical equivalence p∨q ≡¬(¬p∧¬q) to rewrite each statement using only ∧ and ¬.


48)

p ∨ ¬q ⇒ r ∨ q

**¬(p ∨ ¬q) ∨ (r ∨ q)**



49)

(p ⇒ r) ⇔ ( q ⇒ r)

¬p ∨ r ⇔ ¬q ∨ r

**(¬(¬p ∨ r) ∨ (¬q ∨ r)) ∧ (¬(¬q ∨ r) ∨ (¬p ∨ r))**


//38. You are visiting the island described in Example 2.3.14, whose natives consist of knights and knaves.

38c. You encounter natives E and F.<br />
 E says: F is a knave. <br />
F says: E is a knave.<br />
How many knaves are there?<br />

**There is one knave.**<br />
Let's suppose E is a knave<br />
∴what E says is false<br />
∴F is a knight<br />

And let's suppose F is a knight<br />
∴what F says is true <br />
∴E is a knave<br />

If both E and F were knaves, both would be liars and ∴ both would be knights. This is a contradiction.

If both E and F were knights, both would tell the truth and ∴ both would be knaves. This is a contradiction.



38d. Finally, you meet a group of six natives, U,V,W,X,Y, and Z, who speak to you as follows: 
U says: None of us is a knight.
 V says: At least three of us are knights.
 W says: At most three of us are knights.
 X says: Exactly ﬁve of us are knights.
 Y says: Exactly two of us are knights.
 Z says: Exactly one of us is a knight.
 Which are knights and which are knaves?


**W and Y are the two knights.**<br />
Let's suppose W is a knight<br />
∴what E says is false<br />
∴F is a knight<br />

And let's suppose Y is a knight<br />
∴what F says is true <br />
∴E is a knave<br />

If V is a knight, then V would tell the truth and ∴ none are knights. This is a contradiction.

If X is a knight, then X would tell the truth and ∴ exactly 5 are knights. ∴ Every one of them would express the same thought -- that there are 5 knights. No other person does so. This is a contradiction.

If Z is a knight, then Z would tell the truth and ∴ one of them is a knight. This would mean W is telling the truth as well, which would require two knights in total. This is a contradiction.


//40. Sharky, a leader of the underworld, was killed by one of his own band of four henchmen. Detective Sharp interviewed the men and determined that all were lying except for one. He deduced who killed Sharky on the basis of the following statements: 

Socko: Lefty killed Sharky. <br />
Fats: Muscles didn’t kill Sharky. <br />
Lefty: Muscles was shooting craps with Socko when Sharky was knocked oﬀ. <br />
Muscles: Lefty didn’t kill Sharky. Who killed Sharky?<br />

**Muscles is telling the truth: ∴ Muslces killed Sharky**

1a) **If Socko is telling the truth, then Lefty killed Sharky**<br />
1b) ∴ Lefty is lying and    Muscles was not shooting craps with Socko when Sharky was knocked off<br />
1c) ∴ Fats is lying and     Muscles killed Sharky *CONTRADICTION with 1a and 1d*<br />
1d) ∴ Muscles is lying and  Lefty did kill Sharky <br />

2a) **If Fats is telling the truth, then Muscles didn't kill Sharky**<br />
2b) ∴ Socko is lying and    Lefty did not kill Sharky<br />
2c) ∴ Lefty is lying and    Muscles was not shooting craps with Socko when Sharky was knocked off<br />
2d) ∴ Muscles is lying and  Lefty did kill Sharky *CONTRADICTION with 2b*<br />

3a) **If Lefty is telling the truth, then Muscles was shooting craps with Socko when Sharky was knocked off**<br />
3b) ∴ Socko is lying and    Lefty did not kill Sharky<br />
3c) ∴ Fats is lying and     Muscles killed Sharky *CONTRADICTION with 3a*<br />
3d) ∴ Muscles is lying and  Lefty did kill Sharky<br />

4a) **If Muscles is telling the truth, then Lefty didn't kill Sharky.**<br />
4b) ∴ Socko is lying and    Lefty did not kill Sharky<br />
4c) ∴ Lefty is lying and    Muscles was not shooting craps with Socko when Sharky was knocked off<br />
4d) ∴ Fats is lying and     Muscles killed Sharky <br />

**∴ 4d is the only logically true statement**<br />
**∴ Muscles killed Sharky**<br />

```
43. 
a. ¬p ⇒ r ∧ ¬s
b. t ⇒ s
c. u ⇒ ¬p
d. ¬w
e. u ∨ w
f. ∴ ¬t            


1)  u ∨ w       by (e)
    ¬w          by (d)
    ∴ u         by elimination

2)  u ⇒ ¬p      by (c)
    u           by conclusion of (1)
    ∴ ¬p        by modus ponens

3)  ¬p ⇒ r ∧ ¬s by (a)
    ¬p          by conclusion of (2)
    ∴ r ∧ ¬s    by modus ponens

4)  t ⇒ s       by (b)
    ¬s          by conclusion of (3)
    ∴ ¬t        by modus tollens



44.
a. p ⇒ q
b. r ∨ s
c. ¬s ⇒ ¬t
d. ¬q ∨ s
e. ¬s
f. ¬p ∧ r ⇒ u 
g. w ∨ t
h. ∴ u ∧ w      


1)  ¬q ∨ s      by (d)
    ¬s          by (e)
    ∴ ¬q        by elimiation

2)  p ⇒ q       by (a)
    ¬q          by conclusion of (1)
    ∴ ¬p        by modus tollens

3)  r ∨ s       by (b)
    ¬s          by (e)
    ∴ r         by elimination

4)  ¬p ∧ r ⇒ u  by (f)
    ¬p ∧ r      by conclusions of (2) and (3)
    ∴ u         by modus ponens

5)  ¬s ⇒ ¬t     by (c)
    ¬s          by (e)
    ∴ ¬t        by modus ponnens

6)  w ∨ t       by (g)
    ¬t          by conclusion of (5)
    ∴ w         by elimintion

7)  u           by conclusion of (4)
    w           by conclusion of (6)
    ∴ u ∧ w     by conjunction


```