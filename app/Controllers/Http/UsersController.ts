import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract): Promise<User> {
    const { name, username } = request.only(['name', 'username'])

    const user = await User.create({ name, username })

    return user
  }

  public async index(): Promise<User[]> {
    const allUsers = await User.all()

    return allUsers
  }
}
