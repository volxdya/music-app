
export const dfUser = {
    id: 0,
    login: "",
    firstName: "",
    lastName: "",
    isUser: false,
    isSubscribed: false,
    finishSubscribe: {
        date: new Date(),
        indexMonth: 0,
    }
}

export const dfMe = {
    id: 0,
    login: "",
    firstName: "",
    lastName: "",
    isUser: false,
    playlists: [],
    tracks: [],
    albums: [],
    type: "user",
    isSubscribed: false,
    finishSubscribe: {
        date: new Date(),
        indexMonth: 0,
    }
}