const skins = [
    {
        id: '01',
        name: 'Paraliyzed V24',
        modes: ['osu', 'fruits', 'mania', 'takio'],
        date_start: '01-15-2025',
        date_end: 'Present',
        description: 'Skin that I made and main',
        url: 'https://www.mediafire.com/folder/dfeh43vx3job3/Paraliyzed+Skins',
        video_url: 'https://www.youtube.com/embed/_T48G0_fRmk',
        images: [
            // {
            //     name: 'Song select',
            //     url: 'url',
            //     image_url: '15/screenshot1157.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Mode select',
            //     url: 'url',
            //     image_url: '15/screenshot1158.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Ranking panel',
            //     url: 'url',
            //     image_url: '15/screenshot1149.jpg',
            //     isGameplay: false,
            // },
            {
                name: 'Gameplay',
                url: 'https://www.mediafire.com/file/0onab773qi0u6ox/Paraliyzed.osk/file', // url to specific skin version
                image_url: '../img/01.png',
                isGameplayVariant: false, // if true, previewer download button will say "download \"<name>\"" instead of "download skin"
            },
            {
                name: 'Song select',
                url: 'null',
                image_url: '../img/main/menu.png',
                isGameplayVariant: false,
            },
            {
                name: 'Mod select',
                url: 'null',
                image_url: '../img/main/mods.png',
                isGameplayVariant: false,
            },
            {
                name: 'Ranking panel',
                url: 'null',
                image_url: '../img/main/ranking.png',
                isGameplayVariant: false,
            },
			{
                name: 'Pass',
                url: 'null',
                image_url: '../img/main/pass.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Fail',
                url: 'null',
                image_url: '../img/main/fail.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Spinner',
                url: 'null',
                image_url: '../img/main/spinner.png',
                isGameplayVariant: false,
            },
			{
                name: 'Skip',
                url: 'null',
                image_url: '../img/main/skip.png',
                isGameplayVariant: false,
            },
			{
                name: 'Catch',
                url: 'null',
                image_url: '../img/main/catch.png',
                isGameplayVariant: false,
            },
			{
                name: 'Mania',
                url: 'null',
                image_url: '../img/main/mania.png',
                isGameplayVariant: false,
            },
			{
                name: 'Takio',
                url: 'null',
                image_url: '../img/main/takio.png',
                isGameplayVariant: false,
            },
        ],
        sources: [
            {
                name: 'Images',
                items: [
                    {
                        name: 'Arrow warning',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Mania Mods',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Cursor',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Catch Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Spinner Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Sliderscorepoint',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Snow',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Reverse Arrow Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Buttons',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Fail Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Pause Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Textures (I recolored them in my skin)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Mod Textures (that are not covered by the tuyu ones)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Star Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Ranking Panel',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Takio Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Count Textures (count1-3.png)',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/OsuSkins/comments/wn2fbw/std_only_lycoris_recoil_kurumi_osuskin/">Lycoris Recoil - Kurumi Skin</a>',
                    },
                    {
                        name: 'I forgot V1',
                        desc: 'Idk, I js forgot💀💀💀 V1 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'Spinner Sounds (osu!standard)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'scrolltotop-select.mp3',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Menu/Multi Sounds',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'pause-loop.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=AVK0BIVqLLc">First Date</a>',
                    },
                    {
                        name: 'failsound.ogg',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/CalliopeMori/comments/lj33w7/calli_osu_skin_in_case_you_play_osu/">[Hololive EN] Mori Calliope 森美声</a>',
                    },
                    {
                        name: 'applause.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=JS9Lh1NUAF4">If There Was an Endpoint./TUYU [Music Box]</a>',
                    },
                    {
                        name: 'I forgot V2',
                        desc: 'Idk, I js forgot💀💀💀 V2 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Fonts',
                items: [
                    {
                        name: '<a class="highlightLink" href="https://www.fontsquirrel.com/fonts/jellee">Jelle</a>',
                        desc: 'Used for hitcircles',
                    },
                    {
                        name: 'I forgot V3',
                        desc: 'Idk, I js forgot💀💀💀 V3 (I made the original like 3 years ago)',
                    },
                ]
            }
        ]
    },
    {
        id: '02',
        name: 'Paraliyzed DT V2',
        modes: ['osu', 'fruits', 'mania', 'takio'],
        date_start: '01-15-2025',
        date_end: 'Present',
        description: 'Same as the main skin but it\'s for dt',
        url: 'https://www.mediafire.com/folder/dfeh43vx3job3/Paraliyzed+Skins',
        video_url: 'https://www.youtube.com/embed/SLLNzzLqhdY',
        images: [
            // {
            //     name: 'Song select',
            //     url: 'url',
            //     image_url: '15/screenshot1157.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Mode select',
            //     url: 'url',
            //     image_url: '15/screenshot1158.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Ranking panel',
            //     url: 'url',
            //     image_url: '15/screenshot1149.jpg',
            //     isGameplay: false,
            // },
            {
                name: 'Gameplay',
                url: 'https://www.mediafire.com/file/4cc4b02wdlm7bbl/Paraliyzed_DT.osk/file',
                image_url: '../img/02.png',
                isGameplayVariant: false,
            },
            {
                name: 'Song select',
                url: 'null',
                image_url: '../img/main/menu.png',
                isGameplayVariant: false,
            },
            {
                name: 'Mod select',
                url: 'null',
                image_url: '../img/main/mods.png',
                isGameplayVariant: false,
            },
            {
                name: 'Ranking panel',
                url: 'null',
                image_url: '../img/main/ranking.png',
                isGameplayVariant: false,
            },
			{
                name: 'Pass',
                url: 'null',
                image_url: '../img/main/pass.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Fail',
                url: 'null',
                image_url: '../img/main/fail.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Spinner',
                url: 'null',
                image_url: '../img/main/spinner.png',
                isGameplayVariant: false,
            },
			{
                name: 'Skip',
                url: 'null',
                image_url: '../img/main/skip.png',
                isGameplayVariant: false,
            },
			{
                name: 'Catch',
                url: 'null',
                image_url: '../img/main/catch.png',
                isGameplayVariant: false,
            },
			{
                name: 'Mania',
                url: 'null',
                image_url: '../img/main/mania.png',
                isGameplayVariant: false,
            },
			{
                name: 'Takio',
                url: 'null',
                image_url: '../img/main/takio.png',
                isGameplayVariant: false,
            },
        ],
        sources: [
            {
                name: 'Images',
                items: [
                    {
                        name: 'Arrow warning',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Mania Mods',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Cursor',
                        desc: 'From the skin <a class="highlightLink" href="https://skins.osuck.net/skins/166?v=0">Rafis 2018-03-26 HDDT v1 osu skin</a>',
                    },
                    {
                        name: 'Hitcircles',
                        desc: 'From the skin <a class="highlightLink" href="https://skins.osuck.net/skins/166?v=0">Rafis 2018-03-26 HDDT v1 osu skin</a>',
                    },
                    {
                        name: 'Slider Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://skins.osuck.net/skins/166?v=0">Rafis 2018-03-26 HDDT v1 osu skin</a>',
                    },
                    {
                        name: 'Catch Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Spinner Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Sliderscorepoint',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Snow',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Reverse Arrow Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Buttons',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Fail Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Pause Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Textures (I recolored them in my skin)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Mod Textures (that are not covered by the tuyu ones)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Star Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Ranking Panel',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Takio Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Count Textures (count1-3.png)',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/OsuSkins/comments/wn2fbw/std_only_lycoris_recoil_kurumi_osuskin/">Lycoris Recoil - Kurumi Skin</a>',
                    },
                    {
                        name: 'I forgot V1',
                        desc: 'Idk, I js forgot💀💀💀 V1 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'Spinner Sounds (osu!standard)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'scrolltotop-select.mp3',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Menu/Multi Sounds',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'pause-loop.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=AVK0BIVqLLc">First Date</a>',
                    },
                    {
                        name: 'failsound.ogg',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/CalliopeMori/comments/lj33w7/calli_osu_skin_in_case_you_play_osu/">[Hololive EN] Mori Calliope 森美声</a>',
                    },
                    {
                        name: 'applause.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=JS9Lh1NUAF4">If There Was an Endpoint./TUYU [Music Box]</a>',
                    },
                    {
                        name: 'I forgot V2',
                        desc: 'Idk, I js forgot💀💀💀 V2 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Fonts',
                items: [
                    {
                        name: '<a class="highlightLink" href="https://www.fontsquirrel.com/fonts/jellee">Jelle</a>',
                        desc: 'Used for hitcircles',
                    },
                    {
                        name: 'I forgot V3',
                        desc: 'Idk, I js forgot💀💀💀 V3 (I made the original like 3 years ago)',
                    },
                ]
            }
        ]
    },
    {
        id: '03',
        name: 'Paraliyzed Instafade V5',
        modes: ['osu', 'fruits', 'mania', 'takio'],
        date_start: '01-15-2025',
        date_end: 'Present',
        description: 'Same as the main skin but it\'s instafade',
        url: 'https://www.mediafire.com/folder/dfeh43vx3job3/Paraliyzed+Skins',
        video_url: 'https://www.youtube.com/embed/uyrZDezfoRE',
        images: [
            // {
            //     name: 'Song select',
            //     url: 'url',
            //     image_url: '15/screenshot1157.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Mode select',
            //     url: 'url',
            //     image_url: '15/screenshot1158.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Ranking panel',
            //     url: 'url',
            //     image_url: '15/screenshot1149.jpg',
            //     isGameplay: false,
            // },
            {
                name: 'Gameplay',
                url: 'https://www.mediafire.com/file/cfnelqzyrknntgn/Paraliyzed_Instafade.osk/file',
                image_url: '../img/03.png',
                isGameplayVariant: false,
            },
            {
                name: 'Song select',
                url: 'null',
                image_url: '../img/main/menu.png',
                isGameplayVariant: false,
            },
            {
                name: 'Mod select',
                url: 'null',
                image_url: '../img/main/mods.png',
                isGameplayVariant: false,
            },
            {
                name: 'Ranking panel',
                url: 'null',
                image_url: '../img/main/ranking.png',
                isGameplayVariant: false,
            },
			{
                name: 'Pass',
                url: 'null',
                image_url: '../img/main/pass.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Fail',
                url: 'null',
                image_url: '../img/main/fail.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Spinner',
                url: 'null',
                image_url: '../img/main/spinner.png',
                isGameplayVariant: false,
            },
			{
                name: 'Skip',
                url: 'null',
                image_url: '../img/main/skip.png',
                isGameplayVariant: false,
            },
			{
                name: 'Catch',
                url: 'null',
                image_url: '../img/main/catch.png',
                isGameplayVariant: false,
            },
			{
                name: 'Mania',
                url: 'null',
                image_url: '../img/main/mania.png',
                isGameplayVariant: false,
            },
			{
                name: 'Takio',
                url: 'null',
                image_url: '../img/main/takio.png',
                isGameplayVariant: false,
            },
        ],
        sources: [
            {
                name: 'Images',
                items: [
                    {
                        name: 'Arrow warning',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Mania Mods',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Cursor',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Catch Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Spinner Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Sliderscorepoint',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Snow',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Reverse Arrow Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Buttons',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Fail Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Pause Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Textures (I recolored them in my skin)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Mod Textures (that are not covered by the tuyu ones)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Star Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Ranking Panel',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Takio Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Count Textures (count1-3.png)',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/OsuSkins/comments/wn2fbw/std_only_lycoris_recoil_kurumi_osuskin/">Lycoris Recoil - Kurumi Skin</a>',
                    },
                    {
                        name: 'I forgot V1',
                        desc: 'Idk, I js forgot💀💀💀 V1 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'Spinner Sounds (osu!standard)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'scrolltotop-select.mp3',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Menu/Multi Sounds',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'pause-loop.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=AVK0BIVqLLc">First Date</a>',
                    },
                    {
                        name: 'failsound.ogg',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/CalliopeMori/comments/lj33w7/calli_osu_skin_in_case_you_play_osu/">[Hololive EN] Mori Calliope 森美声</a>',
                    },
                    {
                        name: 'applause.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=JS9Lh1NUAF4">If There Was an Endpoint./TUYU [Music Box]</a>',
                    },
                    {
                        name: 'I forgot V2',
                        desc: 'Idk, I js forgot💀💀💀 V2 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Fonts',
                items: [
                    {
                        name: '<a class="highlightLink" href="https://www.fontsquirrel.com/fonts/jellee">Jelle</a>',
                        desc: 'Used for hitcircles',
                    },
                    {
                        name: 'I forgot V3',
                        desc: 'Idk, I js forgot💀💀💀 V3 (I made the original like 3 years ago)',
                    },
                ]
            }
        ]
    },
    {
        id: '04',
        name: 'Paraliyzed with Reedkussy Cursor V7',
        modes: ['osu', 'fruits', 'mania', 'takio'],
        date_start: '01-15-2025',
        date_end: 'Present',
        description: 'Same as the main skin but it has the Reedkussy Cursor',
        url: 'https://www.mediafire.com/folder/dfeh43vx3job3/Paraliyzed+Skins',
        video_url: 'https://www.youtube.com/embed/m-ju5rFqcyg',
        images: [
            // {
            //     name: 'Song select',
            //     url: 'url',
            //     image_url: '15/screenshot1157.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Mode select',
            //     url: 'url',
            //     image_url: '15/screenshot1158.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Ranking panel',
            //     url: 'url',
            //     image_url: '15/screenshot1149.jpg',
            //     isGameplay: false,
            // },
            {
                name: 'Gameplay',
                url: 'https://www.mediafire.com/file/v8ee5pcq7airsja/Paraliyzed_with_the_Reedkussyy_Cursor.osk/file',
                image_url: '../img/04.png',
                isGameplayVariant: false,
            },
            {
                name: 'Song select',
                url: 'null',
                image_url: '../img/main/menu.png',
                isGameplayVariant: false,
            },
            {
                name: 'Mod select',
                url: 'null',
                image_url: '../img/main/mods.png',
                isGameplayVariant: false,
            },
            {
                name: 'Ranking panel',
                url: 'null',
                image_url: '../img/main/ranking.png',
                isGameplayVariant: false,
            },
			{
                name: 'Pass',
                url: 'null',
                image_url: '../img/main/pass.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Fail',
                url: 'null',
                image_url: '../img/main/fail.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Spinner',
                url: 'null',
                image_url: '../img/main/spinner.png',
                isGameplayVariant: false,
            },
			{
                name: 'Skip',
                url: 'null',
                image_url: '../img/main/skip.png',
                isGameplayVariant: false,
            },
			{
                name: 'Catch',
                url: 'null',
                image_url: '../img/main/catch.png',
                isGameplayVariant: false,
            },
			{
                name: 'Mania',
                url: 'null',
                image_url: '../img/main/mania.png',
                isGameplayVariant: false,
            },
			{
                name: 'Takio',
                url: 'null',
                image_url: '../img/main/takio.png',
                isGameplayVariant: false,
            },
        ],
        sources: [
            {
                name: 'Images',
                items: [
                    {
                        name: 'Arrow warning',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Mania Mods',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Cursor',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Catch Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Spinner Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Sliderscorepoint',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Snow',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Reverse Arrow Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Buttons',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Fail Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Pause Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Textures (I recolored them in my skin)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Mod Textures (that are not covered by the tuyu ones)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Star Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Ranking Panel',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Takio Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Count Textures (count1-3.png)',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/OsuSkins/comments/wn2fbw/std_only_lycoris_recoil_kurumi_osuskin/">Lycoris Recoil - Kurumi Skin</a>',
                    },
                    {
                        name: 'I forgot V1',
                        desc: 'Idk, I js forgot💀💀💀 V1 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'Spinner Sounds (osu!standard)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'scrolltotop-select.mp3',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Menu/Multi Sounds',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'pause-loop.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=AVK0BIVqLLc">First Date</a>',
                    },
                    {
                        name: 'failsound.ogg',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/CalliopeMori/comments/lj33w7/calli_osu_skin_in_case_you_play_osu/">[Hololive EN] Mori Calliope 森美声</a>',
                    },
                    {
                        name: 'applause.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=JS9Lh1NUAF4">If There Was an Endpoint./TUYU [Music Box]</a>',
                    },
                    {
                        name: 'I forgot V2',
                        desc: 'Idk, I js forgot💀💀💀 V2 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Fonts',
                items: [
                    {
                        name: '<a class="highlightLink" href="https://www.fontsquirrel.com/fonts/jellee">Jelle</a>',
                        desc: 'Used for hitcircles',
                    },
                    {
                        name: 'I forgot V3',
                        desc: 'Idk, I js forgot💀💀💀 V3 (I made the original like 3 years ago)',
                    },
                ]
            }
        ]
    },
    {
        id: '05',
        name: 'Paraliyzed with Whitecat Cursor V7',
        modes: ['osu', 'fruits', 'mania', 'takio'],
        date_start: '01-15-2025',
        date_end: 'Present',
        description: 'Same as the main skin but it has the Whitecat Cursor',
        url: 'https://www.mediafire.com/folder/dfeh43vx3job3/Paraliyzed+Skins',
        video_url: 'https://www.youtube.com/embed/AvO4o5qIzMA',
        images: [
            // {
            //     name: 'Song select',
            //     url: 'url',
            //     image_url: '15/screenshot1157.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Mode select',
            //     url: 'url',
            //     image_url: '15/screenshot1158.jpg',
            //     isGameplay: false,
            // },
            // {
            //     name: 'Ranking panel',
            //     url: 'url',
            //     image_url: '15/screenshot1149.jpg',
            //     isGameplay: false,
            // },
            {
                name: 'Gameplay',
                url: 'https://www.mediafire.com/file/11sq12ql8i2x3nk/Paraliyzed_with_the_Whitecat_Cursor.osk/file',
                image_url: '../img/05.png',
                isGameplayVariant: false,
            },
            {
                name: 'Song select',
                url: 'null',
                image_url: '../img/main/menu.png',
                isGameplayVariant: false,
            },
            {
                name: 'Mod select',
                url: 'null',
                image_url: '../img/main/mods.png',
                isGameplayVariant: false,
            },
            {
                name: 'Ranking panel',
                url: 'null',
                image_url: '../img/main/ranking.png',
                isGameplayVariant: false,
            },
			{
                name: 'Pass',
                url: 'null',
                image_url: '../img/main/pass.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Fail',
                url: 'null',
                image_url: '../img/main/fail.jpg',
                isGameplayVariant: false,
            },
			{
                name: 'Spinner',
                url: 'null',
                image_url: '../img/main/spinner.png',
                isGameplayVariant: false,
            },
			{
                name: 'Skip',
                url: 'null',
                image_url: '../img/main/skip.png',
                isGameplayVariant: false,
            },
			{
                name: 'Catch',
                url: 'null',
                image_url: '../img/main/catch.png',
                isGameplayVariant: false,
            },
			{
                name: 'Mania',
                url: 'null',
                image_url: '../img/main/mania.png',
                isGameplayVariant: false,
            },
			{
                name: 'Takio',
                url: 'null',
                image_url: '../img/main/takio.png',
                isGameplayVariant: false,
            },
        ],
        sources: [
            {
                name: 'Images',
                items: [
                    {
                        name: 'Arrow warning',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Mania Mods',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Cursor',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/986201?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Catch Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">WhiteCat (1.0)</a>',
                    },
                    {
                        name: 'Spinner Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Sliderscorepoint',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Snow',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Reverse Arrow Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Buttons',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Fail Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Pause Overlay',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'Menu Textures (I recolored them in my skin)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Mod Textures (that are not covered by the tuyu ones)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Star Texture',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Ranking Panel',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Takio Textures',
                        desc: 'From the skin <a class="highlightLink" href="https://github.com/Bjonk1911/Xootynator/blob/main/xooter-skins.md">Bloomoon</a>',
                    },
                    {
                        name: 'Count Textures (count1-3.png)',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/OsuSkins/comments/wn2fbw/std_only_lycoris_recoil_kurumi_osuskin/">Lycoris Recoil - Kurumi Skin</a>',
                    },
                    {
                        name: 'I forgot V1',
                        desc: 'Idk, I js forgot💀💀💀 V1 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Audio',
                items: [
                    {
                        name: 'Spinner Sounds (osu!standard)',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Echoing Inside</a>',
                    },
                    {
                        name: 'scrolltotop-select.mp3',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'Menu/Multi Sounds',
                        desc: 'From the skin <a class="highlightLink" href="https://osu.ppy.sh/community/forums/topics/1925867?n=1">Cherry Corolla</a>',
                    },
                    {
                        name: 'pause-loop.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=AVK0BIVqLLc">First Date</a>',
                    },
                    {
                        name: 'failsound.ogg',
                        desc: 'From the skin <a class="highlightLink" href="https://www.reddit.com/r/CalliopeMori/comments/lj33w7/calli_osu_skin_in_case_you_play_osu/">[Hololive EN] Mori Calliope 森美声</a>',
                    },
                    {
                        name: 'applause.mp3',
                        desc: 'From the song <a class="highlightLink" href="https://www.youtube.com/watch?v=JS9Lh1NUAF4">If There Was an Endpoint./TUYU [Music Box]</a>',
                    },
                    {
                        name: 'I forgot V2',
                        desc: 'Idk, I js forgot💀💀💀 V2 (I made the original like 3 years ago)',
                    },
                ]
            },
            {
                name: 'Fonts',
                items: [
                    {
                        name: '<a class="highlightLink" href="https://www.fontsquirrel.com/fonts/jellee">Jelle</a>',
                        desc: 'Used for hitcircles',
                    },
                    {
                        name: 'I forgot V3',
                        desc: 'Idk, I js forgot💀💀💀 V3 (I made the original like 3 years ago)',
                    },
                ]
            }
        ]
    },
]

const whFactor = 25
const width = 16 * whFactor;
const height = 9 * whFactor;

function showSkin(id) {

    let doc = document.getElementById('skin');
    let skin = skins.find(skin => skin.id === id);
    /*     let header = document.getElementsByTagName('header');
        header.item(0).innerHTML = `
    <h1> ${skin.name}</h1>
    <p >
    ${skin.date_start} --- ${skin.date_end}
    </p>
    ` */
    // main page set up
    {
        const h1 = document.createElement('h1');
        h1.innerText = skin.name;
        h1.className = 'pageTitle'
        const modeIcons = document.createElement('div');
        modeIcons.className = 'itemModes'
        for (const mode of skin.modes) {
            const img = document.createElement('img');
            img.src = '/img/modes/' + mode + '.png'
            img.className = 'itemMode'
            modeIcons.append(img);
        }
        const subtxt = document.createElement('p');
        subtxt.innerText = skin.date_start + ' --- ' + skin.date_end;
        if (skin.description) {
            subtxt.innerText += '\n' + skin.description;
        }
        subtxt.className = 'pageTitleSubText'
        const titleDiv = document.createElement('div');
        titleDiv.id = 'skinName';
        titleDiv.className = 'pageTitle'
        titleDiv.append(h1, modeIcons, subtxt);
        doc.append(titleDiv);

        const p1 = document.createElement("p");
        p1.id = 'mainDlContainer'
        const a1 = document.createElement("a");
        a1.rel = "noopener noreferrer";
        a1.className = "dl mainDownload";
        a1.href = skin.url;
        a1.innerText = "Download Link";
        p1.appendChild(a1);
        doc.appendChild(p1);
    }

    // create skin grid
    const skingrid = document.createElement('div');
    skingrid.className = "itemGrid";

    // create youtube preview
    {
        const itemYoutubePreview = document.createElement('section');
        itemYoutubePreview.className = "item";
        const p1 = document.createElement("p");
        p1.id = "youtubePreview";
        p1.className = "itemName";
        p1.innerText = "Youtube Preview";
        const iframe1 = document.createElement('iframe');
        iframe1.width = width;
        iframe1.height = height;
        iframe1.src = skin.video_url;
        iframe1.title = "Skin video preview";
        // iframe1.frameBorder = "0";
        iframe1.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe1.allowFullscreen = true;
        itemYoutubePreview.append(p1, iframe1);
        skingrid.append(itemYoutubePreview);
    }

    // create image list
    let previewIndex = 0;
    for (let i = 0; i < skin.images.length; i++) {
        const image = skin.images[i];
        const itemImage = document.createElement('section');
        itemImage.className = "item";
        const p1 = document.createElement('p');
        p1.id = image.name;
        p1.className = "itemName";
        p1.innerText = image.name;
        const img1 = document.createElement('img');
        img1.src = `${image.image_url}`;
        img1.alt = "Skin screenshot - " + image.name;
        img1.width = width;
        img1.height = height;
        itemImage.append(p1, img1);

        img1.addEventListener('click', e => {
            previewIndex = skin.images.indexOf(image);
            createPreview(image);
        });
        skingrid.appendChild(itemImage);
    };
    doc.appendChild(skingrid);

    let curprevimg = '';

    // add special preview image functionality
    const previewer = document.createElement('div');
    previewer.id = "previewDiv";

    const previewerButtonLink = document.createElement('a');
    previewerButtonLink.className = "dl previewButton";
    previewerButtonLink.id = "dlButton";
    previewerButtonLink.innerText = "download";
    previewerButtonLink.rel = "noopener noreferrer";
    previewerButtonLink.target = "_blank";

    const previewSwitchers = document.createElement('div');
    previewSwitchers.className = 'imageSwitcher';
    const previewButtonPrevious = document.createElement('a');
    const previewButtonNext = document.createElement('a');
    previewButtonNext.innerHTML = "Next &raquo;";
    previewButtonPrevious.innerHTML = "&laquo; Prev";
    previewButtonPrevious.className = "previewButton";
    previewButtonPrevious.id = "previewPrevious";
    previewButtonNext.className = "previewButton";
    previewButtonNext.id = "previewNext";
    previewSwitchers.append(previewButtonPrevious, previewButtonNext);

    const previewimg = document.createElement('img');
    previewimg.width = 960;
    previewimg.height = 540;
    previewer.append(previewerButtonLink, previewimg, previewSwitchers);
    previewer.style.display = 'none';

    const previewbg = document.createElement('div');
    previewbg.id = "previewOverlay";
    previewbg.style.display = 'none';

    const mainBody = document.getElementsByTagName('body')[0]
    mainBody.append(previewer, previewbg);

    previewbg.addEventListener('click', e => {
        previewer.style.display = 'none';
        previewbg.style.display = 'none';
    });
    previewButtonPrevious.addEventListener('click', e => {
        previewIndex--;
        if (previewIndex < 0) {
            previewIndex = skin.images.length - 1;
        }
        createPreview(skin.images[previewIndex]);
    });
    previewButtonNext.addEventListener('click', e => {
        previewIndex++;
        if (previewIndex >= skin.images.length) {
            previewIndex = 0;
        }
        createPreview(skin.images[previewIndex]);
    });
    previewimg.addEventListener('click', e => {
        window.open(curprevimg, '_blank')
    });
    function createPreview(image) {
        curprevimg = `../img/${image.image_url}`
        previewimg.src = curprevimg;

        if (image.isGameplayVariant) {
            previewerButtonLink.href = image.url;
            previewerButtonLink.innerText = "Download \"" + image.name + '"';
        } else {
            previewerButtonLink.href = image.url ?? skin.url;
            previewerButtonLink.innerText = "Download Skin";
        }
        previewer.style.display = 'block';
        previewbg.style.display = 'block';
    }

    if (skin.sources) {
        const div = document.getElementById('sources');
        const header = document.createElement('h2');
        header.innerText = 'Sources';
        div.append(header);
        skin.sources.forEach(category => {
            const sourceCat = document.createElement('div');
            const catName = document.createElement('h3');
            catName.innerText = category.name;
            const table = document.createElement('table');
            table.className = 'sourcetable';
            category.items.forEach(item => {
                const row = document.createElement('tr');
                const name = document.createElement('td');
                name.innerHTML = item.name;
                const desc = document.createElement('td');
                desc.innerHTML = item.desc.replaceAll('\n', '<br>');
                row.append(name, desc);
                table.append(row);
            })
            sourceCat.append(catName, table);
            div.append(sourceCat);
        });
    }
    {
        const spacer = document.createElement('div'); 
        spacer.style.height = "calc(152px + 69px)";
        spacer.style.width = '100%';
        spacer.style.display = 'block';
        const sourcesSection = document.getElementById('sources');
        if (sourcesSection && sourcesSection.parentNode) {
            sourcesSection.parentNode.insertBefore(spacer, sourcesSection.nextSibling);
        }
    }
}

function genList() {
    let grid = document.getElementsByClassName("itemGrid")[0];
    let sk = skins
    sk.forEach(skin => {
        if (skin.ignore) {

        } else {
            const section = document.createElement('section');
            section.className = 'item';
            const name = document.createElement('h2');
            name.className = 'itemName';
            name.innerText = skin.name
            const modeIcons = document.createElement('div');
            modeIcons.className = 'itemModes'
            for (const mode of skin.modes) {
                const img = document.createElement('img');
                img.src = '/img/modes/' + mode + '.png'
                img.className = 'itemMode'
                modeIcons.append(img);
            }
            const desc = document.createElement('p');
            desc.className = 'itemDescription'
            desc.innerText = skin.date_start + ' --- ' + skin.date_end;
            if (skin.desc) {
                desc.innerText += '<br>' + skin.desc;
            }
            const dl = document.createElement('a');
            dl.className = 'dl'
            dl.href = skin.url;
            dl.target = '_blank';
            dl.innerText = 'Download';
            const div = document.createElement('div');
            div.style.display = 'inline-block';
            const skPage = document.createElement('a');
            skPage.href =
                !isNaN(skin.id) ?
                    './' + skin.id + '.html' :
                    skin.url;
            skPage.target = '_self';
            const previewImg = document.createElement('img');
            previewImg.src = '../img/' + skin.images[0].image_url;
            previewImg.alt = skin.name + ': ' + skin.images[0].name;
            previewImg.width = width;
            previewImg.height = height;

            skPage.append(previewImg)
            div.append(skPage)

            section.append(name, desc, dl, div, modeIcons);
            grid.append(section);
        }
    })
    {
		const spacer = document.createElement('div'); 
		spacer.style.height = "calc(152px + 69px)";
		spacer.style.width = '100%';
		spacer.style.display = 'block';
		grid.appendChild(spacer);
	}
}

function image(text) {
    return {
        fullsize: text.replace('.jpg', '_full.jpg'),
        preview: text.replace('.jpg', '_preview.jpg')
    }
}