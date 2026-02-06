const familyProfile = {
    name: ' khan',
    member: 5,
    male:2,
    female:3,
    male :{
        name:'Alam',
        age: 50,
         son: {
            name: 'Rizvi',
            age: 22,
         }
    }
    
}

console.log(familyProfile.male.son.name)