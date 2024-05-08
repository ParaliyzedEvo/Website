stuff = {
    Discord: {
        class: "discpng",
        link: "https://discord.gg/XVhf65BvUT",
        img: {
            base: "image/discord.png",
            hover: "image/discord-h.png",
        },
    },
    Email: {
        class: "mailpng",
        link: "mailto:jamaljaqavion6969420@gmail.com",
        img: {
            base: "image/mail.png",
            hover: "image/mail-h.png",
        },
    },
    Github: {
        class: "gitpng",
        link: "https://github.com/Paraliyzedevo/",
        img: {
            base: "image/git.png",
            hover: "image/git-h.png",
        },
    },
    Instagram: {
        class: "instagrampng",
        link: "https://www.instagram.com/paraliyzed_evo/",
        img: {
            base: "image/instagram.png",
            hover: "image/instagram-h.png",
        },
    },
    Musescore: {
        class: "mailpng",
        link: "https://musescore.com/paraliyzed_evo",
        img: {
            base: "image/musescore.png",
            hover: "image/musescore-h.png",
        },
    },
    'My skins': {
        class: "osuskpng",
        link: "osu-skin/HOME.html",
        img: {
            base: "image/osusk.png",
            hover: "image/osusk-h.png",
        },
    },
    'osu!': {
        class: "osupng",
        link: "https://osu.ppy.sh/users/19637339",
        img: {
            base: "image/osu.png",
            hover: "image/osu-h.png",
        },
    },
    'Reddit': {
        class: "redditpng",
        link: "https://www.reddit.com/user/Paraliyzed_evo/",
        img: {
            base: "image/reddit.png",
            hover: "image/reddit-h.png",
        },
    },
    'Soundcloud': {
        class: "mailpng",
        link: "https://soundcloud.com/bestosuplayer",
        img: {
            base: "image/soundcloud.png",
            hover: "image/soundcloud-h.png",
        },
    },
    'Specs and Stuff': {
        class: "stuffpng",
        link: "stuff.html",
        img: {
            base: "image/stuff.png",
            hover: "image/stuff-h.png",
        },
    },
    'Tips': {
        class: "tippng",
        link: "https://streamelements.com/paraliyzed_evo/tip",
        img: {
            base: "image/tip.png",
            hover: "image/tip-h.png",
        },
    },
    Twitch: {
        class: "twitchpng",
        link: "https://twitch.tv/Paraliyzed_evo",
        img: {
            base: "image/twitch.png",
            hover: "image/twitch-h.png",
        },
    },
    Twitter: {
        class: "mailpng",
        link: "https://twitter.com/Light_Bushi",
        img: {
            base: "image/twitter.png",
            hover: "image/twitter-h.png",
        },
    },
    YouTube: {
        class: "mailpng",
        link: "https://www.youtube.com/@BestOsuPlayer",
        img: {
            base: "image/yt.png",
            hover: "image/yt-h.png",
        },
    },
}

function setupHomeLinks() {
    let thing = document.getElementById("home-links");
    let text = "";

    for (let key in stuff) {
        /**
            template
            <div style="display:inline-block">
                <p
                    style="margin-right:20px; margin-left:20px; font-size:20px; margin-bottom:4px; color:rgb(200, 200, 200)">
                    INSERT NAME</p>
                <p><a href="INSERT URL" target="_blank">
                <div class="mailpng">
                    <img src="BASE IMAGE" class=img-nh alt="png bottom" />
                    <img src="HOVER IMAGE" class=img-h alt="png top" />
                </div>
                </a></p>
            </div>
        */
        text += `
        <div style="display:inline-block">
            <p
                style="margin-right:20px; margin-left:20px; font-size:20px; margin-bottom:4px; color:rgb(200, 200, 200)">
                ${key}</p>
            <p><a href="${stuff[key].link}" target="_blank">
            <div class="${stuff[key].class}">
                <img src="${stuff[key].img.base}" class=img-nh alt="png bottom" />
                <img src="${stuff[key].img.hover}" class=img-h alt="png top" />
            </div>
            </a></p>
        </div>
        `;
    }
    thing.innerHTML = text;
}

//above is for index.html
