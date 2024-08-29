
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
    subscription: {
      id: 0,
      title: "",
      price: 0,
      duration: 0
    },
    isSubscribed: false,
    finishSubscribe: {
        date: new Date(),
        indexMonth: 0,
    }
}