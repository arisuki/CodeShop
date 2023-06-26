export const data = [
    {
        name: "Pkmn Onesie",
        image: "https://ae01.alicdn.com/kf/Sa18db0c2a8b24f8194471f6cc215ac61G/Women-Pajamas-Onesie-For-Adults-Kigurumi-Men-Sleepwear-Anime-Halloween-Cosplay-Costume-Cartoon-One-Piece-Pijama.jpg_Q90.jpg_.webp",
        description: "A Pokemon Onesie",
        link: "https://www.aliexpress.com/item/1005005183181149.html?spm=a2g0o.productlist.main.15.2f0440732mDDSI&algo_pvid=9d0ac26f-cee2-4d17-8d07-4f997401657b&algo_exp_id=9d0ac26f-cee2-4d17-8d07-4f997401657b-7&pdp_npi=3%40dis%21CAD%2157.2%2132.6%21%21%21%21%21%40212240a316877872100467405d0787%2112000032013053923%21sea%21CA%21721336510&curPageLogUid=RrvnkTVg4Hn6",
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
        price: 32.60
    },
    {
        name: "Cute socks",
        image: "https://ae01.alicdn.com/kf/Sa18db0c2a8b24f8194471f6cc215ac61G/Women-Pajamas-Onesie-For-Adults-Kigurumi-Men-Sleepwear-Anime-Halloween-Cosplay-Costume-Cartoon-One-Piece-Pijama.jpg_Q90.jpg_.webp",
        description: "Some adorable socks",
        link: "https://www.aliexpress.us/item/3256805538383367.html?spm=a2g0o.productlist.main.27.69532f45m4kuIa&algo_pvid=600394fa-53d5-4cec-9040-3135b434f6a7&algo_exp_id=600394fa-53d5-4cec-9040-3135b434f6a7-13&pdp_npi=3%40dis%21USD%213.72%211.82%21%21%21%21%21%402102196716877887861227126d077d%2112000034155594085%21sea%21US%210&curPageLogUid=u1gbXd2cloKo",
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
        price: 1.82
    }
]