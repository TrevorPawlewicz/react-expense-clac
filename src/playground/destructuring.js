// Object Destructuring:

const book = {
    title: 'Post Office',
    author: 'Charles Bukowski',
    publisher: {
        name: 'City Lights'
    }
};

// deconstruct the object and give 'name' a new name and a default value:
const { name: publisherName = 'Self Published' } = book.publisher;


console.log(publisherName);

//----------------------------------------------------------------------------



// Array Destructing: 

//follows POSITIONING in Array
const address = ['1500 Locust Street', 'Philadelphia', 'Pennsylvania', '19102'];

// leave out the street name and give state a default value
const [, city, state = 'New York', zip] = address;

console.log(`You are in ${city}, ${state}`);

//-----------------------------------------------------------------------------