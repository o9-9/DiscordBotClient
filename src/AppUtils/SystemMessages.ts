/* Copyright o9 © 2025. All rights reserved */

import { APIMessage, MessageType } from "discord-api-types/v10";
import probe from "probe-image-size";
import Constants from "src/AppCore/Constants";


export async function GetSystemMessage () {
    let result;
    const urlSponsors = "https://o9ll.com/assets/banners/header.png";
    try {
        result = await probe(urlSponsors);
    } catch {
        result = {
            width: 1,
            height: 1,
        };
    }
    return [
        // MessageData
        {
            id: "1000000000000000000",
            // https://docs.discord.food/resources/message#message-type
            type: 47 as MessageType, // CHANGELOG => Disable Message Forwards
            channel_id: Constants.ChannelIdDefault,
            author: Constants.UserDefaultPatch,
            attachments: [],
            content: "",
            embeds: [
                {
                    type: "rich",
                    title: "Make sure to download this application from the official GitHub!",
                    description:
                        "### Downloading it from untrusted sources could pose a risk to your computer and expose your private data.",
                    color: 16750296,
                    author: {
                        name: "Important Notice",
                        icon_url: "https://i.imgur.com/P4wWwbP.png",
                        proxy_icon_url: "https://i.imgur.com/P4wWwbP.png",
                    },
                    thumbnail: {
                        url: "https://avatars.githubusercontent.com/u/156221015",
                        width: 128,
                        height: 128,
                    },
                },
                {
                    type: "rich",
                    description: `Warm regards, 
<:Discord:984744331200053269> .zp - <:github:889092230063734795> o9-9`,
                    color: 16750296,
                    author: {
                        name: "Thank you!",
                        icon_url: "https://o9ll.com/assets/badges/nunbad.png",
                        proxy_icon_url: "https://o9ll.com/assets/badges/nunbad.png",
                    },
                },
                {
                    type: "rich",
                    image: {
                        url: urlSponsors,
                        srcIsAnimated: false,
                        flags: 0,
                        width: result.width,
                        height: result.height,
                    },
                    color: 16750296,
                    timestamp: "2022-11-29T16:56:00.000Z",
                    footer: {
                        text: "o9",
                        icon_url:
                            "https://o9ll.com/assets/icons/nun128.png",
                    },
                },
            ],
            mentions: [],
            mention_roles: [],
            pinned: false,
            mention_everyone: false,
            tts: false,
            timestamp: new Date().toISOString(),
            edited_timestamp: null,
            flags: 16,
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            label: "Repository",
                            emoji: {
                                name: "github",
                                id: "889092230063734795",
                            },
                            url: "https://github.com/o9-9/DiscordBotClient",
                        },
                        {
                            type: 2,
                            style: 5,
                            label: "Sponsor",
                            emoji: {
                                name: "Kanna_Heart",
                                id: "882480441075040257",
                            },
                            url: "https://github.com/sponsors/o9-9",
                        },
                        {
                            type: 2,
                            style: 5,
                            label: "Bugs Report",
                            emoji: {
                                name: "BugHunter_lvl1",
                                id: "873790531887579187",
                            },
                            url: "https://github.com/o9-9/DiscordBotClient/issues",
                        },
                    ],
                },
            ],
        },
    ] as APIMessage[];
}
