# Roleplay GTA V RageMP server 

This is a Roleplay GTA V RageMP Server for the Spanish community.
It's a work in progress

## Getting Started

WORKSPACE SETUP: 
https://wiki.rage.mp/index.php?title=Getting_Started_with_Development

### Prerequisites

VSC.
Make sure you run node.
Everything I make public here goes inside the folder "Packages/mygamemode*", so you can just pull that content to copy it into your own project.

*Placeholder. 

```
Give examples
```

### Installing work environment

Install nodejs.
Install LTS. 

Inside "packages" folder, we create a gamemode folder. We have called it "mygamemode"
We can OPEN THE FOLDER with Visual Code. 

Everything you need to write the script is already inside VSC.

We open the terminal with CONTROL + Ñ (if you are Spanish!, and using Windows)

On the terminal, we check if NPM was installed correctly by typing 

```
npm -v
```

That means our NODE Package manager is working now correctly. 


### Installing all dependencies

Now we install packages required to run a RAGEMP GTA V server. 

```
npm -v

```

That creates a .json file with all the required files. 

Then we do

```
npm install require-all

``` 
 on the terminal, inside the folder where the .json file is located (this is important).

### Creating the folder structure

Inside the folder packages/mygamemode, create a "modules" folder.

Inside that modules folder, create a index.js file to start up the app.

Make sure you require all the dependencies previously installed by writing this at the top: 



```
var libs = require('require-all')(__dirname + "/modules");
```

### RageMP Typescript Definitions 

As per the official guide, we can set up the autocomplete API,
https://wiki.rage.mp/index.php?title=Getting_Started_with_Development

```
npm install --save-dev https://github.com/CocaColaBear/types-ragemp-s/tarball/master
```

We copy the above line, and paste it in the VSC console. 

That will install the "typescript" definitions. 

You can jump this step but you will just spend more time finding the right syntax, which is a bit annoying.

Restart Visual Studio Code.

Try typing "mp." and you will see how the autofill works. 


## Acknowledgments

* Thanks to Stuyk (https://github.com/Stuyk) for the countless coding tutorials on GTA V RAGEMP and ALTV that he has made in the last years. This guide wouldn't have been possible without them.
