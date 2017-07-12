import validate from 'validate.js';

export const login = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true
  }
};

export const signUp = {
  name: {
    presence: true
  },
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true
  },
  passwordConfirmation: {
    presence: true,
    equality: 'password'
  },
  gender: {
    presence: true
  }
};

export const edit = {
  email: {
    presence: true
  },
  currentPassword: {
    presence: true
  },
  newPassword: {
    presence: true
  },
  confirmNewPassword: {
    presence: true,
    equality: 'newPassword'
  },
};

export const contact = {
  email: {
    presence: true
  },
  message: {
    presence: true
  }
};

export const validations = (constraints) =>
  (data) => validate(data, constraints) || {};
