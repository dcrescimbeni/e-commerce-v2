# :athletic_shoe: SNikers 

_This site was made for learning purposes in the context of an assignment for Plataforma 5 (coding bootcamp). Five more people and I made it. Link to the original repository: [e-commerce](https://github.com/dcrescimbeni/e-commerce). I wanted to refactor and make some changes, so I decided to make a copy of the original project._

## :earth_americas: Live site and screenshots 

[SNikers](https://snikers.netlify.app/)

**Home**

![home](https://github.com/dcrescimbeni/e-commerce-v2/blob/main/public/images/home-desktop.png)

**Details - desktop**

![details desktop](https://github.com/dcrescimbeni/e-commerce-v2/blob/main/public/images/details-desktop.png)

**Details - mobile**

![details mobile](https://github.com/dcrescimbeni/e-commerce-v2/blob/main/public/images/details-mobile.png)

**Shopping cart**

![cart](https://github.com/dcrescimbeni/e-commerce-v2/blob/main/public/images/cart-desktop.png)

---

## :computer: Stack and tech

### :gem: Front end

For the front end, the app is using React. Initially, it used Bootstrap and CSS Modules (and some parts still use it) but was rewritten to migrate to Material UI. Using a component library sped up the development time noticeably as there are a lot of elements that seem trivial to make (pagination, nested menus, review scores) but are full of edge cases and unforeseen complexities. I also leveraged the MUI breakpoints to make the app fully responsive.

### :gear: Back end

The back end is made with Node, using Express.js and Postgres (through sequelize), structured using the MVC pattern. We initially handled authentication via session cookies, but I changed it to JSON web tokens. Passwords are stored after salting and hashing using bcrypt.

---

## :runner: Starting the project

1. Clone the repo
2. Install the dependencies: `npm install`
3. To start, run: `npm run start`, and it will concurrently run the client and server.
4. To seed the database, run: `npm run seed`, and it will fill it with dummy, randomly generated data.
