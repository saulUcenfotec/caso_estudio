class Usuario {
  constructor(id, username, password) {
    this._username = username;
    this._password = password;
    this._id = id;
  }

  getUsername() {
    return this._username;
  }

  getPassword() {
    return this._password;
  }

  getId() {
    return this._id;
  }
}

module.exports = Usuario;
