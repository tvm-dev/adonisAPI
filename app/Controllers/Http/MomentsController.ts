import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from 'App/Models/Moment'

export default class MomentsController {
  public async index({}: HttpContextContract) {
    const moments = await Moment.all()
    return {
      data: moments,
    }
  }

  public async store({request, response}: HttpContextContract) {
    const body = request.body()
    const moment = await Moment.create(body)

    response.status(201)

    return {
     message: 'Momento criado com Sucesso!',
     data: moment,
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
