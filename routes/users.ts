import express, {Request, Response} from 'express'

const router  = express.Router({mergeParams: true})

router.route('/').get((req:Request, res: Response) => {

  res.send({user: {
      name: 'Bojan',
      lastName: 'Peric'
  }})  

})


