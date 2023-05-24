Fibonacci Kata in Typescript

note (spanish): si te gusta este repo te recomiendo hacer el curso https://testingsostenible.com 

# Kata requirements:

In this kata you will have to calculate fib(n) where:

```typescript
fib(0) := 0
fib(1) := 1
fin(n + 2) := fib(n + 1) + fib(n)
```

Write an algorithm that can handle n up to 2000000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.

# Spanish:

En este ejercicio vamos a construir una función que reciba como parámetro un número entero n y devuelva el enésimo número de Fibonacci. En matemáticas, la serie de Fibonacci es la sucesión infinita de números naturales que puedes ver en la diapositiva:

0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 

La sucesión comienza con 0 y 1, los siguientes términos siempre son la suma de los dos anteriores.

Como curiosidad, esta sucesión fue descrita en Europa por Leonardo de Pisa, matemático italiano del siglo XIII, también conocido como Fibonacci, y tiene numerosas aplicaciones en ciencias de la computación, matemáticas y teoría de juegos, etc.

A nosotros nos va a servir para ilustrar los green patterns de Kent Beck.
