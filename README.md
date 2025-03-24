Steps to Install & Run Angular application
==========================================

1)  Install NodeJS
    check: 
        node -v
        npm -v

2) Install Angular
    npm install -g @angular/cli@15
    check: 
        ng version

3) Move directory to Desktop
    cd Desktop

4) Angular Application
    ng new my-app

6) Move directory to Project
    cd my-app

5) open powershell as administrator (for the first time)
    set-ExecutionPolicy Unrestricted

6) Run application
    ng serve



Topics
======


Project Hierarchy:
==================




Git
===

1) Install Git
2) Create an account in GitHub
3) link GitHub account to the project

    git config --global user.name "XXXXXXXXX"
    git config --global user.email "XXXXXXXXX"

    check:
        git config --listb 

4) Connect project to repository
    git init
    add origin --> git remote add origin url(repository)
    check:
        git remote -v


5) Send Project code to Repository
    git add . ----> changes to staged changes
    git commit -m "commit message"
    git push --set-upstream origin master -f  ---> for the first time
    git push





Directives:  Useful for alter the DOM
===========

1) Structural Directives

                    *ngFor, *ngIf

2) Attribute Directives

                ngClass, ngStyle

Pipes:  Useful to alter the DOM format
=====

    | uppercase
    | lowercase
    | Date
    | currency
    | Date:'yyyy-MM-dd'





Possible API Calls
==================

1) all                  get             get(URL)
2) specific             get
3) filtering            get             get(URL?filter=term)
4) sorting              get             get(URL?sortBy=column&order=asc/desc)
5) pagination           get             get(URL?limit=limit&page=page)

6) create               post            post(URL,data)
7) update               put
8) delete               delete          delete(URL/id)






1) Template Driven Forms--> [(ngModel)]
            -html
            -simple
2) Reactive Forms--> 
            -typescript
            -complex




Forms:
======

    1) FormGroup            -- Done
    2) FormControl          -- Done
    3) Nested FormGroup     -- Done
    4) Dynamic Forms        -- Done
    5) Form Array           -- Done
    6) Validators           -- Done
    

