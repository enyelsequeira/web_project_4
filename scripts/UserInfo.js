class UserInfo {
  constructor(userName, userProfession) {
    this._name = userName;
    this._job = userProfession;
  }

  getUserInfo() {
    this._name = document.querySelector('.modal__form-name').textContent;
    this._job = document.querySelector('.modal__form-profession').textContent;
  }

  setUserInfo() {
    document.querySelector('.modal__form-name').textContent = this._name;
    document.querySelector('.modal__form-profession').textContent = this._job;
  }
}

export default UserInfo;
