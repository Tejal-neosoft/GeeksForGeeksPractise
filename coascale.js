const coalesce = (...args) => {
    console.log(args)
    for (let i = 0; i < args.length; i++) {
        if (args[i] != null) {
            console.log("not null")
        }
    }
}
coalesce(null, undefined, "first", "second", "third", "fourth")

