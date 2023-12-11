---
toc: True
comments: True
layout: default
title: College Board Unit 4 Notes
---

17.5%-22.5%

iteration: repeating an action or set of actions until a given condition is met


```java
// WHILE LOOP
code before loop
while (condition) {
  do this while the condition is true
}
do this when the condition is no longer true
```

Infinite Loop Scenario:
- Cause: When the loop condition remains perpetually true, the loop doesn't exit.
- Creation: Setting the condition as simply "true" or missing a change within the loop that turns the condition false.
- Impact: Infinite loops can severely affect computer systems, potentially causing crashes. This could be harmful, especially on servers, and should be avoided at all costs.
Action: To halt a program stuck in an infinite loop, use ctrl+c to stop its execution immediately within your programming environment.

Loop Condition Always False:
- Non-executing Loop Scenario:
    - Effect: When the loop condition always remains false, the loop never runs; the loop body is entirely bypassed.
    - Practical Implications: Although occasionally present in exam scenarios, in real-world applications, this leads to inefficiencies and results in unnecessarily larger code file sizes.
    - Mitigation: It's crucial to meticulously review loop conditions to prevent this scenario and ensure the loop runs when intended, avoiding unnecessary code bloat.


```java
// Fixed Repetitions

int i = 0;
while (i < 5) {
  System.out.println("hello");
  i++;
}
```

    hello
    hello
    hello
    hello
    hello


### Break in While Loop


```java
while (true) {
    do something
    if (certain condition is met) {
      do something else
      break;
    }
    do something if condition not met
  }
  
```
