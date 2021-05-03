const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blogsData = [
    {
        title: "How are you ?",
        img: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Ipsita",
        article:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },

    {
        title: "Games",
        img: "https://images.unsplash.com/photo-1617170508836-e5d89c04f78b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNyaWNrZXQlMjBtYXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Saha",
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis in neque eget faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam diam diam, pellentesque non dignissim quis, venenatis ac ex. Pellentesque in ex et lorem egestas gravida. Nunc commodo tristique luctus. Etiam ut eleifend neque, ac interdum nulla. Integer a tellus id lorem tincidunt mattis. Sed rhoncus tincidunt augue sit amet viverra"
    },
    {
        title: "Sundar hai?",
        img: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author: "Lalluu",
        article:"Praesent at erat eget magna iaculis pretium. Cras nunc risus, lobortis at lacus at, tristique lobortis diam. Nam volutpat vel ipsum vitae pretium. Nullam justo metus, hendrerit non lacinia sed, tincidunt ac eros. Pellentesque commodo, sem id lacinia placerat, augue risus tincidunt tortor, eget dictum neque lectus et nulla. Nunc in ex urna. Sed faucibus massa id feugiat pellentesque. Vestibulum malesuada purus velit, nec tincidunt urna sollicitudin dapibus. In consequat eleifend ligula ut imperdiet. Ut ornare mi ut metus mattis, vel maximus lorem fringilla. Phasellus fermentum nibh vitae dolor vehicula ornare. Etiam varius accumsan luctus. Duis in massa commodo, sodales erat sit amet, aliquam risus."
    },
    {
        title: "My Love",
        img: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        author: "Karma",
        article:"Pellentesque aliquet purus quam, eu sodales arcu egestas id. Aliquam pharetra nulla diam, et mattis justo convallis convallis. Proin non fermentum eros. Cras non vulputate turpis. Nam ut mi pellentesque ex aliquam lobortis. Curabitur orci sapien, vehicula sit amet quam in, laoreet posuere ante. Donec ornare lorem vitae nulla tempus, sit amet elementum ipsum consectetur. Vivamus vel mi vitae orci egestas porttitor mattis a nisi. Nulla mollis aliquam metus, vel maximus justo. Morbi dictum lacus lacus, condimentum volutpat tortor dignissim nec."
    }
] 

const seedDb = async()=>{
    await Blog.insertMany(blogsData);
    console.log("DB seeded");
};

module.exports = seedDb;




