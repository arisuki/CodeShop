require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {
    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Clothing', sortOrder: 100 },
        { name: 'Accessories', sortOrder: 200 },
        { name: 'Office', sortOrder: 300 },
        { name: 'Gadgets', sortOrder: 400 },
        { name: 'Home', sortOrder: 500 },
        { name: 'Food', sortOrder: 600 },
    ]);

    //we delete all items when re-seeding the database to avoid duplicates
    await Item.deleteMany({});

    const items = await Item.create([
        {
            name: "Pkmn Onesie",
            image: "https://ae01.alicdn.com/kf/Sa18db0c2a8b24f8194471f6cc215ac61G/Women-Pajamas-Onesie-For-Adults-Kigurumi-Men-Sleepwear-Anime-Halloween-Cosplay-Costume-Cartoon-One-Piece-Pijama.jpg_Q90.jpg_.webp",
            description: "A Pokemon Onesie",
            link: "https://www.aliexpress.com/item/1005005183181149.html?spm=a2g0o.productlist.main.15.2f0440732mDDSI&algo_pvid=9d0ac26f-cee2-4d17-8d07-4f997401657b&algo_exp_id=9d0ac26f-cee2-4d17-8d07-4f997401657b-7&pdp_npi=3%40dis%21CAD%2157.2%2132.6%21%21%21%21%21%40212240a316877872100467405d0787%2112000032013053923%21sea%21CA%21721336510&curPageLogUid=RrvnkTVg4Hn6",
            category: categories[0],
            price: 32.60
        },
        {
            name: "Cute socks",
            image: "https://ae01.alicdn.com/kf/S8e44ed944f354fe2b053f07099ae6b30V/1Pairs-Couple-Five-Fingered-Sock-Cartoon-Lovely-Cotton-Breathable-Comfortable-5-Toe-splitting-Socks-For-Women.jpg_Q90.jpg_.webp",
            description: "Some adorable socks",
            link: "https://www.aliexpress.us/item/3256805538383367.html?spm=a2g0o.productlist.main.27.69532f45m4kuIa&algo_pvid=600394fa-53d5-4cec-9040-3135b434f6a7&algo_exp_id=600394fa-53d5-4cec-9040-3135b434f6a7-13&pdp_npi=3%40dis%21USD%213.72%211.82%21%21%21%21%21%402102196716877887861227126d077d%2112000034155594085%21sea%21US%210&curPageLogUid=u1gbXd2cloKo",
            category: categories[1],
            price: 1.82
        },
        {
            name: "Shark Hoodie",
            image: "https://ae01.alicdn.com/kf/S2a0dbda4124e45a58d2dd998a37a6561H/Funny-Shark-Patchwork-Hoodies-Man-Autumn-Kawaii-Sweatshirt-2021-Casual-Long-Sleeve-Pullover-School-Couple-Clothes.jpg_220x220.jpg_.webp",
            description: "Funny Shark Patchwork Hoodies Man Autumn Kawaii Sweatshirt 2023 Casual Long Sleeve Pullover School Couple Clothes New",
            link: "https://www.aliexpress.us/item/3256805538383367.html?spm=a2g0o.productlist.main.27.69532f45m4kuIa&algo_pvid=600394fa-53d5-4cec-9040-3135b434f6a7&algo_exp_id=600394fa-53d5-4cec-9040-3135b434f6a7-13&pdp_npi=3%40dis%21USD%213.72%211.82%21%21%21%21%21%402102196716877887861227126d077d%2112000034155594085%21sea%21US%210&curPageLogUid=u1gbXd2cloKo",
            category: categories[0],
            price: 6.65
        },
        {
            name: "Sleeved Blanket - Teletubbies",
            image: "https://ae01.alicdn.com/kf/Sce2d3a98e7684b449979fa622a50f301U/Hooded-Blanket-Unisex-Teletubbies-Disi-Onesies-Lala-Cosplay-Winter-Cartoon-with-Sleeves-Blankets-Adult-Hoody-Pyjamas.jpg_220x220.jpg_.webp",
            description: "Hooded Blanket Unisex Teletubbies Disi Onesies Lala Cosplay Winter Cartoon with Sleeves Blankets Adult Hoody Pyjamas Anime Robe",
            link: "https://www.aliexpress.com/item/1005004760104187.html?spm=a2g0o.productlist.main.15.146557d9FDZtou&algo_pvid=108fc608-ba5f-4d42-87d2-5a341e2c082a&algo_exp_id=108fc608-ba5f-4d42-87d2-5a341e2c082a-7&pdp_npi=3%40dis%21CAD%2182.96%2139.0%21%21%21%21%21%40211bf04a16877869257628365d07a0%2112000030371817964%21sea%21CA%21721336510&curPageLogUid=0tiYdNbGkheL",
            category: categories[0],
            price: 6.65
        },
        {
            name: "Half-finger gloves for typing",
            image: "https://ae01.alicdn.com/kf/S15638e5538ce45abb645f0be02609b62L/2023-Retro-Sheepskin-Breathable-Leather-Motorcycle-Gloves-Racing-Gloves-Men-s-Motocross-Winter-Summer-Gloves-Half.jpg_220x220.jpg_.webp",
            description: "2023 Retro Sheepskin Breathable Leather Motorcycle Gloves Racing Gloves Men's Motocross Winter&Summer Gloves Half-finger gloves",
            link: "https://www.aliexpress.us/item/3256805513673861.html?spm=a2g0o.productlist.main.31.27993960jhF52Z&algo_pvid=690d1625-16d9-4fe1-9127-32a24a11bc61&algo_exp_id=690d1625-16d9-4fe1-9127-32a24a11bc61-15&pdp_npi=3%40dis%21USD%2132.77%2119.66%21%21%21%21%21%4021021a7216877891627084855d0744%2112000034049803644%21sea%21US%210&curPageLogUid=FXunKjb94Av1",
            category: categories[1],
            price: 19.66
        },
        {
            name: "Leg warmers",
            image: "https://ae01.alicdn.com/kf/H9ef8869fd61048b898a08fd969f03faf0/New-Japanese-Lolita-Sweet-Girl-Leg-Warmer-Knit-Socks-Wool-Ball-Knitted-Foot-Cover-Cosplay-Women.jpg_220x220.jpg_.webp",
            description: "New Japanese Lolita Sweet Girl Leg Warmer Knit Socks Wool Ball Knitted Foot Cover Cosplay Women Autumn Winter Heap Heap Socks",
            link: "https://www.aliexpress.us/item/3256803144832889.html?spm=a2g0o.productlist.main.19.1870111cQRqp2a&algo_pvid=e1e850c4-7c8d-4022-9b8b-8aa7ebf25e2a&aem_p4p_detail=202306260717319905750285141340000644133&algo_exp_id=e1e850c4-7c8d-4022-9b8b-8aa7ebf25e2a-9&pdp_npi=3%40dis%21USD%213.49%212.65%21%21%21%21%21%4021227f0f16877890518127501d0745%2112000025252826489%21sea%21US%210&curPageLogUid=9nuqTu4PkhDI&search_p4p_id=202306260717319905750285141340000644133_2",
            category: categories[1],
            price: 2.65
        },
        {
            name: "Mug Warmer",
            image: "https://ae01.alicdn.com/kf/Sb04c2ef09bde47b3b3cd8f61d077c6416/Portable-Mug-Heating-Coaster-Thermostatic-Smart-Mug-Warmer-Plate-Safety-Lightweight-Practical-Gadgets-for-Home-Office.jpg_220x220.jpg_.webp",
            description: "Portable Mug Heating Coaster Thermostatic Smart Mug Warmer Plate Safety Lightweight Practical Gadgets for Home Office Supplie",
            link: "https://www.aliexpress.us/item/3256805364624747.html?spm=a2g0o.productlist.main.1.5d5a7266wT6Dbf&algo_pvid=6d4d93c3-0183-4563-84bf-20d79c47cac8&algo_exp_id=6d4d93c3-0183-4563-84bf-20d79c47cac8-0&pdp_npi=3%40dis%21USD%2125.24%2111.86%21%21%21%21%21%4021021a7216877894377488298d0744%2112000033507605644%21sea%21US%210&curPageLogUid=dzWDRbJjRfoT",
            category: categories[4],
            price: 11.86
        },
        {
            name: "Desktop storage organizer",
            image: "https://ae01.alicdn.com/kf/Sa3db3a7c2246470da1405d75debbc9d1p/Desktop-Storage-Box-Rose-Gold-Mesh-Metal-Office-Supplies-Accessories-with-Drawer-for-Home-Office-Makeup.jpg_220x220.jpg_.webp",
            description: "Desktop Storage Box Rose Gold Mesh Metal Office Supplies Accessories with Drawer for Home Office Makeup Organizer",
            link: "https://www.aliexpress.us/item/3256805298152615.html?spm=a2g0o.productlist.main.87.5d5a7266wT6Dbf&algo_pvid=6d4d93c3-0183-4563-84bf-20d79c47cac8&algo_exp_id=6d4d93c3-0183-4563-84bf-20d79c47cac8-43&pdp_npi=3%40dis%21USD%2126.82%2118.77%21%21%21%21%21%4021021a7216877894377488298d0744%2112000033266923091%21sea%21US%210&curPageLogUid=eTo5AyBj1XJU",
            category: categories[2],
            price: 18.77
        },
        {
            name: "Message Note Holder",
            image: "https://ae01.alicdn.com/kf/H7cf74ac2a9db4a66bac704be53b0b02fR/Animal-Message-Note-Holder-Cute-Ornaments-Photo-Holder-Memo-Clip-Business-Card-Holder-Office-Home-Desk.jpg_220x220.jpg_.webp",
            description: "Animal Message Note Holder Cute Ornaments Photo Holder Memo Clip Business Card Holder Office Home Desk Decoration Accessories",
            link: "https://www.aliexpress.us/item/3256803017882105.html?spm=a2g0o.productlist.main.55.5d5a7266wT6Dbf&algo_pvid=000aee07-6bb1-4536-a128-bb50d95da328&algo_exp_id=000aee07-6bb1-4536-a128-bb50d95da328-27&pdp_npi=3%40dis%21USD%213.74%213.74%21%21%21%21%21%40211bec8616877897121667204d07af%2112000024647796977%21sea%21US%210&curPageLogUid=wTyMTKJthnhf",
            category: categories[2],
            price: 3.74
        },
        {
            name: "Stand Up Desk",
            image: "https://ae01.alicdn.com/kf/S84efc8469a3f400f826b2dc78f927744i/2023-ErGear-Height-Adjustable-Electric-Standing-Desk-48-x-24-Inches-Sit-Stand-up-Desk-Memory.jpg_220x220.jpg_.webp",
            description: "2023 ErGear Height Adjustable Electric Standing Desk 48 x 24 Inches Sit Stand up Desk Memory Computer Home Office Desk",
            link: "https://www.aliexpress.us/item/3256805321188989.html?spm=a2g0o.productlist.main.11.34001a59FhpOW3&algo_pvid=6453ee21-875b-496d-9c0e-a0f4802923c8&algo_exp_id=6453ee21-875b-496d-9c0e-a0f4802923c8-5&pdp_npi=3%40dis%21USD%21336.37%21168.19%21%21%21%21%21%40212250c216877871870882421d0745%2112000033349593075%21sea%21US%210&curPageLogUid=da1njy3yDNza",
            category: categories[2],
            price: 168
        },
        {
            name: "Treadmill Walking Pad",
            image: "https://ae01.alicdn.com/kf/S33878120f52c4727802308387435182ey/US-Stock-Under-Desk-Treadmill-Machine-Walking-Pad-for-Home-Office.jpg_220x220.jpg_.webp",
            description: "US Stock Under Desk Treadmill Machine Walking Pad for Home Office",
            link: "https://www.aliexpress.us/item/3256805324252087.html?spm=a2g0o.productlist.main.5.34051d6ew7fmuz&algo_pvid=fb5fa0c7-dc1b-42ce-b91e-4f7516c972b3&algo_exp_id=fb5fa0c7-dc1b-42ce-b91e-4f7516c972b3-2&pdp_npi=3%40dis%21USD%21286.0%21286.0%21%21%21%21%21%40210218bf16877879252867936d0743%2112000033359396216%21sea%21US%210&curPageLogUid=sFQyMizTHxhM",
            category: categories[2],
            price: 286
        },
        {
            name: "Lazy Computer Sofa Chair",
            image: "https://ae01.alicdn.com/kf/S1f5d0ce13daa40d28837177b0bc55d5aZ/Lazy-Computer-Sofa-Chair-Home-Comfortable-Sedentary-Backrest-Desk-Chair-Anchor-Live-Chair-Bedroom-Lazy-Chair.jpg_220x220.jpg_.webp",
            description: "Lazy Computer Sofa Chair Home Comfortable Sedentary Backrest Desk Chair Anchor Live Chair Bedroom Lazy Chair",
            link: "https://www.aliexpress.us/item/3256805420822774.html?spm=a2g0o.productlist.main.21.269b5dc7XtZE6E&algo_pvid=16d081f4-1d44-45d3-b594-7f92564a9e61&algo_exp_id=16d081f4-1d44-45d3-b594-7f92564a9e61-10&pdp_npi=3%40dis%21USD%21222.61%21189.22%21%21%21%21%21%40212248ba16877882107106270d0756%2112000033729658639%21sea%21US%210&curPageLogUid=UNFweellis6W",
            category: categories[2],
            price: 189
        },
        {
            name: "Senior Developer Skills StackOverflow",
            image: "https://ae01.alicdn.com/kf/S7f9abcf05a7c4dae93c8c19932766730o/Senior-Developer-Skills-Stackoverflow-CTRL-C-V-T-Shirt-Programmer-Personality-Frontend-Backend-Geek-Coder-Cotton.jpg_220x220.jpg_.webp",
            description: "Senior Developer Skills Stackoverflow CTRL C+V T-Shirt Programmer Personality Frontend Backend Geek Coder Cotton Quality Clothes",
            link: "https://www.aliexpress.com/item/1005004714192060.html?spm=a2g0o.productlist.main.37.41bfd6e72dp5A6&algo_pvid=b106364c-7871-4898-a1d7-7024d35be072&algo_exp_id=b106364c-7871-4898-a1d7-7024d35be072-18&pdp_npi=3%40dis%21CAD%218.62%215.52%21%21%21%21%21%4021021a7216877965485572592d0744%2112000030204469188%21sea%21CA%21721336510&curPageLogUid=oX8KVGq2pLNg",
            category: categories[0],
            price: 9
        },
        {
            name: "Chat GPT T Shirt",
            image: "https://ae01.alicdn.com/kf/S1cf6c28ba2734506bd31bd08712c6ee6g/Men-Clothing-ChatGPT-More-Chat-GPT-Developer-Programmer-Coder-Artwork-Gift-Tee-Unisex-Tops-Think-Less.jpg_220x220.jpg_.webp",
            description: "Men Clothing ChatGPT More Chat GPT Developer Programmer Coder Artwork Gift Tee Unisex Tops Think Less Women Graphic T Shirts",
            link: "https://www.aliexpress.com/item/1005005390055110.html?spm=a2g0o.productlist.main.1.41bfd6e72dp5A6&algo_pvid=b106364c-7871-4898-a1d7-7024d35be072&algo_exp_id=b106364c-7871-4898-a1d7-7024d35be072-0&pdp_npi=3%40dis%21CAD%2115.86%216.34%21%21%21%21%21%4021021a7216877965485572592d0744%2112000032857526166%21sea%21CA%21721336510&curPageLogUid=BndFk1kiN0CJ",
            category: categories[0],
            price: 5
        },
        {
            name: "Coding T shirt",
            image: "https://ae01.alicdn.com/kf/Sd7e87b08229a46cfbc0cd642eb80f64bP/Programmer-Programming-Coding-Coder-Men-Tshirts-Linux-Root-Sudo-Fun-Tee-Shirt-Streetwear-Men-T-Shirt.jpg_220x220.jpg_.webp",
            description: "Programmer Programming Coding Coder Men Tshirts Linux Root Sudo Fun Tee Shirt Streetwear Men T Shirt Cotton Tee Clothes",
            link: "https://www.aliexpress.com/item/1005003786149788.html?spm=a2g0o.productlist.main.5.3169d6e7Essq0I&algo_pvid=257fb502-fdd9-4482-92ff-449dbbea26e3&algo_exp_id=257fb502-fdd9-4482-92ff-449dbbea26e3-2&pdp_npi=3%40dis%21CAD%2146.03%2117.03%21%21%21%21%21%40211bf31716878423335333133d07e4%2112000027163094459%21sea%21CA%21721336510&curPageLogUid=lRiox9hnSwfW",
            category: categories[0],
            price: 9
        },
        {
            name: "Cat Key Cap",
            image: "https://ae01.alicdn.com/kf/He943ce028ad544b8a30dc8eacb1e864fx/1Pcs-Animal-Cartoon-Key-Cover-Cap-Silicone-Key-Accessories-PVC-Soft-Dog-Cat-Key-Holder-Key.jpg_220x220.jpg_.webp",
            description: "Animal Cartoon Key Cover Cap Silicone Key Accessories PVC Soft Cat Key Holder Key Chain For Girl Women Trinket Gift",
            link: "https://www.aliexpress.us/item/2255800383913868.html?spm=a2g0o.productlist.main.61.7f6b275ehmaw54&algo_pvid=15c3bdc3-70c4-403d-8c3b-84597feeb083&algo_exp_id=15c3bdc3-70c4-403d-8c3b-84597feeb083-30&pdp_npi=3%40dis%21USD%210.78%210.7%21%21%21%21%21%40211be10916881656326396192d07e2%2110000003071830129%21sea%21US%210&curPageLogUid=TQQU8j8Pr65J",
            category: categories[4],
            price: 2
        },
        {
            name: "Hair clip",
            image: "https://ae01.alicdn.com/kf/S63fd75f52ed246b0ae51beb44dac68e6C/New-Letter-B-Hair-Claws-Girls-Elegant-Shark-Clip-High-Ponytail-Hair-Grab-Clip-Headwear-Women.jpg_220x220.jpg_.webp",
            description: "New Letter B Hair Claws Girls Elegant Shark Clip High Ponytail Hair Grab Clip Headwear Women Fashion Barrettes Hair Accessories",
            link: "https://www.aliexpress.us/item/3256805315347868.html?spm=a2g0o.productlist.main.59.7f6b275ehmaw54&algo_pvid=15c3bdc3-70c4-403d-8c3b-84597feeb083&aem_p4p_detail=202306301553528306386135462800005589400&algo_exp_id=15c3bdc3-70c4-403d-8c3b-84597feeb083-29&pdp_npi=3%40dis%21USD%216.13%210.99%21%21%21%21%21%40211be10916881656326396192d07e2%2112000033330626150%21sea%21US%210&curPageLogUid=63rux21QpbPc&search_p4p_id=202306301553528306386135462800005589400_6",
            category: categories[1],
            price: 2
        },
        {
            name: "Knitted beanie",
            image: "https://ae01.alicdn.com/kf/Sc50af9c8ad1940f596b2df90b487ad3aR/Stretchy-Plain-Knitted-Hat-Women-Beanies-Solid-Skull-Cap-Winter-Keep-Warm-Dark-Green-Grey-Blue.jpg_220x220.jpg_.webp",
            description: "Stretchy Plain Knitted Hat Women Beanies Solid Skull Cap Winter Keep Warm Dark Green Grey Blue Black",
            link: "https://www.aliexpress.us/item/2255800085432663.html?spm=a2g0o.productlist.main.17.7c774a4aIyUNq2&algo_pvid=45e804f5-7649-4c1b-9b69-18702839707e&algo_exp_id=45e804f5-7649-4c1b-9b69-18702839707e-8&pdp_npi=3%40dis%21USD%214.63%210.99%21%21%21%21%21%40211bea0816881658794685311d07b9%2110000001106165525%21sea%21US%210&curPageLogUid=KYAg4b5ML8jc",
            category: categories[1],
            price: 2
        },
        {
            name: "New Knitted beanie",
            image: "https://ae01.alicdn.com/kf/H2ffa8307c2c04c36afeaa7cf399f46b2y/New-Women-Men-Knitted-Beanie-Hat-Cap-Autumn-Winter-Male-Lady-Casual-Embroidered-Boy-Girl-Cap.jpg_220x220.jpg_.webp",
            description: "New Women Men Knitted Beanie Hat Cap Autumn Winter Male Lady Casual Embroidered Boy Girl Cap Hat For Women Men",
            link: "https://www.aliexpress.us/item/3256803201622115.html?spm=a2g0o.productlist.main.77.7c774a4aIyUNq2&algo_pvid=caf91b94-2cbb-48a9-92a5-9611f5c7d412&algo_exp_id=caf91b94-2cbb-48a9-92a5-9611f5c7d412-38&pdp_npi=3%40dis%21USD%216.96%213.48%21%21%21%21%21%402102186a16881659067617104d077f%2112000025547820365%21sea%21US%210&curPageLogUid=NpfHSmTfIIMK",
            category: categories[1],
            price: 4
        },
        {
            name: "Wooden table lamp",
            image: "https://ae01.alicdn.com/kf/Sd9202210c02b44208a26a9a661bd799bK/Creative-Table-Lamp-Wooden-Robot-Shape-LED-Nordic-Art-Desk-Lights-Eye-Protection-Reading-Bedroom-Desktop.jpg_220x220.jpg_.webp",
            description: "Creative Table Lamp Wooden Robot Shape LED Nordic Art Desk Lights/ Eye Protection Reading&Bedroom Desktop Night Light Home Decor",
            link: "https://www.aliexpress.us/item/3256805303345898.html?spm=a2g0o.productlist.main.39.1c5e4897IOKILD&algo_pvid=94195707-1816-4738-b0f7-186aacacc373&aem_p4p_detail=202306301511488760455493162780005517941&algo_exp_id=94195707-1816-4738-b0f7-186aacacc373-19&pdp_npi=3%40dis%21USD%2163.6%2131.16%21%21%21%21%21%40210213c816881631084095782d076c%2112000033285384918%21sea%21US%210&curPageLogUid=Ucje4aoO6A8Y&search_p4p_id=202306301511488760455493162780005517941_4",
            category: categories[4],
            price: 32
        },
        {
            name: "Kitty cat keyboard and mouse",
            image: "https://ae01.alicdn.com/kf/Sb673b5517b29414391b17fad50f9bdafc/MOFII-Kawaii-Cat-2-4G-Wireless-Keyboard-and-Mouse-Set-Cute-Lipstick-Punk-Keyboards-and-Mice.jpg_220x220.jpg_.webp",
            description: "Cat 2.4G Wireless Keyboard and Mouse Set Cute Lipstick Punk Keyboards and Mice Combos for Laptop PC Home Office",
            link: "https://www.aliexpress.us/item/3256805567991997.html?spm=a2g0o.productlist.main.31.1c5e4897IOKILD&algo_pvid=94195707-1816-4738-b0f7-186aacacc373&algo_exp_id=94195707-1816-4738-b0f7-186aacacc373-15&pdp_npi=3%40dis%21USD%2128.58%2128.58%21%21%21%21%21%40210213c816881631084095782d076c%2112000034232659704%21sea%21US%210&curPageLogUid=4fAyGZsW2NDO",
            category: categories[3],
            price: 29
        },
        {
            name: "Multifunctional Desk Organizer/Flower pot",
            image: "https://ae01.alicdn.com/kf/S9207d0d5a9644b06bb208de4c7d3fcc7D/Multifunctional-Desk-Organizer-Home-Office-Desk-Organizer-Room-Organizer-Office-Desk-Anime-Storage-Box-Garden-Flower.jpg_220x220.jpg_.webp",
            description: "Multifunctional Desk Organizer Home Office Desk Organizer Room Organizer Office Desk Anime Storage Box Garden Flower Pot",
            link: "https://www.aliexpress.us/item/3256801501420256.html?spm=a2g0o.productlist.main.13.1c5e4897IOKILD&algo_pvid=50b52e4b-e8fc-44c0-b2b2-a4c3976b0d1c&algo_exp_id=50b52e4b-e8fc-44c0-b2b2-a4c3976b0d1c-6&pdp_npi=3%40dis%21USD%2121.04%2113.68%21%21%21%21%21%40212278bd16881643861844485d07cd%2112000027278266921%21sea%21US%210&curPageLogUid=cHE4uUSQ00J3",
            category: categories[4],
            price: 14
        },
        {
            name: "Candy Color Wireless Keyboard Mouse Set",
            image: "https://ae01.alicdn.com/kf/S716f2121f0904c4585ef2fc9e684adc6t/Candy-Color-Wireless-Keyboard-Mouse-Set-Round-Keycap-2-4G-Keyboard-Home-Office-PC-Tablet-Laptop.jpg_220x220.jpg_.webp",
            description: "Candy Color Wireless Keyboard Mouse Set Round Keycap 2.4G Keyboard Home Office PC Tablet Laptop 84-key Keyboards Mouse Set",
            link: "https://www.aliexpress.us/item/3256804030220867.html?spm=a2g0o.productlist.main.75.1c5e4897IOKILD&algo_pvid=806e99eb-2fcb-415b-8d96-78519149f584&algo_exp_id=806e99eb-2fcb-415b-8d96-78519149f584-37&pdp_npi=3%40dis%21USD%2141.99%2127.29%21%21%21%21%21%4021021a7216881644746391311d0744%2112000028410840037%21sea%21US%210&curPageLogUid=D4eUobp582Ke",
            category: categories[3],
            price: 28
        },
        {
            name: "IPad mini cat cover",
            image: "https://ae01.alicdn.com/kf/Se1e7b00c640c498da409dbe528f8fce5S/For-iPad-Mini-4-5-7-9-6-8-3-Inches-Air-3-4-5-Cute.jpg_220x220.jpg_.webp",
            description: "For iPad Mini 4 5 7.9 6 8.3 Inches Air 3 4 5 Cute Bear Case For iPad 2019 9.7 2020 2021 10.2 2022 10.9 Pro 11 12.9 Inches Cover",
            link: "https://www.aliexpress.us/item/3256804371866568.html?spm=a2g0o.detail.0.0.2d26vRItvRItkZ&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.281175.0&scm_id=1007.40050.281175.0&scm-url=1007.40050.281175.0&pvid=7d1b99b6-08d8-4580-9bfa-c2cb07ae8f50&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40050.281175.0,pvid:7d1b99b6-08d8-4580-9bfa-c2cb07ae8f50,tpp_buckets:668%232846%238115%232000&pdp_npi=3%40dis%21USD%2113.56%215.17%21%21%21%21%21%40210324e516881645112038359ed212%2112000033799225454%21rec%21US%21",
            category: categories[3],
            price: 6
        },
        {
            name: "Sit Stand Desk Standing Desk ",
            image: "https://ae01.alicdn.com/kf/Se72a20526bbb4f45a061320d99ebd425b/Sit-Stand-Desk-Standing-Desk-Standing-Work-Station-Desk-Organizer-Desk-for-Home-Office-Laptop-Stand.jpg_220x220.jpg_.webp",
            description: "Sit Stand Desk Standing Desk Standing Work Station Desk Organizer Desk for Home Office Laptop Stand GABRIEL",
            link: "https://www.aliexpress.us/item/3256805566466004.html?spm=a2g0o.productlist.main.17.1c5e4897IOKILD&algo_pvid=94195707-1816-4738-b0f7-186aacacc373&algo_exp_id=94195707-1816-4738-b0f7-186aacacc373-8&pdp_npi=3%40dis%21USD%21164.15%2183.72%21%21%21%21%21%40210213c816881631084095782d076c%2112000034228709103%21sea%21US%210&curPageLogUid=leYwoG5YmbX1",
            category: categories[2],
            price: 84
        },
        {
            name: "Simple Home Office Desktop Computer Desk",
            image: "https://ae01.alicdn.com/kf/S0e50dcb5f6ad450cb6c215307ecdf929L/Simple-Home-Office-Desktop-Computer-Desk-study-desk-white-desk-laptop-table-desk-table.jpg_220x220.jpg_.webp",
            description: "Simple Home Office Desktop Computer Desk study desk white desk laptop table desk table",
            link: "https://www.aliexpress.us/item/3256805568689848.html?spm=a2g0o.productlist.main.75.1c5e4897IOKILD&algo_pvid=94195707-1816-4738-b0f7-186aacacc373&algo_exp_id=94195707-1816-4738-b0f7-186aacacc373-37&pdp_npi=3%40dis%21USD%21171.62%2185.81%21%21%21%21%21%40210213c816881631084095782d076c%2112000034235390064%21sea%21US%210&curPageLogUid=Is0Zn12p8mJ1",
            category: categories[2],
            price: 86
        },
        {
            name: "Pedal Exercise Mini Cycle Bike",
            image: "https://ae01.alicdn.com/kf/S6784e10a47f24715a7746bf6d8ecfd617/Pedal-Exercise-Mini-Cycle-Bike-Great-for-Home-or-Office-Workout-Tone-and-Strengthen-Legs-or.jpg_220x220.jpg_.webp",
            description: "Pedal Exercise Mini Cycle Bike Great for Home or Office Workout - Tone and Strengthen Legs or Arms - Digital Display for RPMs, C",
            link: "https://www.aliexpress.us/item/3256805558965509.html?spm=a2g0o.productlist.main.29.1c5e4897IOKILD&algo_pvid=9a0badc5-7f7d-4445-9bc1-750fbbdcc590&aem_p4p_detail=20230630153348327838460841200005596757&algo_exp_id=9a0badc5-7f7d-4445-9bc1-750fbbdcc590-14&pdp_npi=3%40dis%21USD%2154.75%2146.53%21%21%21%21%21%40212250c216881644282755357d0745%2112000034193802096%21sea%21US%210&curPageLogUid=FMbqqud0aonw&search_p4p_id=20230630153348327838460841200005596757_31",
            category: categories[2],
            price: 47
        },
        {
            name: "Nordic style modern simple desk",
            image: "https://ae01.alicdn.com/kf/Saf140cadeaf9449ea90d5edf0331b20aG/Nordic-study-room-solid-wood-desk-modern-simple-small-apartment-desk-home-minimalist-study-long-table.jpg_220x220.jpg_.webp",
            description: "Nordic study room, solid wood desk, modern simple small apartment desk, home minimalist study long table against the wall",
            link: "https://www.aliexpress.us/item/3256805508570699.html?spm=a2g0o.productlist.main.1.1c5e4897IOKILD&algo_pvid=806e99eb-2fcb-415b-8d96-78519149f584&algo_exp_id=806e99eb-2fcb-415b-8d96-78519149f584-0&pdp_npi=3%40dis%21USD%21314.03%21226.1%21%21%21%21%21%4021021a7216881644746391311d0744%2112000034035734765%21sea%21US%210&curPageLogUid=vzN0byNEJVXx",
            category: categories[2],
            price: 227
        },
        {
            name: "Modern office chair",
            image: "https://ae01.alicdn.com/kf/S5ad2936f85e24cfc938861bcedf37b249/Office-Chairs-Modern-Lift-Swivel-Backrest-BedroomLeisure-Comfortable-Computer-Boss-Armchair-Ergonomic-Silla-Home-Furniture.jpg_220x220.jpg_.webp",
            description: "Office Chairs Modern Lift Swivel Backrest BedroomLeisure Comfortable Computer Boss Armchair Ergonomic Silla Home Furniture",
            link: "https://www.aliexpress.us/item/3256805390189856.html?spm=a2g0o.productlist.main.65.1c5e4897IOKILD&algo_pvid=5ec4b07e-0515-4544-87c2-d7b54cccc536&algo_exp_id=5ec4b07e-0515-4544-87c2-d7b54cccc536-32&pdp_npi=3%40dis%21USD%21583.98%21291.99%21%21%21%21%21%40211bcaae16881645184618759d086f%2112000033612932947%21sea%21US%210&curPageLogUid=rXLdTzluZrzi",
            category: categories[2],
            price: 292
        },
        {
            name: "Sit Stand Desk Standing Desk",
            image: "https://ae01.alicdn.com/kf/Se72a20526bbb4f45a061320d99ebd425b/Sit-Stand-Desk-Standing-Desk-Standing-Work-Station-Desk-Organizer-Desk-for-Home-Office-Laptop-Stand.jpg_220x220.jpg_.webp",
            description: "Sit Stand Desk Standing Desk Standing Work Station Desk Organizer Desk for Home Office Laptop Stand GABRIEL",
            link: "https://www.aliexpress.us/item/3256805566466004.html?spm=a2g0o.productlist.main.17.1c5e4897IOKILD&algo_pvid=94195707-1816-4738-b0f7-186aacacc373&algo_exp_id=94195707-1816-4738-b0f7-186aacacc373-8&pdp_npi=3%40dis%21USD%21164.15%2183.72%21%21%21%21%21%40210213c816881631084095782d076c%2112000034228709103%21sea%21US%210&curPageLogUid=leYwoG5YmbX1",
            category: categories[2],
            price: 84
        },
    ]);

    console.log(items)

    process.exit();
})();