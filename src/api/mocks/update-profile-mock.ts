import { http, HttpResponse } from 'msw'

import { UpdateProfileData } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfileData>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Rocket Pizza') {
      return new HttpResponse(null, {
        status: 204,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
