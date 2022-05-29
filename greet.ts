
import Person from './person';

export default function greet(person: Person) {
     return `Hello,${person.firstName} ${person.lastName} we will be in touch at:${person.email}`;
    // return`Hello, ${person.firstName}${person.lastName}  we can't contact you.`
    // return `Hello, ${person.firstName} ${person.lastName} ${person.email}`;
  }


