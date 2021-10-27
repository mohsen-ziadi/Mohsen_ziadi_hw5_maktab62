let personData = [{
        uid: 1,
        firstName: "Mohsen",
        lastName: "Ziadi"
    },
    {
        uid: 2,
        firstName: "Navid",
        lastName: "Abbasian"
    },
    {
        uid: 3,
        firstName: "Javad",
        lastName: "Hosseiny"
    },
    {
        uid: 4,
        firstName: "Mahdi",
        lastName: "Kabiri"
    },
    {
        uid: 5,
        firstName: "Matin",
        lastName: "Jabbari"
    },
    {
        uid: 6,
        firstName: "Misagh",
        lastName: "Shahi"
    }
]

let additionalPersonData = [{
        uid: 6,
        position: "Footbalist",
        city: "Esfahan"
    },
    {
        uid: 1,
        position: "Back-End Developer",
        city: "Tehran"
    },
    {
        uid: 3,
        position: "Teacher",
        city: "Qazvin"
    },
    {
        uid: 5,
        position: "Engineer",
        city: "Yazd"
    },
    {
        uid: 4,
        position: "Accountants",
        city: "Shiraz"
    },
    {
        uid: 2,
        position: "Front-end developer",
        city: "Ahvaz"
    }
]

function merge(person, additional) {
    let temp = [...person]
    temp.map(obj => {
        let additionalInfo = additional.find(data => {
            return data.uid === obj.uid
        })
        for (let data in additionalInfo) {
            obj[data] = additionalInfo[data]
        }
    })

    return temp
}

let merged = merge(personData, additionalPersonData)
console.log(merged)