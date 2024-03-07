---
title: Debugging
layout: default
description: 
type: notes
comment: true
---

# Debugging

1.Start backend using Debugging

![](https://cdn.discordapp.com/attachments/879557685253664768/1215352678750748753/Screenshot_2024-03-07_at_9.36.11_AM.png?ex=65fc7062&is=65e9fb62&hm=7bd7435cb222c3a84acaa6cb4dcec226eceb1e9bc88d3206c7a7be5135844a4d&)

2.Set break point at the beginning of endpoint code

![](https://cdn.discordapp.com/attachments/879557685253664768/1215352679241355304/Screenshot_2024-03-07_at_9.37.28_AM.png?ex=65fc7062&is=65e9fb62&hm=f90b03d6ab49e2310dc516df8d234175907508ccac5ca3ad7512f87f9fff6019&)

3.Start in frontend with split screen loading source for an API fetch using GET.
4.Set break point on fetch, inside .then, inside .fetch

![](https://cdn.discordapp.com/attachments/879557685253664768/1215358531247669288/Screenshot_2024-03-07_at_10.00.48_AM.png?ex=65fc75d6&is=65ea00d6&hm=e62a1ecc8e31502f324a50367d9313879ee249573556e237c70f53df007f02d5&)

5.Run frontend, screen capture break at fetch while examining Body

![](https://cdn.discordapp.com/attachments/879557685253664768/1215358103386591242/Screenshot_2024-03-07_at_9.58.18_AM.png?ex=65fc7570&is=65ea0070&hm=2fd44de99b8f730a09668c086ffd608b099fe947e787b212678185e6149ac883&)

6.Press play on frontend, observe stop inside of backend

![](https://cdn.discordapp.com/attachments/879557685253664768/1215358531247669288/Screenshot_2024-03-07_at_10.00.48_AM.png?ex=65fc75d6&is=65ea00d6&hm=e62a1ecc8e31502f324a50367d9313879ee249573556e237c70f53df007f02d5&)

7.Press step over on backend until you have obtained data from database, screen capture HashMap or other data Object

![](https://cdn.discordapp.com/attachments/879557685253664768/1215358102854180964/Screenshot_2024-03-07_at_9.57.30_AM.png?ex=65fc756f&is=65ea006f&hm=5193c0224e70770ca8d21f741404be06b960781feeed777f744b835467f00bee&)

8.Press play button to end backend debugging session.