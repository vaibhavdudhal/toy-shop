const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 2000;


app.use(cors());
// Serve static files (images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Sample toy data with image paths
const toyProducts = [
  { id: 1, 
    title: 'Teddy Bear',
     price: 19.99,
     description:"Babyhug Teddy Bear With Muffler Soft Toy Height 45 cm",
     
       image: 'http://localhost:2000/images/1.jpeg' },
  { id: 2,
     title: 'BuilLEGO Marvel Captain Americas Shield 76262 Building Kit (3,128 Pieces)',
      price: 24.99,
      description :"LEGO Marvel Captain Americas Shield 76262 Building Kit; Collectible Replica Model for Adults to Make; Creative Gift",
      
      image: 'http://localhost:2000/images/2.jpeg' },

  { id: 3, 
    title: 'LEGO Super Heroes DC Batcave Shadow Box',
     price: 45.60, 
     description : "LEGO Super Heroes DC Batcave Shadow Box 76253 Building Kit ( 3981 Pieces)",
      image: 'http://localhost:2000/images/3.jpeg' },

    { id: 4, 
        title: 'Uboard Hoverboard Classic 6.5 Lite EV ',
         price: 39.99, 
         description : "The Uboard Hoverboard Classic 6.5 Lite is the ideal scooter for indoor use, suitable for kids aged 14 years and above.",
        
          image: 'http://localhost:2000/images/4.jpeg' },

        { id: 5, 
            title: 'NERF Rival Heracles XIX-500 Blaster, Camo Series 5 Official Nerf Rival Rounds',
             price: 60, 
             description : "A set of blocks consisting of 30 pieces different shape, including a car and 2 passenger&  Creative fun for children of all ages",
            
              image: 'http://localhost:2000/images/5.jpeg' },

              { id: 6, 
                title: 'X-shot Skins Pro Sinister - 40 Darts, 14Y+, Red',
                 price: 80, 
                 description : "The X-SHOT Skins Pro Series Longshot Blaster is a high-performance dart blaster designed for players aged 14 and above. With a range of up to 43 meters (140 feet)",
            
                  image: 'http://localhost:2000/images/6.jpeg' },

                  { id: 7, 
                    title: 'Nerf Elite 2.0 Echo CS-10 Blaster -- 24 Official Nerf Darts',
                     price: 30, 
                     description : "The Nerf Elite 2.0 Echo CS-10 Blaster is the perfect choice for action-loving kids aged 8 and up.",
                   
                      image: 'http://localhost:2000/images/7.jpeg' },

                      { id: 8, 
                        title: 'Marvel Avengers: Infinity War Infinity Gauntlet Electronic Fist Roleplay Toy With Lights & Sounds',
                         price: 25, 
                         description : "Enter the Marvel Universe with the Avengers: Infinity War Infinity Gauntlet Electronic Fist Roleplay Toy!",
                      
                          image: 'http://localhost:2000/images/8.jpeg' },

                          { id: 9, 
                            title: 'LEGO Marvel Venomized Groot 76249 Building Toy Set (630 Pieces), 10Y+',
                             price: 120, 
                             description : "LEGO Marvel Venomized Groot 76249 Building Toy Set; Transformable Model for Play and Display; Gift for Kids Aged 10+",
                              image: 'http://localhost:2000/images/9.jpeg' },



];

// Endpoint to get the toy data
       app.get('/toys', (req, res) => {
      res.json(toyProducts);
      });

        app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
        });
