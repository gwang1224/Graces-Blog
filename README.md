## Welcome to Grace's Website!
> This is where I will document my learning in AP Computer Science A Class with Mr. Mortensen
- Includes:
    - Notes
    - Tangibles
    - Lab Notebook



## Run Server

- Start preview server in terminal
```bash
cd ~/vscode/teacher  # my project location, adapt as necessary
make
```

- Terminal output of shows server address. Cmd or Ctl click http location to open preview server in browser. Example Server address message... 
```
Server address: http://0.0.0.0:4100/teacher/
```

- Save on ipynb or md activiates "regeneration". Refresh browser to see updates. Example terminal message...
```
Regenerating: 1 file(s) changed at 2023-07-31 06:54:32
    _notebooks/2024-01-04-cockpit-setup.ipynb
```

- Terminal message are generated from background processes.  Click return or enter to obtain prompt and use terminal as needed for other tasks.  Alway return to root of project `cd ~/vscode/teacher` for all "make" actions. 
    

- Stop preview server, but leave constructed files in project for your review.
```bash
make stop
```

- Stop server and "clean" constructed files, best choice when renaming files to eliminate potential duplicates in constructed files.
```bash
make clean
```

- Test notebook conversions, best choice to see if IPYNB conversion is acting up.
```bash
make convert
    ```
