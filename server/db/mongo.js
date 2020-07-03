const mongoose = require('mongoose');
const { string } = require('joi');
mongoose.connect('mongodb+srv://root:root@cluster0.wsxfl.gcp.mongodb.net/course?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to MondoDB'))
.catch((err)=>console.log('Error=>'+err));

const courseSchema= new mongoose.Schema({
    name: String,
    author: {
        type: String, 
        required: function(){
            return this.name;
        }
    }
});
const Course = mongoose.model('course', courseSchema);

async function createCourse() {
    const course = new Course({
        author: 'Ashish',
        name: 'first data'
    });
    try {
        const result= await course.save();
        console.log(result);
    } catch(ex) {
        console.log('==================>')
        console.log(ex.message);
    }
}

createCourse();


async function getCourses() {
    const courseList = await Course.find()
                                .or([{author: 'Ashish'}, {name: 'NodeJS'}]);
    console.log(courseList);
}

async function updateCourse(id){
    const result = await Course.findByIdAndUpdate({_id: id}, {
        $set: {
            author: 'Ashish new',
            name: 'ES6'
        }
    },
    {new: true});
    console.log(result);
}

async function removeCourse(id){
    const result = await Course.findByIdAndDelete({_id: id}, {
        $set: {
            author: 'Ashish new',
            name: 'ES6'
        }
    });
    console.log(result);
}
//updateCourse('5efa7f1eda1d5e5294b243d8');
//createCourse();