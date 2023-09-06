---
title: JS Output w/ jquery
toc: True
description: A Tech Talk on outputs using HTML and Javascript. This uses jquery for easy onscreen interaction and filtering.
courses: {'labnotebook': {'week': 2}}
type: hacks
---

### Markdown Table (Taylor Swift)
Google [markdown cheat sheet](https://www.markdownguide.org/extended-syntax/#tables) and it lead you to an outline for how to make a table.

By Album List

| Album | Release Year | Owned by Taylor | Favorite Song | Tracks |
|------|-------|------|-------|-------|
|Taylor Swift|2006|No|Our Song|15|
|Fearless|2021|Yes|Fearless|26|
|Speak Now|2023|Yes|I Can See You|22|
|Red|2021|Yes|All Too Well (10 minute version)|30|
|1989|2014|No|Clean|13|
|Reputation|2017|No|Call It What You Want|15|
|Lover|2019|Yes|The Archer|18|
|Folklore|2020|Yes|The Lakes|16|
|Evermore|2020|Yes|Gold Rush|15|
|Midnights|2022|Yes|The Great War|20|

By Chronology
| Album | Release Year | Owned by Taylor | Favorite Song | Tracks |
|------|-------|------|-------|-------|
|Taylor Swift|2006|No|Our Song|15|
|1989|2014|No|Clean|13|
|Reputation|2017|No|Call It What You Want|15|
|Lover|2019|Yes|The Archer|18|
|Folklore|2020|Yes|The Lakes|16|
|Evermore|2020|Yes|Gold Rush|15|
|Fearless|2021|Yes|Fearless|26|
|Red|2021|Yes|All Too Well (10 minute version)|30|
|Midnights|2022|Yes|The Great War|20|
|Speak Now|2023|Yes|I Can See You|22|

### HTML Table


```python
%%html

<h2>HTML Cell Output from Jupyter</h2>

<!-- Body contains the contents of the Document -->
<body>
    <table class="table">
        <thead>
            <tr>
                <th>Album</th>
                <th>Release Year</th>
                <th>Taylor's Version</th>
                <th>Favorite Song</th>
                <th>Tracks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Taylor Swift</td>
                <td>2006</td>
                <td>No</td>
                <td>Our Song</td>
                <td>15</td>
            </tr>
            <tr>
                <td>1989</td>
                <td>2014</td>
                <td>No</td>
                <td>Clean</td>
                <td>13</td>
            </tr>
            <tr>
                <td>Reputation</td>
                <td>2017</td>
                <td>No</td>
                <td>Call It What You Want</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Lover</td>
                <td>2019</td>
                <td>Yes</td>
                <td>The Archer</td>
                <td>18</td>
            </tr>
            <tr>
                <td>Folklore</td>
                <td>2020</td>
                <td>Yes</td>
                <td>The Lakes</td>
                <td>16</td>
            </tr>
            <tr>
                <td>Evermore</td>
                <td>2020</td>
                <td>Yes</td>
                <td>Gold Rush</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Fearless</td>
                <td>2021</td>
                <td>Yes</td>
                <td>Fearless</td>
                <td>26</td>
            </tr>
            <tr>
                <td>Red</td>
                <td>2021</td>
                <td>Yes</td>
                <td>All Too Well (10 minute version)</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Midnights</td>
                <td>2022</td>
                <td>Yes</td>
                <td>The Great War</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Speak Now</td>
                <td>2023</td>
                <td>Yes</td>
                <td>I Can See You</td>
                <td>22</td>
            </tr>
        </tbody>
    </table>
</body>
```



<h2>HTML Cell Output from Jupyter</h2>

<!-- Body contains the contents of the Document -->
<body>
    <table class="table">
        <thead>
            <tr>
                <th>Album</th>
                <th>Release Year</th>
                <th>Taylor's Version</th>
                <th>Favorite Song</th>
                <th>Tracks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Taylor Swift</td>
                <td>2006</td>
                <td>No</td>
                <td>Our Song</td>
                <td>15</td>
            </tr>
            <tr>
                <td>1989</td>
                <td>2014</td>
                <td>No</td>
                <td>Clean</td>
                <td>13</td>
            </tr>
            <tr>
                <td>Reputation</td>
                <td>2017</td>
                <td>No</td>
                <td>Call It What You Want</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Lover</td>
                <td>2019</td>
                <td>Yes</td>
                <td>The Archer</td>
                <td>18</td>
            </tr>
            <tr>
                <td>Folklore</td>
                <td>2020</td>
                <td>Yes</td>
                <td>The Lakes</td>
                <td>16</td>
            </tr>
            <tr>
                <td>Evermore</td>
                <td>2020</td>
                <td>Yes</td>
                <td>Gold Rush</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Fearless</td>
                <td>2021</td>
                <td>Yes</td>
                <td>Fearless</td>
                <td>26</td>
            </tr>
            <tr>
                <td>Red</td>
                <td>2021</td>
                <td>Yes</td>
                <td>All Too Well (10 minute version)</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Midnights</td>
                <td>2022</td>
                <td>Yes</td>
                <td>The Great War</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Speak Now</td>
                <td>2023</td>
                <td>Yes</td>
                <td>I Can See You</td>
                <td>22</td>
            </tr>
        </tbody>
    </table>
</body>



## HTML Table in Markdown Cell with JavaScript jquery
JavaScript is a programming language that works with HTML data, CSS helps to style that data.  In this example, we are using JavaScript and CSS that was developed by others (3rd party).  Addithing the 3rd party code makes the table interactive.
- Look at the href and src on lines inside of the lines in `<head>` tags.  This is adding code to our page from others.
- Observe the `<script>` tags at the bottom of the page.  This is generating the interactive table, from the third party code, using the data `<table id="demo">` from the `<body>`.  

<!-- Head contains information to Support the Document -->
<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<!-- Body contains the contents of the Document -->
<body>
    <table id="md_demo" class="table">
        <thead>
            <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ford</td>
                <td>Mustang</td>
                <td>2022</td>
                <td>Red</td>
                <td>$35,000</td>
            </tr>
            <tr>
                <td>Toyota</td>
                <td>Camry</td>
                <td>2022</td>
                <td>Silver</td>
                <td>$25,000</td>
            </tr>
            <tr>
                <td>Tesla</td>
                <td>Model S</td>
                <td>2022</td>
                <td>White</td>
                <td>$80,000</td>
            </tr>
            <tr>
                <td>Cadillac</td>
                <td>Broughan</td>
                <td>1969</td>
                <td>Black</td>
                <td>$10,000</td>
            </tr>
            <tr>
                <td>Ford</td>
                <td>F-350</td>
                <td>1997</td>
                <td>Green</td>
                <td>$15,000</td>
            </tr>
            <tr>
                <td>Ford</td>
                <td>Excursion</td>
                <td>2003</td>
                <td>Green</td>
                <td>$25,000</td>
            </tr>
            <tr>
                <td>Ford</td>
                <td>Ranger</td>
                <td>2012</td>
                <td>Red</td>
                <td>$8,000</td>
            </tr>
            <tr>
                <td>Kuboto</td>
                <td>L3301 Tractor</td>
                <td>2015</td>
                <td>Orange</td>
                <td>$12,000</td>
            </tr>
            <tr>
                <td>Ford</td>
                <td>Fusion Energi</td>
                <td>2015</td>
                <td>Guard</td>
                <td>$25,000</td>
            </tr>
            <tr>
                <td>Acura</td>
                <td>XL</td>
                <td>2006</td>
                <td>Grey</td>
                <td>$10,000</td>
            </tr>
            <tr>
                <td>Ford</td>
                <td>F150 Lightning</td>
                <td>2024</td>
                <td>Guard</td>
                <td>$70,000</td>
            </tr>
        </tbody>
    </table>
</body>

<!-- Script is used to embed executable code -->
<script>
    $("#md_demo").DataTable();
</script>


## Hacks
This lesson teaches you about tables.  In this hack, it is important that you analze the difference in the styles of output shown.  
- Make your own tables, with data according to your interests.
- Describe a benefit of a markdown table.
- Try to Style the HTML table using w3schools.
- Describe the difference between HTML and JavaScript.
- Describe a benefit of a table that uses JavaScript.

