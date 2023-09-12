/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTholder = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (id, name, appearance, color) {

    let NFTobj = {"id": id, "name": name, "appearance": appearance, "color": color};
    NFTholder[NFTholder.length] = NFTobj;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for(let i = 0; i < NFTholder.length; i++){
        console.log("ID: " + NFTholder[i].id);
        console.log("Name: " + NFTholder[i].name);
        console.log("Appearance: " + NFTholder[i].appearance);
        console.log("Color: " + NFTholder[i].color + "\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

    return NFTholder.length;
}

// call your functions below this line

mintNFT("001", "Ruben", "Spy", "Green");
mintNFT("002", "Stephen", "Monkey", "Blue");
listNFTs();
console.log("Total number of NFTs minted: " + getTotalSupply() + "\n");

mintNFT("003", "Stewart", "Warrior", "Black");
mintNFT("004", "Roger", "Soldier", "Yellow");
listNFTs();
console.log("Total number of NFTs minted: " + getTotalSupply() + "\n");