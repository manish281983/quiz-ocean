const express= require('express');
const router = express.Router();

const quizList= [
    {
        id: 1,
        name: 'superman'
    },
    {
        id: 2,
        name: 'BATMAN'
    },
    {
        id: 3,
        name: 'Spiderman'
    }
];

router.get('/',(req, res)=> {
    res.send(quizList);
});


router.get('/:id',(req, res)=> {
    const quiz = quizList.find(q => q.id===parseInt(req.params.id));
    if(!quiz) {
        res.status(404).send('Not found');
    } else {
        res.send(quiz +'==='+JSON.stringify(req.query))
    }
});

router.post('/',(req,res)=>{
    const schema = {
        name: Joi.string().required()
    };
    const result = Joi.validate(req.body, schema);
    if(result.error) {
        res.status(400).send(result.error);
    }
    const quiz = {
        id: quizList.length +1,
        name: req.body.name
    }
    quizList.push(quiz);
    res.send(quiz)
});


router.put('/:id',(req,res)=> {
    let updateQuiz = quizList.find(q=> q.id === parseInt(req.params.id));
    if(updateQuiz) {
        if(req.body.name) {
            updateQuiz.name= req.body.name;
        }
        res.send(updateQuiz)
    } else {
        res.status(404).send('Not found');
    }
});

router.delete('/:id',(req,res)=> {
    let updateQuiz = quizList.find(q=> q.id === parseInt(req.params.id));
    if(updateQuiz) {
        const quiz =quizList.splice(indexOf(parseInt(req.params.id)), 1);
        res.send(quiz)
    } else {
        res.status(404).send('Not found');
    }
});


module.exports = router;