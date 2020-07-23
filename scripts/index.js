import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Section from './Section.js';
import {
  cardListSelector,
  initialCards,
  editProfile,
  nameInput,
  professionInput,
  editBtn,
} from '../utils/constants.js';
import PopUpWithImage from './PopupWithImage.js';
import PopupwithForm from './PopupWithForm.js';
import Popup from './Popup.js';
import UserInfo from './UserInfo.js';

const defaultConfig = {
  // formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-button',
  inactiveButtonClass: 'modal__save-disabled',
  inputErrorClass: 'modal__form-error',
  errorClass: 'modal__form-error_visible',
};
// creating a image modal?
const modalWithImage = new PopUpWithImage('.figure');
// console.log(modalWithImage);

// const editPopup = new Popup('.modal');
// const addCardPopup = new Popup('.modal__card');

const modalEdit = document.querySelector('.modal');
const modalAdd = document.querySelector('.modal__card');

const addCardForm = modalAdd.querySelector('.modal__form');
const editProfileForm = modalEdit.querySelector('.modal__form');

const editProfileValidation = new FormValidator(defaultConfig, editProfileForm);
const addCardValidation = new FormValidator(defaultConfig, addCardForm);

editProfileValidation.enableValidation();
addCardValidation.enableValidation();

const handleCardClick = data => {
  modalWithImage.open(data);
};
// adding initial card to the DOM
const cardList = new Section(
  {
    data: initialCards,
    renderer: ({ name, link }) => {
      // console.log(data);
      const card = new Card(name, link, '.elements__template', handleCardClick);
      const cardElement = card.generateCard();
      cardList.setItem(cardElement);
    },
  },
  cardListSelector
);
cardList.renderItems();

const profileForm = new PopupwithForm({
  popupSelector: editProfile,
  handleSubmitForm: () => {
    const profileInfo = new UserInfo(nameInput.value, professionInput.value);
    profileInfo.setUserInfo();
    profileForm.close();
  },
});

editBtn.addEventListener('click', profileForm.open());
