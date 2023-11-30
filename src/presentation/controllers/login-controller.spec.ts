import { vi, describe, it } from 'vitest'
import { mock, MockProxy } from 'vitest-mock-extended'

import { Login } from '@/domain/usecases'
import { LoginController } from '@/presentation/controllers'
import { UnauthorizedError } from '@/presentation/errors'
import { badRequest, serverError } from '@/presentation/helpers'

describe('LoginController', () => {
  let loginController: LoginController;
  let mockLoginUseCase: MockProxy<Login>

  beforeAll(() => {
    mockLoginUseCase = mock()
  })

  beforeEach(() => {
    mockLoginUseCase.login.mockResolvedValue({
      accessToken: 'mockedtoken',
      refreshToken: 'mockedtoken',
      user: {
        address: 'address',
        email: 'email',
        id: 'id',
        name: 'name',
        verified: true,
        whatsapp: 'whatsapp',
      }
    })
    loginController = new LoginController(mockLoginUseCase)
  })

  it('should return 200 OK with user data on successful login', async () => {
    const request = { email: 'valid@email.com', password: 'validpassword' }
    const response = await loginController.handle(request);

    expect(response.statusCode).toBe(200);
    expect(response.data.accessToken).toBe('mockedtoken');
    expect(response.data.refreshToken).toBe('mockedtoken')
    expect(response.data.user).toBeTruthy()
  })

  it('should return 400 Bad Request on unsuccessful login with invalid credentials', async () => {
    const request = { email: 'invalid@email.com', password: 'invalidpassword' };
    vi.spyOn(mockLoginUseCase, 'login').mockRejectedValue(new UnauthorizedError());

    const response = await loginController.handle(request);

    expect(response.statusCode).toBe(400);
    expect(response).toEqual(badRequest(new UnauthorizedError()));
  });

  it('should return 500 Internal Server Error on unexpected error', async () => {
    vi.spyOn(mockLoginUseCase, 'login').mockRejectedValue(new Error('Unexpected error'));

    const request = { email: 'valid@email.com', password: 'validpassword' };
    const response = await loginController.perform(request);

    expect(response.statusCode).toBe(500);
    expect(response).toEqual(serverError(new Error('Unexpected error')));
  })
})