---
layout: default
title: JS Output w/ jquery
toc: True
description: A Tech Talk on outputs using HTML and Javascript. This uses jquery for easy onscreen interaction and filtering.
courses: {'labnotebook': {'week': 2}}
type: hacks
---

### Markdown Table (Taylor Swift)
[markdown cheat sheet](https://www.markdownguide.org/extended-syntax/#tables)

## By Album List

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

## By Chronology

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

<!-- Script is used to embed executable code -->
<script>
    $("#md_demo").DataTable();
</script>


## Hacks

- Benefits of a markdown table
    - Easy to create and read
    - Easy to customize and edit
    - Consistency
    - Accessibility
    - Used by Github

- Describe the difference between HTML and JavaScript.
    - HTML is a markup language mostly used in frontend to present content on the web. The code is static and is mainly used for aesthetics and organization
    - JavaScript can also be used on frontend but it includes user responsive features that interacts with the users of a website. 

- Describe a benefit of a table that uses JavaScript.
    - More interactive features can be implemented on tables. With JavaScript, you can filter, sort, and search the data.

