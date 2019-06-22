# Demo Codemirror Demonstration

This is a demonstration of the [demo](https://github.com/lbeckman314/demo) project, specifically by running code snippets from a markdown-converted document.

This was inspired by [mdbook](https://github.com/rust-lang-nursery/mdBook), which is a great Rust documentation project. In mdbook, you can run Rust code right from the document (e.g. [*Printing values with println! Placeholders*](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#printing-values-with-println-placeholders))! I really liked this feature, but wanted to be able to send input back to the running process.

```{.sh .norun}
pandoc -f markdown -t html -s client-example.md -o client-example.html -H header.html
```

## Python

```python
def greet():
    name = input('Enter your name: ')
    print('Hello', name)

def main():
    greet()

main()
```

## C

```c
#include <stdio.h>

int main() {
    fprintf(stderr, "%s", "Enter your name: ");
    char name[100];
    scanf("%s", name);

    fprintf(stderr, "Hello %s!\n", name);
    return 0;
}
```
