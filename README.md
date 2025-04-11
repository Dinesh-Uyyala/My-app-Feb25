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
2) specific             get             get(URL/id)
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
    






Git:
====

1) Laptop <-> GitHub(website)

    1) Install Git
    2) Create an account in GitHub
    3) configure gitHub account

        git config --global user.name "XXXXXX"
        git config --global user.email "XXXXXX"

        check:
        ======
            git config --list

2) Local Project <-> Repository

    1) git init
    2) Create a repository in the GitHub
    3) git remote add origin URL

        Check:
        ======
            git remote -v


3) Process

    1) git add . ---> Changes to Staged changes
    2) git commit -m "Commit Message"  ---> Changes to 0
    3) git push  --> check commits in GitHub


4) Process with Branches

    1) create a branch in GitHub
    2) git fetch
    3) git checkout branchName

            1) git add .
            2) git commit -m "Commit Message"
            3) git pull origin master
            4) git push

            Pull Request-> Approve-> Merge     

5) Merge Conflicts
    1) checkout to the branch
    2) git pull origin master
    3) accept current/accept incoming/ accept both
    4) git push

6) Shift Branches
    1) commit changes then shift
    2) Stash changes
        (git stash --include-untracked)
        shift branch
        coming back and do (git stash pop)

7) Delete Commit from Branch
    1) git log
        111111 
        222222 
    2) git reset 222222

8) Move Commit to Another branch
    git cherry-pick XXXXXXX

9) Two branches code into one branch

    create 3rd branch and checkout

    git pull origin feature/one
    git pull origin feature/two




    RxJS Operators:
    ===============

    from, of-> creational operators
    map -> to alter every data/element
    filter -> to select some data

    return this._httpClient.get

    return forkjoin(
        this._httpClient.get('api1'),
        this._httpClient.get('api2'),
        this._httpClient.get('api3'),
    )

    

    concatMap(user=>
      this._userService.updateUser(user.id,user)
    )

    return concatMap(
        this._httpClient.get('api1'),
        this._httpClient.get('api2'),
        this._httpClient.get('api3'),
    )

    forkjoin-> parallel API calls
    concatMap-> sequential API calls
    switchmap-> switch between API calls(it calls the new API call)
    exhaustMap-> switch between API calls(it calls the old API call and rejects new API call)
    debounceTime-> delay the API call





ngContainer: invisible block
============

<ng-container *ngIf='isLoggedIn'>
<p>Welcome</p>
<button>Logout</button>
</ng-container>


ngTemplate:  event checklist
============

<div *ngIf='isDataReady; else loading'>
    <p>Data Loaded</p>
</div>

<ng-template #loading>
    <p>Data is loading</p>
</ng-template>


ngContent: project data from parent
==========
ng-content is used to pass content to a component. It is used to pass content from a parent.

    1) child (card.component.html)

        <div>
            <ng-content></ng-content>
        </div>

    2) parent (app.component.html)

        <app-card>
            <p>This is Data from Parent </p>
        </app-card>



ngSubmit:
=========
ngSubmit is used to handle form submission. It is used to handle form submission in angular.


<form (ngSubmit)='submit()'>
    <input type='text' [(ngModel)]='name' placeholder="Enter Name">
    <button type='submit'>Submit</button>
</form>


submit(){
    console.log("Form Submitted!");
}












Advanced Javascript:
====================

1) var, let and const
2) Arrow Function vs Function
3) Closure
4) call, apply and bind
    call: person.fullName.call(user,'Chennai','India')
    apply: person.fullName.apply(user,['Banglore','India'])
    bind: person.fullName.bind(user,'Banglore','India')
5) Recursion 
    function recursiveFunction(){
    if(baseCondition){
            return result;
        }else{
            return recursiveFunction();
        }
    }
6) Shallow copy and Deep copy

    
    