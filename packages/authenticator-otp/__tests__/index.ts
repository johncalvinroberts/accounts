import { AuthenticatorOtp } from '../src';

const authenticatorOtp = new AuthenticatorOtp();

const mockedDb = {
  createAuthenticator: jest.fn(),
  findAuthenticatorById: jest.fn(),
};

authenticatorOtp.setStore(mockedDb as any);

describe('AuthenticatorOtp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('associate', () => {
    it('should generate a random secret', async () => {
      mockedDb.createAuthenticator.mockResolvedValueOnce('authenticatorIdtest');
      const result = await authenticatorOtp.associate('userIdTest', {});

      expect(mockedDb.createAuthenticator).toHaveBeenCalledWith({
        type: 'otp',
        userId: 'userIdTest',
        secret: expect.any(String),
      });
      expect(result).toEqual({
        id: 'authenticatorIdtest',
        secret: expect.any(String),
        otpauthUri: expect.any(String),
      });
    });
  });
});
