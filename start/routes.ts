import Route from '@ioc:Adonis/Core/Route'
import CommentsController from 'App/Controllers/Http/CommentsController'
import MomentsController from 'App/Controllers/Http/MomentsController'

Route.group(() => {
  Route.get('/', async () => {
    
})

Route.resource("/moments", "MomentsController").apiOnly()

Route.post('/moments/:momentId/comments', 'CommentsController.store') }).prefix('/api')
