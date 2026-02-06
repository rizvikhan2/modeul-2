const profile ={
    name:'Rizvi',
    marks:88, 
    age: 22,
    status:"Student",
    1:50
    }

    // it's call dot notation but with this dot notation we cant find 1:50
    const studentProfile = profile.age

    // this will give an error but in bracket it won't
    // const studentProfile = profile.1
    console.log(studentProfile)



    // bracket notation, anyting can be found with this notation
    const studentProfile2 = profile['marks']
    console.log(studentProfile2)

    const studentProfile3 = profile['status']
    console.log(studentProfile3) 

    const studentProfile4 = profile['name']
    console.log(studentProfile4)

    const studentProfile5 = profile[1]
    console.log(studentProfile5)