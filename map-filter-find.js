const student = [
    {name: 'Rizvi', Roll: 760587, CGPA: 3.77},
    {name: 'Arif', Roll: 760588, CGPA: 3.56},
    {name: 'Manik', Roll: 760593, CGPA: 3.74},
    {name: 'Maruf', Roll: 760590, CGPA: 2.70},
]

// map will give you all the asking data
const getName = student.map(n => n.name)
console.log(getName)

// filter will give you all array of asking data
const getCGPS = student.filter(c=> c.CGPA > 3.70 )
console.log(getCGPS)

// find will give the very first data 
const getRoll = student.find(b=> b.Roll > 3.70)
console.log(getRoll)

