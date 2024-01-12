import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from 'App/Models/Moment'
import bodyParserConfig from 'Config/bodyparser'

export default class MomentsController {
  public async index({ }: HttpContextContract) {
    const moments = await Moment.query().preload('comments')
    return {
      data: moments,
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const moment = await Moment.create(body)

    response.status(201)

    return {
      message: 'Momento criado com Sucesso!',
      data: moment,
    }
  }

  public async show({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)

    await moment.load('comments')

    return { data: moment }
    //return moment
  }

  public async update({ params, request }: HttpContextContract) {

    const body = request.body()

    const moment = await Moment.findOrFail(params.id)

    moment.title = body.title
    moment.description = moment.description

    await moment.save()

    return {
      message: "Momento atualizado com sucesso!",
      data: moment,
    }

  }

  public async destroy({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)

    await moment.delete()

    return {
      message: 'Momento apagado com Sucesso!',
      data: moment,
    }

  }
}
