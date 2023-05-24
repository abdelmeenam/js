//Object : it has properties and methods (things can do)
let user = {
    name: "John",
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    hello: function () {
        console.log('hello user');
    },
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        console.log('this user has the following blogs');
        this.blogs.forEach(blog => console.log(blog.title, blog.likes))
    }
};

//---it can be accessing using dot and square brackets
// console.log(user);
// console.log(user.age);
// console.log(user['name']);
// console.log(typeof user);

// user.hello();
// user.login();
// user.logout();
//user.logBlogs();

