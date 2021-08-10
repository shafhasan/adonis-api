import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index () {
    return 'User from GET'
  }

  public async store ({ request, response }: HttpContextContract) {
    response.status(201)
    return{
      message: 'User successfully registered',
      body: request.body(),
    }
  }

  public async update ({ params }: HttpContextContract) {
    return `User ${params.id} has been updated`
  }
}
