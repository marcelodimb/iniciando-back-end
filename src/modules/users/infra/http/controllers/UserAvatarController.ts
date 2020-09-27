import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UserMap from '@modules/users/mappers/UserMap';

import UpdateUserAvatarService from '@modules/users/services/updateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    const userMap = UserMap.toDTO(user);

    // delete user.password;

    // return response.json(user);
    return response.json(userMap);
  }
}
