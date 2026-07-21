//object literals
const blogs =[ // storing objects inside an array
    {title: "blog1", author: "John", likes: 10},
    {title: "blog2", author: "John", likes: 20},
    {title: "blog3", author: "John", likes: 30},
]
let user = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "football", "coding"], 
    blogs: [
        {title: "blog1", author: "John", likes: 10},
        {title: "blog2", author: "John", likes: 20},
        {title: "blog3", author: "John", likes: 30},
    ],
    login : function() {  // we can't use arrow function if we use 'this' object
        console.log("logged in");
    },
    logHobbies() { // we can shorten the above regular function like this
        console.log(" This user has following hobbiles : ");
        this.hobbies.forEach(hobby => {
            console.log(hobby);
        });
    },
    logBlogs() {
        console.log(" This user has following blogs : ");
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
}



console.log(user.name);
console.log(user['name']);
console.log(user.hobbies[0]);

const key = "name";
console.log(user[key]);
console.log(user[key].toLowerCase());
console.log(typeof user);
console.log(typeof user[key]);

user.login();
user.logHobbies();
user.logBlogs();