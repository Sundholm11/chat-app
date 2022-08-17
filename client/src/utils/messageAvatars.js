const imageUrl = (value) => {
    return `https://semantic-ui.com/images/avatar/large/${value}.jpg`
}

export const messageAvatars = {
    options: [
        {
            key: "ade",
            value: "ade",
            text: "Ade",
            image: { avatar: true, src: imageUrl("ade") }
        },
        {
            key: "chris",
            value: "chris",
            text: "Chris",
            image: { avatar: true, src: imageUrl("chris") }
        },
        {
            key: "christian",
            value: "christian",
            text: "Christian",
            image: { avatar: true, src: imageUrl("christian") }
        },
        {
            key: "daniel",
            value: "daniel",
            text: "Daniel",
            image: { avatar: true, src: imageUrl("daniel") }
        },
        {
            key: "elliot",
            value: "elliot",
            text: "Elliot",
            image: { avatar: true, src: imageUrl("elliot") }
        },
        {
            key: "helen",
            value: "helen",
            text: "Helen",
            image: { avatar: true, src: imageUrl("helen") }
        },
        {
            key: "jenny",
            value: "jenny",
            text: "Jenny",
            image: { avatar: true, src: imageUrl("jenny") }
        },
        {
            key: "joe",
            value: "joe",
            text: "Joe",
            image: { avatar: true, src: imageUrl("joe") }
        },
        {
            key: "justen",
            value: "justen",
            text: "Justen",
            image: { avatar: true, src: imageUrl("justen") }
        },
        {
            key: "laura",
            value: "laura",
            text: "Laura",
            image: { avatar: true, src: imageUrl("laura") }
        }
    ],
    defaultSelected: "ade"
}