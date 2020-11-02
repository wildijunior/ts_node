import { Response, Request } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    // lista users
    const users = await User.find()
    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async delete (req: Request, res: Response) {
    User.deleteMany((err: string) => {
      if (!err) {
        return res.send('All regs were deleted')
      } else {
        return res.send(err)
      }
    })
  }
}

export default new UserController()
